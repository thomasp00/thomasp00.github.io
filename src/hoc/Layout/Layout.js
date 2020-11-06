import React from 'react';
import classes from './Layout.module.css';
import Topbar from '../../componants/Topbar/Topbar';
import Bottombar from '../../componants/Bottombar/Bottombar';

const layout = (props) => (
    <div className={classes.Layout}>
        <Topbar />
        <div className={classes.MainPage}>{props.children}</div>
        <Bottombar />
    </div>
)

export default layout;