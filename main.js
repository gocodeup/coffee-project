
"use strict";

// Coffee data
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
    // Add more coffee items here
];

// DOM elements
const tbody = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');

// Render a single coffee item
function renderCoffee(coffee) {
    return `
        <tr class="coffee">
            <td>${coffee.id}</td>
            <td>${coffee.name}</td>
            <td>${coffee.roast}</td>
        </tr>
    `;
}

// Render a list of coffee items
function renderCoffees(coffees) {
    return coffees.map(renderCoffee).join('');
}

// Update the displayed coffee list
function updateCoffees(e) {
    e.preventDefault(); // Prevent form submission
    const selectedRoast = roastSelection.value;
    const filteredCoffees = coffees.filter((coffee) => coffee.roast === selectedRoast);
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// Initial rendering of all coffees
tbody.innerHTML = renderCoffees(coffees);

// Add event listener to the submit button
submitButton.addEventListener('click', updateCoffees);

