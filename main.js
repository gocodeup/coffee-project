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

function renderResults(results){
    results.forEach(function(element){
        coffeeName.innerHTML += element.name + "<br>";
        coffeeRoast.innerHTML += element.roast + "<br>";});
}


/*
    The default state showing all Coffee Roasts and Names
*/
function defaultState(){
    renderResults(coffees);
}

/*
    Sorts through all the coffee names to try and find a match for however number of letters given
    Input: 
*/
function partialFilterName(searchString){
    if(searchString){
        let results = [];
        for(let i=0; i<coffees.length; i++){
            if(coffees[i].name.toLowerCase().slice(0,searchString.length)==searchString.toLowerCase()){
                results.push(coffees[i]);
            }
        }
        return results;
    }
}

coffeeSearch.addEventListener('input', partialFilterName(coffeeSearch.value))

defaultState();