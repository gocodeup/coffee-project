(() => {
    "use strict"
    //          Create Table of Coffee and Roast
    function renderCoffee(coffee) {
        var html = '<div class="coffee d-flex col-6">';
        html += '<div hidden="hidden">' + coffee.id + '</div>';
        html += '<div class="px-3 fs-1">' + coffee.name  + '</div>';
        html += '<div class="px-2 pt-1 fs-3 ">' + coffee.roast + '</div>';
        html += '</div>';
        return html;
    }

    //              Pulls coffee from Array
    function renderCoffees(coffees) {
        var html = '';
        for(var i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }
    //                  Creates list of all coffee
    function updateCoffees(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        var selectedRoast = roastSelection.value;
        var filteredCoffees = [];
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast || coffee.group === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }

    //              search bar function to sort user input against coffees []
    function updateFilteredCoffees(e) {
        e.preventDefault();
        var selectedCoffee = coffeeInput.value.toLowerCase();
        var filteredCoffees = [];
        coffees.forEach(function(coffee) {
            if (coffee.name.toLowerCase().includes(selectedCoffee)) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }

    //              Function to add coffees via user input
    function addNewCoffee(e) {
        e.preventDefault();
        coffees.unshift({id: coffees.length + 1, name: newCoffee.value, roast: newRoast.value, group: 'all'});
        tbody.innerHTML = renderCoffees(coffees);
    }

    //                      Local storage
    function storeNewCoffee() {
        var id = coffees.length;
        var name = document.querySelector('#new-coffee').value;
        var roast = document.querySelector('#new-roast').value;

        var NewCoffee = {
            id: id,
            name: name,
            roast: roast,
            group: 'all',
        }

        let coffeesToString = JSON.stringify(NewCoffee);
        localStorage.setItem('id', coffeesToString);
        let coffeesParse = localStorage.getItem('id');
    }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    var coffees = [
        {id: 1, name: 'Light City', roast: 'light', group: 'all'},
        {id: 2, name: 'Half City', roast: 'light', group: 'all'},
        {id: 3, name: 'Cinnamon', roast: 'light', group: 'all'},
        {id: 4, name: 'City', roast: 'medium', group: 'all'},
        {id: 5, name: 'American', roast: 'medium', group: 'all'},
        {id: 6, name: 'Breakfast', roast: 'medium', group: 'all'},
        {id: 7, name: 'High', roast: 'dark', group: 'all'},
        {id: 8, name: 'Continental', roast: 'dark', group: 'all'},
        {id: 9, name: 'New Orleans', roast: 'dark', group: 'all'},
        {id: 10, name: 'European', roast: 'dark', group: 'all'},
        {id: 11, name: 'Espresso', roast: 'dark', group: 'all'},
        {id: 12, name: 'Viennese', roast: 'dark', group: 'all'},
        {id: 13, name: 'Italian', roast: 'dark', group: 'all'},
        {id: 14, name: 'French', roast: 'dark', group: 'all'},
    ];

    var tbody = document.querySelector('#coffees');
    var submitButton = document.querySelector('#submit');
    var roastSelection = document.querySelector('#roast-selection');
    submitButton.addEventListener('click', updateFilteredCoffees);
    tbody.innerHTML = renderCoffees(coffees.reverse());
    roastSelection.addEventListener('change', updateCoffees);

// coffee-selection input
    var coffeeInput = document.querySelector('#coffee-selection');
    coffeeInput.addEventListener('keyup', updateFilteredCoffees);


    // new coffee
    var newCoffeeButton = document.querySelector('#submit-new-coffee');
    var newCoffee = document.querySelector('#new-coffee');
    var newRoast = document.querySelector('#new-roast');
    newCoffeeButton.addEventListener('click', addNewCoffee);
    newCoffeeButton.addEventListener('click', storeNewCoffee);
})();