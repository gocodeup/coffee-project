//TODO main
//1. Update the HTML
//Tables are a little old school, you need to refactor the code so that each coffee is displayed in a div that contains a heading displaying the coffee name, and the type of roast in a paragraph. Don't display the ids, these are only for our application's internal use DONE
//2. When the page loads, the coffees should be sorted by their ids in ascending order DONE
//3. Add functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this) DONE
//4. Add functionality to update the displayed coffee as the user types into the search box, or as soon as they select an option from the select. DONE

//TODO Additional features
//1. Make your name search case insensitive DONE
//2. Style it!


// this function prints the coffee froms the coffees's object'
function renderCoffee(coffee) {
    var html = '<div>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
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
    div.innerHTML = renderCoffees(filteredCoffees);
}
//creating a DOM grab to dumped the yoinked values in.
let container=document.querySelector("#coffees")

//creating a connection to search box
let searchInput = document.querySelector("#search-bar");

//empty string to hold the search box
let searchCoffees = "";

//empty box for search
let coffeeSearchBucket = [];

//function to translate
searchInput.addEventListener("input", (event) =>{
    console.log(event.target.value);
    for (let i =0;i<coffees.length;i++){
        if (coffees[i].name.toLowerCase().includes(event.target.value.toLowerCase())){
            coffeeSearchBucket.push(coffees[i]);
        }
    }
    for (let i=0;i<coffeeSearchBucket.length;i++){
        searchCoffees +=
            `<div class="coffees">
                <div>Coffee Name: ${coffeeSearchBucket[i].name}</div>
                <div>Coffee Roast ${coffeeSearchBucket[i].roast}</div>
            </div>`
    }
    container.innerHTML = searchCoffees;
    searchCoffees = "";
    coffeeSearchBucket = [];
})

//object containing the coffee styles
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

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

div.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
