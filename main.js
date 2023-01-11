"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee col-6">';
    html += '<td>' + `<h4>` + coffee.name + `</h4>` + '</td>';
    html += '<td>'+`<p style="color: grey">` + coffee.roast +`</p>` + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

let list;
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    if(filteredCoffees.length > 0){
        tbody.innerHTML = renderCoffees(filteredCoffees)
        list=renderCoffees(filteredCoffees);
    } else {
        tbody.innerHTML = renderCoffees(coffees);
    }
}


function updateCoffeesNames(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.name.includes(coffeeInput.value) && coffee.roast === roastSelection.value) {
            selectedCoffees.push(coffee);
        }
        // else if(coffee.name.includes(coffeeInput.value) && coffee.roast !== roastSelection.value) {
        //     selectedCoffees.push("");
        // }
    });

        // if(coffee.name.includes(coffeeInput.value) && coffee.roastAll === roastSelectionAll.value) {
        //     selectedCoffees.push(coffee);
        // }
        tbody.innerHTML = renderCoffees(selectedCoffees)

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light', roastAll: 'all'},
    {id: 2, name: 'Half City', roast: 'light', roastAll: 'all'},
    {id: 3, name: 'Cinnamon', roast: 'light', roastAll: 'all'},
    {id: 4, name: 'City', roast: 'medium', roastAll: 'all'},
    {id: 5, name: 'American', roast: 'medium', roastAll: 'all'},
    {id: 6, name: 'Breakfast', roast: 'medium', roastAll: 'all'},
    {id: 7, name: 'High', roast: 'dark', roastAll: 'all'},
    {id: 8, name: 'Continental', roast: 'dark', roastAll: 'all'},
    {id: 9, name: 'New Orleans', roast: 'dark', roastAll: 'all'},
    {id: 10, name: 'European', roast: 'dark', roastAll: 'all'},
    {id: 11, name: 'Espresso', roast: 'dark', roastAll: 'all'},
    {id: 12, name: 'Viennese', roast: 'dark', roastAll: 'all'},
    {id: 13, name: 'Italian', roast: 'dark', roastAll: 'all'},
    {id: 14, name: 'French', roast: 'dark', roastAll: 'all'},
];

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let roastSelection2 = document.querySelector('#roast-selection2');
let roastSelectionAll = document.querySelector('#roast-selection-all');
let nameInput = document.querySelector('#name-input')
let coffeeInput = document.querySelector('#coffee-name-input');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener(`change`, updateCoffees);
coffeeInput.addEventListener(`keyup`, updateCoffeesNames);


