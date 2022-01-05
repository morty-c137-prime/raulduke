import React, { ReactElement } from "react";
import Footer from "./footer"
import Head from "next/head"

const Layout : React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>RAÜL DÜKE</title>
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://raulduke.com/images/Prime.jpg" />
                <meta property="og:title" content="RAÜL DÜKE" key="title" />
                <meta property="og:site_name" content="RAÜL DÜKE"/>
                <meta property="og:url" content="https://raulduke.com"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:description" name="description" content="Multimedia | VFX | Video Editing & Production"/>
                <meta name="keywords" content="RAÜL DÜKE, raul duke, Raoul Duke, Raul Duke, underground artist, vfx, chicago, music scene, music videos, art, poetry, latinx art, video art, code, programming, p5js, 5ouley, Undercurrent, chicago underground artists, cgi, animation, punk art, you tube music videos, youtube music videos, nudity in music videos, chicago underground film festival"/>
                <meta name="copyright" content="Richard Alvarez" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="10 days"/>
                <meta name="robots" content="follow"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"  />
            </Head>
                { children }
            <Footer>
            </Footer>
        </>
    )
};

export default Layout;
