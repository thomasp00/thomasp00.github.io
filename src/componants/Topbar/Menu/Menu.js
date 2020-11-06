import React from 'react';
import classes from './Menu.module.css';
import { Link } from 'react-router-dom';

const menu = () => (
    <div className={classes.Buttons}>
        <div className={classes.Button1}><Link to="/" style={{textDecoration: 'none'}}>Accueil</Link></div>
        <li className={classes.Button1}><a href="/nextgc" style={{textDecoration: 'none'}}>Prochaine Sortie</a>
			<ul>
				<li><a href="/nextgc/preparation">Préparation individuelle</a></li>
				<li><a href="/nextgc/sortie">Sortie en meute</a></li>
			</ul>
		</li>
		<li className={classes.Button1}><a href="/nextgc" style={{textDecoration: 'none'}}>Prochaine Sortie</a>
			<ul>
				<li><a href="Preparation.js">Préparation individuelle</a></li>
				<li><a href="Sortie.js">Sortie en meute</a></li>
			</ul>
		</li>
        <div className={classes.Button1}><Link to="/articles" style={{textDecoration: 'none'}}>Articles</Link></div>
        <div className={classes.Button1}><Link to="/epreuves" style={{textDecoration: 'none'}}>Epreuves</Link></div>
        <div className={classes.Button1}><Link to="/prieres" style={{textDecoration: 'none'}}>Prières</Link></div>
        <div className={classes.Button1}><Link to="/planning" style={{textDecoration: 'none'}}>Planning</Link></div>
        <div className={classes.Button2}><Link to="/contacts" style={{textDecoration: 'none'}}>Nous contacter</Link></div>
    </div>
)

export default menu;