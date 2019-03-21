import React, {Component} from 'react';
import './CreateExperiment.css'
import StepsComps from '../../comps/stepsComps/StepsComps';

class CreateExperiment extends Component{
    
    render(){
              
        const arrExperimentSteps = ["Select Variables","Explore Variables","Select Transformation","Configure Test & Validation"];
        const steps = [];

        for(const[index,value] of arrExperimentSteps.entries()){
            steps.push(<StepsComps key={index} label={value}></StepsComps>)
        }

        return(
            <div id="stepsDiv" >
               {steps}
            </div>    
        );
    }
}

export default CreateExperiment;