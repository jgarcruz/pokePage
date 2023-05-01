import React from 'react';
import './App.css'

//Create a list of child elements or components with unique keys
//Creates a list of child elements which are Pokemon team members
function Team(){
    const team = ["Espurr", "Greninja", "Pangoro", "Jolteon", "Yveltal", "Arceus"]
    const pokemon = team.map((member) => <li key={member.toString()}>{member}</li>);

    return (
        <>
        <div class="homecontainer">
            <h1 class = "team-text">My Pokemon Team</h1>
        </div>
        <div class="homecontainer">
            <u1 class = "team">{pokemon}</u1>
        </div>
        </>
    )
}

export default Team;