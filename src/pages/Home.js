import React from "react";

function Home() {
    return (
        <div>
            <button class="button" id="logout" onClick={() => {}}>LOG OUT</button>
            <div class="spacing" />
            <h1>Welcome!</h1>
            <h3 id="home_subtitle">Please place your order below</h3>
            <div class="home_section_header">
                <h3 class="home_section_header_number">1</h3>
                <h3 class="home_section_header_text">Select Restaurant</h3>
            </div>
            <br/>
            <div class="home_section_header">
                <h3 class="home_section_header_number">2</h3>
                <h3 class="home_section_header_text">Place Order</h3>
            </div>
            <br/>
            <div class="home_section_header">
                <h3 class="home_section_header_number">3</h3>
                <h3 class="home_section_header_text">Review Order</h3>
            </div>
            <br/>
            <div class="home_section_header">
                <h3 class="home_section_header_number">4</h3>
                <h3 class="home_section_header_text">Order Confirmation</h3>
            </div>
        </div>
    );
}

export default Home;