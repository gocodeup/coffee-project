"use strict"

function renderCoffee(coffee) {
    var cinnamonColor = '';
    var lightRoastBG = '';
    if(coffee.roast === 'light'){
        lightRoastBG = 'bg-warning';
    }
    var mediumRoastBG = '';
    if(coffee.roast === 'medium'){
        mediumRoastBG = 'bg-info';
    }
    var darkRoastBG = '';
    if(coffee.roast === 'dark'){
        darkRoastBG = 'bg-secondary';
    }
    // if (coffee.name === 'Cinnamon'){
    //     cinnamonColor = 'text-danger'
    // }
   return `<div class="d-flex flex-column border border-secondary rounded-bottom" style="width: 10rem; margin: 1rem;">
        <img src="img/coffee-cup.jpeg" class="card-img-top"  alt="${coffee.name}">
            <div class="card-body ${lightRoastBG} ${mediumRoastBG} ${darkRoastBG}">
                <h5 class="card-title ${cinnamonColor}"> ${coffee.name} </h5>
                <p class="card-text">${coffee.roast} </p>
            </div>
            </div>`
    // var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';

    // return html;
}



function renderCoffees(coffees) {
    return coffees.reduce((coffeeHTML, coffee) => coffeeHTML.concat(renderCoffee(coffee)), '' )
}
    // return selectedCoffees

    // var html = '';
    // for(var i = coffees.length - 1; i >= 0; i--) {
    //     html += renderCoffee(coffees[i]);
    // }
    // debugger
    // return html;


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = coffees.filter(coffee => coffee.roast === selectedRoast);


    // coffees.forEach(function(coffee) {
    //     if (coffee.roast === selectedRoast) {
    //         filteredCoffees.push(coffee);
    //     }
    // });
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
