(function () {



"use strict"



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

    var roastTypes = [{
        roast: 'light'
    }, {
        roast: 'medium'
    }, {
        roast: 'dark'
    }]


    // var tbody = document.querySelector('#coffees');
    var roastCard = document.querySelectorAll(".coffee-card");
    var coffeeBtns = document.querySelectorAll(".coffee-select");
    var dark = document.getElementById("dark-btn");
    var medium = document.getElementById("medium-btn");
    var light = document.getElementById("light-btn");
    var value = document.querySelectorAll(".radio-coffee")

    console.log(renderCoffee(coffees));
    console.log(value);

    function renderCoffee(coffee) {
    var html = '<div class="form-check">';
    //removed Id
    html += '<input class="form-check-input radio-coffee" type="radio" name="exampleRadios" id="coffees" value=' + coffee.name + ">";
    html += '<label class="form-check-label" for="exampleRadios">' + coffee.name + '</label>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length -1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var darkBucket = [];
    var mediumBucket = [];
    var lightBucket = [];
    coffees.forEach(function(coffee) {
        switch (coffee.roast) {
            case "dark":
                darkBucket.push(coffee);
                break;
            case "medium":
                mediumBucket.push(coffee);
                break;
            case "light":
                lightBucket.push(coffee);
                break;
        }

    });
    coffeeBtns[0].innerHTML=renderCoffees(darkBucket);
    coffeeBtns[1].innerHTML=renderCoffees(mediumBucket);
    coffeeBtns[2].innerHTML=renderCoffees(lightBucket);

}


    dark.addEventListener("click", updateCoffees);
    medium.addEventListener("click", updateCoffees);
    light.addEventListener("click", updateCoffees);
    dark.onclick = () => {
        coffeeBtns[0].classList.toggle("coffee-select")
    }
    medium.onclick = () => {
        coffeeBtns[1].classList.toggle("coffee-select")
    }

    light.onclick = () => {
        coffeeBtns[2].classList.toggle("coffee-select")
    }
})();