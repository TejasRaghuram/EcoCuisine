import React from "react";
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <p>This is a Header</p>
            <Outlet/>
            <p>This is a Footer</p>
        </div>
    );
}

export default Layout;