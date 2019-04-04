import React, {Component} from 'react';
import './CreateExperiment.css'
import StepsComps from '../../stepsComp/StepsComps'


class CreateExperiment extends Component{
    
    render(){
              
        const arrExperimentSteps = ["Select Variables","Explore Variables","Select Transformation","Configure Test & Validation"];
        const steps = [];

        for(const[index,value] of arrExperimentSteps.entries()){
            steps.push(<StepsComps key={index} label={value}></StepsComps>)
        }

        return(
            
            <div id="stepsDiv" >
            <h2>Create Experiment</h2>
               {steps}
            </div>    
        );
    }
}

export default CreateExperiment;