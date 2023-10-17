"use strict"

// Function to generate HTML for a single coffee entry
function renderCoffee(coffee) {
    return `
        <div class="coffee">
            <h2>${coffee.name}</h2>
            <p>${coffee.roast}</p>
        </div>
    `;
}

// Function to generate HTML for a list of coffees
function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// Function to update the displayed coffees based on the selected roast level
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
    tbody.innerHTML="";
    let filteredCoffees = [];
    if (selectedRoast === 'all') {
       filteredCoffees= coffees;
    } else {
      filteredCoffees = [];

    coffees.forEach( coffee => {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// Data representing different coffee types
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
coffeeNameInput.addEventListener('input', function () {
    const searchTerm = coffeeNameInput.value.trim().toLowerCase();
    tbody.innerHTML = ''; // Clear previous results
    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(searchTerm)) {
            tbody.innerHTML += renderCoffee(coffee);
        }
    });
});

const addCoffeeForm = document.querySelector('#submit2');
addCoffeeForm.addEventListener('click', event => {
    event.preventDefault(); // Prevent the form from submitting

    // console.log(event.target.parentElement.parentElement.parentElement);
    const addCoffeeForm = event.target.parentElement.parentElement.parentElement;
    const roastSelection = addCoffeeForm[0].value;
    const coffeeName = addCoffeeForm[1].value;
    console.log(roastSelection + coffeeName);
    const newCoffee = {
        id: coffees.length + 1,
        name: coffeeName,
        roast: roastSelection
    };
    //
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
});