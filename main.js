"use strict";

function renderCoffee(coffee) {
    var html = '<div class="col-12 col-lg-6 col-xl-6 fontChange">';
    html += '<h2 style="display: inline-block">' + coffee.name + '</h2>' + "&nbsp";
    html += '<p style="display: inline-block">' + coffee.roast + '</p>';
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

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var searched = coffeeSearch.value;
    var searchedCoffees = [];
    if (roastSelection.value === 'all') {
        coffees.forEach(function (coffee) {
            filteredCoffees.push(coffee);
        });
    }
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });


    if (searched) {
        var display;

        function already(obj) {
            searchedCoffees.forEach(function (coffee) {
                if (obj === coffee) {
                    return true;
                }
            });
            return false;
        }

        filteredCoffees.forEach(function (coffee) {
            display = coffee.name.toLowerCase().includes(searched.toLowerCase());
            if (display && !already(coffee)) {
                searchedCoffees.push(coffee);
            }
        });

        tbody.innerHTML = renderCoffees(searchedCoffees);
    } else {
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

function newCoffee() {
    var newRoast = document.getElementById('add-roast').value;
    var newName = document.getElementById('name-coffee').value;
    var newCoffee = {
        id: "",
        name: newName,
        roast: newRoast
    };
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].roast === newRoast) {
            coffees.splice(i, 0, newCoffee);
            break;
        }
    }
    coffees.forEach(function (coffee, index) {
        coffee.id = index;
    });
    localStorage.clear();
    localStorage.setItem("coffee", JSON.stringify(coffees));
    location.reload();
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
if (localStorage.length === 2) {
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
} else {
    coffees = JSON.parse(window.localStorage.getItem("coffee"));
}


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-search');
var addCoffee = document.querySelector('#add-coffee');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
coffeeSearch.addEventListener('input', updateCoffees);
addCoffee.addEventListener('click', newCoffee);