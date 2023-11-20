"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += `<p>${coffee.id}</p>`;
    html += `<p>${coffee.name}</p>`;
    html += `<p>${coffee.roast}</p>`;
    html += '</div>';

    return html;
}


const searchInput = document.querySelector('#coffeeSearch');

function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(coffee => {
        if (selectedRoast === 'all'){
            filteredCoffees = coffees;
        } else {
            filteredCoffees = coffees.filter(coffee => coffee.roast === selectedRoast);
        }
    });
    coffeesList.innerHTML = renderCoffees(filteredCoffees);
}

function addNewCoffee(e) {
    e.preventDefault()
    const CoffeeName = document.querySelector('#coffeeName').value;
    const CoffeeRoast = document.querySelector('#coffeeRoast').value;

    const newCoffee = {
        id: coffees.length + 1,
        name: CoffeeName,
        roast: CoffeeRoast
    };
    coffees.push(newCoffee);
    coffeesList.innerHTML = renderCoffees(coffees)
}

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

const addCoffeeButton = document.querySelector('#addCoffee');
const coffeesList = document.querySelector('#coffees');
const roastSelection = document.querySelector('#roast-selection');
const coffeeSearch = document.querySelector('#coffeeSearch');
const submitButton = document.querySelector('#submit1');

coffeesList.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener("input", updateCoffees);

addCoffeeButton.addEventListener('click', addNewCoffee);


const tbody = document.querySelector('#coffees');

const searchbox = document.getElementById('searchroast1');
searchbox.addEventListener('keydown', () => {
    const searchInput = searchbox.value.toUpperCase();
    const filteredCoffees = coffees.filter((coffee) =>
        coffee.name.toUpperCase().includes(searchInput)
    );
    tbody.innerHTML = renderCoffees(filteredCoffees);
});
tbody.innerHTML = renderCoffees(coffees);



