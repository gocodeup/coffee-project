(function (){

// localStorage.clear();
'use strict'
function renderCoffee(coffee) {
  let html =
    '<div class="coffee col-xl-6 col-lg-6 col-xs-12 col-sm-6 col-md-6 coffee d-flex">';
  html += '<h4 class="mx-2">' + coffee.name + '</h4>';
  html += '<p class="text-secondary mt-1">' + coffee.roast + '</p>';
  html += '</div>';
  return html;
}

function renderCoffees(coffees) {
  let html = '';
  for (let i = 0; i < coffees.length; i++) {
    html += renderCoffee(coffees[i]);
  }
  return html
}

function updateCoffees(e) {
  e.preventDefault() // don't submit the form, we just want to update the data
  let selectedRoast = roastSelection.value            //storing the value of coffee roast option
  let selectCoffeeOnSearch = coffeeSearch.value.toLowerCase();// stores the value of search box
  let filteredCoffees = []
  coffees.forEach(function(coffee){
    if ((selectedRoast === 'all'|| coffee.roast === selectedRoast) && (selectCoffeeOnSearch === '')) { //if the roast is all or another roast and search box is empty
        filteredCoffees.push(coffee); //send every realted item to array
    } else if ((selectedRoast === 'all' || coffee.roast === selectedRoast) && (selectCoffeeOnSearch !== '')) {//if the search box has content
        if (coffee.name.toLowerCase().includes(selectCoffeeOnSearch)) {//compares the searchbox value to names of coffee
          filteredCoffees.push(coffee)
        }
    } 
  });
  console.log(filteredCoffees);
  tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee(e) {
  e.preventDefault()
  let roast = roastAdd.value;   //stores the value of coffee roast at add portion
  let name = addName.value; //stores the value of name box in add portion
  let length = coffees.length + 1;
    if(name !== ''){  //if the name portion is not empty
      name = name.charAt(0).toUpperCase() + name.slice(1); //capitalize the first letter of name inputted
    coffees.push({
    id: length,
    name: name,
    roast: roast,
    }); 
  }
  //===============> Local Storage <===============
   tbody.innerHTML = renderCoffees(coffees);
   localStorage.setItem("id", JSON.stringify(coffees)); 
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
  { id: 1, name: 'Light City', roast: 'light' },
  { id: 2, name: 'Half City', roast: 'light' },
  { id: 3, name: 'Cinnamon', roast: 'light' },
  { id: 4, name: 'City', roast: 'medium' },
  { id: 5, name: 'American', roast: 'medium' },
  { id: 6, name: 'Breakfast', roast: 'medium' },
  { id: 7, name: 'High', roast: 'dark' },
  { id: 8, name: 'Continental', roast: 'dark' },
  { id: 9, name: 'New Orleans', roast: 'dark' },
  { id: 10, name: 'European', roast: 'dark' },
  { id: 11, name: 'Espresso', roast: 'dark' },
  { id: 12, name: 'Viennese', roast: 'dark' },
  { id: 13, name: 'Italian', roast: 'dark' },
  { id: 14, name: 'French', roast: 'dark' },
]


let tbody = document.querySelector('#coffees')
let submitButton = document.querySelector('#submit')
let roastSelection = document.querySelector('#roast-selection')
let coffeeSearch = document.querySelector('#search-coffee')
let roastAdd = document.querySelector('#roast-add')
let addName = document.querySelector('#addName')
let addButton = document.querySelector('#submitAdd')

tbody.innerHTML = renderCoffees(coffees);
const getCoffeeFromLocal = JSON.parse(localStorage.getItem("id"));
if(getCoffeeFromLocal !== null){
  coffees = getCoffeeFromLocal;
tbody.innerHTML = renderCoffees(coffees);
}

// Event listeners
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
coffeeSearch.addEventListener('keyup', updateCoffees);
addButton.addEventListener('click', addCoffee);

})();

