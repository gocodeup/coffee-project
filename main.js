"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-md-6 d-flex mb-3 p-2">';
    html += '<img src=' + coffee.imgURL + ' class="image" height="30px" mr-2 />';
    html += '<h3 id="name" class="ml-2">' + coffee.name + '</h3>';
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


function searchCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let coffeeName = search.value;
    console.log(coffeeName);
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().indexOf(coffeeName.toUpperCase()) > -1) {
            filteredCoffees.push(coffee);
        }
    });
    console.log(filteredCoffees);
    tbody.innerHTML = renderCoffees(filteredCoffees)
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', imgURL: "img/lightcity.png"},
    {id: 2, name: 'Half City', roast: 'light', imgURL: "img/halfcity.png"},
    {id: 3, name: 'Cinnamon', roast: 'light', imgURL: "img/cinnamon.png"},
    {id: 4, name: 'City', roast: 'medium', imgURL: "img/city.png"},
    {id: 5, name: 'American', roast: 'medium', imgURL: "img/american.png"},
    {id: 6, name: 'Breakfast', roast: 'medium', imgURL: "img/breakfast.png"},
    {id: 7, name: 'High', roast: 'dark', imgURL: "img/high.png"},
    {id: 8, name: 'Continental', roast: 'dark', imgURL: "img/continental.png"},
    {id: 9, name: 'New Orleans', roast: 'dark', imgURL: "img/neworleans.png"},
    {id: 10, name: 'European', roast: 'dark', imgURL: "img/european.png"},
    {id: 11, name: 'Espresso', roast: 'dark', imgURL: "img/espresso.png"},
    {id: 12, name: 'Viennese', roast: 'dark', imgURL: "img/viennese.png"},
    {id: 13, name: 'Italian', roast: 'dark', imgURL: "img/italian.png"},
    {id: 14, name: 'French', roast: 'dark', imgURL: "img/french.png"},
];
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
let search = document.querySelector("#searchCoffee");
tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', searchCoffees);

// event listener that takes in a value
roastSelection.addEventListener("change", function() {
    let selectedRoast = roastSelection.value;
    let html = '';
    coffees.forEach(coffee => {
        if (selectedRoast === coffee.roast) {
            console.log(renderCoffee(coffee));
            tbody.innerHTML = html += renderCoffee(coffee);

        } else if (selectedRoast === "all") {
            tbody.innerHTML = renderCoffees(coffees);
        }
    })
})

search.addEventListener('keyup', searchCoffees)