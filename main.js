"use strict";

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
    {id: 14, name: 'French', roast: 'dark'}
];

var outputHTML = document.querySelector('#coffees');
outputHTML.innerHTML = renderCoffees(coffees);

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    console.log(coffees);
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

var roastSelection = document.querySelector('#roast-selection');
var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', submitFire);

function submitFire(e) {
    e.preventDefault();
    updateCoffees();

}

function updateCoffees() {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var textinput = search.value;
    console.log(textinput);
    var filteredCoffees = [];

    /**
     * Filter the displayed coffees by roast selection
     */
    //if all then filteredCoffees = coffees
    if (selectedRoast == "all") {
        filteredCoffees = coffees;
    }   else {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }

    var finalCoffees = [];

    /**
     * Filter the displayed coffees by search term
     */
    filteredCoffees.forEach(function (coffee) {
        var coffeeOutput = coffee.name.toLowerCase();
        textinput = textinput.toLowerCase();
        if (coffeeOutput.includes(textinput)) {
            finalCoffees.push(coffee);
        }
    });

    // else do the following stuff...
    outputHTML.innerHTML = renderCoffees(finalCoffees);
}


var search = document.getElementById("coffee-input");
search.addEventListener("keyup", updateCoffees);
roastSelection.addEventListener("change", updateCoffees);


/**INSERT CODE/FUNCTION FOR ADDING COFFEE*/

function addProduct () {
    event.preventDefault();
    var addCoffee = document.getElementById("new-coffee");
    console.log(addCoffee);
    var addRoast = document.getElementById("new-roast");
    var newCoffee = {
        name: addCoffee.value,
        roast: addRoast.value
    };
    coffees.push(newCoffee);
    console.log(coffees);
    outputHTML.innerHTML = renderCoffees(coffees);
    console.log(renderCoffees(coffees));
    console.log(outputHTML.innerHTML)
}




var newAdd = document.querySelector("#new-submit");
newAdd.addEventListener("click", addProduct);





