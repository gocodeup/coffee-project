"use strict"
var results = [];
function renderCoffee(coffee) {
    // var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    // html += '<td>' + coffee.name + '</td>';
    // html += '<td>' + coffee.roast + '</td>';
    // html += '</tr>';
    var html = "<div class='coffees'><h2>" + coffee.name + "</h2><p>" + coffee.roast + "</p></div>";
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i=0; i < coffees.length; i++){
        html += renderCoffee(coffees[i]);
    }
    return html;
}
function renderCoffeesTwo(coffees) {
    var html = '';
    for(var i=0; i < coffees.length; i++){
        html = renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedCoffee = coffeeName.value;
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    if(selectedCoffee !== ''){
        coffees.forEach(function(coffee) {
            if (coffee.name === selectedCoffee) {
                filteredCoffees.push(coffee);
            }
        });
    }else{
        if(selectedRoast === "all"){
            coffees.forEach(function(coffee) {

                filteredCoffees.push(coffee);

            });
        }else{
            coffees.forEach(function(coffee) {
                if (coffee.roast === selectedRoast) {
                    filteredCoffees.push(coffee);
                }
            });
        }
    }




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
var coffeeName = document.querySelector('#coffee-name');
var newSubmit = document.querySelector("#submit_coffee")

function displayCoffees(){
    tbody.innerHTML = renderCoffees(coffees);
    var getObject = JSON.parse(localStorage.getItem('newCoffee'));
    console.log(getObject);
}




coffeeName.addEventListener('input', autocomplete(document.getElementById("coffee-name"), coffees));
submitButton.addEventListener('click', updateCoffees);
newSubmit.addEventListener('click', function (e) {
    e.preventDefault()
    let name = document.getElementById("new_coffee").value;
    let roast = document.getElementById("type_roast").value;

    if(name !== ''){
        let newCoffee = {
            id: coffees.length,
            name: name,
            roast: roast
        };

        coffees.push(newCoffee);
        tbody.innerHTML = renderCoffees(coffees);
    }
});
//AUTOCOMPLETE
autocomplete(document.getElementById("coffee-name"), coffees);

function autocomplete(inp, arr) {
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }

        for (i = 0; i < arr.length; i++) {

            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {

                var indCoffee = {
                    id: arr[i].id,
                    name: arr[i].name,
                    roast: arr[i].roast
                }

                results.push(indCoffee);
                localStorage.setItem('newCoffee', JSON.stringify(indCoffee));
            }

        }
        tbody.innerHTML = renderCoffees(results);

        for(let x = 0; x < results.length; x++){
            results.pop();
        }

    });

    function closeAllLists() {
        for(let x = 0; x < results.length; x++){
            results.pop();
        }
    }

}