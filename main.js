"use strict"

function renderCoffee(coffee) {
    var html = '<div class="col-lg-6">';
    html += '<h3>'+coffee.name+'<small> '+coffee.roast+'</small></h3>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees, isOnStart) {
    if(isOnStart) {
        repopCoffees();
    }
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function repopCoffees() {
    coffees = [];
    var myStorage = window.localStorage;
    var lengthOfCoffees = parseInt(myStorage.getItem("coffee-length"));
    for(var i = 0; i < lengthOfCoffees; i++) {
        coffees.push(JSON.parse(myStorage.getItem(i.toString())));
    }
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if(selectedRoast !== "All") {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(nameSearch.value.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        });
    } else {
        coffees.forEach(function(coffee) {
           if(coffee.name.toLowerCase().includes(nameSearch.value.toLowerCase())) {
               filteredCoffees.push(coffee);
           }
        });
    }
    console.log(filteredCoffees);
    tbody.innerHTML = renderCoffees(filteredCoffees, false);
}

function addCoffee(e) {
    e.preventDefault();
    var newName = addName.value;
    var newRoast = addRoast.value;
    if(newName !== "") {
        var newId = coffees.length+1;
        var newCoffee = {
            id: newId,
            name: newName,
            roast: newRoast
        }
        coffees.push(newCoffee);
    }
    console.log(coffees);
    updateStorage();
    updateCoffees(e);
}

function updateStorage() {
    var myStorage = window.localStorage;
    coffees.forEach(function(element, index, array) {
        myStorage.setItem(index.toString(),JSON.stringify(element));
    });
    myStorage.setItem("coffee-length",coffees.length.toString());
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

if(!window.localStorage.getItem("coffee-length")) {
    updateStorage();
} else {
    repopCoffees();
}

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSearch = document.querySelector('#search-text');
var addRoast = document.querySelector('#roast-selection2');
var addName = document.querySelector('#coffee-text');
var addButton = document.querySelector('#add-submit');

var roastDRB = document.getElementById("roast-selection");
roastDRB.addEventListener('change', updateCoffees);

var nameSRC = document.getElementById("search-text");
nameSRC.addEventListener('input', updateCoffees);

tbody.innerHTML = renderCoffees(coffees, true);

submitButton.addEventListener('click', updateCoffees);
addButton.addEventListener('click', addCoffee)
