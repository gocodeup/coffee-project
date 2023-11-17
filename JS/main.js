"use strict"

function renderCoffee(coffee) {
    let html = '<tr class="coffee">';
    html += `<td>${coffee.id}</td>`;
    html += `<td>${coffee.name}</td>`;
    html += `<td>${coffee.roast}</td>`;
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

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
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


const searchBar = document.getElementById("coffee-name");

searchBar.addEventListener("keyup", function () {
    const searchTerm = this.value;
    const resultsList = [];

    for (const coffee of coffees) {
        if (coffee.name.includes(searchTerm)) {
            resultsList.push(coffee);
        }
    }
    for (const result of resultsList) {
        const listItem = document.createElement("li");
        listItem.textContent = result.name;
    }
    tbody.innerHTML = renderCoffees(resultsList);

});

// main.js

// Function to add a new coffee
function addNewCoffee() {
    // Get input values
    const newCoffeeName = document.getElementById('newCoffeeName').value;
    const newCoffeeRoast = document.getElementById('newCoffeeRoast').value;

    // Validate input values
    if (newCoffeeName === "" || newCoffeeRoast === "") {
        alert("Please enter both coffee name and roast type.");
        return;
    }

    // Create a new row for the table
    const newRow = document.createElement('tr');

    // Create cells for the new row
    const idCell = document.createElement('td');
    const nameCell = document.createElement('td');
    const roastCell = document.createElement('td');

    // Set values for the cells
    idCell.textContent = "";  // You may generate a unique ID dynamically
    nameCell.textContent = newCoffeeName;
    roastCell.textContent = newCoffeeRoast;

    // Append cells to the new row
    newRow.appendChild(idCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(roastCell);

    // Append the new row to the table body
    document.getElementById('coffees').appendChild(newRow);

    // Clear input fields
    document.getElementById('newCoffeeName').value = "";
    document.getElementById('newCoffeeRoast').value = "";
}


const tbody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

