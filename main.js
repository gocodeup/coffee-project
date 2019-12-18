"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<p>' + coffee.id + '</p>'
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
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

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
           filteredCoffees.push(coffee);
        } else if (coffee.allRoast === selectedRoast){
            filteredCoffees.push(coffee);
        }
    });
    pList.innerHTML = renderCoffees(filteredCoffees);
}

function search_coffee() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('coffee');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}
var i;
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', allRoast:"all roast"},
    {id: 2, name: 'Half City', roast: 'light', allRoast:"all roast"},
    {id: 3, name: 'Cinnamon', roast: 'light', allRoast:"all roast"},
    {id: 4, name: 'City', roast: 'medium', allRoast:"all roast"},
    {id: 5, name: 'American', roast: 'medium', allRoast:"all roast"},
    {id: 6, name: 'Breakfast', roast: 'medium', allRoast:"all roast"},
    {id: 7, name: 'High', roast: 'dark', allRoast:"all roast"},
    {id: 8, name: 'Continental', roast: 'dark', allRoast:"all roast"},
    {id: 9, name: 'New Orleans', roast: 'dark', allRoast:"all roast"},
    {id: 10, name: 'European', roast: 'dark', allRoast:"all roast"},
    {id: 11, name: 'Espresso', roast: 'dark', allRoast:"all roast"},
    {id: 12, name: 'Viennese', roast: 'dark', allRoast:"all roast"},
    {id: 13, name: 'Italian', roast: 'dark', allRoast:"all roast"},
    {id: 14, name: 'French', roast: 'dark', allRoast:"all roast"},
];


var pList = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');


// tbody.innerHTML = renderCoffees(coffees);


roastSelection.addEventListener('click', updateCoffees);
submitButton.addEventListener('click', updateCoffees);
