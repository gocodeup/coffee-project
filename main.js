"use strict"
function renderCoffee(coffee) {
    var html = '<div class="coffee col-6">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeesContainer.innerHTML = renderCoffees(filteredCoffees);
}
function allCoffees(e){
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    if(selectedRoast == 'all'){
        console.log("this function works sort of")
        coffeesContainer.innerHTML = renderCoffees(sortedCoffees);
    }
}

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

var coffeesContainer = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
//  creating sort var to sort coffees in ascending order
var sortedCoffees = coffees.sort((a,b) => (a.id < b.id) ? 1 : -1);
//  creating onSelection var
var onSelect = document.querySelector('.mySelection')
//  replaced param of coffees to sortedCoffees
coffeesContainer.innerHTML = renderCoffees(sortedCoffees);
//  creating listener for dropdown selection
//  w3schools big help on change listener
onSelect.addEventListener('change', updateCoffees);
onSelect.addEventListener('change', allCoffees);
//  var for searchBar Id
var searchBar = document.getElementById('roast-search')
//  creating listener for searchBar
//  utilizing arrow callback function cited: https://www.youtube.com/watch?v=wxz5vJ1BWrc
searchBar.addEventListener('keyup', (e) => {
    //  got target from object keys which has a value property to target
    //  the value of the target; in this case the value of the search bar
    // console.log(e.target.value);
    //  making search and filter case insensitive with .toLowercase()
    var searchStr = e.target.value.toLowerCase();
    // console.log(searchStr);
    var filteredChars = coffees.filter(coffee => {
        return (
            coffee.name.toLowerCase().includes(searchStr) ||
            coffee.roast.toLowerCase().includes(searchStr)
        );
    });
    // console.log(filteredChars);
    // console.log(typeof filteredChars);
    coffeesContainer.innerHTML = renderCoffees(filteredChars);
})

// submitButton.addEventListener('click', updateCoffees);
// submitButton.addEventListener('click', allCoffees);

