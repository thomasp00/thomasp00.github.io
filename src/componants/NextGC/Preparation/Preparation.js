import React from 'react';
import classes from './Preparation.module.css';

const preparation = () => (
    <div className={classes.Preparation}>
        <h1>Préparation individuelle :</h1>
        
        <h2>Rocher du conseil</h2>
            <p>Comme lors de chacune de nos sorties, nous débutons par un rocher du 
            conseil. Voici donc vidéo pour te présenter notre rocher du conseil de cette sortie.
            <br />Regarde la vidéo ci-dessous.</p>
            <div className="videoRDC">
                <video src="https://youtu.be/gc9ch_5YkFw" width="400px" height="300px" controls>
                    Le fichier vidéo ne peut pas être lu
                </video>
            </div>
            
            <p>Maintenant, tu connais le rocher du conseil. Tu peux réfléchir à une résolution et envoyer ta réponse via par mail à Akéla, afin 
            que nous puissions en discuter tous ensemble samedi prochain.</p>
            
            <a href="mailto:thomas.poulain@scouts-europe.ch"> Envoyer un mail à Akéla </a>
            
			<br /><p>Tu as fini la première partie.
            <br />Pour la suite, nous aurons la joie de nous retrouver par appel vidéo samedi prochain.</p>
    </div>
)

export default preparation;