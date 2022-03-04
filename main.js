"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<div>' + coffee.id + '</div>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</tr>';

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
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}




// trial 1-- Shows any input
// var textBox = document.querySelector('#searchBar');
// textBox.addEventListener('keyup', function(){
//    var input = textBox.value;
//    var messageElement= document.querySelector('#coffee-name')
//     messageElement.innerText = input;
// });

//Trial 2
// function coffeePick(results) {
//     for (var coffee of results) {
//         var resultItem = document.createElement('li')
//         resultItem.classList.add('coffee-selection')
//         var text = document.createTextNode(coffees.name)
//         resultItem.appendChild(text)
//         list.appendChild(resultItem)
//     }
// }

//trial 3
// function search_coffee(){
//     var input = document.getElementById('searchBar').value
//     input =input.toLowerCase();
//     var messageElement = document.getElementsByClassName('coffee-name');
//
//     for(var i = 0; i < messageElement.length; i++){
//         if(!messageElement[i].innerText.toLowerCase().includes(input)){
//             messageElement[i].style.display='none';
//         }
//         else{
//             messageElement[i].style.display='coffees';
//         }
//     tbody.innerHTML = renderCoffees(filteredNames);
//
//     }
// }

//trial 4
// function coffeePick(results){
//     for (var coffee of results){
//         var resultItem = document.createElement('li')
//         resultItem.classList.add('coffee-selection')
//         var text = document.createTextNode(coffees.name)
//         resultItem.appendChild(text)
//         list.appendChild(resultItem)
//     }
//
// }

//trial 5.....
// function coffeeNames(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedCoffee = coffeeSelection.value;
//     var filteredNames = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.name === selectedCoffee) {
//             filteredNames.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredNames);
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

coffees.reverse();


function coffeeNames(){
    var lookCoffee = searchBox.value.toUpperCase();
    var coffeeName = [];
    console.log(lookCoffee);
    coffees.forEach(function(coffee){
        if(coffee.name.toUpperCase().includes(lookCoffee)){
            coffeeName.push(coffee);
            console.log(coffeeName);
        }
    });
    tbody.innerHTML = renderCoffees(coffeeName);
}




var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchBox = document.querySelector('#searchBox');


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener("input", updateCoffees);
searchBox.addEventListener('keyup', coffeeNames)

