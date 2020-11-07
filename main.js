"use strict"

function renderCoffee(coffee) {
    var html = `<li class="col-6 col-lg-4 list-group-item coffee text-center">
                <div class="coffee-name text-center">${coffee.name}</div> 
                <div class="roast-type text-muted text-center">${coffee.roast}</div>
                </li>`;
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1;  i++) {
        if ( (coffees.length / 2) == coffees[i]) {
            html+= `<div class='w-100'></div>`;
        }
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedUserTextRoast = userTextRoastSelection.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast || coffee.roast) && coffee.name.toLowerCase().includes(selectedUserTextRoast)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e) {
    e.preventDefault()
    //check if input text is blank
    if (addCoffeeName.value.trim() == '') {
        //logic to avoid validation message duplication
        if (document.querySelector('.validation-text')) {
            document.querySelector('.validation-text').remove();
        }
        //create validation message
        var newLi = document.createElement('p');
        newLi.className = 'validation-text';
        var newLiText = document.createTextNode('Name cannot be blank.');
        newLi.appendChild(newLiText);
        rightForm.append(newLi);
        //otherwise add coffee to list
    } else {
        document.querySelector('.validation-text').remove();
        coffees.push(
            {
                id: coffees.length + 1,
                name: addCoffeeName.value,
                roast: getSelectedOption(addRoastSelection)
            })
        updateCoffees(e);
    }
}

function getSelectedOption(addRoastSelection) {
    var option;
    for(var i=0; i<addRoastSelection.options.length; i++){
        option = addRoastSelection.options[i]
        if(option.selected === true){
            break;
        }
    }
    return option.value;
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

//HTML element variables
var tbody = document.querySelector('#coffees');


var roastInputText = document.getElementById('roast-text');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var userTextRoastSelection = document.getElementById("roast-text");
var addRoastSelection = document.getElementById('add-roast-selection');
var addCoffeeName = document.getElementById('add-coffee-name');
var rightForm = document.getElementById('right-form');

tbody.innerHTML = renderCoffees(coffees);
roastInputText.addEventListener("keyup", updateCoffees);
submitButton.addEventListener('click', addCoffee);