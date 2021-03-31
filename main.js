"use strict"

function coffeSelection() {
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if (selectedRoast === 'all') {
        filteredCoffees = coffees;
    } else {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }
    filteredCoffees.sort(function (b,a){
        return a.id - b.id;
    });
    menu.innerHTML = renderCoffees(filteredCoffees);
}
//****************** needs to be refactored to work as a search for those letter pairs
function autoType(){
    var filteredCoffees = [];
    if (coffeeSearch.value === ""){
        filteredCoffees = coffees;
    }else {
        for(var i = 0; i < coffees.length; i++) {
            if(coffees[i].name.toUpperCase().includes(coffeeSearch.value.toUpperCase())){
                // if((coffees[i].name[0]).toLowerCase() === (coffeeSearch.value[0]).toLowerCase()){
                filteredCoffees.push(coffees[i]);
            }
        }
    }
    filteredCoffees.sort(function (b,a){
        return a.id - b.id;
    });
    menu.innerHTML = renderCoffees(filteredCoffees);
}


function clearRefresh(e){
    e.preventDefault();
    localStorage.clear();
    location.reload();
}


function renderCoffee(coffee) {
    var html = '<div class="coffee col-12 col-sm-4 d-flex">';
    html += '<h5 class="mx-2 d-flex align-content-center">' + coffee.name + '</h5>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    id += 1;
    var roast = roastSelection2.value;
    var name = extraCoffee.value;
    coffees.push({id, name, roast});
    coffees.sort(function (b,a){
        return a.id - b.id;
    });
    menu.innerHTML = renderCoffees(coffees);

    var coffeesSerialized = JSON.stringify(coffees);
    localStorage.setItem("coffees", coffeesSerialized);
}
//**********************      END OF FUNCTIONS     ***************************
if (localStorage.length === 0){
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
}
else {
    coffees = JSON.parse(localStorage.getItem("coffees"));
}
var id = coffees.length;

//***************  DISPLAY **************
var menu = document.querySelector('#coffees');
//***************  COFFEE SELECTION **************
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#searchCoffee');
//***************  ADDING COFFEES **************
var roastSelection2 = document.querySelector('#roast-selection2');
var extraCoffee = document.querySelector('#addCoffee');
var submitButton = document.querySelector('#submit');
var clearbtn = document.querySelector('#clear')

menu.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener("change", coffeSelection);
coffeeSearch.addEventListener('input', autoType);
submitButton.addEventListener('click', updateCoffees);
clearbtn.addEventListener('click', clearRefresh);