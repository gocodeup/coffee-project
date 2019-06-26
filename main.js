"use strict";

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

//attempt at displaying input




function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '' + coffee.id + '';
    html += '<h2><a href="#">' + coffee.name + '</a></h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

console.log(coffees);// shows that the list does populate in log


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
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


function coffeeSearch (){
    var input, i, a, txtValue;
    input = document.getElementById('coffee');
    var filter = input.value.toUpperCase();

    for (i = 0; i < coffees.length; i++) {
        a = coffees[i].getElementById("a") [0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            coffee[i].style.display = "";
        } else {
            coffee[i].style.display = 'none';
        }
    }
}



// function searchCoffees(e) {
//     // e.preventDefault();
//     // var search = document.form.coffee.value;
//     // function showInput() {
//         var coffeeSearch = document.getElementById("coffee").value;
//         console.log(coffeeSearch);
//     // }
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee){
//         if (coffeeSearch === coffee.name) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

// var coffeeSearch = document.getElementById('coffee').value;
// console.log(coffeeSearch);
//
// document.getElementById('coffee').value = coffeeSearch;
//
// console.log(coffeeSearch);



tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButton.addEventListener('click', coffeeSearch);
