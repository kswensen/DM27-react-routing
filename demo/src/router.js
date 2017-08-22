import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Faq from './Faq';
import People from './People';
import Person from './Person';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about/faq' component={Faq} />
        <Route path='/about' component={About} />
        <Route path='/people/:id' component={Person} />
        <Route path='/people' component={People} />
    </Switch>
)