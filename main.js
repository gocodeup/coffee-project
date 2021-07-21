"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';

    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) { //updates renderCoffees to just show the ones matching the submitted roast
    e.preventDefault();
    var selectedRoast = roastSearch.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast || coffee.all === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    console.log(tbody)
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', all: 'all'},
    {id: 2, name: 'Half City', roast: 'light', all: 'all'},
    {id: 3, name: 'Cinnamon', roast: 'light', all: 'all'},
    {id: 4, name: 'City', roast: 'medium', all: 'all'},
    {id: 5, name: 'American', roast: 'medium', all: 'all'},
    {id: 6, name: 'Breakfast', roast: 'medium', all: 'all'},
    {id: 7, name: 'High', roast: 'dark', all: 'all'},
    {id: 8, name: 'Continental', roast: 'dark', all: 'all'},
    {id: 9, name: 'New Orleans', roast: 'dark', all: 'all'},
    {id: 10, name: 'European', roast: 'dark', all: 'all'},
    {id: 11, name: 'Espresso', roast: 'dark', all: 'all'},
    {id: 12, name: 'Viennese', roast: 'dark', all: 'all'},
    {id: 13, name: 'Italian', roast: 'dark', all: 'all'},
    {id: 14, name: 'French', roast: 'dark', all: 'all'},
];

function coffeeLoop(e) {
    e.preventDefault(); // updates renderCoffees as we type
    //keeps page from refreshing after submitting (by default)
    var coffeeSearch = searchBar.value.toLowerCase();
    var filteredCoffeeNames = [];
    for (var i = 0; i < coffees.length; i++) {
        var coffeeName = coffees[i].name;
        if (coffeeName.toLowerCase().indexOf(coffeeSearch) >= 0) {
            //happy path, indexOf will return number above or equal to 0 if the typed input exists in any of the coffee names
            filteredCoffeeNames.push(coffees[i]);
            //pushes coffee names into filteredCoffeeNames if condition is met
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffeeNames);
}

function addCoffee(e){
    e.preventDefault()
    var addCoffee = {
        id: coffees.length + 1,
        name: addCoffeeName.value,
        roast: addCoffeeRoast.value,
        all: 'all'
    }

    coffees.push(addCoffee)

    tbody.innerHTML = renderCoffees(coffees);
}

//RENDER COFFEES (ON PAGE LOAD)
var tbody = document.querySelector('#coffees');

tbody.innerHTML = renderCoffees(coffees);

//SEARCH COFFEES
var searchBar = document.querySelector('#name-search');
var roastSearch = document.querySelector('#roast-search');
var submitSearch = document.querySelector('#search');

searchBar.addEventListener('keyup', coffeeLoop); //filters as you type
submitSearch.addEventListener('click', updateCoffees); //retreats to show all matching roasts if search query isn't found

//ADD COFFEES
var addCoffeeName = document.querySelector('#name-add');
var addCoffeeRoast = document.querySelector('#roast-add');
var submitAdd = document.querySelector('#add');

submitAdd.addEventListener('click', addCoffee)