import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from './../images/logo.png';

function Layout() {
    return (
        <div style={{position: 'relative'}}>
            <div id="header">
                <img id="header_logo" src={Logo} alt=""/>
                <h3 id="header_text">EcoCuisine</h3>
            </div>
            <Outlet/>
            <p id="footer">©2023 Aryan Kashyap, Tejas Raghuram, Vignesh Saravanakumar</p>
        </div>
    );
}

export default Layout;