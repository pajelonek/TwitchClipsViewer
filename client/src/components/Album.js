import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './Footer';
import HeroContent from "./HeroContent";
import MultiContainer from "./MultiContainer";
import AlbumMenu from "./AlbumMenu";

export default function Album() {

    return (
        <React.Fragment>
            <CssBaseline/>
            <AlbumMenu/>
            <main>
                <HeroContent/>
                <MultiContainer/>
            </main>
            <Footer/>
        </React.Fragment>
    );
}