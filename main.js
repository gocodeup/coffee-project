(function () {
    "use strict"

// generates html
    function renderCoffee(coffee) {
        let html = '<div class="coffee">';
        html += '<p>' + coffee.name + '</p>';
        html += '<p>' + coffee.roast + '</p>';
        html += '</div>';

        return html;
    }

    function renderCoffees(coffees) {
        let html = '';
        for (let i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }



    function updateCoffees(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        const selectedRoast = roastSelection.value;
        let filteredCoffees = [];

        // If the selected option is all then push each coffee
        if (selectedRoast === 'all') {
            tbody.innerHTML = renderCoffees(addedCoffees);
        } else {
            addedCoffees.forEach(function (coffee) {
                    if (coffee.roast === selectedRoast) {
                        filteredCoffees.push(coffee);
                    }
                    tbody.innerHTML = renderCoffees(filteredCoffees);
                }
            )
        }
    }

//Function to run on select change
    const triggerSelect = function (e) {
        updateCoffees(e)
    }

//function to run on input on change
    function filterName() {
        const selectedName = nameSelection.value;
        let input = '';
        input += selectedName.toLowerCase()
        let result = addedCoffees.filter(coffee => {
            return coffee.name.toLowerCase().includes(input)
        })
        // render the Coffees with result
        tbody.innerHTML = renderCoffees(result)
        // console.log(result)
    }


//add a coffee function
    const addCoffee = (e) => {
        e.preventDefault()
        const inputRoast = roastType.value
        const inputCoffee = nameCoffee.value
        addedCoffees.push({id: coffees.length + 1, name: inputCoffee, roast: inputRoast})

        tbody.innerHTML = renderCoffees(addedCoffees)
        //clears input
        nameCoffee.value = ''
        roastSelection.value = inputRoast
        updateCoffees(e)


    }

//toggle order functionality
    const toggleOrder = (e) => {
        addedCoffees.reverse()
        updateCoffees(e)
    }


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    const coffees = [
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

    let addedCoffees = [...coffees]


// selectors
    const tbody = document.querySelector('#coffees');
    const submitSearch = document.querySelector('#submit-search');
    const submitAdd = document.querySelector('#submit-add');
    const roastSelection = document.querySelector('#roast-selection');
    const nameSelection = document.querySelector('#name-selection');
    const roastType = document.querySelector('#roast-type');
    const nameCoffee = document.querySelector('#name-coffee');
    const toggleBtn = document.querySelector('#ascend')


//Event listeners
    submitSearch.addEventListener('click', updateCoffees);
    submitAdd.addEventListener('click', addCoffee);
    roastSelection.addEventListener('change', triggerSelect);
    nameSelection.addEventListener('keyup', filterName);
    toggleBtn.addEventListener('click', toggleOrder)

    //render all coffees to body

    tbody.innerHTML = renderCoffees(coffees);

    //Local storage

    localStorage.setItem('myCoffees', 'added coffees here')
    const storedCoffees = localStorage.getItem("myCoffees");
    console.log(storedCoffees)


})()

