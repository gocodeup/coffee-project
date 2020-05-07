"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div id="coffeeId"> + coffee.id + </div>;
    html += '<div>' + coffee.name + '</div>';
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
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function sortData() {
    // Read table body node.
    var tableData = document.getElementById('coffeeResults').getElementsByTagName('tbody').item(0);

    // Read table row nodes.
    var rowData = tableData.getElementsByTagName('tr');

    for(var i = 0; i < rowData.length - 1; i++) {
        for(var j = 0; j < rowData.length - (i + 1); j++) {

            //Swap row nodes if short condition matches
            if(parseInt(rowData.item(j).getElementsByTagName('td').item(0).innerHTML) > parseInt(rowData.item(j+1).getElementsByTagName('td').item(0).innerHTML)) {
                tableData.insertBefore(rowData.item(j+1),rowData.item(j));
            }
        }
    }
}

// function sortTable (tbody, col, asc) { 
//     var rows = tbody.rows, 
//         rlen = rows.length, 
//         arr = new Array(), 
//         i, j, cells, clen; 
    // fill the array with values from the table 
    // for (i = 0; i < rlen; i++) { 
    // cells = rows[i].cells; 
    // clen = cells.length; 
    // arr[i] = new Array(); 
    // for (j = 0; j < clen; j++) { 
    // arr[i][j] = cells[j].innerHTML; 
    // }

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

sortData(coffees.id);

var coffeeName = {coffees};
    document.getElementById("#coffees").innerHTML = coffees.name;

var coffeeRoast = coffees.roast;
    document.getElementById("#coffees").innerHTML = coffees.roast;

coffeeName.innerHTML = coffees.name;

coffeeRoast.innerHTML = coffees.roast;
