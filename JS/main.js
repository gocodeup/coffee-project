"use strict"
// ADDED A COUNTER TO ALLOW INCREMENTING OF ID
let counter = 15;

function renderCoffee(coffee) {
    let html = '<div class="coffee row col-6">';
    // ADDED COUNTER TO INCREMENT ON NEW COFFEES, OR TO CALL EXISTING ID'S ON CURRENT COFFEES
    html += `<p id="coffee-id">${coffee.id || counter++}</p>`;
    html += `<p class="col-7">${coffee.name}</p>`;
    html += `<p class="col-5">${coffee.roast}</p>`; //p tag
    html += '</div>'; //div

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


// CHECKING IF AN OPTION IS ALL ROASTS, IF SO WILL DISPLAY ALL ROASTS
// ADDED AN IF STATEMENT FOR CHECKING FOR ALL ROASTS FIRST THEN CONTINUE WITH THE FUNCTION
// NOT SURE IF THERE'S A NICER WAY TO SHOW THIS
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
    if (selectedRoast === "All Roasts") {
        section.innerHTML = renderCoffees(coffees);
    } else {
        const filteredCoffees = [];
        coffees.forEach(coffee => {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
                section.innerHTML = renderCoffees(filteredCoffees);
            }
        });
        section.innerHTML = renderCoffees(filteredCoffees);

    }
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

// SEARCH BAR CODE TO MAKE IT CASE INSENSITIVE WHEN LOOKING FOR A PARTICULAR BREW

const searchBar = document.getElementById("coffee-name");

searchBar.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const resultsList = coffees.filter(coffee => coffee.name.toLowerCase().includes(searchTerm));

    section.innerHTML = renderCoffees(resultsList);
});


// Function to add a new coffee
// FUNCTION IS CREATING A NEW ELEMENT AND APPENDING TO HTML, NEEDS TO PUSH NEW COFFEE TO EXISTING COFFEES LIST
function addNewCoffee() {
    // Get input values
    const newCoffeeName = document.getElementById('newCoffeeName').value;
    const newCoffeeRoast = document.getElementById('newCoffeeRoast').value;

    // Validate input values
    if (newCoffeeName === "" || newCoffeeRoast === "") {
        alert("Please enter both coffee name and roast type.");
        return;
    }

    // Create a new coffee object
    const newCoffee = {
        id: counter++,
        name: newCoffeeName,
        roast: newCoffeeRoast
    };

    // Add the new coffee to the coffees array
    coffees.push(newCoffee);

    // Render the updated list of coffees
    section.innerHTML = renderCoffees(coffees);

    // Clear input fields
    document.getElementById('newCoffeeName').value = "";
    document.getElementById('newCoffeeRoast').value = "";

}


const section = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');

section.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

//============================================================//

