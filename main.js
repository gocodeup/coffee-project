"use strict"
let tbody = document.querySelector('.coffee');
function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p class="p2">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    coffees.sort((a, b) => a.id - b.id);

    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault();
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if (selectedRoast === 'all') {
        filteredCoffees = coffees;
    }
    else {

        filteredCoffees = coffees.filter(coffee => coffee.roast === selectedRoast);
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function searchCoffee(e) {
    e.preventDefault();
    let userInput = coffeeName.value.toLowerCase();
    let selectedRoast = roastSelection.value;
    let filteredCoffees = coffees.filter(function(coffee) {
        return coffee.name.toLowerCase().includes(userInput) && (selectedRoast === 'all' || coffee.roast === selectedRoast);
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function addNewCoffee(name, roast) {
    let id = coffees.length + 1;
    let newCoffee = {id: id, name: name, roast: roast};
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}


let coffees = [
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


let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeName = document.querySelector('#coffeeName')


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    let name = document.querySelector('#coffeeNameAdd').value;
    let roast = document.querySelector('#roast-type').value;
    addNewCoffee(name, roast);
});
roastSelection.addEventListener('change', updateCoffees);
coffeeName.addEventListener('keyup', searchCoffee)