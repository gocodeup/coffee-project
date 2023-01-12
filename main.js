'use strict'

function renderCoffee(coffee) {
  var html =
    '<div class="coffee col-xl-6 col-lg-6 col-xs-12 col-sm-6 col-md-6 coffee d-flex">'
  html += '<h4 class="mx-2">' + coffee.name + '</h4>'
  html += '<p class="text-secondary mt-1">' + coffee.roast + '</p>'
  html += '</div>'
  return html
}
function renderCoffees(coffees) {
  var html = ''
  for (var i = coffees.length - 1; i >= 0; i--) {
    html += renderCoffee(coffees[i])
  }
  return html
}

function updateCoffees(e) {
  e.preventDefault() // don't submit the form, we just want to update the data
  var selectedRoast = roastSelection.value
  var selectCoffeeOnSearch = coffeeSearch.value.toLowerCase()
  var filteredCoffees = []
  if ((selectedRoast === 'all') & (selectCoffeeOnSearch === '')) {
    coffees.forEach(function (coffee) {
      filteredCoffees.push(coffee)
    })
  } else if ((selectedRoast === 'all') & (selectCoffeeOnSearch !== '')) {
    coffees.forEach(function (coffee) {
      if (coffee.name.toLowerCase().includes(selectCoffeeOnSearch)) {
        filteredCoffees.push(coffee)
      }
    });
  } else if (selectedRoast !== 'all') {
    coffees.forEach(function (coffee) {
      if ((coffee.roast === selectedRoast) & (selectCoffeeOnSearch === '')) {
        filteredCoffees.push(coffee)
      } else if (
        (coffee.roast === selectedRoast) &
        (selectCoffeeOnSearch !== '')
      ) {
        if (coffee.name.toLowerCase().includes(selectCoffeeOnSearch)) {
          filteredCoffees.push(coffee)
        }
      }
    });
  }
  tbody.innerHTML = renderCoffees(filteredCoffees)
}

function addCoffee(e) {
  e.preventDefault()
  let roast = roastAdd.value
  let name = addName.value
  name = name.charAt(0).toUpperCase() + name.slice(1)
  console.log(name)

  coffees.push({
    id: coffees.length + 1,
    name: name,
    roast: roast,
  })
  tbody.innerHTML = renderCoffees(coffees)
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

var tbody = document.querySelector('#coffees')
var submitButton = document.querySelector('#submit')
var roastSelection = document.querySelector('#roast-selection')
var coffeeSearch = document.querySelector('#search-coffee')
var roastAdd = document.querySelector('#roast-add')
var addName = document.querySelector('#addName')
var addButton = document.querySelector('#submitAdd')
tbody.innerHTML = renderCoffees(coffees)
// Event listeners
submitButton.addEventListener('click', updateCoffees)
roastSelection.addEventListener('change', updateCoffees)
coffeeSearch.addEventListener('keyup', updateCoffees)
addButton.addEventListener('click', addCoffee)
