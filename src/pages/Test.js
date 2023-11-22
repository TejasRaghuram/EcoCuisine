import React from "react";
import { getRestaurants, getMenu, getOrderPrice, getDeliveryFee, getDeliveryTime, getOrderEcoScore, getAwardedEcoPoints } from "./../scripts/RestaurantData.js";
import { createToken, getEcoPoints, addEcoPoints, subtractEcoPoints, getDiscount } from "./../scripts/EcoPoints.js";

function itemsRender(order)
{
    let result = "";
    for(let i = 0; i < order.length; i++)
    {
        result += JSON.stringify(order[i]) + "\n";
    }
    return result;
}

function Test() {
    
    //EDIT PARAMETERS FOR RESTAURANTDATA HERE
    let restaurant = "N/A";
    let order = [{name: "N/A", cost: 0, time: 0, ecoscore: 0}];
    let currentAddress = "N/A";
    let restaurantAddress = "N/A";
    let ecoscore = 0;
    let price = 0.00;

    //EDIT PARAMETERS FOR ECOPOINTS HERE
    let email = "N/A";
    let add_amount = 0;
    let subtract_amount = 0;
    let ecopoints = 0;

    return (
        <div>
            <br></br>
            <p style={{fontWeight: "bold", textDecoration: "underline"}}>RestaurantData Functions</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>Parameters</p>
            <p style={{textDecoration: "underline"}}>restaurant: </p>
            <p>{restaurant}</p>
            <p style={{textDecoration: "underline"}}>order: </p>
            <p>{itemsRender(order)}</p>
            <p style={{textDecoration: "underline"}}>currentAddress: </p>
            <p>{currentAddress}</p>
            <p style={{textDecoration: "underline"}}>restaurantAddress: </p>
            <p>{restaurantAddress}</p>
            <p style={{textDecoration: "underline"}}>ecoscore: </p>
            <p>{ecoscore}</p>
            <p style={{textDecoration: "underline"}}>price: </p>
            <p>{price}</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>getRestaurants</p>
            <p style={{textDecoration: "underline"}}>Method Result:</p>
            <p>{getRestaurants()}</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>getMenu</p>
            <p style={{textDecoration: "underline"}}>Method Result:</p>
            <p>{itemsRender(getMenu(restaurant))}</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>getOrderPrice</p>
            <p style={{textDecoration: "underline"}}>Method Result:</p>
            <p>{getOrderPrice(order)}</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>getDeliveryFee</p>
            <p style={{textDecoration: "underline"}}>Method Result:</p>
            <p>{getDeliveryFee(currentAddress, restaurantAddress)}</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>getDeliveryTime</p>
            <p style={{textDecoration: "underline"}}>Method Result:</p>
            <p>{getDeliveryTime(currentAddress, restaurantAddress, order)}</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>getOrderEcoScore</p>
            <p style={{textDecoration: "underline"}}>Method Result:</p>
            <p>{getOrderEcoScore(currentAddress, restaurantAddress, order)}</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>getEcoPoints</p>
            <p style={{textDecoration: "underline"}}>Method Result:</p>
            <p>{getAwardedEcoPoints(ecoscore, price)}</p>
            <br></br>

            <br></br>
            <p style={{fontWeight: "bold", textDecoration: "underline"}}>EcoPoints Functions</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>Parameters</p>
            <p style={{textDecoration: "underline"}}>email: </p>
            <p>{email}</p>
            <p style={{textDecoration: "underline"}}>amount(for addEcoPoints): </p>
            <p>{add_amount}</p>
            <p style={{textDecoration: "underline"}}>amount(for subtractEcoPoints): </p>
            <p>{subtract_amount}</p>
            <p style={{textDecoration: "underline"}}>ecopoints: </p>
            <p>{ecopoints}</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>createToken</p>
            <p style={{textDecoration: "underline"}}>Method Result:</p>
            <p>{createToken(email).toString()}</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>getEcoPoints</p>
            <p style={{textDecoration: "underline"}}>Method Result:</p>
            <p>{getEcoPoints(email)}</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>addEcoPoints</p>
            <p style={{textDecoration: "underline"}}>Method Result:</p>
            <p>{addEcoPoints(email, add_amount)}</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>subtractEcoPoints</p>
            <p style={{textDecoration: "underline"}}>Method Result:</p>
            <p>{subtractEcoPoints(email, subtract_amount)}</p>
            <br></br>

            <p style={{fontWeight: "bold"}}>getDiscount</p>
            <p style={{textDecoration: "underline"}}>Method Result:</p>
            <p>{getDiscount(ecopoints)}</p>
            <br></br>
        </div>
    );
}

export default Test;