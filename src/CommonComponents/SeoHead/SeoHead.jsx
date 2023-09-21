import Head from "next/head"
import { useRouter } from "next/router";
import React from "react"

const SeoHead = (props) => {
    console.log(props, "jiji")
    const ogImage = () => {
        return props.ogImage ? props.ogImage?.src ? props.ogImage?.src : typeof (props.ogImage) === "string" ? props.ogImage : "" : "https://edneed-images-uat.s3.amazonaws.com/1673960071OG%20Tag.png"
    }
    return (
        <React.Fragment>
            <Head>
                <title>{props.title || "Free Website Builder | Create Your Own Website | Webneed"}</title>
                <meta name="title" content={props.title || "Free Website Builder | Create Your Own Website | Webneed"} />
                <meta name="keyword" content={props.keywords || "Free Website Builder | Create Your Own Website | Webneed"} />
                <meta name="description"
                    content={props.description || "Create a professional website with webneed. Webneed is the latest website builder packed with the most cutting-edge features that enable you to build sites with ease."}
                />
                <link rel="canonical" href={props.url || "https://webneed.io/"} />
                <meta property="fb:app_id" content="your_app_id" />
                <meta property="og:url" id="url_id" content={props.url || "https://webneed.io/"} />
                <meta property="og:type" content="Website" />
                <meta property="og:title" content={props.ogTitle || "Free Website Builder | Create Your Own Website | Webneed"} />
                <meta property="og:description"
                    content={props.ogDesc || "Create a professional website with webneed. Webneed is the latest website builder packed with the most cutting-edge features that enable you to build sites with ease."} />
                <meta property="og:image" content={ogImage()} />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="315" />
                <meta property="og:image:alt" content={props.ogTitle || "Free Website Builder | Create Your Own Website | Webneed"} />
                <meta property="og:site_name" content={props.ogTitle || "WebneedTech"} />
                <meta property="og:locale" content="en_IN" />
                <meta property="fb:admins" content="Facebook numeric ID" />
                <meta name="twitter:title" content={props.ogTitle || "Free Website Builder | Create Your Own Website | Webneed"} />
                <meta name="twitter:image" content={ogImage()} />
                <meta name="twitter:image:alt" content={props.ogTitle || "Free Website Builder | Create Your Own Website | Webneed"} />
                <meta name="twitter:image:width" content="600" />
                <meta name="twitter:image:height" content="315" />
                <meta name="twitter:url" id="urlId" content={props.url || "https://webneed.io/"} />
                <meta name="twitter:card" content="Website" />
                <meta name="twitter:description"
                    content={props.ogDesc || "Create a professional website with webneed. Webneed is the latest website builder packed with the most cutting-edge features that enable you to build sites with ease."} />
                <meta name="twitter:creator" content={props.author || "@WebneedTech"} />


            </Head>
        </React.Fragment>
    )
}
export default SeoHead