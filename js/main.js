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
    function coffeeSearch() {
        tbody.innerHTML = '';
        let selectedRoast = roastSelection.value;
        let inputSearch = searchInput.value.toLowerCase();
        let filteredCoffees = [];
        coffees.forEach(function(coffee) {
            if ((coffee.roast === selectedRoast || selectedRoast === 'all') &&
                coffee.name.toLowerCase().includes(inputSearch)) {
                filteredCoffees.push(coffee)
                tbody.innerHTML = renderCoffees(filteredCoffees);
            }

        });
    }

    function addCoffee(e){
        e.preventDefault()
        let roastValue = addRoast.value
        let nameValue = addName.value
        let newCoffee = {id: coffees.length + 1, name: nameValue, roast:roastValue}
        coffees.push(newCoffee)
        return coffeeSearch(newCoffee)

        console.log(coffees)
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


    // ADDS SEARCH RESULTS TO HTML //
    tbody.innerHTML = renderCoffees(coffees);

    // EVENT LISTENER TO UPDATE SEARCH INPUT //
    searchInput.addEventListener("keyup", coffeeSearch);

    //EVENT LISTENER FOR SUBMIT BUTTON
    submitButton.addEventListener('input', coffeeSearch);

    // EVENT LISTENER TO SPECIFY ROAST //
    roastSelection.addEventListener('input', coffeeSearch)




    let addRoast = document.querySelector('#add-roast')
    let addName = document.querySelector('#add-name')
    let addSubmit = document.querySelector('#add-submit')


    addSubmit.addEventListener('click',addCoffee)

    // addRoast.addEventListener("input",addCoffee)
    // addName.addEventListener('keyup',addCoffee)




})();