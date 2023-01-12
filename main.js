'use strict'

function renderCoffee(coffee) {
  let html =
    '<div class="coffee col-xl-6 col-lg-6 col-xs-12 col-sm-6 col-md-6 coffee d-flex">'
  html += '<h4 class="mx-2">' + coffee.name + '</h4>'
  html += '<p class="text-secondary mt-1">' + coffee.roast + '</p>'
  html += '</div>'
  return html
}
function renderCoffees(coffees) {

  let html = ''
  for (let i = coffees.length - 1; i >= 0; i--) {
    html += renderCoffee(coffees[i])
  }
  return html
}

function updateCoffees(e) {
  e.preventDefault() // don't submit the form, we just want to update the data

  let selectedRoast = roastSelection.value
  let selectCoffeeOnSearch = coffeeSearch.value.toLowerCase()
  let filteredCoffees = []
  if ((selectedRoast === 'all') && (selectCoffeeOnSearch === '')) {
    coffees.forEach(function (coffee) {
      filteredCoffees.push(coffee)
    })
  } else if ((selectedRoast === 'all') && (selectCoffeeOnSearch !== '')) {
    coffees.forEach(function (coffee) {
      if (coffee.name.toLowerCase().includes(selectCoffeeOnSearch)) {
        filteredCoffees.push(coffee)
      }
    });
  } else if (selectedRoast !== 'all') {
    coffees.forEach(function (coffee) {
      if ((coffee.roast === selectedRoast) && (selectCoffeeOnSearch === '')) {
        filteredCoffees.push(coffee)
      } else if (
        (coffee.roast === selectedRoast) &&
        (selectCoffeeOnSearch !== '')
      ) {
        if (coffee.name.toLowerCase().includes(selectCoffeeOnSearch)) {
          filteredCoffees.push(coffee)
        }
      }
    });
  }
  tbody.innerHTML = renderCoffees(filteredCoffees);
  // tbody.innerHTML = renderCoffees(getItemFromLocal);
}



function addCoffee(e) {
  e.preventDefault()
  let roast = roastAdd.value;
  let name = addName.value;

    if(name !== ''){
      name = name.charAt(0).toUpperCase() + name.slice(1);
    coffees.push({
    id: coffees.length + 1,
    name: name,
    roast: roast,
    });
  }
  tbody.innerHTML = renderCoffees(coffees);
  // tbody.innerHTML = renderCoffees(uploadToLocalStorage);
}


function exist(){ 
  let existingName = addName.value;
  existingName = existingName.charAt(0).toUpperCase() + existingName.slice(1);
  coffees.forEach(function(coffee){
  if(coffee.name === existingName){
    alert("Exists");
      // console.log(existingName);
      // console.log(coffee.name);
   }
 });
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


let uploadToLocalStorage = localStorage.setItem('coffee', JSON.stringify(coffees));
let getItemFromLocal = localStorage.getItem("coffee");
let tbody = document.querySelector('#coffees')
let submitButton = document.querySelector('#submit')
let roastSelection = document.querySelector('#roast-selection')
let coffeeSearch = document.querySelector('#search-coffee')
let roastAdd = document.querySelector('#roast-add')
let addName = document.querySelector('#addName')
let addButton = document.querySelector('#submitAdd')

tbody.innerHTML = renderCoffees(coffees);

// Event listeners
submitButton.addEventListener('click', updateCoffees)
roastSelection.addEventListener('change', updateCoffees)
coffeeSearch.addEventListener('keyup', updateCoffees)
addButton.addEventListener('click', addCoffee)
// addButton.addEventListener('click', exist);

