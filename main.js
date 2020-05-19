"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee w-50"> <div class="d-flex align-items-baseline mb-2 mt-2 col animate__animated animate__fadeInLeft animate__delay-1s">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p class="ml-2  ">' + coffee.roast + '</p>';
    html += '</div></div>';

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
        } else if (selectedRoast === 'all'){
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
    {id: 15, name: 'Scary Brew', roast: "dark"},

];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

//////////////////////

function searchBar() {

    var input, filter, tbody, div, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    tbody = document.getElementById("coffees");
    div = tbody.getElementsByTagName('div');



    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < div.length; i++) {
        // a = li[i].getElementsByTagName("a")[0];
         txtValue = div[i].textContent || div[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
}
//////////////

function showCoffees(){
    if (localStorage.getItem('coffees') !== null) {
        var arrayCoffees = JSON.parse(localStorage.getItem('coffees'));
        tbody.innerHTML = renderCoffees(arrayCoffees);
        console.log('local');
        console.log(arrayCoffees);
    } else{
        tbody.innerHTML = renderCoffees(coffees);
        console.log('external');
    }
}


showCoffees();

document.getElementById("submit1").addEventListener("click", function(event){

    event.preventDefault();

    var roastSelect = document.getElementById('roast-selection1').value;

    var coffeeName = document.getElementById('coffeeName').value;

    var actualCoffeeArray = coffees;

    if (localStorage.getItem('coffees') !== null){
        actualCoffeeArray = JSON.parse(localStorage.getItem('coffees'));
    }

    actualCoffeeArray.push({id: coffees.length + 1, name: coffeeName, roast: roastSelect});

    var stringCoffees = JSON.stringify(actualCoffeeArray);

    localStorage.setItem('coffees', stringCoffees);
    //
    showCoffees();
});
