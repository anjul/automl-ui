import React from 'react';;
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const styles = thems => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit *2,
        paddingBottom: theme.spacing.unit *2,
    };
});

function PaperSheet(props) {
    const { classes } =props

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                Select variables
                </Typography>
            </Paper>
        </div>
    );
}

PaperSheet.PropTypes = {
    classes: PropType.object.isRequired
};

expot default withStyles(styles)(PaperSheet);