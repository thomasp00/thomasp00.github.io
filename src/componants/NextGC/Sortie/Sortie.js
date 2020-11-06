import React from 'react';
import classes from './Sortie.module.css';
import imgCarte from '../../Images/Carte.jpeg';
import imgMessage from '../../Images/messageCodé.png';
import imgPrière from '../../Images/Prière.png';
import audio1 from '../../Audios/Audio loups 1.mp3';
import audio2 from '../../Audios/Audio loups 2.mp3';
import audio3 from '../../Audios/Audio loups 3.mp3';

const sortie= () =>(
    <div className={classes.Sortie}>    
        <ul>
        <h2>Sortie en direct, <strong>samedi à 14h</strong></h2>
			
			<p>Cette grande chasse va se dérouler en plusieurs parties, alternant appels vidéo (avec toutes la meute ou en sizaine) et divers activitées à réaliser individuellement.
			<br />Le déroulement de chaque partie va t'être présenté ci-dessous, dans l'ordre.</p>
			
			<h4>Rassemblement</h4>
			<h5>14h - 14h30 : Rocher du Conseil et lancement de la grande chasse</h5>
			<!-- Lien appel -->
			<p>Lien pour l'appel vidéo : 
			<br />(il suffit de cliquer dessus)</p>
			
			<h5>14h30 - 15h : Première Partie de la grande chasse</h5>
			<p>Mowgli part à travers la jungle pour rejoindre le village des Hommes, dans le but de revenir au rocher du conseil avec le Fleur Rouge (le feu).
			<br />Pour suivre et aider Mowgli dans son périple, voici un message codé (code ??????)</p>
			<ol>
				<li><strong>Message codé</strong></li>
				<p>Mowgli traverse de nombreux lieux de la jungle et rencontre pleins d’animaux. Chil, le vautour, le voit progresser et va te raconter 
				le trajet de Mowgli que tu pourras représenter sur la carte.</p>
				<br /><img src="imgMessage" alt="Photo non disponible" height="500px" width="600px"/>
				
				<li><strong>Carte à remplir</strong></li>
				<p>Pour connaître plus précisément le parcours de Mowgli, écoute l'audio ci-dessous et reporte sur ta carte tout le élément que tu entends, 
				afin d'avoir une carte la plus précise possible
				<br />Si tu as le temps, n'hésite pas à l'écouter plusieurs fois, pour compéter les éléments que tu pourrais ne pas avoir eut le temps de mettre sur ta carte</p>
				<br /><p>Audio 1 : </p>
				<audio src="audio1" controls>L'audio ne peut pas être lu</audio>
				<br /><p>Audio 2 : </p>
				<audio src="audio2" controls>L'audio ne peut pas être lu</audio>
				<br /><p>Audio 3 : </p>
				<audio src="audio3" controls>L'audio ne peut pas être lu</audio>
				<br />
				<img src="imgCarte" alt="Photo non disponible" height="500px" width="400px"/>
			
			</ol>
			
			<h5>15h00 - 15h15: Chasse en sizaine</h5>
			<!-- Lien appel -->
			<p>Lien pour l'appel vidéo : </p>
			
			
			<h5>15h15 - 15h45: Deuxième de la grande chasse</h5>
			<ol>
				<li><strong>Prière à remettre dans l'ordre</strong></li>
				<p>Demande à l'un de tes parents de t'imprimer les morceaux de la prière.
				<br />Découpe chaque phrase.
				<br />Remet les morceaux dans l'ordre de la prière des Guides et Scouts d'Europe d'après Saint François.
				<br />A gauche de chaque morceau, il y a une lettre. Une fois la prière remise dans le bon ordre, ces lettres à gauche vont former un mot.
				<br />Arrive-tu à voir le mot caché ?</p>
				
				<img src="imgPrière" alt="Photo non disponible" height="400px" width="500px"/>
				
				<li><strong>Mosaïque</strong></li>
				<p>Instructions pour la mosaïque</p>
			</ol>
			
			<h5>15h45 - 16h: Chasse en sizaine</h5>
			<!-- Lien appel -->
			<p>Lien pour l'appel vidéo : </p>
			
			<h5>16h - 16h30: Troisième partie de la grande chasse</h5>
			<p>Mowgli a récupéré le Fleur Rouge et revient au rocher du conseil pour la montrer. 
			Sur le chemin du retour Mowgli, il doit traverser la Waingunga , mais le pont s’est 
			effondré. Au loin il voit Bagheera qui, pour l’aider, lui indique un message en 
			sémaphore. Découvre ce message et suit le conseil donné par Bagheera.</p>
			
			<ol>
				<li><strong>Sémaphore de Bagheera</strong></li>
				<!-- Lien appel -->
				<p>Vidéo à mettre ici</p>
				<li><strong>Noeuds</strong></li>
				<p>Prends 2 morceaux de ficelles et réalise le noeud.
				<br />Pour t'aider, Bagheera t'as préparé des vidéos que tu peux visionner, pour apprendre ou réapprendre à faire les noeuds.</p>
				<!-- Vidéos -->
			</ol>
			
			<h5>16h30 - 16h45: Fin de la grande chasse</h5>
			<!-- Lien appel -->
			<p>Lien pour l'appel vidéo : </p>
			
			<h4>Rassemblement final</h4>
		
		
		</ul>
    

    </div>
)

export default sortie;