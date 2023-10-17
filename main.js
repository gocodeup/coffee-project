"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee" data-id="${coffee.id}">';
    // html += `<div>${coffee.id}</div>`;
    html += `<div class="coffeeName">${coffee.name}</div>`;
    html += `<div class="coffeeRoast">${coffee.roast}</div>`;
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if (selectedRoast === 'all') {
        filteredCoffees = coffees;
    }
    else {
        coffees.forEach( coffee => {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
    // console.log();
}

//First input form
function myFunction() {
    let input, filter, txtValue, i;
    let filteredCoffees = [];
    // objects = coffees
    input = document.getElementById('searchCoffee');
    // const searchResultsContainer = document.querySelector('#coffees');
    filter = input.value.toUpperCase();


    for (i = 0; i < coffees.length; i++) {
        txtValue = coffees[i].name;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            filteredCoffees.push(coffees[i]);
        }
        tbody.innerHTML = renderCoffees(filteredCoffees);

    }
}






const coffeesDiv = document.querySelector("#coffees");
// const addNewCoffeeObject = {
//     id: coffeesDiv.children.length + 1,
//     name: document.querySelector("#newCoffeeName").value,
//     roast: document.querySelector("#addACoffeeRoast").value,
// }


const addACoffeeSubmitButton=document.querySelector('#submitNewCoffee');

const addCoffeeForm = document.querySelector("#addACoffeeFormWrapper form");

addACoffeeSubmitButton.addEventListener('click', (e) => {
   e.preventDefault();
    const addNewCoffeeObject = {
        id: coffeesDiv.children.length + 1,
        name: document.querySelector("#newCoffeeName").value,
        roast: document.querySelector("#addACoffeeRoast").value,
    }
    coffees.push(addNewCoffeeObject);
    tbody.innerHTML = renderCoffees(coffees);
});


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
    {id: 1, name: 'Light City', roast: 'light', },
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


const tbody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');






tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees, myFunction);

// console.log(coffees.sort());

