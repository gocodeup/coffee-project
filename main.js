"use strict"
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeInput = document.querySelector("#coffeeInput")


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

function renderCoffee(coffee) {
    var html = '<div id="coffees">';
    // html += '<span> <h3>' + coffee.id + '</h3></span>';
    html += '<span><h3>' + coffee.name + " " +  coffee.roast +'</h3></span>';
    // html += '<span>' + coffee.roast + '</span>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// edit for the all/
//for the search -- event called input that happens every time i input


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {

        if(selectedRoast === "all"){
            if (coffee.name.indexOf(coffeeInput.value) > - 1 ) {
                filteredCoffees.push(coffee);
            }
        }
        if (coffee.roast === selectedRoast) {
            if (coffee.name.indexOf(coffeeInput.value) > - 1 ) {
                filteredCoffees.push(coffee);
            }
        };
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
};

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);
coffeeInput.addEventListener("keyup", updateCoffees);


