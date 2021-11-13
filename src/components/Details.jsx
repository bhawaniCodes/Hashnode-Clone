import React from "react";
import DetailsComponent from "./DetailsComponent";
import Styles from "./Details.module.css";
import { useEffect } from "react";
import axios  from "axios";

    const commonUrl = process.env.REACT_APP_COMMON_URL;
function Details() {
    const [data, setData] = React.useState([]);

    async function getBlogs() {
        const token = JSON.parse(localStorage.getItem("user"));
        const data = await axios.get(`${commonUrl}/blogs/one`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        console.log("data: ", data.data);
        setData(data.data)
    }

    useEffect(() => {
        console.log("hiiiiii")
        getBlogs();
    }, []);

    let email = JSON.parse(localStorage.getItem("email"));
    let arr = email.split("." || "@");
    let name = arr[0];

    return (
        <div>
            <div className={Styles.mainInCont}>
                <h2>{name}</h2>
                <div className={Styles.icons}>
                    <div>
                        <img
                            src="https://img.icons8.com/fluency-systems-regular/48/000000/search--v1.png"
                            height="30"
                            weight="30"
                        />
                    </div>
                    <div>
                        <img
                            src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-moon-badges-symbols-dreamstale-lineal-dreamstale.png"
                            height="30"
                            weight="30"
                        />
                    </div>
                    <div>
                        <img
                            src="https://img.icons8.com/pastel-glyph/64/000000/suitcase--v4.png"
                            height="30"
                            weight="30"
                        />
                    </div>
                    <div>
                        <img
                            src="https://img.icons8.com/ios/50/000000/user-male-circle.png"
                            height="30"
                            weight="30"
                        />
                    </div>
                </div>
            </div>
            <div className={Styles.mainIn2Cont}>
                <div>
                    <strong>HOME</strong>
                </div>
                <div>BADGES</div>
                <div className={Styles.feed}>
                    <div>
                        <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzY2NjY2NiI+PHBhdGggZD0iTTI2Ljg3NSwyNi44NzV2MjEuNWM1My4zNzM3NSwwIDk2Ljc1LDQzLjM3NjI1IDk2Ljc1LDk2Ljc1aDIxLjVjMCwtNjUuMzA2MjUgLTUyLjk0Mzc1LC0xMTguMjUgLTExOC4yNSwtMTE4LjI1ek0yNi44NzUsNjQuNXYyMS41YzMyLjYyNjI1LDAgNTkuMTI1LDI2LjQ5ODc1IDU5LjEyNSw1OS4xMjVoMjEuNWMwLC00NC41MDUgLTM2LjEyLC04MC42MjUgLTgwLjYyNSwtODAuNjI1ek00MywxMTIuODc1Yy04LjkwNTU5LDAgLTE2LjEyNSw3LjIxOTQxIC0xNi4xMjUsMTYuMTI1YzAsOC45MDU1OSA3LjIxOTQxLDE2LjEyNSAxNi4xMjUsMTYuMTI1YzguOTA1NTksMCAxNi4xMjUsLTcuMjE5NDEgMTYuMTI1LC0xNi4xMjVjMCwtOC45MDU1OSAtNy4yMTk0MSwtMTYuMTI1IC0xNi4xMjUsLTE2LjEyNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                        />
                    </div>
                    <div>
                        <img src="https://img.icons8.com/plumpy/32/000000/rhombus.png" />
                    </div>
                </div>
            </div>

            <div className={Styles.mainCont}>
                <div className={Styles.line}></div>

                {data.map((item) => (
                        <DetailsComponent {...item} />
                ))}
                {/* <DetailsComponent/>
            <DetailsComponent/> */}
            </div>
        </div>
    );
}

export default Details;
