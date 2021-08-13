"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee card col-6 p-2">';
    html += '<div class="id d-none">' + coffee.id + '</div>';
    html += '<h4 class="card-header p-0">' + coffee.name + '</h4>';
    html += '<p class="card-text">' + coffee.roast + '</p>';
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
    var selectedCoffee = coffeeSelection.value;
    var filteredCoffees = [];
    if (selectedRoast === 'All') {
        coffees.forEach(function (coffee){
            if(coffee.name.toLowerCase().indexOf(selectedCoffee.toLowerCase())!== -1){
                filteredCoffees.push(coffee);
            }
        });
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast && coffee.name.toLowerCase().indexOf(selectedCoffee.toLowerCase()) !== -1) {
                filteredCoffees.push(coffee);
            }

        });
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(x) {
    x.preventDefault();
    var createCoffee = {
        id: coffees.length + 1,
        name: newCoffee.value,
        roast: anotherRoast.value,
    }
    coffees.push(createCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

// function storageInputs() {
//     localStorage.setItem('textinput', createCoffee.name)
//     var storedInput = localStorage.getItem('textinput')
// }


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
coffees.reverse();

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var anotherRoast = document.querySelector('#another-roast');
var newCoffee = document.querySelector('#new-coffee');
var submitTwo = document.querySelector('#submitAlso');
var coffeeSelection = document.querySelector('#coffee-selection')

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitTwo.addEventListener('click', addCoffee);
coffeeSelection.addEventListener('input', updateCoffees);
roastSelection.addEventListener('input', updateCoffees);
