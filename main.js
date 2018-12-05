"use strict";


function renderCoffee(coffee) {
    var html = '<div class="coffee col-6 mt-2">';
    html += '<span class="fontSizeCoffee">' + coffee.name + '</span>';
    html += '<span class="roastFont ml-2 text-danger">' + coffee.roast + '</span>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    html = "<div class='row'>";
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    html += "</div>";
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
         if (coffee.name.toLowerCase().indexOf(selectedName.toLowerCase()) > -1 &&
             (coffee.roast === selectedRoast || selectedRoast === 'all')) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function resetCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedName = nameSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().indexOf(selectedName.toLowerCase()) > -1 &&
            (coffee.roast === selectedRoast || selectedRoast === 'all')) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    document.getElementById('coffeeSearch').reset();
}


function createCoffee(e) {
    e.preventDefault();
    var newCoffee = {};
    newCoffee.id = coffees.length + 1;
    newCoffee.name = coffeeName.value;
    newCoffee.roast = coffeeRoast.value;
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
    document.getElementById('coffeeCreation').reset();
    var form = document.getElementById("coffeeCreation");
    form.reset();
}

function deleteCoffee(e) {
    e.preventDefault();
    var newCoffees = [];
    var coffeeToDelete = deleteName.value;
    coffees.forEach(function (coffee) {
        if ((coffee.name.toLowerCase()) !== coffeeToDelete.toLowerCase()){
            newCoffees.push(coffee);
        }
    });
    coffees = newCoffees;
    tbody.innerHTML = renderCoffees(coffees);
    document.getElementById('coffeeSearch').reset();
    var form = document.getElementById("coffeeDelete");
    form.reset();
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
var nameSelection = document.querySelector('#coffeeName');
var coffeeRoast = document.querySelector('#roast-creation');
var coffeeName = document.querySelector('#coffeeCreateName');
var submitCreate = document.querySelector('#submitCreate');
var submitDelete = document.querySelector('#submitDelete');
var deleteName = document.querySelector('#coffeeDeleteName');

// if (localStorage.getItem('coffee') == null){
//     localStorage.setItem('coffee', coffees)
// }

function populateStorage() {
    localStorage.setItem('coffee', JSON.stringify(coffees));
}

populateStorage();

tbody.innerHTML = renderCoffees(JSON.parse(localStorage.getItem('coffee')));

submitButton.addEventListener('click', updateCoffees);
nameSelection.addEventListener('input', updateCoffees);
roastSelection.addEventListener('input', updateCoffees);
submitCreate.addEventListener('click', createCoffee);
submitButton.addEventListener('click', resetCoffee);
submitCreate.addEventListener('click', populateStorage);
submitDelete.addEventListener('click', populateStorage);
submitDelete.addEventListener('click', deleteCoffee);







// let items = coffees;
// localStorage.setItem("list", JSON.stringify(items));
// let itemsRetrieved = (localStorage.getItem('key'));
// let div = document.querySelector('.key');
// // itemsRetrieved.forEach(item => {
// //     div.innerHTML += item;
// // });
// itemsRetrieved.push('updateCoffee');
// localStorage.setItem("list", JSON.stringify(itemsRetrieved));

// if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("list", "coffee");
//     document.getElementsByClassName("coffee").innerHTML = localStorage.getItem("list");
// } else {
//     document.getElementsByClassName("coffee").innerHTML = "Sorry, your browser does not support Web Storage...";
// }

// function appendToStorage(name, data){
//     var old = localStorage.getItem(name);
//     if(old === null) old = "";
//     localStorage.setItem(name, old + data);
// }

// function saveCoffee() {
//     localStorage.setItem("coffee", '<div class="coffee col-6 mt-2"></div>');
// }

// var el = '';
// var itemContainer = $(el).parents('coffees');
// var itemObject = {
//     'coffee-name': itemContainer.find('span.fontSizeCoffee').text(),
//     'coffee-roast': itemContainer.find('span.roastFont').text()
// };
//
// localStorage.setItem('itemStored', JSON.stringify(itemObject));

// var oldCoffee = JSON.parse(localStorage.getItem('coffee')) || [];

// var newItem = {
//     'product-name': itemContainer.find('h2.product-name a').text(),
//     'product-image': itemContainer.find('div.product-image img').attr('src'),
//     'product-price': itemContainer.find('span.product-price').text()
// };
//
// oldItems.push(newItem);
//
// localStorage.setItem('itemsArray', JSON.stringify(oldItems));







