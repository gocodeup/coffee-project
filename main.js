"use strict"

function renderCoffee(coffee) {
    // var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';
    //refactored table
    var html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    // for(var i = coffees.length -1; i >= 0; i--) {
    //     html += renderCoffee(coffees[i]);
    // }
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast || coffee.all === selectedRoast) {
            filteredCoffees.push(coffee);
        // } else if (coffee.roast !== selectedRoast){
            // filteredCoffees.push(coffee);

        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);

}

function updateCoffees1(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection1.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody1.innerHTML = renderCoffees(filteredCoffees);

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

var searchBar = document.querySelector('#search');

function coffeeLoop(event) {
    event.preventDefault(); // don't submit the form, we just want to update the data
    //keeps page from refreshing after submitting (by default)
    var coffeeSearch = searchBar.value.toLowerCase();
    var filteredCoffeeNames = [];
    for (var i = 0; i < coffees.length; i++) {
        var coffeeName = coffees[i].name;
        if (coffeeName.toLowerCase().indexOf(coffeeSearch) >= 0) {
            //happy path, indexOf will return number above or equal to 0 if the typed input exists in any of the coffee names
            filteredCoffeeNames.push(coffees[i]);
            //pushes coffee names into filteredCoffeeNames is condition is met
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffeeNames);
    tbody1.innerHTML = renderCoffees(filteredCoffeeNames);
}

var searchBar1 = document.querySelector('#search1');

function coffeeLoop1(event) {
    event.preventDefault(); // don't submit the form, we just want to update the data
    //keeps page from refreshing after submitting (by default)
    var coffeeSearch = searchBar1.value.toLowerCase();
    var filteredCoffeeNames = [];
    for (var i = 0; i < coffees.length; i++) {
        var coffeeName = coffees[i].name;
        if (coffeeName.toLowerCase().indexOf(coffeeSearch) >= 0) {
            //happy path, indexOf will return number above or equal to 0 if the typed input exists in any of the coffee names
            filteredCoffeeNames.push(coffees[i]);
            //pushes coffee names into filteredCoffeeNames is condition is met
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffeeNames);
    tbody1.innerHTML = renderCoffees(filteredCoffeeNames);
}

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

var tbody1 = document.querySelector('#coffees1');
var submitButton1 = document.querySelector('#submit1');
var roastSelection1 = document.querySelector('#roast-selection1');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButton1.addEventListener('click', updateCoffees1);
searchBar.addEventListener('keyup', coffeeLoop);
searchBar1.addEventListener('keyup', coffeeLoop1);
