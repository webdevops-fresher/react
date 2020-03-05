import React from 'react';
import classes from './BuildControl.css';


const buildControl = (props) => {
    console.log(props.disable);
    return (
        <div className={classes.build_control}>
            <div className={classes.label}>{props.label}</div>
            <button className={classes.button} onClick={props.remove} disabled={props.disable}>Less</button>
            <button className={classes.button} onClick={props.add}>More</button>
        </div>
    );
}

export default buildControl;

