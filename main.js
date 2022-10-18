"use strict"

//function displays the coffee name/roast
function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

// THis functions takes the above function and loops through it to add
// all of our coffees to one line of text to place within the section
function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//This is the function that filters through our coffee array in order to match
//the user search input.  It removes content that does not include any of the user input.
function coffeeSearch(){
    let searchTerm = searchInput.value.toLowerCase();
    if (coffeeList === null){
        section.innerHTML = renderCoffees(coffees.filter(coffee => (roastSelection.value === 'all' || coffee.roast === roastSelection.value) && coffee.name.toLowerCase().includes(searchTerm)));
    }
    section.innerHTML = renderCoffees(coffeeList.filter(coffee => (roastSelection.value === 'all' || coffee.roast === roastSelection.value) && coffee.name.toLowerCase().includes(searchTerm)));
}

// This function is used to add user input for a suggested coffee and roast
// and stores it as another variable that can be stored and pushed to our array of coffees.
function addCoffee(){
    const storeCoffee = {
        id : coffees.length + 1,
        name: document.querySelector('#suggestion-name').value,
        roast: document.querySelector('#suggestion-roast').value
    }

    // Sends user input to be stored within the coffee list.
    coffees.push(storeCoffee);

    //local storage accepts a string, so we used the following to convert
    // the user input objects as a string that can be stored locally.  The string is
    //then parsed to store it withing the array of coffees.
    window.localStorage.setItem('userCoffee', JSON.stringify(coffees));
    coffeeSearch(JSON.parse(localStorage.getItem('userCoffee')));

}

//coffee list
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light', },
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


//Sets the parsed item as to the coffeeList in order to display the addition on the page.
const coffeeList = JSON.parse(localStorage.getItem('userCoffee'))

//selectors for buttons, menus and inputs.
let section = document.querySelector('#coffees');
let submitButton = document.querySelector('#button');
let roastSelection = document.querySelector('#roast-selection');
let searchInput = document.querySelector('#coffeeSearch')

// This is our if/else that prevents the page from displaying empty content when the list is defined as null.

if (coffeeList === null) {
    section.innerHTML = renderCoffees(coffees)
} else {
    section.innerHTML = renderCoffees(coffeeList);
}

//clears window on reload
window.onbeforeunload = window.localStorage.clear('userCoffee')

//Event listeners for our search and buttons.

submitButton.addEventListener('click', addCoffee);
searchInput.addEventListener("keyup", coffeeSearch)
roastSelection.addEventListener("change", coffeeSearch);