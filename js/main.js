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


function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<div class="coffee-name-font col-6"><h2>' + coffee.name;
    html += ' <small class="coffee-roast-font">' + coffee.roast + '</small></h2></div>';
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
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    if(e === 'all') {
        coffees.forEach(function (coffee) {
            filteredCoffees.push(coffee);
        })
    } else coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(value) {
    var filteredCoffees = [];
    for(var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
            filteredCoffees.push(coffees[i]);
        }
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee() {
    var coffee = {
        id:'',
        name:'',
        roast:'',
    };
    coffee.id = coffees.length + 1;
    var tempName = document.getElementById('add-coffee-name').value;
    coffee.name = formatNewCoffee(tempName);
    coffee.roast = document.getElementById('add-coffee-roast-select').value;
    coffees.push(coffee);
    // var insertAtIndex = coffees.lastIndexOf(coffee.roast);
    // coffees.splice(insertAtIndex, 0, coffee);
    arrangeCoffee();
    tbody.innerHTML = renderCoffees(coffees);
}

function arrangeCoffee() {
    coffees.sort(function(a, b) {
        return a.id - b.id
    });
    coffees.reverse();
}

function formatNewCoffee(input) {
    return input.replace(/\b\w/g, function(letter) {
        return letter.toUpperCase()
    })
}

coffees.reverse();
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
