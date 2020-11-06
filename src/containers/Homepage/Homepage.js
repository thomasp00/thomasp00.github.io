import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import classes from './Homepage.module.css';
import Home from '../../componants/Home/Home';
import NextGC from '../../componants/NextGC/NextGC';
import Dummy from '../../componants/Dummy/Dummy';
import Contacts from '../../componants/Contacts/Contacts';
import Preparation from '../../componants/NextGC/Preparation/Preparation';
import Sortie from '../../componants/NextGC/Sortie/Sortie';

class Homepage extends Component{
    render() {
        return(
            <div className={classes.Homepage}>
            <Route path="/" exact component={Home} />
            <Route path="/Prochaine sortie" exact component={NextGC} />
            <Route path="/planning" exact component={Dummy} />
            <Route path="/articles" exact component={Dummy} />
            <Route path="/epreuves" exact component={Dummy} />
            <Route path="/prieres" exact component={Dummy} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/nextgc/preparation" exact component={Preparation} />
            <Route path="/nextgc/sortie" exact component={Sortie} />
        </div>
        )
    }
};


export default Homepage;
