"use strict";
var coffees = [{
    id: 1,
    name: 'Light City',
    roast: 'light'
}, {
    id: 2,
    name: 'Half City',
    roast: 'light'
}, {
    id: 3,
    name: 'Cinnamon',
    roast: 'light'
}, {
    id: 4,
    name: 'City',
    roast: 'medium'
}, {
    id: 5,
    name: 'American',
    roast: 'medium'
}, {
    id: 6,
    name: 'Breakfast',
    roast: 'medium'
}, {
    id: 7,
    name: 'High',
    roast: 'dark'
}, {
    id: 8,
    name: 'Continental',
    roast: 'dark'
}, {
    id: 9,
    name: 'New Orleans',
    roast: 'dark'
}, {
    id: 10,
    name: 'European',
    roast: 'dark'
}, {
    id: 11,
    name: 'Espresso',
    roast: 'dark'
}, {
    id: 12,
    name: 'Viennese',
    roast: 'dark'
}, {
    id: 13,
    name: 'Italian',
    roast: 'dark'
}, {
    id: 14,
    name: 'French',
    roast: 'dark'
}];

function renderCoffee(coffee) {
    var html = '';
    html += '<div class="col s6"><h5 class="coffee-name">' + coffee.name;
    html += ' <small class="coffee-roast">' + coffee.roast + '</small></h5></div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '<div>';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
        html += '</div>'
    }
    return html;
}

function updateCoffees(e) {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if (e === 'all') {
        coffees.forEach(function (coffee) {
            filteredCoffees.push(coffee);
        })
    } else coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    content.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(value) {
    var filteredCoffees = [];
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
            filteredCoffees.push(coffees[i]);
        }
    }
    content.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee() {
    var coffee = {
        id: '',
        name: '',
        roast: ''
    };
    var temp = document.getElementById('add-coffee-name').value;
    coffee.id = coffees.length + 1;
    coffee.name = formatNewCoffee(temp);
    coffee.roast = document.getElementById('add-coffee-roast-select').value;
    coffees.push(coffee);
    arrangeCoffees();
    showAllCoffees();
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
function arrangeCoffees() {
    coffees.sort(function (a, b) {
        return a.id - b.id
    });
    coffees.reverse();
}

function formatNewCoffee(input) {
    return input.replace(/\b\w/g, function (letter) {
        return letter.toUpperCase()
    })
}

function showAllCoffees() {
    content.innerHTML = renderCoffees(coffees);
}

var content = document.getElementById('coffees');
var roastSelection = document.getElementById('roast-selection');
coffees.reverse();
showAllCoffees();
