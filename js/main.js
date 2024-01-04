function renderCoffee(coffee) {
    let html = `<div class="card d-flex">
                    <a class="gentle-tilt-move-shake" href="/">
                        <p class="coffee-id">Coffee id: ${coffee.id}.</p>
                        <p>${coffee.name}</p>
                        <p class="bean-roast">Bean Roast: ${coffee.roast}</p>
                    </a>
                </div>`;
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    coffees.forEach(function(coffee) {
        html += renderCoffee(coffee);
    });
    return html;
}

function updateCoffees() {
    let selectedRoast = roastSelection.value;
    let filteredCoffees = coffees.filter(coffee => coffee.roast === selectedRoast || selectedRoast === "all");
    coffeeListDiv.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees() {
    let searchRoast = searchBox.value.toLowerCase();
    let filteredCoffees = coffees.filter(coffee => coffee.name.toLowerCase().includes(searchRoast));
    coffeeListDiv.innerHTML = renderCoffees(filteredCoffees);
}

// Coffee data
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


let coffeeListDiv = document.querySelector('#coffees');
let roastSelection = document.querySelector('#roast-selection');
let searchBox = document.querySelector('#searchByName');

// Initialize the coffee list
coffeeListDiv.innerHTML = renderCoffees(coffees);

// Event Listeners
roastSelection.addEventListener('change', updateCoffees);
searchBox.addEventListener("keyup", searchCoffees);
