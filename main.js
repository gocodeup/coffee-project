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
    // [];
    // = [
    // {},
    // {id: 15, name: '', roast: '', img: ''},

    /*-------- uncomment to work on images ---------*/
    // {id: 0, name: '', roast: '', img: ''},
    // {id: 0, name: '', roast: '', img: ''},
    // {id: 0, name: '', roast: '', img: ''},
    // {id: 0, name: '', roast: '', img: ''},
    // {id: 0, name: '', roast: '', img: ''},
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
       console.log("coffees: ", coffees);
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
    console.log(filteredCoffees)
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// gives the custom placeholder object a coffee name from input

function newObjectName() {
    customCoffees.name = customName.value
    // var newName = customName.value
}
// gives the custom placeholder object a new roast from the input
function newObjectRoast() {


    if (customSelection.value === "Light") {
        let newId = coffees.length +2;
       let lightCustom = {id: newId, name: customName.value, roast: customSelection.value, img:'img/light_city.jpeg'};
       coffees.unshift(lightCustom);
       //  customCoffees.img = 'img/italy.jpeg'
       //  customCoffees.roast = customSelection.value
    } else if (customSelection.value === "Medium") {
        let mediumCustom = [{id: 16, name: customName.value, roast: customSelection.value, img:'img/american.jpeg'},];
        coffees.unshift(mediumCustom);
        // customCoffees.img = 'img/shrek.png'
        // customCoffees.roast = customSelection.value
    } else if (customSelection.value === "Dark") {
        let heavyCustom = [{id: 17, name: customName.value, roast: customSelection.value, img:'img/viennese.jpeg'},];
        coffees.unshift(heavyCustom);
        // customCoffees.img = 'img/european.jpeg'
        // customCoffees.roast = customSelection.value
    } else {
        let whoopsCustom = [{id: 17, name: customName.value, roast: customSelection.value, img:'img/high.jpeg'},];
        coffees.unshift(whoopsCustom);
        // customCoffees.img = 'img/city.jpeg'
        // customCoffees.roast = customSelection.value
    }

    /*------- uncomment to work on images -----*/
    // if (customSelection.value === "Light") {
    //     customCoffees[0].img = 'img/american.jpeg'
    //     customCoffees[0].roast = customSelection.value
    //     customCoffees[0].name = customName.value
    //     customCoffees[0].id = 15;
    //     coffees.unshift(customCoffees[0]);
    // } else if (customSelection.value === "Medium") {
    //     customCoffees[1].img = 'img/breakfast.jpeg'
    //     customCoffees[1].roast = customSelection.value
    //     customCoffees[1].name = customName.value
    //     customCoffees[1].id = 16;
    //     coffees.unshift(customCoffees[1]);
    // } else if (customSelection.value === "Dark") {
    //     customCoffees[2].img = 'img/city.jpeg'
    //     customCoffees[2].roast = customSelection.value
    //     customCoffees[2].name = customName.value
    //     customCoffees[2].id = 17;
    //     coffees.unshift(customCoffees[2]);
    // } else {
    //     customCoffees[3].img = 'img/french.jpeg'
    //     customCoffees[3].roast = customSelection.value
    //     customCoffees[3].name = customName.value
    //     customCoffees[3].id = 18;
    //     coffees.unshift(customCoffees[3]);
    // }
}
//     updates the coffee object to add the newly custom coffee to the array of coffees
function updateCoffeesObject(e) {
    if (e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
}
    console.log(customCoffees);

    // coffees.unshift(customCoffees);
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
        /*------ uncomment to add more coffees -----*/
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


// another
// grab values from input
// create anew obj
// append obj to existing display (push/unshift to array)

// grab the value as hte user types
// let addedCoffee;
// roastName.onkeyup(function(){
//     addedCoffee = roastName.value;
// })

// create a new array (customCoffees)
// on submit ->
// create a new object
// pass the values grabbed as properties:values to the newly created object
// push the obj into the array
// coffees.unshift(customCoffees)