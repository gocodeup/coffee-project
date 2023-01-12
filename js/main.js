(function () {
    "use strict"

// ADDS SPECIFIED COFFEE'S TO PAGE //
    function renderCoffee(coffee) {
        let html = '<div class="coffee col-6 d-flex justify-content-start">';
        html += '<h2>' + coffee.name + '</h2>';
        html += '<p class="mb-0">' + coffee.roast + '</p>';
        html += '</div>';

        return html;
    }

// SENDS COFFEE'S TO RENDER COFFEE FUNCTION //
    function renderCoffees(coffees) {
        let html = '';
        for (let i = 0; i < coffees.length; i++) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }

// SPECIFY COFFEE BY COFFEE NAME //
    function coffeeSearch(e) {
        e.preventDefault();
        let inputSearch = searchInput.value.toLowerCase();
        let selectedRoast = roastSelection.value;
        let filteredCoffees = [];
        coffees.forEach(function (coffee) {
            if (inputSearch === '' && selectedRoast === 'all') {
                filteredCoffees.push(coffee)
            } else {
                if (inputSearch === '' && coffee.roast === selectedRoast) {
                    filteredCoffees.push(coffee)
                } else if (inputSearch !== '' && selectedRoast === 'all') {
                    if (coffee.name.toLowerCase().includes(inputSearch)) {
                        filteredCoffees.push(coffee)
                    }
                } else if (inputSearch !== '' && coffee.roast === selectedRoast) {
                    if (coffee.name.toLowerCase().includes(inputSearch)) {
                        filteredCoffees.push(coffee)
                    }
                }
            }
            tbody.innerHTML = renderCoffees(filteredCoffees);
        })
    }


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    // COFFEE LIST//
    let coffees = [
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

    let tbody = document.querySelector('#coffees');
    let searchInput = document.querySelector('#search-input')
    let submitButton = document.querySelector('#submit');
    let roastSelection = document.querySelector('#roast-selection');

// EVENT LISTENER TO UPDATE SEARCH INPUT //
    searchInput.addEventListener("keyup", coffeeSearch);

// ADDS SEARCH RESULTS TO HTML //
    tbody.innerHTML = renderCoffees(coffees);

// EVENT LISTENER TO SPECIFY ROAST //
    submitButton.addEventListener('click', coffeeSearch);

})();