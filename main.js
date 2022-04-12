"use strict"


//search coffee section


function renderCoffee(coffee) {
    var html = '<div class="coffee col-lg- 4">';
    // html += '<div>' + coffee.id + '</div>'; ID does not display
    html += '<h1 class="coffee-name">' + coffee.name + '</h1>'; // Heading for coffee names
    html += '<p class="text-center">' + coffee.roast + '</p>'; // Paragraph for roast types
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
//Updates according to the option selected in form
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    // var searchedRoast = search.value.toUpperCase();
    var filteredCoffees = [];
    sortById.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if(roastSelection.value === 'all') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
//Searched through list of coffees
function searchCoffees() {
    var searchedCoffee = search.value.toUpperCase();
    var filteredCoffees =[];
    coffees.forEach(function(coffee) {
        if(coffee.name.toUpperCase().includes(searchedCoffee)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
//adds a new coffee item to the array

var addRoast = document.getElementById('add-coffee-roast-select')
var addName = document.getElementById('add-coffee-name') //used for localStorage
function coffeeAdd(obj) {
    obj.preventDefault(); // will not submit the form, stopping the refresh
    var id = coffees.length + 1;
    var newAddRoast = addRoast.value;
    var newAddName = addName.value.charAt(0).toUpperCase() + addName.value.slice(1);
    obj = {id: id, name: newAddName, roast: newAddRoast};
    coffees.push(obj);
    /*attempt at saving data*/
    window.localStorage.setItem('add-coffee-name', JSON.stringify(coffees));
    JSON.parse(window.localStorage.getItem('add-coffee-name')); //Added item shows up in local storage



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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitButton2 = document.querySelector('#submit-2');
var roastSelection = document.querySelector('#roast-selection');
var search = document.querySelector('#search');
var sortById = coffees.sort(function(a, b) {
    return b.id - a.id
});

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
search.addEventListener('input', searchCoffees)



submitButton2.addEventListener('click', coffeeAdd);


function formatNewCoffee(input) {
    return input.replace(/\b\w/g, function(letter) {
        return letter.toUpperCase()
    })
}

coffees.reverse();

