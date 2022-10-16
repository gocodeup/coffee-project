"use strict"

// Variables being declared
var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSubmit = document.querySelector('#coffee-submit')
var roastName = document.querySelector('#roast-name')
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light', img:'img/light_city.jpeg'},
    {id: 2, name: 'Half City', roast: 'Light', img:'img/half_city.webp'},
    {id: 3, name: 'Cinnamon', roast: 'Light', img:'img/Cinnamon-Coffee-Featured-Image.jpeg'},
    {id: 4, name: 'City', roast: 'Medium', img:'img/city.jpeg'},
    {id: 5, name: 'American', roast: 'Medium', img:'img/american.jpeg'},
    {id: 6, name: 'Breakfast', roast: 'Medium', img:'img/breakfast.jpeg'},
    {id: 7, name: 'High', roast: 'Dark', img:'img/high.jpeg'},
    {id: 8, name: 'Continental', roast: 'Dark', img:'img/continental.jpeg.crdownload'},
    {id: 9, name: 'New Orleans', roast: 'Dark', img:'img/orleans.jpeg'},
    {id: 10, name: 'European', roast: 'Dark', img:'img/european.jpeg'},
    {id: 11, name: 'Espresso', roast: 'Dark', img:'img/espresso.jpeg'},
    {id: 12, name: 'Viennese', roast: 'Dark', img:'img/viennese.jpeg'},
    {id: 13, name: 'Italian', roast: 'Dark', img:'img/italy.jpeg'},
    {id: 14, name: 'French', roast: 'Dark', img:'img/french.jpeg'},
];

// Coffee Objects --> Bootstrap Cards
function renderCoffee(coffee) {
    var html = `<div id="${coffee.id}" class="border-3 card mb-2" style="width: 18rem;">`;
    html += `<div class="d-flex mt-3 justify-content-center"><h3 class="fw-bold">${coffee.name}</h3></div>`
    html += `<div  class="d-flex justify-content-center" style="float: right;"><p>roast type: ${coffee.roast}</p></div>`
    html += `<img src="${coffee.img}" class="border-top border-3 card-img-top" alt="...">`
    html += '</div>';

    return html;
}

// Presenting Coffee Cards in Ascending Order
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// todo: include ability to search incomplete terms.  Ex:  Search 'city' and return (City, Light City, Half City)
// Preset Option Search Function
function updateCoffees(e) {
    if (e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
    }
    let searchTerm = document.querySelector('#roast-name').value
    var selectedRoast = roastSelection.value;
    var filteredCoffees = coffees.filter(currentCoffee => {
        if (currentCoffee.roast === selectedRoast || selectedRoast === "All") {
            if (searchTerm) {
                return searchTerm.toLowerCase().includes(currentCoffee.name.toLowerCase())
            } else {
                return true
            }
        }
    })
    filteredCoffees.sort((coffeea, coffeeb) => coffeea.id < coffeeb.id? 0:-1)
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// Event Responses
roastSelection.onchange = updateCoffees
coffeeSubmit.onclick = updateCoffees
roastName.onkeyup = updateCoffees

updateCoffees()

// submitButton.addEventListener('click', updateCoffees);
