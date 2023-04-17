"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<p class="d-none">' + coffee.id + '</p>';
    html += '<p>' + coffee.name + '</p>';
    html += '<p>' + coffee.roast + '</p>';
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
        if (coffee.roast === selectedRoast.toLowerCase()) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast.toLowerCase() === 'all') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees)

}

function coffeeNames(event){
    var name = searchName.value;
        //make one for all***
        //filter the coffees by roast
        //filter coffees by name
        //print on html
        var filtered = [];
        for(var i = 0; i<coffees.length; i++){
            if((coffees[i].name.toLowerCase()).indexOf(name.toLowerCase())!==-1 && (coffees[i].name.toLowerCase()).indexOf(name.toLowerCase())<1)
                filtered.push(coffees[i]);
        }
        if(filtered.length>0) {
            tbody.innerHTML = renderCoffees(filtered);
        }

}
// new function that adds a new coffee
// add 1 to last id
// add a thing to get what was input into the bar
// add a roast selector and way to get access to it
function coffeeNew(event){
    event.preventDefault();
    var newCoffee = {
        id: coffees.length+1,
        name: coffeeName.value,
        roast: roastLvl.value
    };
    if (newCoffee.name.length>0)
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);

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

var newCoffee = document.querySelector('#newCoffee');
var roastLvl = document.querySelector('#roast-lvl');
var coffeeName = document.querySelector('#new-coffee-name')
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#roast-selection');
var roastSelection = document.querySelector('#roast-selection');
var searchName = document.querySelector('#searchName')
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('change', updateCoffees);
searchName.addEventListener('keyup', coffeeNames);
newCoffee.addEventListener('click', coffeeNew);