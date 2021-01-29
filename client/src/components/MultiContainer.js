import React, {Component} from "react";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import ClipsGrid from './ClipsGrid';


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

class MultiContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clipResponse: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/v1/getClips")
            .then(response => response.json())
            .then(response => this.setState({
                clipResponse: response
            }));
    }

    render() {
        if (!this.state.clipResponse)
            return <Container className={useStyles.cardGrid} maxWidth="md"/>;
        else {
            return <Container className={useStyles.cardGrid} maxWidth="md">
                <ClipsGrid props={this.state.clipResponse}/>
            </Container>;
        }
    }
}

export default MultiContainer;