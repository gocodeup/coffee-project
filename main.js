"use strict";

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length;  i++) {
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
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


var search = function updateCoffeesTwo(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedName = nameSelection.value;
    var filteredCoffeesTwo = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase() === selectedName.toLowerCase()) {
            filteredCoffeesTwo.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffeesTwo);
};

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'The Greenbelt', roast: 'medium'},
    {id: 2, name: 'Discovery Green', roast: 'medium'},
    {id: 3, name: 'New York', roast: 'medium'},
    {id: 4, name: 'Boulder', roast: 'medium'},
    {id: 5, name: 'Moab', roast: 'medium'},
    {id: 6, name: 'The Good Morning', roast: 'medium'},
    {id: 7, name: 'Poe', roast: 'dark'},
    {id: 8, name: 'Lovecraft', roast: 'dark'},
    {id: 9, name: 'The Developer', roast: 'dark'},
    {id: 10, name: 'Ethiopian', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Death Roast', roast: 'dark'},
    {id: 13, name: 'Italiano', roast: 'dark'},
    {id: 14, name: 'Francais', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('.form-control');
tbody.innerHTML = renderCoffees(coffees);
var submitTwoButton = document.querySelector('#submitTwo');
submitTwoButton.addEventListener('click', search);
submitButton.addEventListener('click', updateCoffees);

coffees.forEach(function (coffee) {
    document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
});

var result = "";

document.getElementById('searchbar').addEventListener('keydown', function(event) {
    console.log(result);
    document.getElementById('result').innerHTML = "";
    var drinks = [];
    var key = event.key.toLowerCase();
    var charList = 'abcdefghijklmnopqrstuvwxyz';
    if ((charList.indexOf(key) === -1) && (event.keyCode !== 8)){
        return;
    }
    if(event.keyCode === 8 && result !== "") {
        result = result.substring(0, result.length - 1);
        console.log(result);
        coffees.forEach(function (coffee) {
            var compare = coffee.name.toLowerCase();
            if (compare.search(result) > -1) {
                drinks.push(coffee)

            }
        });
        for(var i = 0; i < drinks.length; i++)
            document.getElementById('result').innerHTML += drinks[i].name + "<br><br>" + drinks[i].roast + "<br><br>";


    } else if(charList.indexOf(key) !== -1){
        result = result + key;
        coffees.forEach(function (coffee) {
            var compare = coffee.name.toLowerCase();
            if (compare.search(result) > -1) {
                drinks.push(coffee)

            }
        });
        for(var i = 0; i < drinks.length; i++)
            document.getElementById('result').innerHTML += drinks[i].name + "<br><br>" + drinks[i].roast + "<br><br>";
    } else {
        coffees.forEach(function (coffee) {
            document.getElementById('result').innerHTML += coffee.name + "<br><br>" + coffee.roast + "<br><br>"
        });
    }

});