import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon  from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './StepsComps.css';

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
            <h3>Select Variables</h3>
            <Fab size="small" color="primary" aria-label="Edit" className={classes.fab}>
                <EditIcon />
            </Fab>
            <Fab size="small" color="secondary" aria-label="Delete" className={classes.fab}>
                <DeleteIcon />
            </Fab>
        </div>
    );
}

StepsComps.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepsComps);