"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee row col-12 col-md-6 flex-md-column flex-xxl-row my-2">';
    html += '<div class="d-none">' + coffee.id + '</div>';
    html += '<div class=""> <h4 class="m-0 col-md-12 col-xxl-0">' + coffee.name + '</h4></div>';
    html += '<div class=""><p class="m-0 col-md-12 col-xxl-0 text-muted">' + coffee.roast + '</p></div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    coffees.sort(function(a, b) {return b.id - a.id;})
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var x = coffeeSearch.value
    var searchedCoffees = []
    for (var i = 0; i<coffees.length; i++) {
        if (coffees[i].name.toLowerCase().indexOf(x.toLowerCase()) >=0)
        {searchedCoffees.push(coffees[i])}
    }

    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if (selectedRoast === 'all') {searchedCoffees.forEach(function(searchedCoffees) {filteredCoffees.push(searchedCoffees)})}
    searchedCoffees.forEach(function(searchedCoffees) {
        if (searchedCoffees.roast === selectedRoast) {
            filteredCoffees.push(searchedCoffees);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// function searchCoffees(x) {
//     x.preventDefault(); // don't submit the form, we just want to update the data
//     var searchRoast = coffeeSearch.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.name == searchRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var x = coffeeSearch.value
    var searchedCoffees = []
    for (var i = 0; i<coffees.length; i++) {
        if (coffees[i].name.toLowerCase().indexOf(x.toLowerCase()) >=0)
        {searchedCoffees.push(coffees[i])}
    }

    var filteredCoffees = []
    var selectedRoast = roastSelection.value;
    if (selectedRoast === 'all') {searchedCoffees.forEach(function(searchedCoffees) {filteredCoffees.push(searchedCoffees)})}
    searchedCoffees.forEach(function(searchedCoffees) {
        if (searchedCoffees.roast === selectedRoast) {
            filteredCoffees.push(searchedCoffees);
        }
    })

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var coffee = {}
    coffee.id = coffees.length+1
    coffee.name = addCoffeeText.value
    coffee.roast = addCoffeeRoast.value
    localStorage.setItem(coffee.id,JSON.stringify(coffee));
    coffees.push(coffee);

    tbody.innerHTML = renderCoffees(coffees);
}

function removeCoffees() {
    localStorage.clear()
    for (var i = 0; coffees.length > 14; i++) {coffees.shift()}

    tbody.innerHTML = renderCoffees(coffees);
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

if (localStorage.length > 0) {
    for (var i = 1; i <= localStorage.length; i++) {
        var retrieved = JSON.parse(localStorage.getItem(coffees.length + 1));
        coffees.push(retrieved);
    }
}

var tbody = document.querySelector('#coffees');
var submitButton = document.getElementById("search");
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#search');
// var searchButton = document.getElementById("coffeeSearchButton") this element was not used because we cross-linked the search function and the roast selection function
var addButton = document.getElementById("addButton")
var addCoffeeText = document.getElementById("addText")
var addCoffeeRoast = document.getElementById("addRoast")
var removeButton = document.getElementById("removeButton")



tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
coffeeSearch.addEventListener('keyup', searchCoffees);
// searchButton.addEventListener('click', searchCoffees)
roastSelection.addEventListener('change', updateCoffees);
addButton.addEventListener('click', addCoffee);
removeButton.addEventListener('click', removeCoffees)