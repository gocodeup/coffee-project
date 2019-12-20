"use strict"

function createCoffee (inputName, roastType, inputRating){
    var newCoffee = {id: coffees.length + 1 , name: inputName, roast: roastType, rating: inputRating};
    coffees.push(newCoffee);
    localStorage.setItem("coffees", JSON.stringify(coffees));
    console.log(coffees);
    // return coffees
}



//above this line are the functions for creating coffee obj
function removeCoffee (inputName) {
    coffees.forEach(coffee => {
        if (coffee.name.toLowerCase() === inputName.toLowerCase()) {
            coffees.splice(coffees.indexOf(coffee), 1);
        };
        localStorage.setItem("coffees", JSON.stringify(coffees));
    });
}
function buildStars(inputCoffee) {
    var html = '';
    console.log(inputCoffee.rating);
    console.log(inputCoffee.id);
    for(var i=0;i<inputCoffee.rating;i++) {
        html += '<i class="fas fa-star fa-xs" style="color: darkgoldenrod"></i>';
    }
    console.log(html);
    return html;
}

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h4>' + coffee.name + ' ' + buildStars(coffee) + '</h4>' + '<p>' + coffee.roast + '</p>' ;
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    if (selectedSort === "ID") {
        coffees.sort((a, b) => {
            return parseFloat(a.id) - parseFloat(b.id);
        });
    } else if (selectedSort === "Rating") {
        coffees.sort((a, b) => {
            return parseFloat(b.rating) - parseFloat(a.rating);
        });
    } else if (selectedSort === "Alphabetical") {
        coffees.sort((a, b) => {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
    coffees.forEach(coffee => {
        html+=renderCoffee(coffee)
    });
    return html;
}

function updateCoffees() {
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "All") {
            if (coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        }
    });
    coffeeContainer.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

var coffees = [
    {id: 1, name: 'Light City', roast: 'Light', rating: 2},
    {id: 2, name: 'Half City', roast: 'Light', rating: 4},
    {id: 3, name: 'Cinnamon', roast: 'Light', rating: 4},
    {id: 4, name: 'City', roast: 'Medium', rating: 1},
    {id: 5, name: 'American', roast: 'Medium', rating: 1},
    {id: 6, name: 'Breakfast', roast: 'Medium', rating: 3},
    {id: 7, name: 'High', roast: 'Dark', rating: 1},
    {id: 8, name: 'Continental', roast: 'Dark', rating: 3},
    {id: 9, name: 'New Orleans', roast: 'Dark', rating: 5},
    {id: 10, name: 'European', roast: 'Dark', rating: 2},
    {id: 11, name: 'Espresso', roast: 'Dark', rating: 1},
    {id: 12, name: 'Viennese', roast: 'Dark', rating: 4},
    {id: 13, name: 'Italian', roast: 'Dark', rating: 4},
    {id: 14, name: 'French', roast: 'Dark', rating: 2}
];
var coffeeContainer = document.getElementById('coffee-container');
var submitButton = document.querySelector('#submit');

var selectedRoast = 'All';
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', function(){
    selectedRoast = roastSelection.value;
    updateCoffees();
});
var selectedSort = 'ID';
var sortSelection = document.querySelector('#sort-selection');
sortSelection.addEventListener('change', function(){
    selectedSort = sortSelection.value;
    console.log(selectedSort);
    console.log("Listener Works");
    updateCoffees();
});

var selectedCoffee = '';
var searchCoffee = document.getElementById("search-coffee");
searchCoffee.addEventListener('keyup', function(){
    selectedCoffee = searchCoffee.value;
    updateCoffees();
});

var addCoffeeButton = document.querySelector('#add-coffee-button')
addCoffeeButton.addEventListener('click', function(){
    var coffeeRoastSelection = document.getElementById('coffee-roast-selection');
    var addCoffeeNameInput = document.getElementById('add-coffee-name-input');
    var coffeeRatingSelection = document.getElementById("coffee-rating-selection");
    if (addCoffeeNameInput.value !== '') {
        // console.log(createCoffee(addCoffeeNameInput.value, coffeeRoastSelection.value));
        createCoffee(addCoffeeNameInput.value, coffeeRoastSelection.value, coffeeRatingSelection.value);
        updateCoffees();
    }
    addCoffeeNameInput.value = '';
});
var removeCoffeeButton = document.querySelector('#remove-coffee-button')
removeCoffeeButton.addEventListener('click', function(){
    // var coffeeRoastSelection = document.getElementById('coffee-roast-selection');
    var removeCoffeeNameInput = document.getElementById('remove-coffee-name-input');
    if (removeCoffeeNameInput.value !== '') {
        // console.log(createCoffee(addCoffeeNameInput.value, coffeeRoastSelection.value));
        removeCoffee(removeCoffeeNameInput.value)
        updateCoffees();
    }
    removeCoffeeNameInput.value = '';
});

if (localStorage.getItem("coffees") !== null) {
    coffees = localStorage.getItem("coffees");
    coffees = JSON.parse(coffees);
    coffeeContainer.innerHTML = renderCoffees(coffees);
} else {
    coffeeContainer.innerHTML = renderCoffees(coffees);
}


console.log(coffees);

// submitButton.addEventListener('click', updateCoffees);