"use strict"
function coffeSelection() {
    var selectedRoast = roastSelection.value;
   var filteredCoffees = [];
   if (selectedRoast === 'all') {
       filteredCoffees = coffees
   } else {
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
   }
   filteredCoffees.sort(function (b,a){
       return a.id - b.id;
    });
    menu.innerHTML = renderCoffees(filteredCoffees);
}




// function newtable(form){
//     var form = document.getElementsByClassName('roast-selection')
//     if(document.getElementById('lightroast')){
//         coffees.findIndex( )
//     }
//     console.log(form);
// }
// newtable();

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h5>' + coffee.name + '</h5>';
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
        }
    });
    menu.innerHTML = renderCoffees(filteredCoffees);
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

var menu = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

var coffeename = document.querySelector('#coffeename')

const filterItems = (letters) => {
    return coffees.filter(coffee => name.indexOf(letters) > -1);
}

console.log(filterItems('ia')); // ["Victoria", "Olivia"]
roastSelection.addEventListener("change", coffeSelection);

menu.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
