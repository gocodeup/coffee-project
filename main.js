"use strict";

function renderCoffee(coffee) {
    let coffeeDiv = document.createElement('div');
    coffeeDiv.classList.add('col-6', 'col-md-4', 'coffee');

    // Apply styles based on roast type
    switch (coffee.roast) {
        case 'light':
            coffeeDiv.style.backgroundColor = '#ece0d1';
            break;
        case 'medium':
            coffeeDiv.style.backgroundColor = '#dbc1ac';
            break;
        case 'dark':
            coffeeDiv.style.backgroundColor = '#967259';
            break;
        default:
            coffeeDiv.style.backgroundColor = '#ece0d1'; // Default to light roast color
    }

    coffeeDiv.style.border = '1px solid #38220f';
    coffeeDiv.style.margin = '0.5em';
    coffeeDiv.style.width = '12em';

    let typeParagraph = document.createElement('p');
    typeParagraph.textContent = `Type: ${coffee.name}`;
    coffeeDiv.appendChild(typeParagraph);

    let roastParagraph = document.createElement('p');
    roastParagraph.textContent = `Roast: ${coffee.roast}`;
    coffeeDiv.appendChild(roastParagraph);

    return coffeeDiv;
}
function renderCoffees(coffees) {
    let coffeesContainer = document.querySelector('#coffees');
    coffeesContainer.innerHTML = ''; // Clear previous content

    coffees.forEach(coffee => {
        let coffeeDiv = renderCoffee(coffee);
        coffeesContainer.appendChild(coffeeDiv);
    });
}

function updateCoffees() {
    const selectedRoast = roastSelection.value;
    const searchTerm = searchInput.value.toLowerCase();
    let filteredCoffees = coffees;

    // Filter by selected roast
    if (selectedRoast !== 'all') {
        filteredCoffees = filteredCoffees.filter(coffee => coffee.roast === selectedRoast);
    }

    // Filter by search term
    if (searchTerm.trim() !== '') {
        filteredCoffees = filteredCoffees.filter(coffee => coffee.name.toLowerCase().includes(searchTerm));
    }

    // Render the filtered coffees
    renderCoffees(filteredCoffees);
}

function addCoffee() {
    const newName = newCoffeeName.value.trim();
    const newRoast = newCoffeeRoast.value;

    if (newName !== '' && newRoast) {
        const newCoffee = {
            name: newName,
            roast: newRoast,
        };

        // Add the new coffee to the array
        coffees.push(newCoffee);

        // Render the updated coffees
        renderCoffees(coffees);

        // Clear the form inputs
        newCoffeeName.value = '';
        newCoffeeRoast.value = 'light';
    }
}

// Coffee data array
const coffees = [
    { id: 1, name: 'Light City', roast: 'light' },
    { id: 2, name: 'Half City', roast: 'light' },
    { id: 3, name: 'Cinnamon', roast: 'light' },
    { id: 4, name: 'City', roast: 'medium' },
    { id: 5, name: 'American', roast: 'medium' },
    { id: 6, name: 'Breakfast', roast: 'medium' },
    { id: 7, name: 'High', roast: 'dark' },
    { id: 8, name: 'Continental', roast: 'dark' },
    { id: 9, name: 'New Orleans', roast: 'dark' },
    { id: 10, name: 'European', roast: 'dark' },
    { id: 11, name: 'Espresso', roast: 'dark' },
    { id: 12, name: 'Viennese', roast: 'dark' },
    { id: 13, name: 'Italian', roast: 'dark' },
    { id: 14, name: 'French', roast: 'dark' },
];

// Initial render
renderCoffees(coffees);


// Event handling
const roastSelection = document.querySelector('#roast-selection');
const searchInput = document.querySelector('#search');
const newCoffeeName = document.querySelector('#new-coffee-name');
const newCoffeeRoast = document.querySelector('#new-coffee-roast');
const addCoffeeButton = document.querySelector('#add-coffee');

roastSelection.addEventListener('change', updateCoffees); // Changed 'input' to 'change' for immediate update
searchInput.addEventListener('input', updateCoffees);
addCoffeeButton.addEventListener('click', addCoffee);

// ...