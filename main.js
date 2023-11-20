"use strict"

// ALL I DID TO THIS FUNCTION WAS CHANGE THE tr TO A div AND THE td's TO p TAGS.
// Given functions

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += `<h5>${coffee.name}</h5>`;
    html += `<p>${coffee.roast}</p>`;
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

// Filter function with slight adjustments

function updateCoffees() {
    const selectedRoast = roastSelection.value.toLowerCase();
    const searchTerm = userTexts.value.trim().toLowerCase();

    const filteredCoffees = coffees.filter(coffee => {
        const matchesRoast = coffee.roast.toLowerCase() === selectedRoast || selectedRoast === 'all';
        const matchesSearch = coffee.name.toLowerCase().includes(searchTerm);
        return matchesRoast && matchesSearch;
    });

    coffeesList.innerHTML = renderCoffees(filteredCoffees);
}

// The provided coffee data
const coffees = [
    { id: 1, name: 'Light City', roast: 'light' },
    // ... (other coffee objects)
    { id: 14, name: 'French', roast: 'dark' },
];

// Variable targeting the #coffees div
const coffeesList = document.querySelector('#coffees');
const roastSelection = document.querySelector('#roast-selection');
const userTexts = document.querySelector('#userText');

// Initial rendering of all coffees
coffeesList.innerHTML = renderCoffees(coffees);

// Event listeners for filtering coffees

userTexts.addEventListener('input', updateCoffees); // Real-time filtering while typing
roastSelection.addEventListener('change', updateCoffees); // On roast selection change
