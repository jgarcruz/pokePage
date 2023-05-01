import React, {useState} from 'react';
import './App.css';
import pokeball from './pokeball.webp';
import masterball from './masterball.webp';

function Home(){
    const[hover, onHover] = useState(false)
    const[name, setName] = useState("Joan")
    const[lname, setlname] = useState("Garcia-Cruz")
    const[text, setText] = useState('')

    /**
     * The homepage will have the following:
     * A pokeball that turns into a masterball upon hovering over it.
     * A blurb that describes the author of the website.
     * A box of text that the user can use for fun.
     */

    //Handle the change of the text box
    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    return(
        <>
        <div class = "homecontainer">
            <p class="team-text" id="covertext">LETS GO!</p>
        </div>
        <div class = "homecontainer">
            <img onMouseOver={()=>onHover(true)} onMouseLeave={()=>onHover(false)} class = "masterball" id = "pokeball-image" src = {masterball} alt = 'Pokeball picture'/>
            <p class="animated-text">Welcome to this website created by: {name} {lname}</p>
        </div>

        <div class = "homecontainer">
            <label>
                What's your favorite Pokemon?
                <input type="text" value={text} onChange={handleTextChange}></input>
            </label>
        </div>
        <div class = "homecontainer">
        <p class="diff">Your favorite Pokemon is: {text}</p>
        </div>
        </>
    )
}

export default Home;