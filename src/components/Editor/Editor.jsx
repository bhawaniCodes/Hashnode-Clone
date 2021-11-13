import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useHistory } from "react-router";

import "tippy.js/dist/tippy.css";
import {
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
} from "../../config/firebase-config";
import axios from "axios";
import { EditorNavbar } from "./EditorNavbar";
import { EditorTitle } from "./EditorTitle";
import { EditorOptionBar } from "./EditorOptionBar";

const extraOptions = [
    ["# ", "## ", "### "],
    "****",
    "**",
    "> ",
    " ",
    "[Text](Link) ",
    "%[Link] ",
    "- ",
    "1. ",
];

let stack = []; 
export const Editor = () => {
    const [leftOption, setLeftOption] = useState(0);
    const [storeData, setStoreData] = useState(""); 
    const [titleData, setTitleData] = useState(""); 
    const [subTitleData, setSubTitleData] = useState(""); 
    const [liveSaving, setLiveSaving] = useState(false);
    const [wordCount, setWordCount] = useState(0); 
    const [readTime, setReadTime] = useState(1); 
    const [paragraphCount, setParagraphCount] = useState(0); 
    const [coverImage, setCoverImage] = useState("");
    const [fileNameAtWrite, setFileNameAtWrite] = useState("");
    const history = useHistory();

    const commonUrl = process.env.REACT_APP_COMMON_URL;

    useEffect(() => {
        if (localStorage.getItem("draft")) {
            let storedDraft = JSON.parse(localStorage.getItem("draft"));
            setTitleData(storedDraft.title?storedDraft.title:"");
            setSubTitleData(storedDraft.subTitle?storedDraft.subTitle:"");
            setStoreData(storedDraft.body?storedDraft.body: "");
            setCoverImage(storedDraft.coverUrl?storedDraft.coverUrl: "");
            setFileNameAtWrite(storedDraft.imageName?storedDraft.imageName:"");
            setWordCount(storedDraft.wordCount?storedDraft.wordCount:0);
            setParagraphCount(storedDraft.paragraphCount?storedDraft.paragraphCount:0);
            setReadTime(storedDraft.readTime?storedDraft.readTime:1);
        }
    }, []);

    const emptyFields = () => {
        setTitleData("");
        setSubTitleData("");
        setStoreData("");
        setCoverImage("");
        setFileNameAtWrite("");
        setWordCount(0);
        setParagraphCount(0);
        setReadTime(1);
    };

    // Publish the blog
    const publishBlog = async () => {
        let storedDraft = JSON.parse(localStorage.getItem("draft"));
        let token = JSON.parse(localStorage.getItem("user"));
        if (storedDraft.tags === undefined || storedDraft.tags.length === 0)
            alert("Please Add tag to post blog");
        else if (storedDraft.body === "") {
            alert("Please Add something in body to post blog");
        } else if (storedDraft.title === "") {
            alert("Please Add Title to post blog");
        } else {
            console.log("token...", token, storedDraft);
            const postedBlog = await axios.post(
                `${commonUrl}/blogs`,
                storedDraft,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            localStorage.removeItem("draft");
            alert("Successfully post your blog");
            console.log("postedBlog", postedBlog);
            emptyFields();
        }
    };

    // store Live counts on localstorage
    const handleLiveDataCounts = (countNames, counts) => {
        let storedDraft = JSON.parse(localStorage.getItem("draft"));
        localStorage.setItem(
            "draft",
            JSON.stringify({
                ...storedDraft,
                [countNames]: counts,
            })
        );
    };

    // store Live data in localstorage
    const handleLiveData = (e, saveName) => {
        setLiveSaving(true);
        if (saveName === "title") {
            setTitleData(e.target.value);
        } else if (saveName === "subTitle") {
            setSubTitleData(e.target.value);
        }
        let storedDraft = JSON.parse(localStorage.getItem("draft"));
        let email = JSON.parse(localStorage.getItem("email"));

        // Draft Store Locally
        localStorage.setItem(
            "draft",
            JSON.stringify({
                ...storedDraft,
                [saveName]: e.target.value,
                email: email,
            })
        );
        setTimeout(() => {
            setLiveSaving(false);
        }, 1000);
    };

    // To remove image
    const handleRemoveImage = () => {
        if (
            window.confirm("Are you sure you want to remove the cover image?")
        ) {
            setCoverImage("");
            // Delete the file
            const storageRef = ref(storage, `cover/${fileNameAtWrite}`);
            deleteObject(storageRef)
                .then(() => {
                    // Draft-Image url remove from Local
                    let storedDraft = JSON.parse(localStorage.getItem("draft"));

                    localStorage.setItem(
                        "draft",
                        JSON.stringify({
                            ...storedDraft,
                            coverUrl: "",
                            imageName: "",
                        })
                    );
                })
                .catch((error) => {
                    console.log("error:", error);
                    // Uh-oh, an error occurred!
                });
        }
    };

    // Upload image for right side tag
    const uploadImage = (e, from) => {
        if (e.target.files[0]) {
            uploadToDB(e.target.files[0], from);
            if (from === "write") setFileNameAtWrite(e.target.files[0].name);
        }
    };
    const uploadToDB = (image, from) => {
        let storageRef;
        if (from === "write") {
            storageRef = ref(storage, `blogs/${image.name}`);
        } else {
            storageRef = ref(storage, `cover/${image.name}`);
        }

        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                if (from === "write") {
                    setStoreData(
                        `${storeData}\n![${image.name}](${
                            "Upload is " + progress + "% done"
                        })`
                    );
                }
            },
            (error) => {
                console.log(error.message);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    if (from === "write") {
                        setStoreData(
                            `${storeData}\n![${image.name}](${downloadURL})`
                        );
                        handleLiveDataCounts(
                            "body",
                            `${storeData}\n![${image.name}](${downloadURL})`
                        );
                        setWordCount(wordCount + 1);
                        handleLiveDataCounts("wordCount", wordCount + 1);
                    } else if (from === "cover") {
                        setCoverImage(downloadURL);
                        setLiveSaving(true);
                        let storedDraft = JSON.parse(
                            localStorage.getItem("draft")
                        );

                        // Draft Store Locally
                        localStorage.setItem(
                            "draft",
                            JSON.stringify({
                                ...storedDraft,
                                coverUrl: downloadURL,
                                imageName: image.name,
                            })
                        );
                        setLiveSaving(false);
                    }
                    console.log("File available at", downloadURL);
                });
            }
        );
    };

    const handleChangeData = (e) => {
        setLiveSaving(true);
        let currentStoredDataString = e.target.value;
        setStoreData(currentStoredDataString);

        // Call function for store live data
        handleLiveData(e, "body");

        // For Word Count
        let str = currentStoredDataString;
        str = str.replace(/(^\s*)|(\s*$)/gi, "");
        str = str.replace(/\n/gi, " ");
        str = str.replace(/[ ]{2,}/gi, " ");
        let cur = str.split(" ").length;
        setWordCount(cur);
        // Put count Locally
        handleLiveDataCounts("wordCount", cur);
        if (currentStoredDataString.length > 0 && paragraphCount === 0) {
            handleLiveDataCounts("paragraphCount", 1);
            setParagraphCount(1);
        } else if (
            currentStoredDataString.length === 0 &&
            paragraphCount === 1
        ) {
            handleLiveDataCounts("paragraphCount", 0);
            setParagraphCount(0);
        }

        // For Read time
        let readingTime = Math.ceil(cur / 150);
        setReadTime(readingTime);
        // Put read time Locally
        handleLiveDataCounts("readTime", readingTime);
        setLiveSaving(false);

        // For paragraph count
        if (currentStoredDataString.length > storeData.length) {
            if (currentStoredDataString.length === 1) {
                setParagraphCount(1);
                handleLiveDataCounts("paragraphCount", 1);
            }
            if (
                currentStoredDataString[currentStoredDataString.length - 1] !==
                " "
            ) {
                if (
                    currentStoredDataString[
                        currentStoredDataString.length - 1
                    ] !== "\n" &&
                    stack[stack.length - 1] === "\n" &&
                    stack[stack.length - 2] === "\n"
                ) {
                    setParagraphCount(paragraphCount + 1);
                    handleLiveDataCounts("paragraphCount", paragraphCount + 1);
                }

                stack.push(
                    currentStoredDataString[currentStoredDataString.length - 1]
                );
            }
        } else {
            if (storeData.length === 1) {
                setParagraphCount(0);
                handleLiveDataCounts("paragraphCount", 0);
            }
            if (storeData[storeData.length - 1] !== " ") {
                if (
                    storeData[storeData.length - 1] !== "\n" &&
                    stack[stack.length - 2] === "\n" &&
                    stack[stack.length - 3] === "\n"
                ) {
                    setParagraphCount(paragraphCount - 1);
                    handleLiveDataCounts("paragraphCount", paragraphCount - 1);
                }
                stack.pop();
            }
        }
    };

    //Function to update paragraph count while click on Right side options
    const updateParaCountOnOptions = () => {
        if (storeData === "") {
            setParagraphCount(1);
            handleLiveDataCounts("paragraphCount", 1);
        }
    };

    // Function for find & enter the right side options tag into editor
    const findOptionHead = (idx) => {
        const opt = extraOptions[0].filter((option, i) => idx === i && option);
        setStoreData(storeData + "\n" + opt[0]);
        updateParaCountOnOptions();
    };
    const findOption = (idx) => {
        const opt = extraOptions.filter((option, i) => idx === i && option);
        setStoreData(storeData + opt[0]);
        updateParaCountOnOptions();
    };
    const findOptionList = (idx) => {
        const opt = extraOptions.filter((option, i) => idx === i && option);
        setStoreData(`${storeData}\n${opt[0]}`);
        updateParaCountOnOptions();
    };
    const findOptionCodeSnippet = (idx) => {
        setStoreData(
            `${storeData} \n ${`\``}${`\``}${`\``} \n ${`\``}${`\``}${`\``}`
        );
        updateParaCountOnOptions();
    };

    const handleOptions = (e, idx1, idx2) => {
        if (idx2 !== undefined) {
            findOptionHead(idx2);
        } else if (idx1 === 4) {
            findOptionCodeSnippet(idx1);
        } else {
            if (idx1 === 7 || idx1 === 8 || idx1 === 3) findOptionList(idx1);
            else findOption(idx1);
        }
    };

    return (
        <div>
            <EditorNavbar
                liveSaving={liveSaving}
                publishBlog={publishBlog}
                wordCount={wordCount}
                paragraphCount={paragraphCount}
                readTime={readTime}
            />
            <BodyDiv>
                <div>
                    <div>
                        <div>
                            <EditorTitle
                                coverImage={coverImage}
                                uploadImage={uploadImage}
                                handleLiveData={handleLiveData}
                                titleData={titleData}
                                subTitleData={subTitleData}
                                handleRemoveImage={handleRemoveImage}
                                setCoverImage={setCoverImage}
                            />
                            <EditorOptionBar
                                handleOptions={handleOptions}uploadImage={uploadImage} storeData={storeData} handleChangeData={handleChangeData}
                            />
                        </div>
                    </div>
                </div>
            </BodyDiv>
        </div>
    );
};
const BodyDiv = styled.div`
    width: 95%;
    margin: auto;
    padding: 0 0.5rem;

    & > div {
        width: 80%;
        margin: auto;

        & > div {
            width: 100%;
            padding: 1.25rem 1rem;
        }
    }
`;
