import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import publishIcon from "../../images/publishIcon.svg";
import roundLoading1 from "../../images/roundLoading1.gif";
import { AiOutlineSetting, AiOutlineCloud } from "react-icons/ai";
import { GrImage, GrClose } from "react-icons/gr";
import { NewLogo } from "../../images/NewLogo";
import { BiText, BiCodeCurly } from "react-icons/bi";
import { BsPencil, BsStack } from "react-icons/bs";
import { TiEyeOutline } from "react-icons/ti";
import { RiFootballFill } from "react-icons/ri";
import { GoListOrdered, GoListUnordered } from "react-icons/go";
import { ImLink } from "react-icons/im";
import { GiVerticalFlip } from "react-icons/gi";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
} from "../../config/firebase-config";

import {
    FaHeading,
    FaQuoteLeft,
    FaCode,
    FaMarkdown,
    FaBold,
    FaItalic,
} from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { SettingDiv } from "./SettingDiv";
import { Guide } from "./Guide";
import axios from "axios";

const clickedColor = {
    color: "#2B63FF",
};

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

let stack = []; //Need to store while refresh
export const Editor = () => {
    const [addSubTitle, setAddSubTitle] = useState(false);
    const [leftOption, setLeftOption] = useState(0);
    const [headingDisplay, setHeadingDisplay] = useState(false);
    console.log("headingDisplay:", headingDisplay);
    const [storeData, setStoreData] = useState(""); //Need to store while refresh
    const [titleData, setTitleData] = useState(""); //Need to store while refresh
    console.log("titleData:", titleData);
    const [subTitleData, setSubTitleData] = useState(""); //Need to store while refresh
    const [selectTag, setSelectTag] = useState("");
    const [liveSaving, setLiveSaving] = useState(false);
    console.log("liveSaving:", liveSaving);
    console.log("subTitleData:", subTitleData);
    console.log("storeData:", storeData);
    const [wordCount, setWordCount] = useState(0); //Need to store while refresh
    const [readTime, setReadTime] = useState(1); //Need to store while refresh
    console.log("readTime:", readTime);
    console.log("wordCount:", wordCount);
    const [paragraphCount, setParagraphCount] = useState(0); //Need to store while refresh
    console.log("paragraphCount:", paragraphCount);
    const [moveCoverImage, setMoveCoverImage] = useState(false);
    const [settingDisplay, setSettingDisplay] = useState(false);
    const [coverImage, setCoverImage] = useState("");
    const [imageUrlAtWrite, setImageUrlAtWrite] = useState("");
    const [fileNameAtWrite, setFileNameAtWrite] = useState("");
    console.log("fileNameAtWrite:", fileNameAtWrite);
    const commonUrl = process.env.REACT_APP_COMMON_URL;

    useEffect(() => {
        if (localStorage.getItem("draft")) {
            let storedDraft = JSON.parse(localStorage.getItem("draft"));
            setTitleData(storedDraft.title);
            setSubTitleData(storedDraft.subTitle);
            setStoreData(storedDraft.body);
            setCoverImage(storedDraft.coverUrl);
            setFileNameAtWrite(storedDraft.imageName);
            setWordCount(storedDraft.wordCount);
            setParagraphCount(storedDraft.paragraphCount);
            setReadTime(storedDraft.readTime);
        }
    }, []);

    // Publish the blog
    const publishBlog = async () => {
        let storedDraft = JSON.parse(localStorage.getItem("draft"));
        console.log('storedDraft:', storedDraft)
        if (storedDraft.tags === undefined || storedDraft.tags.length === 0)
            alert("Please Add tag to post blog");
        else if (storedDraft.body === '') {
            alert("Please Add something in body to post blog");
        }
        else if (storedDraft.title === '') {
            alert("Please Add Title to post blog");
        }
        else {
            const postedBlog = await axios.post(
                `${commonUrl}/blogs`,
                storedDraft
            );
            localStorage.removeItem("draft");
            alert("Successfully post your blog");
            console.log("postedBlog", postedBlog);
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
        let curUser = JSON.parse(localStorage.getItem("user"));

        // Draft Store Locally
        localStorage.setItem(
            "draft",
            JSON.stringify({
                ...storedDraft,
                [saveName]: e.target.value,
                email: curUser,
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
                        setImageUrlAtWrite(downloadURL);
                        setStoreData(
                            `${storeData}\n![${image.name}](${downloadURL})`
                        );
                        handleLiveDataCounts(
                            "body",
                            `${storeData}\n![${image.name}](${downloadURL})`
                        );
                        setWordCount(wordCount + 1)
                        handleLiveDataCounts("wordCount", wordCount+1);

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
                                imageName: image.name
                            })
                        );
                    }
                    console.log("File available at", downloadURL);
                });
            }
        );
    };
    // console.log('image: ',imagee)

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

        // For Read time
        let readingTime = Math.ceil(cur / 150);
        setReadTime(readingTime);
        // Put read time Locally
        handleLiveDataCounts("readTime", readingTime);

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
        else {
            setParagraphCount(paragraphCount + 1);
            handleLiveDataCounts("paragraphCount", paragraphCount + 1);
        }
    };

    // Function for find & enter the right side options tag into editor
    const findOptionHead = (idx) => {
        const opt = extraOptions[0].filter((option, i) => idx === i && option);
        setStoreData(storeData + opt[0]);
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

    // Function for find & click on left side options
    const handleLeftOptions = (leftOpt) => {
        if (leftOpt === "write") setLeftOption(0);
        else if (leftOpt === "preview") setLeftOption(1);
        if (leftOpt === "guide") setLeftOption(2);
    };

    return (
        <div>
            <HeaderDiv>
                <NewLogo width="128px" height="21.95px" />
                <div>
                    {!liveSaving ? (
                        <SettingButton1>
                            <AiOutlineCloud />
                            <p>Saved</p>
                        </SettingButton1>
                    ) : (
                        <SettingButton1>
                            <img
                                src={roundLoading1}
                                alt={roundLoading1}
                                style={{ width: "1rem" }}
                            />
                            <p>Saving</p>
                        </SettingButton1>
                    )}

                    <SettingButton onClick={() => setSettingDisplay(true)}>
                        <AiOutlineSetting />
                        <p>Settings</p>
                    </SettingButton>
                    <PublishButton onClick={publishBlog}>
                        <img src={publishIcon} alt={publishIcon} />
                        <p>Publish</p>
                    </PublishButton>
                </div>
                {settingDisplay ? (
                    <SettingDiv
                        wordCount={wordCount}
                        paragraphCount={paragraphCount}
                        readTime={readTime}
                        setSettingDisplay={setSettingDisplay}
                        publishBlog={publishBlog}
                    />
                ) : null}
            </HeaderDiv>
            <BodyDiv>
                <div>
                    <div>
                        <BodyActualContentDiv>
                            <AddCoverAndTitleDiv>
                                {!coverImage ? (
                                    <label>
                                        {/* <div> */}
                                        <GrImage />
                                        {/* </div> */}
                                        <p>Add cover photo</p>
                                        <input
                                            type="file"
                                            onChange={(e) =>
                                                uploadImage(e, "cover")
                                            }
                                        />
                                    </label>
                                ) : null}

                                {!addSubTitle ? (
                                    <label
                                        onClick={() => {
                                            setAddSubTitle(!addSubTitle);
                                        }}
                                    >
                                        {/* <BiTextDiv> */}
                                        <BiText />
                                        {/* </BiTextDiv> */}
                                        <p>Add subtitle</p>
                                    </label>
                                ) : null}
                            </AddCoverAndTitleDiv>
                            {coverImage && !moveCoverImage ? (
                                <CoverImageDiv>
                                    <div>
                                        <img src={coverImage} alt="" />
                                        <div
                                            onClick={() => {
                                                setMoveCoverImage(
                                                    !moveCoverImage
                                                );
                                            }}
                                        >
                                            <GiVerticalFlip />
                                        </div>
                                        <div onClick={handleRemoveImage}>
                                            <GrClose />
                                        </div>
                                    </div>
                                </CoverImageDiv>
                            ) : null}
                            <TitleDiv>
                                <textarea
                                    onChange={(e) => handleLiveData(e, "title")}
                                    value={titleData}
                                    placeholder="Title..."
                                    id=""
                                    cols="30"
                                    rows="10"
                                ></textarea>
                            </TitleDiv>
                            {addSubTitle ? (
                                <SubTitleDiv>
                                    <textarea
                                        onChange={(e) =>
                                            handleLiveData(e, "subTitle")
                                        }
                                        value={subTitleData}
                                        placeholder="Enter subtitle (Optional)"
                                        id=""
                                        cols="30"
                                        rows="10"
                                    ></textarea>
                                    <div
                                        onClick={() => {
                                            setAddSubTitle(!addSubTitle);
                                        }}
                                    >
                                        <GrClose />
                                    </div>
                                </SubTitleDiv>
                            ) : null}
                            {coverImage && moveCoverImage ? (
                                <CoverImageDiv>
                                    <div>
                                        <img src={coverImage} alt="" />
                                        <div
                                            onClick={() => {
                                                setMoveCoverImage(
                                                    !moveCoverImage
                                                );
                                            }}
                                        >
                                            <GiVerticalFlip />
                                        </div>
                                        <div
                                            onClick={() => {
                                                setCoverImage("");
                                            }}
                                        >
                                            <GrClose />
                                        </div>
                                    </div>
                                </CoverImageDiv>
                            ) : null}
                            <OptionsDiv>
                                <div>
                                    <div>
                                        <OptionsInnerMainDiv>
                                            <div>
                                                <Tippy
                                                    placement="bottom"
                                                    content="Write Markdown"
                                                >
                                                    <OptionLeftButtons
                                                        // onClick={(e) =>
                                                        //     setPreview(false)
                                                        // }
                                                        onClick={(e) =>
                                                            handleLeftOptions(
                                                                "write"
                                                            )
                                                        }
                                                        style={
                                                            leftOption === 0
                                                                ? clickedColor
                                                                : null
                                                        }
                                                    >
                                                        <BsPencil />
                                                        <p>Write</p>
                                                    </OptionLeftButtons>
                                                </Tippy>
                                                <Tippy
                                                    placement="bottom"
                                                    content="Preview Markdown"
                                                >
                                                    <OptionLeftButtons
                                                        // onClick={(e) =>
                                                        //     setPreview(true)
                                                        // }
                                                        onClick={(e) =>
                                                            handleLeftOptions(
                                                                "preview"
                                                            )
                                                        }
                                                        style={
                                                            leftOption === 1
                                                                ? clickedColor
                                                                : null
                                                        }
                                                    >
                                                        <TiEyeOutline />
                                                        <p>Preview</p>
                                                    </OptionLeftButtons>
                                                </Tippy>
                                                <Tippy
                                                    placement="bottom"
                                                    content="Guide"
                                                >
                                                    <OptionLeftButtons
                                                        onClick={(e) =>
                                                            handleLeftOptions(
                                                                "guide"
                                                            )
                                                        }
                                                        style={
                                                            leftOption === 2
                                                                ? clickedColor
                                                                : null
                                                        }
                                                    >
                                                        <RiFootballFill />
                                                        <p>Guide</p>
                                                    </OptionLeftButtons>
                                                </Tippy>
                                            </div>
                                            {leftOption === 0 ? (
                                                <div>
                                                    <Tippy
                                                        placement="bottom"
                                                        content="Heading"
                                                        disabled={
                                                            headingDisplay
                                                                ? true
                                                                : false
                                                        }
                                                    >
                                                        <OptionRightButtons
                                                            onClick={(e) => {
                                                                setHeadingDisplay(
                                                                    !headingDisplay
                                                                );
                                                            }}
                                                            style={{
                                                                position:
                                                                    "relative",
                                                            }}
                                                        >
                                                            <FaHeading />
                                                            {headingDisplay ? (
                                                                <HeadingsDiv>
                                                                    <h4
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            handleOptions(
                                                                                e,
                                                                                0,
                                                                                0
                                                                            )
                                                                        }
                                                                    >
                                                                        H1
                                                                    </h4>
                                                                    <h4
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            handleOptions(
                                                                                e,
                                                                                0,
                                                                                1
                                                                            )
                                                                        }
                                                                    >
                                                                        H2
                                                                    </h4>
                                                                    <h4
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            handleOptions(
                                                                                e,
                                                                                0,
                                                                                2
                                                                            )
                                                                        }
                                                                    >
                                                                        H3
                                                                    </h4>
                                                                </HeadingsDiv>
                                                            ) : null}
                                                        </OptionRightButtons>
                                                    </Tippy>
                                                    <Tippy
                                                        placement="bottom"
                                                        content="Bold text - Click here & put your cursor between stars"
                                                    >
                                                        <OptionRightButtons
                                                            onClick={(e) =>
                                                                handleOptions(
                                                                    e,
                                                                    1
                                                                )
                                                            }
                                                        >
                                                            <FaBold />
                                                        </OptionRightButtons>
                                                    </Tippy>
                                                    <Tippy
                                                        placement="bottom"
                                                        content="Italic text - Click here & put your cursor between stars"
                                                    >
                                                        <OptionRightButtons
                                                            onClick={(e) =>
                                                                handleOptions(
                                                                    e,
                                                                    2
                                                                )
                                                            }
                                                        >
                                                            <FaItalic />
                                                        </OptionRightButtons>
                                                    </Tippy>
                                                    <Tippy
                                                        placement="bottom"
                                                        content="Block quote"
                                                    >
                                                        <OptionRightButtons
                                                            onClick={(e) =>
                                                                handleOptions(
                                                                    e,
                                                                    3
                                                                )
                                                            }
                                                        >
                                                            <FaQuoteLeft />
                                                        </OptionRightButtons>
                                                    </Tippy>
                                                    <Tippy
                                                        placement="bottom"
                                                        content="Code snippet - Click here & put your cursor between backtick"
                                                    >
                                                        <OptionRightButtons
                                                            onClick={(e) =>
                                                                handleOptions(
                                                                    e,
                                                                    4
                                                                )
                                                            }
                                                        >
                                                            <FaCode />
                                                        </OptionRightButtons>
                                                    </Tippy>
                                                    <Tippy
                                                        placement="bottom"
                                                        content="Link"
                                                    >
                                                        <OptionRightButtons
                                                            onClick={(e) =>
                                                                handleOptions(
                                                                    e,
                                                                    5
                                                                )
                                                            }
                                                        >
                                                            <ImLink />
                                                        </OptionRightButtons>
                                                    </Tippy>
                                                    <Tippy
                                                        placement="bottom"
                                                        content="Embed links"
                                                    >
                                                        <OptionRightButtons
                                                            onClick={(e) =>
                                                                handleOptions(
                                                                    e,
                                                                    6
                                                                )
                                                            }
                                                        >
                                                            <BiCodeCurly />
                                                        </OptionRightButtons>
                                                    </Tippy>
                                                    <Tippy
                                                        placement="bottom"
                                                        content="Unordered list"
                                                    >
                                                        <OptionRightButtons
                                                            onClick={(e) =>
                                                                handleOptions(
                                                                    e,
                                                                    7
                                                                )
                                                            }
                                                        >
                                                            <GoListUnordered />
                                                        </OptionRightButtons>
                                                    </Tippy>
                                                    <Tippy
                                                        placement="bottom"
                                                        content="Ordered list"
                                                    >
                                                        <OptionRightButtons
                                                            onClick={(e) =>
                                                                handleOptions(
                                                                    e,
                                                                    8
                                                                )
                                                            }
                                                        >
                                                            <GoListOrdered />
                                                        </OptionRightButtons>
                                                    </Tippy>
                                                    <Tippy
                                                        placement="bottom"
                                                        content="Upload an image"
                                                    >
                                                        <OptionRightButtonsCamera>
                                                            <label>
                                                                <FiCamera />
                                                                <input
                                                                    onInput={(
                                                                        e
                                                                    ) =>
                                                                        uploadImage(
                                                                            e,
                                                                            "write"
                                                                        )
                                                                    }
                                                                    type="file"
                                                                />
                                                            </label>
                                                        </OptionRightButtonsCamera>
                                                    </Tippy>
                                                    <Tippy
                                                        placement="bottom"
                                                        content="Markdown shortcuts"
                                                    >
                                                        <a
                                                            target="_blank"
                                                            href="https://daringfireball.net/projects/markdown/"
                                                        >
                                                            <OptionRightButtons>
                                                                <FaMarkdown />
                                                            </OptionRightButtons>
                                                        </a>
                                                    </Tippy>
                                                </div>
                                            ) : null}
                                        </OptionsInnerMainDiv>
                                    </div>
                                </div>
                            </OptionsDiv>
                            {leftOption === 0 ? (
                                <div>
                                    <StoryDiv>
                                        <textarea
                                            value={storeData}
                                            onChange={(e) => {
                                                handleChangeData(e);
                                            }}
                                            placeholder="Tell your story..."
                                            id=""
                                        ></textarea>
                                    </StoryDiv>
                                </div>
                            ) : leftOption === 1 ? (
                                <div>
                                    <PreviewDiv>
                                        <ReactMarkdown>
                                            {storeData
                                                ? storeData
                                                : "Nothing to preview 🧐"}
                                        </ReactMarkdown>
                                    </PreviewDiv>
                                </div>
                            ) : leftOption === 2 ? (
                                <Guide />
                            ) : null}
                            <div> </div>
                        </BodyActualContentDiv>
                    </div>
                </div>
            </BodyDiv>
        </div>
    );
};

const BodyActualContentDiv = styled.div``;
const HeadingsDiv = styled.div`
    width: 5rem;
    height: 7rem;
    border-radius: 0.5rem;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    margin-bottom: 1 rem;
    z-index: 51;
    left: 0;
    top: 100%;
    position: absolute;
    text-align: left;
    padding: 1rem;
    transition: width 2s linear 1s ease-in;

    & > :hover {
        background-color: rgb(229, 231, 235);
    }
`;
const OptionRightButtons = styled.button`
    border-radius: 0 rem;
    border-width: 1px;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    background-color: transparent;

    & > :nth-child(1) {
        width: 1rem;
        height: 1rem;
        color: #676e7b;
    }
`;
const OptionRightButtonsCamera = styled.button`
    border-radius: 0 rem;
    border-width: 1px;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    background-color: transparent;

    & > label > :nth-child(1) {
        width: 1rem;
        height: 1rem;
        color: #676e7b;
    }
    & > label > :nth-child(2) {
        visibility: hidden;
        width: 0px;
    }
`;

const OptionLeftButtons = styled.button`
    border-radius: 0.5 rem;
    border-width: 1 px;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    background-color: transparent;
    color: #5c646e;
    /* color: rgb(41,98,255); */

    & :hover {
        background-color: rgb(229, 231, 235);
    }
    & > :nth-child(2) {
        display: inline;
        margin-left: 8px;
    }

    & > :nth-child(1) {
        margin-bottom: -2px;
        width: 1rem;
        height: 1rem;
    }
`;
const OptionsInnerMainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    & > :nth-child(1) > :nth-child(2) > :nth-child(1) {
        width: 1.5rem;
        height: 1.5rem;
        margin-bottom: -6px;
    }

    & > div > :hover {
        background-color: rgb(229, 231, 235);
        border-radius: 5px;
    }
    /* background-color: rgba(59, 130, 246, 0.5); */
`;
const OptionsDiv = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #f5f7fa;
    line-height: 1.5;
    border: 1px solid #e4e4e6;

    & > div > div {
        padding: 0.5rem;
        border-radius: 0.25rem;
        z-index: 1;
    }
`;
const TitleDiv = styled.div`
    & > textArea {
        height: 82px !important;
        outline: 2px solid transparent;
        outline-offset: 2px;
        line-height: 1.375;
        font-weight: 700;
        padding-left: 1rem;
        padding-right: 1rem;
        background-color: transparent;
        font-size: 1.875rem;
        appearance: none;
        resize: none;
        margin-top: 0.5rem;
        margin-bottom: 1.25rem;
        color: rgb(51, 51, 51);
        border: none;
        text-align: left;
        width: 100%;

        &::-webkit-input-placeholder {
            color: rgb(158, 158, 158);
        }
    }
`;
const SubTitleDiv = styled.div`
    display: flex;
    margin-top: -1.25rem;
    margin-bottom: 1rem;
    & > textArea {
        height: 66px !important;
        outline: 2px solid transparent;
        outline-offset: 2px;
        line-height: 1.375;
        font-weight: 500;
        padding-left: 1rem;
        background-color: transparent;
        font-size: 1.5rem;
        appearance: none;
        resize: none;
        padding-right: 2.5rem;
        color: rgb(97, 97, 97);
        border: none;
        text-align: left;
        width: 100%;

        &::-webkit-input-placeholder {
            color: rgb(158, 158, 158);
        }
    }
    & > :nth-child(2) {
        margin-right: 0.4rem;
        padding-top: 0.5rem;
        width: 2rem;
        height: 1.5rem;
        cursor: pointer;
        &:hover {
            background-color: rgb(229, 231, 235);
            border-radius: 5px;
        }
    }
`;

const StoryDiv = styled.div`
    & > textArea {
        /* height: 123px !important; */
        min-height: 100vh;
        outline: 2px solid transparent;
        outline-offset: 2px;
        line-height: 1.375;
        font-weight: 300;
        padding: 3rem 1rem;
        background-color: transparent;
        font-size: 1.25rem;
        appearance: none;
        resize: none;
        margin-top: 0.5rem;
        margin-bottom: 1.25rem;
        border: none;
        text-align: left;
        width: 100%;
        color: #333333;
    }
`;

const PreviewDiv = styled.div`
    font-size: 1.25rem;
    line-height: 1.8;
    overflow-wrap: break-word;
    word-break: break-word;
    letter-spacing: -0.025em;
    padding: 3rem 1rem;
    width: 100%;
    min-height: 30vh;
    color: #111;
    max-width: 65ch;
    text-align: left;

    & > :nth-child(1) {
        margin-top: 0;
    }
    & > :last-child {
        margin-bottom: 0;
    }
    & ul,
    ol > li {
        padding-left: 1em;
    }
    & ol,
    ul > li {
        padding-left: 1em;
    }
    & img {
        margin-top: 2em;
        margin-bottom: 2em;
        max-width: 100%;
        height: auto;
    }
`;

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
const HeaderDiv = styled.div`
    width: 92%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(229, 231, 235);
    padding: 1rem 0.5rem;
    margin-top: 0 !important;
`;

const CoverImageDiv = styled.div`
    margin-bottom: 1.25rem;

    & > div {
        display: flex;
        position: relative;

        & > :nth-child(2) {
            border: 1px solid rgba(51, 51, 51, 0.288);
            margin-right: 0.4rem;
            padding-top: 1rem !important;
            padding: 0.5rem;
            width: 2rem;
            height: 1.5rem;
            cursor: pointer;
            color: rgb(51, 51, 51);
            position: absolute;
            top: 20px;
            right: 80px;
            background-color: white;
            opacity: 0.75;
            &:hover {
                color: rgb(0, 0, 0);
                border-radius: 5px;
                opacity: 1;
            }
        }
        & > :nth-child(3) {
            border: 1px solid rgba(51, 51, 51, 0.288);
            margin-right: 0.4rem;
            padding-top: 1rem !important;
            padding: 0.5rem;
            width: 2rem;
            height: 1.5rem;
            cursor: pointer;
            color: rgb(51, 51, 51);
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: white;
            opacity: 0.75;
            &:hover {
                color: rgb(0, 0, 0);
                border-radius: 5px;
                opacity: 1;
            }
        }

        & img {
            width: 100%;
            border-radius: 0.5rem;
        }
    }
`;

const AddCoverAndTitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    & > label {
        opacity: 0.5;
        border-radius: 0.5rem;
        border: none;
        padding: 0.25rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 500;
        line-height: 1.625;
        color: rgb(55, 65, 81);
        background-color: #ffffff;
        margin-bottom: 40px;
        /* transition-property: background-color, border-color, color, fill, stroke; */
        /* transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */

        &:hover {
            color: black;
            opacity: 1;
            background-color: rgb(229, 231, 235);
        }
        & > :nth-child(1) {
            display: inline;
            margin-bottom: -5px;
            font-size: 1.5rem;
            opacity: 0.75;

            &:hover {
                opacity: 1;
            }
        }
        & > :nth-child(2) {
            margin-left: 8px;
            display: inline;
        }
        & > :nth-child(3) {
            visibility: hidden;
            width: 0px;
        }
    }
`;

const PublishButton = styled.button`
    border-radius: 0.5rem;
    border: 1px solid rgb(41, 98, 255);
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    line-height: 1.625;
    color: rgb(41, 98, 255);
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-duration: 150ms;
    background-color: #ffffff;

    &:hover {
        background-color: rgb(227, 242, 253);
    }

    & > img {
        width: 18px;
        fill: rgb(124, 153, 235) !important;
    }

    & > :nth-child(1) {
        margin-bottom: -3px;
        font-size: 1.3rem;
        opacity: 0.75;
    }

    & > p {
        display: inline;
        margin-left: 10px;
        padding-bottom: 2px;
        font-weight: 500;
    }
`;
const SettingButton = styled.button`
    border-radius: 0.5rem;
    border-width: 1px;
    border-color: transparent;
    padding-top: 0.5rem !important;
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    line-height: 1.625;
    --tw-text-opacity: 1;
    color: rgba(55, 65, 81, var(--tw-text-opacity));
    cursor: pointer;
    background-color: white;
    margin-right: 1rem;

    &:hover {
        background-color: #efefef;
    }

    & > :nth-child(1) {
        margin-bottom: -5px;
        font-size: 1.3rem;
        opacity: 0.75;
    }

    & > p {
        display: inline;
        margin-left: 10px;
        padding-bottom: 2px;
        font-weight: 500;
    }
`;
const SettingButton1 = styled.button`
    border-radius: 0.5rem;
    border-width: 1px;
    border-color: transparent;
    padding-top: 0.5rem !important;
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    line-height: 1.625;
    --tw-text-opacity: 1;
    color: rgba(55, 65, 81, var(--tw-text-opacity));
    background-color: white;
    margin-right: 1rem;

    & > :nth-child(1) {
        margin-bottom: -5px;
        font-size: 1.3rem;
        opacity: 0.75;
    }

    & > p {
        display: inline;
        margin-left: 10px;
        padding-bottom: 2px;
        font-weight: 500;
    }
`;
