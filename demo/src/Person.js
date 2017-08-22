import React from 'react';
import { getPerson } from './peopleService';

export default function(props){
    let person = getPerson(props.match.params.id);
    return (
        <div>
            { person.name }
            <br/>
            { person.description }
            <br/>
            <img src={ person.image }></img>
        </div>
    )
}