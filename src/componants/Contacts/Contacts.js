import React from 'react';
import classes from './Contacts.module.css';

const contacts = () => (
    <div className={classes.Contacts}>
        <h1><strong>Composition de la maîtrise</strong></h1>
		
        <div className={classes.Cadre}>
		<br /><h3>Akéla</h3>
		<p>Adresse e-mail: thomas.poulain@scouts-europe.ch</p>
        <p>Téléphone : + 33 7 83 72 58 19</p>
		</div>
		
		<div className={classes.Cadre}>
		<br /><h3>Baloo</h3>
		<p>Adresse e-mail: martin.tefra@scouts-europe.ch</p>
        <p>Téléphone : + 33 6 52 37 10 92</p>
		</div>
		
		<div className={classes.Cadre}>
		<br /><h3>Bagheera</h3>
		<p>Adresse e-mail: fabien.sauty@scouts-europe.ch</p>
        <p>Téléphone : + 41 7 99 10 83 05</p>
		</div>
		
		<div className={classes.Cadre}>
		<br /><h3>Phao</h3>
		<p>Adresse e-mail: dorsan.lepain@scouts-europe.ch</p>
        <p>Téléphone : + 41 76 74 46 32 86</p>
		</div>
		
		<div className={classes.Cadre}>
		<br /><h3>Chil</h3>
		<p>Adresse e-mail: jean-baptiste.vonstreng@scouts-europe.ch</p>
        <p>Téléphone : + 41 7 98 52 52 47</p>
        </div>
		
		<br /><p>Adresse du local: </p>
    </div>
)

export default contacts;