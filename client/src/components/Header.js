import React from 'react';
import {Switch} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Brightness4Icon from '@material-ui/icons/Brightness4';

export default function Header() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    return (
        <div>
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <h1>TwitchClipsViewer</h1>
                </Grid>
                <Grid item style={{display: 'flex', alignItems: 'center', float:'right'}}>
                    <Brightness4Icon style={{ fontSize: 30}}/>
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        aria-label="spacing"
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />
                </Grid>
            </Grid>
        </div>
    );
}