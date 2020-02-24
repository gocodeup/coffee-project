"use strict"

function renderCoffee(coffee) {
    var html = '<div class="table-div">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}



//this is function for ascending coffee list
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
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
//

function coffeeSearch(e) {
    e.preventDefault();
    var bucket = [];
    coffees.forEach(function (coffee) {
        if (searchText.value === coffee.name) {
            bucket.push(coffee);
        }
    });
    renderCoffees(bucket);
//
//     coffees.push({
//         name: coffeeAddName.value,
//         roast: roastAddSelection.value
//     });
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee){
//         filteredCoffees.push(coffee)
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
}
//


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
    var submitButton = document.getElementById('submit');
    var roastSelection = document.querySelector('#roastType');

// var roastAddSelection = document.querySelector('#addRoast-selection');


    tbody.innerHTML = renderCoffees(coffees);


    submitButton.addEventListener('change', updateCoffees);


    document.getElementById('roastType').addEventListener('click', searchByRoast, false);

    var searchText = document.forms.coffeeSearch.coffeeSearchQuery;
    searchText.addEventListener('keyup', coffeeSearch, false);


    function searchByRoast() {
        // document.addEventListener('keyup', updateCoffees, false);
        document.getElementById('roastType').addEventListener('change', removeCoffee, false);
    }

    function removeCoffee() {
        document.removeEventListener('keyup', updateCoffees, false);
        document.getElementById('roastType').removeEventListener('change', removeCoffee, false);
    }




// submitNewCoffeeSelection.addEventListener('click', coffeeSearch());

// coffeeName.addEventListener('keyup', updateCoffees());

//here are variables we created but may not need; leaving them commented just in case we can use them later:
// var submitNewCoffeeSelection = document.querySelector('#add-submit');
// var coffeeName =  document.querySelector('#coffee-name');
// var coffeeAddName =  document.querySelector('#add-coffeeName');
// <form>
// <label for="roast-selection"></label>
//     <select id="roast-selection">
//     <ul id="searchUL">
//     <li><a href="#">light</a></li>
//     <li><a href="#">medium</a></li>
//     <li><a href="#">dark</a></li>
//     </select>
//     <input type="text" id="coffeeSearch" onkeyup="updateCoffees()" placeholder="search for coffees"> //added
//     <input id="submit" type="submit" />
//     </form>
//w3 search filter content
//w3 html:
// <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names..">
//
//     <ul id="myUL">
//     <li><a href="#">Adele</a></li>
// <li><a href="#">Agnes</a></li>
//
// <li><a href="#">Billy</a></li>
// <li><a href="#">Bob</a></li>
//
// <li><a href="#">Calvin</a></li>
// <li><a href="#">Christina</a></li>
// <li><a href="#">Cindy</a></li>
// </ul>
// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
//
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
//
// function searching() {
//     var input, filter, ul, option, a, i, txtValue;
//     input = document.getElementById('coffeeSearch');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById('searchUL');
//     option = ul.getElementsByTagName('option');
//
//     for (i = 0; i < option.length; i++) {
//         a = option[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             option[i].style.display = "";
//         } else {
//             option[i].style.display = "none";
//         }
//     }
// }
