import React from 'react';
import classes from './NextGC.module.css';
import { Link } from 'react-router-dom';


const textGC = () => (
    <div className={classes.NextGC}>
        <h1>Sortie virtuelle !</h1>
        <div className={classes.Boxes}>
            <div className={classes.PresentationBox}>
                <p>Afin de se rapporcher au mieux d'une sortie "classique" malgré les circonstances, la maîtrise te propose de participer à notre 1ère sortie virtuelle tous ensemble.</p>
                
                <h4>Organisation générale :</h4>
                <p>Cette activité se déroulera en 2 étapes :</p>
                
                <ol>
                    <li>Préparation individuelle</li>
                    <li>Sortie virtuelle en meute, le samedi 25 avril à partir de 14h</li>
                </ol>
            </div>
            <div className={classes.AcessBox}>
                <Link to="/nextgc/preparation" exact style={{textDecoration: 'none'}}><button>Préparation individuelle</button></Link>
                <Link to="/nextgc/sortie" exact style={{textDecoration: 'none'}}><button>Sortie en meute</button></Link>
            </div>
        </div>
    </div>
)

export default textGC;