import React from 'react';
import './App.css'

//Create a list of child elements or components with unique keys
//Creates a list of child elements which are Pokemon team members
function Team(){
    const team = ["Espurr", "Greninja", "Pangoro", "Jolteon", "Yveltal", "Arceus"]
    const pokemon = team.map((member) => <li key={member.toString()}>{member}</li>);

    return (
        <>
            <h1>My Pokemon Team</h1>
            <u1 class = "team">{pokemon}</u1>
        </>
    )
}

export default Team;