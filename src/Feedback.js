import React, { useState } from 'react';
import './App.css'

function Feedback(){
    /**
     * Record any feedback on a form that will be submitted and displayed on the screen
     */
    //Handle the change of the text box
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setText(event.target.elements.text.value);
        event.target.reset();
    }

    return (
        <>
    <div class="homecontainer">
        <p>Have Feedback? Tell me about it here:</p>
    </div> 
   
    <div class="homecontainer">
        <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
    </div>

    <div class="homecontainer">
    <form onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">Submit</button>
      </form>
    </div>

    <div class="homecontainer">
    <p class="diff">Here is the feedback you input: {text}</p>
    </div>
    <div class="homecontainer">
    <p class="diff">Your email is: {email}</p>
    </div>
        </>
    )
}

export default Feedback;