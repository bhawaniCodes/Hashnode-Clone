import React from 'react';
import Styles from './Guide.module.css'

export const Guide=()=> {
    return (
        <div className={Styles.mainCont}>
            <div className={Styles.mainContInside}>
                <div className={Styles.line1}>
                    This is a guide to help you create rich posts on Hashnode
                </div>
                Hashnode Editor supports simple markdown along with some special
                tags to embed Tweets, YouTube videos, Codepen snippets, etc.
                Scroll for more.
                <h1>Headers</h1>
                <div className={Styles.line2}>
                    Hashnode supports Atx-style headers. Use 1-6 hash characters
                    at the start of the line, corresponding to header levels
                    1-6. For example:
                </div>
                <div className={Styles.box1}>
                    <div># This is heading 1</div>
                    <div>## This is heading 2</div>
                    <div>### This is heading 3</div>
                    <div>#### This is heading 4</div>
                    <div>##### This is heading 5</div>
                    <div>###### This is heading 6</div>
                </div>
                <h1>Embeds</h1>
                <div>
                    Hashnode uses Embed.ly to support all kinds of embed on the
                    platform. You DON'T to paste the platform specific embed
                    code. Just follow the following syntax and the magic will
                    happen.
                </div>
                <div className={Styles.box2}>
                    <div>%[Paste link to embed]</div>
                    <div>
                        //Embed Tweets
                        <br />
                        %[https://twitter.com/hashnode/status/1080795453115920384?s=20]
                    </div>
                    <div>
                        //Embed YouTube Videos
                        <br />
                        %[https://www.youtube.com/watch?v=vAKtNV8KcWg]
                    </div>
                    <div>
                        //Embed Github Repo
                        <br />
                        %[https://github.com/hashnode/hashnode-cli]
                    </div>
                    <div>
                        //Embed Codepen
                        <br />
                        %[https://codepen.io/zephyo/pen/MZbLwV]
                    </div>
                    <div>
                        //Embed Glitch
                        <br />
                        %[https://glitch.com/edit/#!/lithium-battery-recycling]
                    </div>
                    <div>
                        //Embed Soundcloud
                        <br />
                        %[https://soundcloud.com/androidauthority/024-prime-day-shmimeday]
                    </div>
                    <div>
                        //Embed Expo
                        <br />
                        %[https://snack.expo.io/@iamshadmirza/tinder-cards]
                    </div>
                    <div>
                        //Embed Loom
                        <br />
                        %[https://www.loom.com/share/1436e60ced174f37b729be61081e069d]
                    </div>
                    <div>
                        //Embed Vimeo
                        <br />
                        %[https://vimeo.com/258358902], additional valid
                        parameters can be passed to customize the player. <br />
                        Ex.
                        %[https://vimeo.com/258358902?width=820&color=ED5565]
                        <br />
                        Visit this link
                        https://developer.vimeo.com/api/oembed/videos for more
                        details on how to customize the player, supported URL
                        types and parameters.
                    </div>
                    <div>
                        //Embed Canva
                        <br />
                        %[https://www.canva.com/design/your-design-id/view]
                    </div>
                    <div>
                        //Embed any article on web or website
                        <br />
                        %[https://hashnode.com]
                    </div>
                </div>
                <h1>Code Snippets</h1>
                <h2>Inline code</h2>
                <div>
                    Use the Grave accent keys ` for the inline code snippets. In
                    QWERTY keypads, this key can be written using Ctrl + 1.
                </div>
                <div className={Styles.box3}>
                    <div>This is a normal sentence with `some code` in it.</div>
                </div>
                <div className={Styles.box3Line1}>
                    The above will output the following:
                </div>
                <div className={Styles.box3Line2}>
                    This is a normal sentence with some code.
                </div>
                <h2>Block code</h2>
                <div>
                    Wrap the code blocks with tripple Grave accent keys. ``` for
                    showing big blocks of code in your content. For example:
                </div>
                <div className={Styles.box4}>
                    <div>{"` ` `"}</div>
                    <div>
                        if (isServer {`&&`} user){` {`}
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp; store.userStore.currentUser =
                        user;
                    </div>
                    <div>{` }`}</div>
                    <div>{"` ` `"}</div>
                </div>
                <div>
                    The above will look like: (Hashnode supports generic code
                    highlighting. Most of the time, it will be applied to the
                    code blocks after you publish the content.)
                </div>
                <div className={Styles.box4}>
                    <div>
                        if (isServer {`&&`} user){` {`}
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp; store.userStore.currentUser =
                        user;
                    </div>
                    <div>{` }`}</div>
                </div>
                <h1>Text formatting</h1>
                <div className={Styles.afterbox4}>
                    <div>
                        Bold: Wrap the text with double astricks ** to make it
                        bold. We will use {`<strong>`} while parsing. For
                        example: **Bold text**
                    </div>
                    <div>
                        Italics: Wrap the text with single astricks character *
                        to make it italics. For example: *Italic text*. We will
                        wrap the text with {`<em>`} tag while parsing.
                    </div>
                    <div>
                        The bold and italics markdown syntax works inside almost
                        any block level elements. Like Quotes, Lists, Inline
                        code, etc.
                    </div>
                </div>
                <h1>Quotes</h1>
                <div>
                    Use the greater than sign to format a text as a quote. For
                    example:
                </div>
                <div className={Styles.box3}>
                    <div>{`>`} Where there is a will there is a way!</div>
                </div>
                <div>Where there is a will there is a way</div>
                <h1>Links</h1>
                <div>
                    I'm an inline link: [I'm an inline link](put-link-here)
                </div>
                <h1>Inline Images</h1>
                <div className={Styles.afterbox4Line1}>
                    Use Hashnode's image uploader to upload your image to
                    Hashnode CDN.
                </div>
                <img
                    src={
                        "https://cdn.hashnode.com/res/hashnode/image/upload/v1547978025630/SkGNSabX4.png"
                    }
                    alt="/"
                />
                <div className={Styles.box3}>
                    <div>![Alt text of image](put-link-to-image-here)</div>
                </div>
                <h1>Latex support</h1>
                <div className={Styles.afterbox4}>
                    <div>
                        Please note: To use newline in an expression, you will
                        have to use (\\\\) instead of the standard latex command
                        (\\).
                    </div>
                    <div>
                        You can render *LaTeX* mathematical expressions using
                        MathJax. Wrap your inline expression in \\( and \\) Ex.
                        \\( YOUR_EXPRESSION_HERE \\).
                    </div>
                    <div>
                        To use it as a separate block, wrap your expression in
                        $$ or \\[ and \\]
                        <br />
                        Ex.
                    </div>
                </div>
                <div className={`${Styles.box4} ${Styles.someMoredown}`}>
                    <div>{`$$`}</div>
                    <div>YOUR_EXPRESSION_HERE</div>
                    <div>{`$$`}</div>
                    <div>--OR--</div>
                    <div>{`\\\\`}[</div>
                    <div>YOUR_EXPRESSION_HERE</div>
                    <div>{`\\\\`}]</div>
                </div>
            </div>
        </div>
    );
}


