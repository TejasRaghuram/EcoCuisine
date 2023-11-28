import React from "react";
import LandingImage from "./../images/landing.png";

function Landing() {
    return (
        <div>
            <div class="spacing" />
            <h1 id="landing_header">Welcome<br/>to<br/>EcoCuisine!</h1>
            <img src={LandingImage} id="landing_image" alt=""></img>
            <button onClick={()=>{}} class="button" id="landing_button">GET STARTED</button>
        </div>
    );
}

export default Landing;