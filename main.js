"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee col-6 mt-2">';
    html += '<span class="fontSizeCoffee">' + coffee.name + '</span>';
    html += '<span class="roastFont ml-2">' + coffee.roast + '</span>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    html = "<div class='row'>";
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    html += "</div>";
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
         if (coffee.name.toLowerCase().indexOf(selectedName.toLowerCase()) > -1 &&
             (coffee.roast === selectedRoast || selectedRoast === 'all')) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function resetCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().indexOf(selectedName.toLowerCase()) > -1 &&
            (coffee.roast === selectedRoast || selectedRoast === 'all')) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    document.getElementById('coffeeSearch').reset();
}

function createCoffee(e) {
    e.preventDefault();
    var newCoffee = {};
    newCoffee.id = coffees.length + 1;
    newCoffee.name = coffeeName.value;
    newCoffee.roast = coffeeRoast.value;
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
    document.getElementById('coffeeCreation').reset();
}

function deleteCoffee(e) {
    e.preventDefault();
    var newCoffees = [];
    var coffeeToDelete = deleteName.value;
    coffees.forEach(function (coffee) {
        if (coffee.name !== coffeeToDelete){
            newCoffees.push(coffee);
        }
    });
    coffees = newCoffees;
    tbody.innerHTML = renderCoffees(coffees);
    document.getElementById('coffeeSearch').reset();
    var form = document.getElementById("coffeeDelete");
    form.reset();
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
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#coffeeName');
var coffeeRoast = document.querySelector('#roast-creation');
var coffeeName = document.querySelector('#coffeeCreateName');
var submitCreate = document.querySelector('#submitCreate');
var submitDelete = document.querySelector('#submitDelete');
var deleteName = document.querySelector('#coffeeDeleteName');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
nameSelection.addEventListener('input', updateCoffees);
roastSelection.addEventListener('input', updateCoffees);
submitCreate.addEventListener('click', createCoffee);
submitButton.addEventListener('click', resetCoffee);
submitDelete.addEventListener('click', deleteCoffee);







