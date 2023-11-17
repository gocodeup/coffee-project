"use strict";

// Function to render a single coffee as an HTML table row
//REPLACING TABLE DATA WITH DIVS
function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += `<div style="font-size: 20px">${coffee.name}</div>`;
    html += `<div>${coffee.roast}</div>`;
    html += '</div>';
    return html;
}

// Function to render an array of coffees as HTML table rows
function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// Function to update the displayed coffees based on the selected roast
function updateCoffees(e) {
    e.preventDefault(); // prevent the form from submitting to backend api
    const selectedRoast = roastSelection.value;
    const filteredCoffees = [];
    // Filter coffees based on the selected roast
    coffees.forEach(coffee => {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    // Updates the HTML content of tbody with the filtered coffees
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// Array of coffee objects
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

// Get references to HTML elementsGETTING REAL DUMB
const tbody = document.querySelector('#coffees');
const submitButton = document.getElementsByClassName('submit');
const roastSelection = document.querySelector('#roast-selection');

// Initial rendering of all coffees
tbody.innerHTML = renderCoffees(coffees);

// Add event listener to the submit button to update coffees on click
submitButton.addEventListener('click', updateCoffees);



/*----------------------------------------------------------------------------------------------- ORIGINAL -----------*/
// "use strict"
//
// function renderCoffee(coffee) {
//     let html = '<tr class="coffee">';
//     html += `<td>${coffee.id}</td>`;
//     html += `<td>${coffee.name}</td>`;
//     html += `<td>${coffee.roast}</td>`;
//     html += '</tr>';
//
//     return html;
// }
//
// function renderCoffees(coffees) {
//     let html = '';
//     for(let i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     const selectedRoast = roastSelection.value;
//     const filteredCoffees = [];
//     coffees.forEach( coffee => {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// const coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
// const tbody = document.querySelector('#coffees');
// const submitButton = document.querySelector('#submit');
// const roastSelection = document.querySelector('#roast-selection');
//
// tbody.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);
