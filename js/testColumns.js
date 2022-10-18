
let coffeesDiv = document.getElementById("coffees")
function createColumnsOfCoffee(coffee, coffeeCounter){
    let html = "";

    if(coffeeCounter % 5 === 1){
        html += `<div class="column">`;
    }

        html += `<div class="coffee">`;
            html += `<h3>` + coffee.name + `</h3>`;
            html += `<p>` + coffee.roast + `</p>`;
        html += `</div>`;

    if(coffeeCounter % 5 === 0){
        html += `</div>`
    }
    return html;
}

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

function createCoffeesTable(){
    let html = "";
    let coffeeCounter = 1;
    coffees.forEach(function(coffee){
        html += createColumnsOfCoffee(coffee, coffeeCounter);
        coffeeCounter ++;
    })

    coffeesDiv.innerHTML = html;
}

createCoffeesTable()