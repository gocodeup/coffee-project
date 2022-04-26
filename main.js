// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', imgURL: "img/lightcity.png"},
    {id: 2, name: 'Half City', roast: 'light', imgURL: "img/halfcity.png"},
    {id: 3, name: 'Cinnamon', roast: 'light', imgURL: "img/cinnamon.png"},
    {id: 4, name: 'City', roast: 'medium', imgURL: "img/city.png"},
    {id: 5, name: 'American', roast: 'medium', imgURL: "img/american.png"},
    {id: 6, name: 'Breakfast', roast: 'medium', imgURL: "img/breakfast.png"},
    {id: 7, name: 'High', roast: 'dark', imgURL: "img/high.png"},
    {id: 8, name: 'Continental', roast: 'dark', imgURL: "img/continental.png"},
    {id: 9, name: 'New Orleans', roast: 'dark', imgURL: "img/neworleans.png"},
    {id: 10, name: 'European', roast: 'dark', imgURL: "img/european.png"},
    {id: 11, name: 'Espresso', roast: 'dark', imgURL: "img/espresso.png"},
    {id: 12, name: 'Viennese', roast: 'dark', imgURL: "img/viennese.png"},
    {id: 13, name: 'Italian', roast: 'dark', imgURL: "img/italian.png"},
    {id: 14, name: 'French', roast: 'dark', imgURL: "img/french.png"},
];

// ************************************************
// START RENDER COFFEE LIST (THE DEFAULT VIEW)
// ************************************************
var tbody = document.querySelector('#coffees');
tbody.innerHTML = renderCoffees(coffees);
function renderCoffees(coffees) {
    var html = '';
    if(localStorage.getItem("userCoffee")){
        coffees.push(JSON.parse(localStorage.getItem('userCoffee')))
    }
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
function renderCoffee(coffee) {
    var html = '<div class="coffee col-md-6 d-flex mb-3 p-2">';
    html += '<img src=' + coffee.imgURL + ' class="image" height="30px" mr-2 />';
    html += '<h3 id="name" class="ml-2">' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}
// ************************************************
// END RENDER COFFEE LIST (THE DEFAULT VIEW)
// ************************************************
// ************************************************
// START UPDATE COFFEE LIST (OPTION DROP-DOWN INPUT)
// ************************************************
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener("change", function() {
    let selectedRoast = roastSelection.value;
    console.log(selectedRoast)
    console.log(coffees)
    let html = '';
    coffees.forEach(coffee => {
        if (selectedRoast === coffee.roast) {
            tbody.innerHTML = html += renderCoffee(coffee);
        } else if (selectedRoast === "all") {
            tbody.innerHTML = renderCoffees(coffees);
        }
    })
})
// ************************************************
// END UPDATE COFFEE LIST (OPTION DROP-DOWN INPUT)
// ************************************************
// ************************************************
// START UPDATE COFFEE LIST (USER INPUT)
// ************************************************
let search = document.querySelector("#searchCoffee");
search.addEventListener('keyup', searchCoffees)
function searchCoffees(e) {
    // e.preventDefault(); //Expected behavior achieved without preventDefault()
    let coffeeName = search.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().indexOf(coffeeName.toUpperCase()) > -1) {filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees)
}
// ************************************************
// END UPDATE COFFEE LIST (USER INPUT)
// ************************************************
// ************************************************
// START ADD COFFEE TO COFFEE LIST (USER INPUT)
// ************************************************
const addCoffee = (e) => {
    e.preventDefault(); //stops the form from submitting
    var userCoffee = {
        id: coffees.length += 1,
        name: document.querySelector("#searchCoffee1").value,
        roast: document.querySelector('#roast-selection1').value,
        imgURL : `img/new.png`
    }

    let userCoffee_serialized = JSON.stringify(userCoffee);
    localStorage.setItem("userCoffee", userCoffee_serialized);

    coffees.pop();
    // coffees.push(userCoffee_serialized);
    tbody.innerHTML = renderCoffees(coffees);

}
var submitButton = document.querySelector('#submit1');
submitButton.addEventListener('click', addCoffee);
// ************************************************
// END ADD COFFEE TO COFFEE LIST (USER INPUT)
// ************************************************