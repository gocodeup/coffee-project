"use strict";
// Tables are a little old school, you need to refactor the code so that each coffee is displayed in a div that contains a heading displaying the coffee name, and the type of roast in a paragraph. Don't display the ids, these are only for our application's internal use
//

function renderCoffee(coffee) {
    var html = '<div class="coffee h3 col-6">' + coffee.name + ' ' + '<p class="d-inline-block h6">' + coffee.roast + '</p>' + '</div>'
    // html += '<div>' + coffee.id + '</div>';
    // html += '<div>' + coffee.name + '</div>'
    // html += '<p>' + coffee.roast + '</p>';
    // html += '</div>';
    return html;
}


//When the page loads, the coffees should be sorted by their ids in ascending order

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//Add functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)
function updateCoffees(e) {
    // console.log("update coffee");
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    // console.log(selectedRoast);
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        // console.log("coffee name input: " + coffeeNameInput.value + " " +  coffee.name );
        if (selectedRoast === 'all' && coffee.name.toLowerCase().includes(coffeeNameInput.value.toLowerCase())) {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(coffeeNameInput.value.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
        console.log("coffee name input: " + coffeeNameInput.value + " " + coffee.name);
    });
    coffeeListElement.innerHTML = renderCoffees(filteredCoffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

// function to add new coffee
function addCoffee(f) {
    // console.log("update coffee");
    f.preventDefault(); // don't submit the form, we just want to update the data
    var newValue = {
        id: 0,
        name: document.querySelector('#coffee-search-add-coffee').value,
        roast: document.querySelector('#roast-selection-add-coffee').value
    };

    // let newValue = document.querySelector('#coffee-search-add-coffee').value; // need to make into object!
    coffees.unshift(newValue);
    console.log(coffees);
    coffeeListElement.innerHTML = renderCoffees(coffees)
}

var secondSubmitButton = document.querySelector('#submit-add-coffee');
secondSubmitButton.addEventListener('click', addCoffee);

var coffeeListElement = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeNameInput = document.querySelector("#coffee-search");


coffeeListElement.innerHTML = renderCoffees(coffees);


submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('input', updateCoffees);
coffeeNameInput.addEventListener('keyup', updateCoffees);