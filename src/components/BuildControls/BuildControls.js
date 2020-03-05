import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const buildControls=(props)=>{
    const controls=[{label:"salad"},{label:"mayo"},{label:"meat"},{label:"bacon"}];
    return (
        <div className={classes.build_control}>
            {controls.map((value,index)=>{
                return <BuildControl label={value.label} 
                key={index} add={()=>{props.add(value.label)}} 
                remove={()=>props.remove(value.label)} disable={props.keys[value.label]}/>
            })}
        </div>
    );
}

export default buildControls;