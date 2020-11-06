import React from 'react';
import classes from './Home.module.css';
import img from '../../Images/flagspicture.jpg';

const text = () => (
    <div className={classes.TextArea}>
        <img className={classes.Image} src={img} alt="Image avec drapeaux" />
        <h1 className={classes.titreMeute}>Meute 1ère la Côte</h1>
        <div className={classes.MainPresentation}>
            <h4>Cher louveteau,</h4>
            <p>Tes chefs sont fiers de te présenter ce site qui est notre site de meute.
            <br />Nous pourrons y déposer toutes les informations relatives à nos rencontres,
            mais également de nombreuses autres documentations pour aider les curieux dans leur progression !
            <br />Le site est encore en cours d'élaboration, il ne contient pour l'instant pas beaucoup d'informations.
            NOUS AVONS FAIT DE NOTRE MIEUX !!!!
            Il nous servira de support pour notre grande chasse virtuelle de ce samedi à venir. (voir dans l'onglet "Prochaine sortie")
            Tu y trouveras toutes les informations nécessaires ci-dessus.</p>
			
			<br /><p>Voici une vidéo de présentation</p>
			
			<div class="positionVideo">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/9fKj-PIO65o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			
			
			<p><strong>Pour les parents :</strong>
			<br />Voici l'ensmble des documents à imprimer en prévision de la grande chasse virtuelle de ce samedi.</p>
			<br /><a href="Documents à imprimer.pdf" target="_blank"><FONT size="4pt" color="navy" face="Courier, MS Courier New, Prestige, monospace">Documents à imprimer (PDF)</FONT></a>
        </div>
    </div>
)

export default text;