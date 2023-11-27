import React from "react";

function Login() {
    return (
        <div>
            <div class="spacing" />
            <form action={() => {}} class="auth_container">
                <h3>Login</h3>
                <label for="fname" class="auth_label">USERNAME:</label>
                <br/>
                <input type="text" id="username" name="fname" class="auth_input"/>
                <br/>
                <br/>
                <label for="lname" class="auth_label">PASSWORD:</label>
                <br/>
                <input type="password" id="password" name="lname" class="auth_input"/>
                <br/>
                <br/>
                <input type="submit" value="Submit" class="auth_input"/>
            </form>
        </div>
    );
}

export default Login;