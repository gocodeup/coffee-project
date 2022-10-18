"use strict"

// Variables being declared
// ref var for html
var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSubmit = document.querySelector('#coffee-submit');
var roastName = document.querySelector('#roast-name');
var customName = document.querySelector('#custom-name');
var customSelection = document.querySelector('#custom-selection');
var customCoffeeSubmit = document.querySelector('#custom-coffee-submit');
var rememberMe = document.querySelector('.remember');
var rememberCustomRoast = document.querySelector('.remember-me-too');
var forgetMe = document.querySelector('.forget');
var forgetBtn = document.querySelector('#forget-submit');
var theBtn = document.querySelector('.btn-container');
var hideBtn = document.querySelector('#forget-btn');
var darnBtn = document.querySelector('.good-enough');
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
var customCoffees = [
    {id: 15, name: '', roast: '', img: ''},
];
// Coffee Objects --> Bootstrap Cards
function renderCoffee(coffee) {
    var html = `<div class="container-fluid justify-content-center col-12 col-md-6 col-lg-4 mb-3">`;
    html += `<div id="${coffee.id}"  class="card h-100 card-body">`;
    html += `<h3 class="d-flex justify-content-center card-title">${coffee.name}</h3>`
    html += `<p class="d-flex justify-content-center">roast type: ${coffee.roast}</p>`;
    html += `<img src="${coffee.img}" class="card-img-top" alt="...">`;
    html += `</div>`;
    html += `</div>`;
    return html;
}
// Presenting Coffee Cards in Ascending Order
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        // console.log("coffees[i]: ", coffees[i]);
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
    let searchTerm = roastName.value
    var selectedRoast = roastSelection.value;
    var filteredCoffees = coffees.filter(currentCoffee => {
        if (currentCoffee.roast === selectedRoast || selectedRoast === "All") {
            if (searchTerm) {
                return searchTerm.toLowerCase().includes(currentCoffee.name.toLowerCase())
            } else {
                return true
            }
        }
    });
    filteredCoffees.sort((coffeea, coffeeb) => coffeea.id < coffeeb.id? 0:-1)
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// gives the custom placeholder object a coffee name from input
function newObjectName() {
    customCoffees.name = customName.value
}
// gives the custom placeholder object a new roast from the input
function newObjectRoast() {
    if (customSelection.value === "Light") {
        customCoffees.img = 'img/stewie.png'
        customCoffees.roast = customSelection.value
    } else if (customSelection.value === "Medium") {
        customCoffees.img = 'img/shrek.png'
        customCoffees.roast = customSelection.value
    } else if (customSelection.value === "Dark") {
        customCoffees.img = 'img/thanus.jpeg'
        customCoffees.roast = customSelection.value
    } else {
        customCoffees.img = 'img/jesus.jpeg'
        customCoffees.roast = customSelection.value
    }
}
//     updates the coffee object to add the newly custom coffee to the array of coffees
function updateCoffeesObject(e) {
    if (e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
}
    coffees.unshift(customCoffees);
    localStorage.setItem('name', customName.value);
    localStorage.setItem('value', customSelection.value);
    nameDisplayCheck();
    // calls updateCoffees again to render the updated coffee object (with the new custom coffee)
    updateCoffees();
}
function clearLocal() {
    localStorage.removeItem('name');
    localStorage.removeItem('value');
    nameDisplayCheck();
}
function nameDisplayCheck() {
    if (localStorage.getItem('name') && localStorage.getItem('value')) {
        rememberMe.style.display = 'none';
        rememberCustomRoast.style.display = 'none';
        theBtn.style.display = 'none';
        hideBtn.style = 'display';
    }
}
function hideForget() {
    if (customSelection.value === 'select') {
        hideBtn.style.display = 'none';
    }
}
// Event Responses
// coffeeSubmit.onclick = updateCoffees
roastSelection.onchange = updateCoffees
roastName.onkeyup = updateCoffees
customName.onkeyup = newObjectName
customSelection.onchange = newObjectRoast
customCoffeeSubmit.onclick = updateCoffeesObject
forgetBtn.onclick = clearLocal
darnBtn.onclick = hideForget
updateCoffees();
// submitButton.addEventListener('click', updateCoffees);
