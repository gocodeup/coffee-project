"use strict"

function select (event){

}

//-----------Create the tables ------------------//
function renderCoffee(coffee) {
    var html = '<tr class="coffee">';   

    html += '<td>' + coffee.id + '</td>';       //creates row for the ID
    html += '<td>' + coffee.name + '</td>';     //creates row for the name
    html += '<td>' + coffee.roast + '</td>';    //creates row for the roast
   
    html += '</tr>';                            

    return html; //Pushes to the html
}




//---------Pushes the coffees into the table---------/
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);    // Use the function above to  
    }
    return html;
}

//----------------------------------------------------------------//









//--------function that displays the selected groups of the drop down------//
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {          // if the roast is = to the selectedRoast display the selected in the table
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }else if(selectedRoast === 'all'){      // Else Put all the coffees in the table
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//------- Function that finds Coffee----------//
function findCoffee(e){
    e.preventDefault();
    let coffeeNew = [];
    let coffeeInput = coffeeSearch.value;
    let selectedRoast = roastSelection.value;
    if(selectedRoast === 'all'){
        coffees.forEach(function(coffee){
            if(coffee.name.toLowerCase().includes(coffeeInput)){
                coffeeNew.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(coffeeNew);
    }else if(selectedRoast === 'light'){
        coffees.forEach(function(coffee){
            if(coffee.name.toLowerCase().includes(coffeeInput)){
                coffeeNew.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(coffeeNew);
    }else if(selectedRoast === 'medium'){
        coffees.forEach(function(coffee){
            if(coffee.name.toLowerCase().includes(coffeeInput)){
                coffeeNew.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(coffeeNew);
    }else if(selectedRoast === 'dark'){
        coffees.forEach(function(coffee){
            if(coffee.name.toLowerCase().includes(coffeeInput)){
                coffeeNew.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(coffeeNew);
    }


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
const coffeeSearch = document.getElementById ("coffee-search");

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);

submitButton.addEventListener('click', updateCoffees);
//---Coffee Name input---//
coffeeSearch.addEventListener('keyup', findCoffee);
        
      

