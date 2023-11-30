import React from "react";
import Select from "react-select";

function MenuItem(props) {
    return (
        <div class="menu_item">
            <p class="menu_item_name">{props.name}</p>
            <button class="button menu_item_price">${props.price}</button>
        </div>
    );
}

function OrderItem(props) {
    return (
        <div>
            <p class="menu_item_name">{props.name}</p>
            <p class="menu_item_price">${props.price}</p>
        </div>
    );
}

function Home() {

    const restaurants = [{ value: '1', label: 'one' }, { value: '2', label: 'two' }];

    var menu = [];
    for(let i = 0; i < 5; i++)
    {
        menu.push(<MenuItem name="Item" price="0"/>);
    }

    var order = []
    for(let i = 0; i < 5; i++)
    {
        order.push(<OrderItem name="Item" price="0"/>);
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
                <button class="button home_section_next">NEXT</button>
            </div>
            <br/>
            <div class="home_section_header">
                <h3 class="home_section_header_number">2</h3>
                <h3 class="home_section_header_text">Place Order</h3>
            </div>
            <div class="home_section">
                <h3 class="home_section_prompt">Menu:</h3>
                {menu}
                <br />
                <h3 class="home_section_prompt" style={{height: '60px'}}>Your Order:</h3>
                {order}
                <br />
                <button class="button home_section_next" style={{margin: '0'}}>NEXT</button>
            </div>
            <br/>
            <div class="home_section_header">
                <h3 class="home_section_header_number">3</h3>
                <h3 class="home_section_header_text">Review Order</h3>
            </div>
            <div class="home_section">
                <h3 class="home_section_prompt" style={{height: '60px'}}>Your Order:</h3>
                {order}
                <br />
                <h3 class="home_section_prompt">Total Price: $0</h3>
                <h3 class="home_section_prompt">Delivery Fee: $0</h3>
                <br />
                <p style={{fontSize: '18px'}}>You have 0 EcoPoints. Would you like to use them to get a $0 discount on your order?</p>
                <button class="button home_section_next" style={{marginTop: '0'}}>YES</button>
                <button class="button home_section_next" style={{marginTop: '0', marginLeft: '20px'}}>NO</button>
            </div>
            <br/>
            <div class="home_section_header">
                <h3 class="home_section_header_number">4</h3>
                <h3 class="home_section_header_text">Order Confirmation</h3>
            </div>
            <div class="home_section">
                <h3 class="home_section_prompt" style={{height: '60px'}}>Your Order:</h3>
                {order}
                <h3 class="home_section_prompt">Subtotal: $0</h3>
                <h3 class="home_section_prompt">Delivery Fee: $0</h3>
                <h3 class="home_section_prompt">EcoPoints Discount: $0</h3>
                <h3 class="home_section_prompt">Estimated Delivery Time: 0 minutes</h3>
                <br />
                <p style={{fontSize: '18px'}}>The EcoScore of your order is 0.</p>
                <p style={{fontSize: '18px'}}>You have been awarded 0 EcoPoints.</p>
                <p style={{fontSize: '24px', fontWeight: 'bold'}}>Thanks for dining with EcoCuisine!</p>
            </div>
            <button class="button" id="logout" onClick={() => {}}>LOG OUT</button>
        </div>
    );
}

export default Home;