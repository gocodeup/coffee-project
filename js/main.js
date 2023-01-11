"use strict"

function select (event){

}

//-----------Create the tables ------------------//
function renderCoffee(coffee) {
    
    var html = '<div class="coffee col-6 d-flex text-align">';   

       //creates row for the ID
    html += '<h1>'+coffee.name+ '</h1>';   //creates row for the name
    html += '<p>' + coffee.roast + '</p>';    //creates row for the roast
   
    html += '</div>';                            

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
            if(coffee.name.toLowerCase().includes(coffeeInput) && coffee.roast === 'light'){
                coffeeNew.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(coffeeNew);
    }else if(selectedRoast === 'medium'){
        coffees.forEach(function(coffee){
            if(coffee.name.toLowerCase().includes(coffeeInput) && coffee.roast === 'medium'){
                coffeeNew.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(coffeeNew);
    }else if(selectedRoast === 'dark'){
        coffees.forEach(function(coffee){
            if(coffee.name.toLowerCase().includes(coffeeInput) && coffee.roast === 'dark'){
                coffeeNew.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(coffeeNew);
    }
}

function createCoffees(e){
    e.preventDefault();
    // let newCoffee = [];
    let coffeeInput = coffeeAdd.value;
    let selectedRoast = selectionAdd.value;

    // newCoffee.push( {
    //     id: coffees.length+1,
    //     name: coffeeInput,
    //     roast: selectedRoast
    // });

    coffees.push({
        id: coffees.length+1,
        name: coffeeInput,
        roast: selectedRoast
    });

    tbody.innerHTML = renderCoffees(coffees);
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

// coffees.createCoffee = function (e){
//     e.preventDefault();
//     let coffeeInput = coffeeAdd.value;
//     let selectedRoast = selectionAdd.value;
//     this.push({id: coffees.length-1, name: coffeeInput, roast: selectedRoast});
//     console.log(coffees);
// }
// coffees.createCoffee();



var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
const coffeeSearch = document.getElementById ("coffee-search");

const selectionAdd = document.querySelector('#add-roast');
const coffeeAdd = document.getElementById("new-coffee");
const submitNew = document.getElementById("submit-new-coffee");

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);

submitButton.addEventListener('click', updateCoffees);
//---Coffee Name input---//
coffeeSearch.addEventListener('keyup', findCoffee);

submitNew.addEventListener('click', createCoffees);
        
      

