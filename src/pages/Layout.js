import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from './../images/logo.png';

function Layout() {
    return (
        <div>
            <img src={Logo} alt=""/>
            <p>EcoCuisine</p>
            <Outlet/>
            <p id="footer">©2023 Aryan Kashyap, Tejas Raghuram, Vignesh Saravanakumar</p>
        </div>
    );
}

export default Layout;