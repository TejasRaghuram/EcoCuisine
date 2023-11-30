import React from "react";
import LandingImage from "./../images/landing.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Landing() {

    const { loginWithRedirect, user, isLoading } = useAuth0();

    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/home");
    }

    return (
        <div>
            <div class="spacing" />
            <h1 id="landing_header">Welcome<br/>to<br/>EcoCuisine!</h1>
            <img src={LandingImage} id="landing_image" alt=""></img>
            <button onClick={() => {
                if(!isLoading && !user)
                {
                    loginWithRedirect();
                }
                else if(user)
                {
                    goToHome();
                }
            }} class="button" id="landing_button">GET STARTED</button>
        </div>
    );
}

export default Landing;