/*

The functions in this file are to be implemented by Aryan Kashyap

Run the project by executing "npm start" in the terminal
Ctrl-C to terminate the project

Go to http://localhost:3000/test to test out the functions
The parameters can be edited in pages/Test.js

Start by creating a new branch called "restaurant-data-dev"
Commit often, and add concise, professional commit messages
They should have all "important" words capitalized, such as the following:
"Implemented the getData Function"

To start, create a MongoDB database to hold the restaurants
Populate it with 2-3 restaurants manually

Each restaurant should have the following attributes:
Name
Address
Menu

The Menu should have a list of items
Populate it with 4-5 items manually

Each item should have the following attributes:
Name
Cost
Time
EcoScore

The EcoScore is a measure of how environmentally favorable an item is
It is an integer between 0-100, 0 being the worst and 100 being the best
Decide the score based on ingredients used to make the item along with the processes required to make them(i.e. grill, oven)

Specific instructions detailing what each function does can be found above the function
Delete them after completing the corresponding function

Delete this message after the work is done, just before merging

Have fun!

*/

// This function will return a string array of all the restaurants represented as such: "[Name] - [Address]"
function getRestaurants()
{
    return ["N/A"];
}

// This function will return an object array with the items in the menu of a restaurant, given the restaurant's string form
function getMenu(restaurant)
{
    return [{name: "N/A", cost: 0, time: 0, ecoscore: 0}];
}

// This function will return the price of an order, given an object array of the items
function getOrderPrice(order)
{
    return 0.00;
}

// This function will calculate the delivery fee, given the current address and the restaurant address
function getDeliveryFee(currentAddress, restaurantAddress)
{
    return 0.00;
}

// This function will return the delivery time in minutes, given the current address, restaurant address, and an object array of ordered items
// https://developers.google.com/maps/documentation/directions
function getDeliveryTime(currentAddress, restaurantAddress, order)
{
    return 0;
}

// This function will return a cumulative EcoScore for the order, from 1-100, given the current address, restaurant address, and an object array of ordered items
// Weight more expensive items higher, and factor in energy it takes to drive from the restaurant to the destination
function getOrderEcoScore(currentAddress, restaurantAddress, order)
{
    return 0;
}

// Given the EcoScore and total price of an order, return how many EcoPoints(integer) should be awarded(EcoScore% of the price)
function getEcoPoints(ecoscore, price)
{
    return 0;
}

// Given an amount of EcoPoints, return the equivalent value in USD(Multiply by 0.025)
function getDiscount(ecopoints)
{
    return 0.00;
}

export { getRestaurants, getMenu, getOrderPrice, getDeliveryFee, getDeliveryTime, getOrderEcoScore, getEcoPoints, getDiscount };