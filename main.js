"use strict"

function renderCoffee(coffee) {
    return `
        <div class="coffee">
            <h2>${coffee.name}</h2>
            <p>${coffee.roast}</p>
        </div>
    `;
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
    tbody.innerHTML="";
    const filteredCoffees = [];
    coffees.forEach( coffee => {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
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
coffees.sort((a,b) => b.id- a.id);

// Selects the element with the id ‘coffees’ and assigns it to the variable ‘tbody’
const tbody = document.querySelector('#coffees');
// Selects the element with the id ‘submit’ and assigns it to the variable ‘submitButton’
const submitButton = document.querySelector('#submit');
// Selects the element with the id ‘roast-selection’ from the document
const roastSelection = document.querySelector('#roast-selection');
const coffeeNameInput= document.querySelector('#coffee-name-input')

tbody.innerHTML = " ";
coffees.forEach(function (coffee) {
    tbody.innerHTML += renderCoffee(coffee);
});

submitButton.addEventListener('click', updateCoffees);



// let inputElement = document.querySelector('#coffee-name-input');
// inputElement.addEventListener('keyup', function(event) {
//     let inputValue = event.target.value;
//     console.log(inputValue);
// });

// document.getElementById("coffee-search-form").addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent the form from submitting
//
//     const roastSelection = document.getElementById("roast-selection").value;
//     const searchTerm = document.getElementById("coffee-name-input").value.trim().toLowerCase();
//
//     // Filter the coffees based on roast and name
//     const filteredCoffees = coffees.filter(coffee => {
//         return coffee.roast === roastSelection && coffee.name.toLowerCase().includes(searchTerm);
//     });
//
//     // Display the filtered coffees or do something else with them
//     console.log(filteredCoffees);
// });


coffeeNameInput.addEventListener('input', function () {
    const searchTerm = coffeeNameInput.value.trim().toLowerCase();
    tbody.innerHTML = ''; // Clear previous results
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(searchTerm)) {
            tbody.innerHTML += renderCoffee(coffee);
        }
    });
});