import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';

const style = {
    card: {
        minWidth: 275,
    },
}

function BackgroundCard(props){
    const {classes} = props;

    return (
        <Card className = {classes.card}>
            <CardContent></CardContent>
        </Card>
    );
}

BackgroundCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(BackgroundCard);
