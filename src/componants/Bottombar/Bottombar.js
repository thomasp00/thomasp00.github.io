import React from 'react';
import classes from './Bottombar.module.css';

const bottomBar = () => (
    <div className={classes.Bottombar}>
        <div className={classes.Buttons}>
            <button className={classes.Button}>Mentions légales</button>
            <button className={classes.Button}>Contacts</button>
        </div>
        <p className={classes.creationInfo}>Site créé par Baloo - avril 2020</p>
    </div>
)

export default bottomBar;