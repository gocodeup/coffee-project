"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    //html += '<td>' + coffee.id + '</td>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    // html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(first) {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all") {
            filteredCoffees = coffees;
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);

        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);

}




//TODO: Fix this VVV //
function coffeeSearch() {

    // var coffeeNameSearch = document.querySelector("#coffee-name-search input").value;
    // coffeeNameSearch = coffeeNameSearch.toLowerCase();
    // var filteredCoffees = [];
    // coffees.forEach(function (coffee) {
    //         if (coffee.indexOf(coffeeNameSearch) > -1) {
    //             filteredCoffees.push(coffee);
    //         }
    //         else {
    //             filteredCoffees = coffees;
    //         }
    // })
    // tbody.innerHTML = renderCoffee(filteredCoffees);

    var coffeeNameSearch = document.querySelector("#coffee-name-search input").value;
    coffeeNameSearch = coffeeNameSearch.toLowerCase();
    var foundCoffees = [];

    coffees.forEach(function (coffee) {
    foundCoffees += coffee.filter(inspectCoffee);
    });

    tbody.innerHTML = renderCoffee(foundCoffees);
}

function inspectCoffee (search){
    return coffees.indexOf(coffeeNameSearch) > -1;
}


//
// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
//
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
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
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector("#coffee-name-search");

tbody.innerHTML = renderCoffees(coffees);

roastSelection.onchange = updateCoffees;

nameSelection.oninput = coffeeSearch;

// submitButton.addEventListener('click', updateCoffees);
