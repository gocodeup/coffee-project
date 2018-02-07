"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//____--this function= displays coffees that match search terms-__-

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var form = document.getElementById("input").value.toLowerCase();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        var lowerCoffee = coffee.name;
        lowerCoffee = lowerCoffee.toLowerCase();
        if (lowerCoffee.indexOf(form) !== -1 && selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
        else {
            if (coffee.roast === selectedRoast && form === "") {
                filteredCoffees.push(coffee);
            }
            else if (lowerCoffee.indexOf(form) !== -1 && coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            } else {
                console.log("error");
            }
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);

}


//___---_---_--_--_-_--_--_--this function updates the select option without pressing submit--_--_----_-__-_

function choiceSelect() {
// var form = document.getElementById("input").value.toLowerCase();
var selectedRoast = roastSelection.value;
var filteredCoffees = [];
coffees.forEach(function(coffee) {
    if (selectedRoast === "all") {
        filteredCoffees.push(coffee);
    }
    else {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    }

});

tbody.innerHTML = renderCoffees(filteredCoffees);

}

function interactiveKey() {
    var form = document.getElementById("input").value.toLowerCase();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        var lowerCoffee = coffee.name;
        lowerCoffee = lowerCoffee.toLowerCase();
        if (lowerCoffee.indexOf(form) !== -1 && selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
        else {
            if (coffee.roast === selectedRoast && form === "") {
                filteredCoffees.push(coffee);
            }
            else if (lowerCoffee.indexOf(form) !== -1 && coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            } else {
                console.log("error");
            }
        }

    });

    tbody.innerHTML = renderCoffees(filteredCoffees);

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

tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);
submitButton.addEventListener('click', updateCoffees);
//form.addEventListener('keydown', updateCoffees);
