"use strict";

function renderCoffee(coffee) {
    var html = '<div class="col-md-5" id="coffees">';
    // html += '<li>' + coffee.id + '</li>';
    html += '<span id="coffeeNames">' + coffee.name + '</span>' + ' : ' + '<span id="cofferoast">' + coffee.roast + '</span>';
    // html += '<div>' + coffee.roast + '</div>';
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
    var selectedRoast2 = input1;
    var coffeeName = input2;
    var filteredCoffees = [];
    if(selectedRoast2.value === 'light' && input2.value !== ''){
        coffees.push({name: document.getElementById('coffeeName').value, roast: selectedRoast2.value});
        coffeeName.value = '';
    } else if(selectedRoast2.value === 'medium' && input2.value !== ''){
        coffees.push({name: document.getElementById('coffeeName').value, roast: selectedRoast2.value});
        coffeeName.value = '';
    } else if(selectedRoast2.value === 'dark' && input2.value !== ''){
        coffees.push({name: document.getElementById('coffeeName').value, roast: selectedRoast2.value});
        coffeeName.value = '';
    }

    coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            } else if (document.getElementById('roast-selection').value === 'name') {
                filteredCoffees.push(coffee);
            }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitButton2 = document.querySelector('#submit2');
var roastSelection = document.querySelector('#roast-selection');
var input1 = document.querySelector('#roast-selection2');
var input2 = document.querySelector('#coffeeName');

tbody.innerHTML = renderCoffees(coffees.reverse());

submitButton.addEventListener('click', updateCoffees);

submitButton2.addEventListener('click', updateCoffees);



