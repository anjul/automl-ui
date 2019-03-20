import React, {Component} from 'react';
import './CreateExperiment.css'
import List from '@material-ui/core/List';
import StepsComps from '../../comps/stepsComps/StepsComps';

class CreateExperiment extends Component{
    render(){
        return(
            <div>
                <StepsComps id="stepsComps" />
                <StepsComps id="stepsComps" />
                <StepsComps id="stepsComps" />
            </div>
            
        );
    }
}

export default CreateExperiment;