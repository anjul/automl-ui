import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon  from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BackgroundCard from '../BackgroundCard.js';
import './StepsComps.css';
import { CardContent } from '@material-ui/core';

const styles = theme => ({
    root:{
        flex: 2,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
      },
});

function StepsComps(props) {
    const {classes} = props;

    return(
        <div>
            <BackgroundCard>
                <CardContent>
                    <b>{props.label}:</b>
                    <Fab size="small" color="primary" aria-label="Edit" className={classes.fab} onClick={onEditBtn}>
                        <EditIcon />
                    </Fab>
                    <Fab size="small" color="secondary" aria-label="Delete" className={classes.fab} onClick={onDelBtn}>
                        <DeleteIcon />
                    </Fab>
                </CardContent>
            </BackgroundCard>
        </div>
    );
}

function onEditBtn(){
    window.alert("clicked edit")
}

function onDelBtn(){
    window.alert("clicked del")
}

StepsComps.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepsComps);