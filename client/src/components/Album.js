import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Footer from './Footer';
import HeroContent from "./HeroContent";
import MultiContainer from "./MultiContainer";
import Grid from "@material-ui/core/Grid";
import {ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Toolbar} from "@material-ui/core";


export default function Album() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const options = ['TOP 24H', 'TOP 7D', 'TOP 30D', 'TOP ALL'];
    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="relative">
                <Grid container direction="column" alignItems="center">
                    <Toolbar item xs={12}>
                        <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                            <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                            <Button
                                color="primary"
                                size="small"
                                aria-controls={open ? 'split-button-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-label="select merge strategy"
                                aria-haspopup="menu"
                                onClick={handleToggle}
                            >
                                <ArrowDropDownIcon/>
                            </Button>
                        </ButtonGroup>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({TransitionProps, placement}) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList id="split-button-menu">
                                                {options.map((option, index) => (
                                                    <MenuItem
                                                        key={option}
                                                        selected={index === selectedIndex}
                                                        onClick={(event) => handleMenuItemClick(event, index)}
                                                    >
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </Toolbar>
                </Grid>
            </AppBar>
            <main>
                <HeroContent/>
                <MultiContainer/>
            </main>
            <Footer/>
        </React.Fragment>
    );
}