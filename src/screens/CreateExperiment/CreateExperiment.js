import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './CreateExperiment.css'

class CreateExperiment extends Component{
    render(){
        return(
            <div className="CreateExperiment">
            <header className="CreateExperiment-header">
            <Button variant="contained" color="primary" onClick={this.onBtnClick}>
                Click Me!!!
            </Button>
            </header>
            </div>
        );
    }

    onBtnClick(){
        window.alert("Hey Whatsup!!!");
    }
}

export default CreateExperiment;