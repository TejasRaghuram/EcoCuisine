import React from "react";
import Select from "react-select";

function MenuItem(props) {
    return (
        <div>
            <p class="menu_item_name">{props.name}</p>
            <button class="button menu_item_price">${props.price}</button>
        </div>
    );
}

function Home() {

    const restaurants = [{ value: '1', label: 'one' }, { value: '2', label: 'two' }];

    var menu = [];
    for(let i = 0; i < 5; i++)
    {
        menu.push(<MenuItem name="Item" price="0"/>)
    }
    
    return (
        <div>
            <div class="spacing" />
            <h1>Welcome!</h1>
            <h3 id="home_subtitle">Please place your order below</h3>
            <div class="home_section_header">
                <h3 class="home_section_header_number">1</h3>
                <h3 class="home_section_header_text">Select Restaurant</h3>
            </div>
            <div class="home_section">
                <h3 class="home_section_prompt">Choose Your Restaurant:</h3>
                <Select options={restaurants} class="home_section_input" />
                <p class="home_section_confirmation_header">Your Selection is: <span class="home_section_confirmation_text">Please Select a Valid Restaurant</span></p>
                <h3 class="home_section_prompt">Enter Your Address:</h3>
                <input type="text" class="home_section_input"></input>
                <p class="home_section_confirmation_header">Your Selection is: <span class="home_section_confirmation_text">Please Enter a Valid Address</span></p>
                <button class="button home_section_next">NEXT</button>
            </div>
            <br/>
            <div class="home_section_header">
                <h3 class="home_section_header_number">2</h3>
                <h3 class="home_section_header_text">Place Order</h3>
            </div>
            <div class="home_section">
                {menu}
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
            <button class="button" id="logout" onClick={() => {}}>LOG OUT</button>
        </div>
    );
}

export default Home;