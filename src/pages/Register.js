import React from "react";
import { Link } from "react-router-dom"

function Register() {
    return (
        <div>
            <div class="spacing" />
            <form action={() => {}} class="auth_container">
                <h3 class="auth_header">Register</h3>
                <label for="email" class="auth_label">EMAIL:</label>
                <br/>
                <input type="text" name="email" class="auth_input"/>
                <br/>
                <br/>
                <label for="password" class="auth_label">PASSWORD:</label>
                <br/>
                <input type="password" name="password" class="auth_input"/>
                <br/>
                <br/>
                <input type="submit" value="Submit" class="button auth_button"/>
                <br/>
                <br/>
                <Link to="./../Login" class="auth_link_label">Already a member? <span class="auth_link">Log In</span></Link>
            </form>
            <div class="auth_bottom_spacing" />
        </div>
    );
}

export default Register;