import React from "react";
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <p>This is a Header</p>
            <Outlet/>
            <p>©2023 Aryan Kashyap, Tejas Raghuram, Vignesh Saravanakumar</p>
        </div>
    );
}

export default Layout;