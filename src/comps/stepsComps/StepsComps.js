import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon  from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './StepsComps.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
    root:{
        flex: 8,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
      },
      card: {
        minWidth: 275,
      },
});

function StepsComps(props) {
    const {classes} = props;

    return(
        <div className="stepDiv row">
            <Card className={classes.card}>
                <CardContent>
                    <div className="pull-right">
                        <Fab size="small" color="primary" aria-label="Edit" className={classes.fab} onClick={onEditBtn}>
                            <EditIcon />
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="Delete" className={classes.fab} onClick={onDelBtn}>
                            <DeleteIcon />
                        </Fab>
                    </div>
                    <div>
                        <b>{props.label}</b>
                    </div>
                </CardContent>
            </Card>
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