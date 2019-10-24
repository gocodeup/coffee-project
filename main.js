"use strict"

function renderCoffee(coffee) {
    var html = '<div class="row coffeediv">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p class="roastName">' + coffee.roast + '</p>';
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
<<<<<<< HEAD
        } else if (roastSelection.value === "all") {
            tbody.innerHTML = renderCoffees(coffees);
=======
        } else if (roastSelection === document.getElementById("allthecoffee")) {
            filteredCoffees.push(coffees);
>>>>>>> 5a99e0120f5779afe568b1e9e8d235884b0b4f02
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

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
<<<<<<< HEAD
var addCoffeeButton = document.querySelector('#newCoffeeSubmit');

=======
// var allCoffee = document.querySelector('#allthecoffee');
>>>>>>> 5a99e0120f5779afe568b1e9e8d235884b0b4f02

coffees = coffees.reverse();

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


var searchQuery = function(e){
    var html = "";
    for (var i = 0; i < coffees.length; i++ ){

        if (coffees[i].name.toLowerCase().includes(coffeeSearch.value.toLowerCase()) || (coffees[i].roast.toLowerCase().includes(coffeeSearch.value.toLowerCase()))){
            html = html + renderCoffee(coffees[i]);
        }
        tbody.innerHTML = html;
    }
};

coffeeSearch.addEventListener("keyup",searchQuery);

function createBrew(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var x = document.getElementById("addCoffeeName").value;
    var y = document.getElementById("addCoffeeRoast").value;
    if (x.length !== 0) {
        coffees.push({
            name: x,
            roast: y,
        })
    } else alert("Please enter a name for your coffee");
    tbody.innerHTML = renderCoffees(coffees);

}

addCoffeeButton.addEventListener('click', createBrew);

