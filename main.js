"use strict"

// ALL I DID TO THIS FUNCTION WAS CHANGE THE tr TO A div AND THE td's TO p TAGS.
function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += `<p>${coffee.id}</p>`;
    html += `<p>${coffee.name}</p>`;
    html += `<p>${coffee.roast}</p>`;
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

// THE ONLY MODIFICATION TO THIS FUNCTION WAS THE VARIABLE NAME
// ON LINE 33 (CHANGED FROM tbody TO coffeesList)
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value.toLowerCase();
    const searchTerm = userTexts.value.trim().toLowerCase();
    console.log('Selected Roast:', selectedRoast);
    console.log('Search Term:', searchTerm);

    const filteredCoffees = [];
    coffees.forEach( coffee => {
        console.log('Coffee Roast:', coffee.roast.toLowerCase());
        console.log('Coffee Name:', coffee.name.toLowerCase());

        if (coffee.roast.toLowerCase() === selectedRoast){
            const matchesRoast = coffee.roast.toLowerCase() === selectedRoast || selectedRoast === 'all';
            const matchesSearch = coffee.name.toLowerCase().includes(searchTerm);
            console.log('Matches Roast:', matchesRoast);
            console.log('Matches Search:', matchesSearch);

            // filteredCoffees.push(coffee); /*without this in the code it doesn't populate */
            if (matchesRoast && matchesSearch);
            filteredCoffees.push(coffee); /*without this in the code it doesn't populate */
        }
    });
    console.log('Filtered Coffees:', filteredCoffees);

    coffeesList.innerHTML = renderCoffees(filteredCoffees);
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

// ON LINE 55 CHANGED VARIABLE NAME FROM tbody TO coffeesList;
const coffeesList = document.querySelector('#coffees');
// (ON LINE 57) ALSO TESTED IT BY TARGETING THE DIV USING getElementById // THIS ALSO WORKS
// const coffeesList = document.getElementById('coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');
const userTexts = document.querySelector('#userText')

// ON LINE 62 CHANGED VARIABLE NAME FROM tbody TO coffeesList;
coffeesList.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);