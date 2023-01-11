"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [ //used to store all the coffee into a variable
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

var tbody = document.querySelector('#coffees'),
    submitButton = document.querySelector('#submit'),
    roastSelection = document.querySelector('#roast-selection');
//custom var
var coffeeName = document.querySelector('#name-selection')

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);//first button

//Functions here -------------

function renderCoffee(coffee) { //this is used to turn the coffee into lines of HTML
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>' + '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    // let name-selection
    var filteredCoffees = [];
    if ((selectedRoast === "all")&&(coffeeName.value === '')) {
        filteredCoffees = coffees;
    } else {
        coffees.forEach(function(coffee) {
            if ((coffee.roast === selectedRoast) && (coffeeName.value === '')) {
                filteredCoffees.push(coffee);
            } else if(coffeeName.value.toLowerCase() === coffee.name.toLowerCase()){
                filteredCoffees.push(coffee);
            }
        });
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
    // console.log(coffeeName.value) //used for testing
}