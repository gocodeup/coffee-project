"use strict";

var coffeeList = document.getElementById('coffees');

function renderCoffees(coffees) {
    var html = '';
    coffees.forEach(function (coffee) {
        html += renderCoffee(coffee);
    });
    return html;
}

function updateCoffees() {
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if(coffee.roast === selectedRoast || selectedRoast === 'all roast') {
            if(coffee.name.toLowerCase().includes(selectCoffee.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees)
}

function addCoffee(inputName, roastType, inputRating) {
    if(roastType !== "Roasts" && inputRating !== "Nicolas Rating") {
        var addNewCoffee = {id: coffees.length + 1, name: inputName, roast: roastType, rating: inputRating};
        coffees.push(addNewCoffee);
        localStorage.setItem("coffees", JSON.stringify(coffees));
    }

}

function removeCoffees(coffeeInput) {
    coffees.forEach(function(coffee) {
        if(coffee.name.toLowerCase() === coffeeInput.toLowerCase()) {
            coffees.splice(coffees.indexOf(coffee), 1);
        }
        localStorage.setItem("coffees", JSON.stringify(coffees));
    });
}

function makeNicolas(inputCoffee) {
    var html = '';
    for(var i = 0; i < inputCoffee.rating; i++) {
        html += '<img class="rotation" src="img/nic-icon2.png" alt="nic-icon.png">'
    }
    return html;
}

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + ' ' + makeNicolas(coffee) + '</h3>' + '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

var coffees = [
    {id: 1, name: 'National Treasure 2 Light City', roast: 'light', rating: 5},
    {id: 2, name: 'National Treasure Half City', roast: 'light', rating: 3},
    {id: 3, name: 'Con-Air Cinnamon', roast: 'light', rating: 5},
    {id: 4, name: 'Drive Angry City', roast: 'medium', rating: 2},
    {id: 5, name: 'Gone in Sixty Seconds American', roast: 'medium', rating: 4},
    {id: 6, name: 'Face-Off Breakfast', roast: 'medium', rating: 5},
    {id: 7, name: 'Matchstick Men High', roast: 'dark', rating: 5},
    {id: 8, name: 'The Wicker Man Continental', roast: 'dark', rating: 1},
    {id: 9, name: 'Lord Of War New Orleans', roast: 'dark', rating: 3},
    {id: 10, name: 'The European Ant Bully', roast: 'dark', rating: 4},
    {id: 11, name: 'World Trade Center Espresso', roast: 'dark', rating: 5},
    {id: 12, name: 'Bangkok Dangerous Viennese', roast: 'dark', rating: 2},
    {id: 13, name: 'Grindhouse Italian', roast: 'dark', rating: 3},
    {id: 14, name: 'The French Family Man', roast: 'dark', rating: 2}
];

var selectedRoast = 'all roast';
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', function() {
    selectedRoast = roastSelection.value;
    updateCoffees()
});

var selectCoffee = '';
var searchCoffee = document.getElementById('searchbar');
searchCoffee.addEventListener('keyup', function() {
    selectCoffee = searchCoffee.value;
    updateCoffees();
});


var addRoast = document.querySelector('#button');
addRoast.addEventListener('click', function() {
    var coffeeName = document.getElementById('addCoffees');
    var coffeeRoast = document.getElementById('roast-selection2');
    var coffeeRating = document.getElementById('nicRating');
    if(coffeeName.value !== '') {
        addCoffee(coffeeName.value, coffeeRoast.value, coffeeRating.value);
        updateCoffees();
    }
    coffeeName.value = '';
});

var removeCoffee = document.querySelector('#button2');
removeCoffee.addEventListener('click', function() {
    var removeCoffeeInput = document.getElementById('removeCoffees');
    if(removeCoffeeInput.value !== '') {
        removeCoffees(removeCoffeeInput.value);
        updateCoffees()
    }
    removeCoffeeInput.value = '';
});




if(localStorage.getItem("coffees") !== null) {
    coffees = localStorage.getItem("coffees");
    coffees = JSON.parse(coffees);
    coffeeList.innerHTML = renderCoffees(coffees);
} else {
    coffeeList.innerHTML = renderCoffees(coffees);

}
