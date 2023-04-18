(function() {

// "use strict"

// displays individual coffees
function renderCoffee(coffee) {
    var html = '<div class="coffee w-50 d-flex flex-nowrap my-2">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h4 class=" text-nowrap mb-0 ">' + coffee.name + '</h4>';
    html += '<p class="ms-1 mt-1 text-light" >' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// displays all coffees
function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// shows filtered coffees by input and roast
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast.toUpperCase() === selectedRoast.toUpperCase()) {
            filteredCoffees.push(coffee);
            tbody.innerHTML = renderCoffees(filteredCoffees);
        } else if (selectedRoast === 'All') {
            tbody.innerHTML = renderCoffees(coffees);
        }
    })
}

// add coffees to list
function addCoffees(input) {
    input.preventDefault(); // don't submit the form, we just want to update the data
    var addID = coffees.length + 1;
    var addName = newCoffeeName.value.toString();
    var addRoast = newCoffeeRoastSelection.value.toString();
    input = {id: addID, name: addName, roast: addRoast};
    coffees.push(input);
    coffeeList.innerHTML = renderCoffees(coffees);
}

// live search
function searchCoffees() {
    var searchRoast = document.querySelector("#coffeeDisplay").value.toUpperCase();
    var filteredCoffees = [];
    console.log(searchRoast);
    coffees.forEach(function (coffee) {
        if (coffee.name.toUpperCase().includes(searchRoast)){
                filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

// toggle dark mode
function darkModeToggle() {
    var onOff = darkModeSwitch.checked;
    if (onOff === true) {
        bodyBgColor.style.backgroundColor = 'black';
        bodyBgColor.style.color = 'white';
        modeText[0].innerText = 'Night';
    } else if (onOff === false) {
        bodyBgColor.style.backgroundColor = '#CC9966';
        bodyBgColor.style.color = 'black';
        modeText[0].innerText = 'Day ';
    }
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

// element retrieval
var tbody = document.querySelector('#coffees'); // tbody is the array of coffees
var roastSelection = document.querySelector('#roast-selection');
var submitButton = document.querySelector('#submit');
var newCoffeeRoastSelection = document.querySelector('#roast-selection-2');
var newCoffeeName = document.querySelector('.new-coffee-added');
var newCoffeeSubmitButton = document.querySelector('#add-coffee');
var coffeeList = document.querySelector('#coffees');
var bodyBgColor = document.getElementById('body-bg-color');
var darkModeSwitch = document.getElementById('dark-mode-switch');
var modeText = document.getElementsByClassName('form-check-label');
var coffeeDisplay = document.getElementById('coffeeDisplay');
var inputBoxes = document.querySelector('input');

// displays the array of coffees onto the html page
tbody.innerHTML = renderCoffees(coffees);

// event listeners
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('click', updateCoffees);
newCoffeeSubmitButton.addEventListener('click', addCoffees);
coffeeDisplay.addEventListener('keyup', searchCoffees);
darkModeSwitch.addEventListener("click", darkModeToggle);

})();