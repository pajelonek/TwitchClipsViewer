import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './Footer';
import HeroContent from "./HeroContent";
import MultiContainer from "./MultiContainer";
import AlbumMenu from "./AlbumMenu";
import MyProvider from "./MyProvider";

export default function Album() {

    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                <MyProvider>
                    <HeroContent/>
                    <AlbumMenu/>
                    <MultiContainer/>
                </MyProvider>
            </main>
            <Footer/>
        </React.Fragment>
    );
}