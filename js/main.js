"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex">';
    html += '<h3 class="fw-lighter">' + coffee.name + '</h3>' + '<p' +
        ' class="d-flex' +
        ' pt-2 ps-2 text-muted fw-light">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    coffees.forEach(function (coffee) {
        html += renderCoffee(coffee);
    })
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


var coffeeSearch = document.getElementById('coffee-search');

coffeeSearch.addEventListener('input', (e) => {
    var inputSearch = coffeeSearch.value
    searchBar(inputSearch);
})


//when you submit
function searchBar(input) {
    var emptyArray = [];
    for (let i = 0; i <= coffees.length - 1; i++) {
        if (coffees[i].name.toLowerCase().startsWith(input.toLowerCase())) {
            emptyArray.push(coffees[i]);
        }
    }
    tbody.innerHTML = renderCoffees(emptyArray)
    console.log(tbody.innerHTML = renderCoffees(emptyArray))
}

//ADD COFFEE

var coffeeAdd = document.getElementById('coffee-add');

var submitButton2 = document.querySelector('#submit2');
var roastSelection2 = document.querySelector("#roast-add")

submitButton2.addEventListener('click', (e) => {
    e.preventDefault()
    var inputCoffee = coffeeAdd.value
    var inputRoast = roastSelection2.value
    console.log(inputRoast);
    console.log(inputCoffee);
    var coffeeType = {
        id: coffees.length + 1,
        name: inputCoffee,
        roast: inputRoast
    }
    coffees.push(coffeeType);
    tbody.innerHTML = renderCoffees(coffees)
})


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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);



