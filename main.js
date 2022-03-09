"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<h1>' + coffee.id + '</h1>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + " roast" + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
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

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


let userInput = document.getElementById("search")
userInput.addEventListener('keyup', filterCoffees)

function filterCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var result = userInput.value;
    // var result = userInput.textContent = e.target.value;
    console.log(result);

    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(result.toLowerCase())){
            console.log(result)
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//user adds coffee


let userInputRoast = document.getElementById("add-new-roast");

let userInputCoffee = document.getElementById("new-coffee-name");

let userInputSubmit = document.getElementById("submit-coffee");

userInputSubmit.addEventListener('click', addNewCoffee);

function addNewCoffee(e){
    e.preventDefault(); // don't submit the form, we just want to update the data
    var newCoffee = {
        id: coffees.length + 1,
        name: userInputCoffee.value,
        roast: userInputRoast.value
    }
    coffees.push(newCoffee);
    console.log(coffees);

    tbody.innerHTML = renderCoffees(coffees);
}





//local storage
//get elements from html
const storageInput = document.querySelector('.storage');
const button = document.querySelector('.button');
const text = document.querySelector('.text')
const roastTextShow = document.querySelector('.roast-text')
let roastSelectorValue = document.querySelector('#add-new-roast')

//get coffee name values from when user enters text into coffee name here
storageInput.addEventListener('input', letter => {
    storageInput.textContent = letter.target.value;
})

//get values for dropdown
roastSelectorValue.addEventListener('change', selection => {
    roastSelectorValue = roastSelectorValue.value;
})


//saves user input when click save into local storage
const saveToLocalStorage = () => {
    localStorage.setItem('coffeeroast', roastSelectorValue);
    localStorage.setItem('coffeeinput', storageInput.textContent);

}
//event listener for button save
button.addEventListener('click', saveToLocalStorage)

// if there is input in local, show the text into new p tag
const storedInput = localStorage.getItem('coffeeinput');

if (storageInput){
    text.textContent = storedInput;
}



// if there is input in local, show the dropdown value into new p tag
const storedRoast = localStorage.getItem('coffeeroast')
if (storedRoast){
    roastTextShow.textContent =  storedRoast + ' roast';
}


//removes local storage
const buttonRemover = document.querySelector('#remove');
buttonRemover.addEventListener('click', remove => {
    localStorage.removeItem('coffeeinput');
    localStorage.removeItem('coffeeroast');
})
