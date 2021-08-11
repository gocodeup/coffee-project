"use strict"

function renderCoffee(coffee) {
    var html = '';

    //Render an h1 inside a div instead tr
    html += '<div class="col-6"><h1>' + coffee.name + '</h1><p>' +  coffee.roast + '</p></div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
        //Changed order from last to first, to first to last
        for (var i = 0; i < coffees.length; i++) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }

    function updateCoffees(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        var selectedRoast = roastSelection.value;
        var selectedName = nameSelection.value.toLowerCase();
        var filteredCoffees = [];
        coffees.forEach(function (coffee) {
            if (selectedRoast === 'all' && selectedName === '') {
                filteredCoffees.push(coffee);
            } else if (selectedRoast === 'all' && coffee.name.toLowerCase().includes(selectedName)) {
                filteredCoffees.push(coffee);
            } else if (selectedRoast === coffee.roast && coffee.name.toLowerCase().includes(selectedName)) {
                filteredCoffees.push(coffee);
            }
        })
        divBody.innerHTML = renderCoffees(filteredCoffees);
    }

        //     //If selected roast is all, and no search name, display all
        //     if (selectedRoast === "all" && selectedName === "") {
        //         filteredCoffees.push(coffee)
        //     }
        //     //If the selected roast is all, display matched names
        //     if (selectedRoast === "all" && coffee.name.toLowerCase().includes(selectedName)) {
        //         filteredCoffees.push(coffee)
        //     }
        //     //Checks if the name and roast match search selections
        //     if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(selectedName)) {
        //         filteredCoffees.push(coffee)
        //     }
        //     //if name is blank, display selected roast
        //     // if (selectedName === "" && coffee.roast === selectedRoast) {
        //     //     filteredCoffees.push(coffee)
        //     // }
        // });
        // divBody.innerHTML = renderCoffees(filteredCoffees);
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
//Change tbody to div body
var divBody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
//Added name selection search to the form
var nameSelection = document.querySelector('#coffee-name');

divBody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
nameSelection.addEventListener('keyup', updateCoffees);
