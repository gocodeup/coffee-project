"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3>' + coffee.name + '</h3>';
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
    //update condition inside forEach to only be true if current coffee name starts with search term
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var allroast = coffees.roast;
    var searchTerm = searchField.value;
    var filteredCoffees = [];
    // console.log(searchTerm);
    if (selectedRoast === "all") {
        coffees.forEach(function (coffee) {
            if (coffee.name.toLowerCase().includes(searchTerm)) {
                filteredCoffees.push(coffee);
            }
        });
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchTerm)) {
                filteredCoffees.push(coffee);
            }
        });
    }
    dbody.innerHTML = renderCoffees(filteredCoffees);
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

//steps for search.
//console.log test everytime we type into the input
//console.log whats in the text input every time we type in the input
//

console.log("search");
var searchField = document.querySelector("#search");


searchField.addEventListener("input", updateCoffees);






function selectName(na) {

    let tempArr = []
    var temp = na;
    na = na.charAt(0).toUpperCase();
    temp = temp.substr(1);
    na = na + temp
    console.log(na)
    coffees.forEach(function(e) {
        if (e.name.includes(na)) {
            tempArr.push(e);
        }
    });
    return tempArr;

}



var dbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var allroast = document.querySelector('coffees.roast')
dbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
