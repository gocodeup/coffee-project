"use strict"
function renderCoffee(coffee) {
    let html = '<div class="coffee col-6 d-flex align-items-end">';
    html += `<h1 class="coffee-name text-white ">` + coffee.name + `</h1>`;
    html +=  `<p style="color: black">` + coffee.roast + `</p>`;
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

let list;

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    if (filteredCoffees.length > 0) {
        tbody.innerHTML = renderCoffees(filteredCoffees);
        list = renderCoffees(filteredCoffees);
    } else {
        tbody.innerHTML = renderCoffees(coffees);
        list = renderCoffees(coffees);
    }
}


function updateCoffeesNames(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.name).toLowerCase().includes((coffeeInput.value).toLowerCase()) && coffee.roast === roastSelection.value){
            selectedCoffees.push(coffee);
        }
        else if((coffee.name).toLowerCase().includes((coffeeInput.value).toLowerCase()) && coffee.roastAll === roastSelection.value){
            selectedCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(selectedCoffees)
}

function addName(e){
    let addCoffee={};
    addCoffee.name=nameInput.value
    addCoffee.roast=roastSelection2.value
    addCoffee.roastAll=`all`
    coffees.push(addCoffee)
    tbody.innerHTML = renderCoffees(coffees)
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
let coffeeInput = document.querySelector('#coffee-name-input');
let nameInput = document.querySelector('#name-input');
let roastSelection2= document.querySelector('#roast-selection2');
let submitButton2 = document.querySelector('#submit2');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener(`change`, updateCoffees);
coffeeInput.addEventListener(`keyup`, updateCoffeesNames);
submitButton2.addEventListener(`click`, addName)
roastSelection.addEventListener(`change`,changeBg)


