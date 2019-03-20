import React, {Component} from 'react';
import './CreateExperiment.css'
import List from '@material-ui/core/List';
import StepsComps from '../../comps/stepsComps/StepsComps';

class CreateExperiment extends Component{
    render(){
        return(
            <div className="stepsCompsDiv">
                <StepsComps id="stepsComps" label="Select Variables" />
                <StepsComps id="stepsComps" label="Explore Variables"/>
                <StepsComps id="stepsComps" label="Select Transformation"/>
                <StepsComps id="stepsComps" label="Configure Test & Validation"/>
            </div>
            
        );
    }
}

export default CreateExperiment;