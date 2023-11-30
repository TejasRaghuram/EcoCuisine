import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from './../images/logo.png';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Layout() {

    const { loginWithRedirect, logout, user, isLoading } = useAuth0();

    const navigate = useNavigate();
    const goToLanding = () => {
        navigate("/");
    }

    if(!isLoading && !user)
    {
        loginWithRedirect();
    }

    return (
        <div id="layout">
            
            <Outlet/>
            <div id="header">
                <img id="header_logo" src={Logo} alt=""/>
                <h3 id="header_text">EcoCuisine</h3>
            </div>
            <button class="button" id="logout" onClick={() => {
                logout();
                goToLanding();
            }}>LOG OUT</button>
            <p id="footer">©2023 Aryan Kashyap, Tejas Raghuram, Vignesh Saravanakumar</p>
        </div>
    );
}

export default Layout;