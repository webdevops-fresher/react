import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './layout.css';

const layout = (props) => {
    return (
        <div>
            <div>Toolbar,SideDrawer,BackDrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    );
}


export default layout;