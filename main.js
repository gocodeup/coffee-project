"use strict"


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

/*
    Uses Javascript filter function to take in a desired roast and compare it to all items in the Coffee Array
    Input: desiredRoast - String: complete string to search the array element's ["roast"] for
    Return: filteredCoffee - Array: Returns a new array of all items matching this roast
*/
function filterByRoast(desiredRoast){
    let filteredCoffee = coffees.filter(function(element){return element.roast.toLowerCase() == desiredRoast.toLowerCase()});

    return filteredCoffee;
}

/*
    Uses Javascript filter function to take in a desired name and compare it to all items in the Coffee Array
    Input: desiredName - String: String to search the array element's ["name"] for
    Return: filteredCoffee - Array: Returns a new array of all items matching this name
*/
function filterByName(desiredName){
    let filteredCoffee = coffees.filter(function(element){return element.name.toLowerCase() == desiredName.toLowerCase()});

    return filteredCoffee;
}


/*
    The defualt state showing all Coffee Roasts and Names
*/
function defaultState(){
    // Instead of making 3 arrays, assigning it to the results of filterByRoast(type)- just go it inline and combine into a brand new array of all roast types 
    let allRoasts = filterByRoast('light').concat(filterByRoast('medium')).concat(filterByRoast('dark'));

    allRoasts.forEach(function(element){
        coffeeName.innerHTML += element.name + "<br>";
        coffeeRoast.innerHTML += element.roast + "<br>";});
}

function partialFilterName(input){
    let sorted = []
    for( let j=0; j<coffees.length; j++){
        if(input in coffees[j].name){
            sorted.push(coffees[j])
        }
    }
    return sorted;
}

console.log(partialFilterName('Cinn'));