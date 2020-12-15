"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div class="col d-none"> ' + coffee.id + '</div>';
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
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var finalcoffee=[];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });

    filteredCoffees.forEach(function (coffee){
        if(

        )
    })

    // var searchText = document.querySelector('#coffeeDataList');
    var searchText = document.forms.coffeeSearch.searchText.value;
    console.log(searchText);

    filteredCoffees.forEach(function (){
        // if(coffee.name === searchText)
    })


    coffeeSearch.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedCoffee = coffeeSelection.value;
    var filteredCoffees = [];
    //continues search after drop down result
    coffees.forEach(function(coffee) {
        if (coffee.name === selectedCoffee) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeSearch.innerHTML = renderCoffees(filteredCoffees);
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

var coffeeSearch = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

var coffeeSelection = document.querySelector('#coffees');

//this variable holds the text that was typed in for the search



coffeeSearch.innerHTML = renderCoffees(coffees);


submitButton.addEventListener('click', updateCoffees);

var myDropdown = document.getElementById('coffeeDataList')
myDropdown.addEventListener('show.bs.dropdown', function () {
    // do something...
})
hey