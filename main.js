"use strict"

function renderCoffee(coffee) {
    var html = '<div class="card text-center d-flex shadow  mx-1 coffee">';
    html += '<div class="font-weight-bolder">' + coffee.name +
        `<p class="font-weight-lighter">` + `{ ${coffee.roast} }` + '</p></div>'
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length ; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if(selectedRoast === 'all'){
            filteredCoffees.push(coffee)
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var value = searchBar.value.toLowerCase();
    coffees.forEach(function(coffee) {
        if(selectedRoast === 'all' && coffee.name.toLowerCase().includes(value)){
            filteredCoffees.push(coffee)
        } else if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(value)) {
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffees(e){
    e.preventDefault();;
    var submittedcoffee = {};
    var roast = document.getElementById("newcoffee").value;
    var name = document.getElementById("coffeename").value;
    var freshid = (coffees.length + 1);

    submittedcoffee.id = freshid;
    submittedcoffee.name = name;
    submittedcoffee.roast = roast;
    coffees.push(submittedcoffee);
    updateCoffees(e);

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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchBar = document.getElementById('search')
var usercoffee = document.getElementById("submitname");

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);
searchBar.addEventListener('input', searchCoffees);
usercoffee.addEventListener('click', addCoffees);