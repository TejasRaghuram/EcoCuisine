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
You can see the messages of existing commits for more examples

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
    //needs to get restraunts

    return ["N/A"];
}

// This function will return an object array with the items in the menu of a restaurant, given the restaurant's string form
function getMenu(restaurant)
{
    //needs to get menu

    return [{name: "N/A", cost: 0, time: 0, ecoscore: 0}];
}

function getRLat(restaurantName)
{
    //getLat from name
    return 0;
}

function getRLon(restaurantName)
{
    //getLon from name
    return 0;
}

// This function will return the price of an order, given an object array of the items
function getOrderPrice(order)
{
    var sumOfPrice = 0;
    for (let i = 0; i < order.length; i++) { 
        sumOfPrice += order[i].cost;
    }
    return sumOfPrice;
}

// This function will calculate the delivery fee, given the current address and the restaurant address
function getDeliveryFee(currentAddress, restaurantLat, restaurantLon)
{
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      
      var lat;
      var lon;

      function success(pos) {
        const crd = pos.coords;
      
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        lat = crd.latitude;
        lon = crd.longitude;

 
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      function calculateDistance(lat1, lon1, lat2, lon2) {
        // Radius of the Earth in kilometers
        const R = 6371;
    
        // Convert latitude and longitude from degrees to radians
        const lat1Rad = toRadians(lat1);
        const lon1Rad = toRadians(lon1);
        const lat2Rad = toRadians(lat2);
        const lon2Rad = toRadians(lon2);
    
        // Differences in coordinates
        const dLat = lat2Rad - lat1Rad;
        const dLon = lon2Rad - lon1Rad;
    
        // Haversine formula
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
        // Distance in kilometers
        const distance = R * c;
        
        return distance;
    }
    
    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
    
    if (lat == null)
    {
        lat = 40.343990;
    }

    if (lon == null)
    {
        lon = -74.651451;
    }

    const dd = calculateDistance(lat, lon, restaurantLat, restaurantLon)
    return dd * .5;
 

    
}

// This function will return the delivery time in minutes, given the current address, restaurant address, and an object array of ordered items
// https://developers.google.com/maps/documentation/directions
function getDeliveryTime(currentAddress, restaurantLat, restaurantLon, order)
{
    var sumOfTime = 0;
    for (let i = 0; i < order.length; i++) { 
        sumOfTime += order[i].time;
    }

    sumOfTime += ((getDeliveryFee(currentAddress, restaurantLat, restaurantLon))/.5)*2;

    return sumOfTime;
}

// This function will return a cumulative EcoScore for the order, from 1-100, given the current address, restaurant address, and an object array of ordered items
// Weight more expensive items higher, and factor in energy it takes to drive from the restaurant to the destination
function getOrderEcoScore(currentAddress, restaurantLat, restaurantLon, order)
{
    const costWeight = 0.5; // Adjust this to reflect the importance of cost
    const timeWeight = 0.5; // Adjust this to reflect the importance of time
  
    // Normalize cost and time values to a scale of 0 to 1
    const normalizedCost = (getOrderPrice(order) + getDeliveryFee(currentAddress, restaurantLat, restaurantLon)) / 100; // Assuming cost is on a scale of 0 to 100
    const normalizedTime = getDeliveryTime(currentAddress, restaurantLat, restaurantLon, order) / 60; // Assuming time is in minutes and on a scale of 0 to 60
  
    const weightedAverage = (costWeight * normalizedCost) + (timeWeight * normalizedTime);
  
    const rank = Math.round(weightedAverage * 100);

    return Math.min(100, Math.max(1, rank));

}

// Given the EcoScore and total price of an order, return how many EcoPoints(integer) should be awarded(EcoScore% of the price)
function getAwardedEcoPoints(ecoscore, price)
{
    return ((ecoscore/100)*price);
}

export { getRestaurants, getMenu, getOrderPrice, getDeliveryFee, getDeliveryTime, getOrderEcoScore, getAwardedEcoPoints };