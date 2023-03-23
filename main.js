"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<div><h2>' + coffee.name + '</div></h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
}

// 3rd TODO: instead of rendering all of the coffees we need to grab the value from the
// search bar and "filter" the coffee that we render
// const searchBar = document.querySelector('#search')
// const searchTerm = searchBar.value;

//No filter the coffees based off of the value
// Use this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// just copy the example and paste below
// so use the include methond?
// const result = coffees.filter(singleCoffee => singleCoffee.value.includes());// Im looking at examples right now ;If I was a junior at your level
// I would look up "How to check if string is inside of string js"
//                                              ^ Now write and expression that returns true if that coffee
// console.log(result);

let userInput = document.getElementById("search");

userInput.addEventListener('keyup', function () {
    let searchBoxInput = userInput.value.toLowerCase(); // convert searchBoxInput to lowercase
    let filteredCoffees = [];
    for(let i = 0; i < coffees.length; i++){
        if(coffees[i].name.toLowerCase().includes(searchBoxInput)) // convert coffee name to lowercase and compare
            filteredCoffees.push(coffees[i])
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
})
//                   ^ We are rendering coffee here


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
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


// 1st TODO: You need to make a querySelector for getting the search bar.

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);


// 2nd TODO: You need to create and event listener that listens for when
// --> the user has put something in the search bar.
roastSelection.addEventListener('input', updateCoffees)
searchBar.addEventListener('input', updateCoffees)
submitButton.addEventListener('click', updateCoffees);

