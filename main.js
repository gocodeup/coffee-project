"use strict"

// changes tbody text to read out coffee blends
function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex align-items-center">';
//     html += '<td>' + coffee.id + '</td>';
    html += '<h2 class="name-style my-1 mr-2">' + coffee.name + '</h2>';
    html += '<p class="roast-style align-self-end mb-2">' + coffee.roast.toUpperCase() + '</p>';
    html += '</div>';

    return html;
}

//loops through each blend to add new html for each one to print
function renderCoffees(coffees) {
    var html = '';
    coffees.forEach(function(blend) {
        html += renderCoffee(blend);
    })
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
            if (selectedRoast === 'all' && selectedName === '') {
                filteredCoffees.push(coffee);
                if (coffee.name !== selectedName && selectedName !== '') {
                    filteredCoffees.splice(filteredCoffees.indexOf(coffee), 1);
                }
            } else if (selectedRoast === 'all' && selectedName !== '') {
                filteredCoffees.push(coffee);
                if (coffee.name !== selectedName) {
                    filteredCoffees.splice(filteredCoffees.indexOf(coffee), 1);
                }
            } else if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
                if (coffee.name !== selectedName && selectedName !== '') {
                    filteredCoffees.splice(filteredCoffees.indexOf(coffee), 1);
                }
            }
        tbody.innerHTML = renderCoffees(filteredCoffees);
    });
}

function newButton(e) {
    e.preventDefault();
    var coffeeObject = {
        id: coffees.length +1,
        name: roastName.value,
        roast: roastType.value,
    }
    console.log(coffeeObject);
    coffees.push(coffeeObject);
    renderCoffees(coffees);
    document.getElementById('newForm').reset();
    updateCoffees(e);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'}, //each object is called 'blend'
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
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#coffee-name');
var submitNew = document.querySelector('#submit-new')
var roastType = document.querySelector('#new-roast')
var roastName = document.querySelector('#new-name')


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
nameSelection.addEventListener('keyup', updateCoffees);
submitNew.addEventListener('click', newButton);
