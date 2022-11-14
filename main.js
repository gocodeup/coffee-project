"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-5">';
    html += '<p id="coffeeID" style="display: none">' + coffee.id + '</p>';
    html += '<h2  id="coffeeName">' + coffee.name + '</h2>';
    html += '<p id="=coffeeRoast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    tbody.innerHTML = renderCoffees(filterCoffees());
}

function filterCoffeeByRoast() {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    for (let coffee of coffees) {
        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee);

        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    } return filteredCoffees;
}

function filterCoffeeByName() {
    let coffeeNameInputValue = coffeeGrab.value;
    var filteredCoffeesName = [];
    for (let coffee of coffees) {
        if ((coffee.name).toLowerCase().includes(coffeeNameInputValue.toLowerCase())) {
            filteredCoffeesName.push(coffee);
        }
    }
    return filteredCoffeesName;
}

function filterCoffees() {
    let finalSearchResult = []
    let roast = filterCoffeeByRoast();
    let name = filterCoffeeByName();
    for (let coffee of name) {
        if (roast.includes(coffee)) {
            finalSearchResult.push(coffee);
        }
    }
    return finalSearchResult;
}

function newCoffeeRoast() {
    var roastInput = newRoastSelection.value;
    var nameInput = newCoffeeName.value;
    console.log(roastInput,nameInput);
    var newCoffees = {
        id:coffees.length +1,
        name:nameInput,
        roast:roastInput

    };
    coffees.push(newCoffees)
    return  tbody.innerHTML = renderCoffees(coffees);

    // console.log(newCoffees)
    //     for(selectedRoast )
    // // for (let coffee of coffees) {
    //     if (selectedRoast === 'all') {
    //         filteredCoffees.push(coffee);
    //
    //     } else if (coffee.roast === selectedRoast) {
    //         filteredCoffees.push(coffee);
    //     }
    // } return newCoffees;
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
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

let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let coffeeGrab = document.querySelector("#coffee-name");
let newRoastSelection = document.querySelector('#newRoast-selection');
let newCoffeeName = document.querySelector('#newCoffee-name');
let newSubmit = document.querySelector('#newSubmit')


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
coffeeGrab.addEventListener("keyup", updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
newSubmit.addEventListener('click', (e) => newCoffeeRoast())
