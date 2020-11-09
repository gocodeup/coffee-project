"use strict"

//displaying the table on the page
function renderCoffee(coffee) {
    var html = '<div class="coffee w-50">';
    html += '<h4 class="coffee-name d-inline-block mr-2">' + coffee.name + '</h4>';
    html += '<p class="coffee-roast d-inline-block text-secondary">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}


//ascending the order of the coffee names/list
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//Updating table of coffees based on roast type selected from drop down menu.
//Add an option to select all roasts for roast type
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}



//The array of objects that contains information about each coffee choice
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


//is assigning the content within an id of #coffees to the tbody variable (the actual table body of the table)
var tbody = document.querySelector('#coffees');


//is assigning the content related to the id of #submit to the submitButton variable (that is what is making it possible to change the content on the page)
var submitButton = document.querySelector('#submit');


//is assigning the content related to the id of #roast-selection to the roastSelection variable
var roastSelection = document.querySelector('#roast-selection');


//changing the innerHTML of tbody using the renderCoffees function
tbody.innerHTML = renderCoffees(coffees);


//Event listener for the submitButton(that is what is making the button actually work)
submitButton.addEventListener('click', updateCoffees);


//Function for Filter Table(searching through specific data in a table)
function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("coffee-search");
    filter = input.value.toUpperCase();
    table = document.getElementById("coffee-table");
    tr = table.getElementsByClassName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



//Function to add new coffee to table body
function addNewCoffee(event){
    event.preventDefault(); // don't submit the form, we just want to update the data
    var newCoffeeName = document.forms.coffeeForm.coffeeName;
    var newCoffeeRoast = document.forms.coffeeForm.addRoast;
    var userCreatedCoffee = {
        id: coffees.length + 1,
        name: newCoffeeName.value,
        roast: newCoffeeRoast.value
    };
    console.log(newCoffeeName);
    console.log(newCoffeeRoast);
    coffees.push(userCreatedCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}


// Variable add coffee button
var addCoffeeButton = document.querySelector("#submit-new-coffee");

// Event listener for submit new coffee button.
addCoffeeButton.addEventListener("click", addNewCoffee);
