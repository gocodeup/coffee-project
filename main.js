"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<button class="coffeeID btn" data-toggle="modal" data-target="#exampleModal">' + coffee.id + '</button>';
    html += '<button class="coffeeName btn" data-toggle="modal" data-target="#exampleModal"><strong>' + coffee.name + '</strong></button>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }

    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {

        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });

    coffeeMenu.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesByName(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var qName = coffeeSearch.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        var coffeeLC = coffee.name.toLowerCase();
        if (coffeeLC.includes(qName)) {
            filteredCoffees.push(coffee);
        }
    });

    coffeeMenu.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    // {id: 1, name: 'Light City', roast: 'light'},
    // {id: 2, name: 'Half City', roast: 'light'},
    // {id: 3, name: 'Cinnamon', roast: 'light'},
    // {id: 4, name: 'City', roast: 'medium'},
    // {id: 5, name: 'American', roast: 'medium'},
    // {id: 6, name: 'Breakfast', roast: 'medium'},
    // {id: 7, name: 'High', roast: 'dark'},
    // {id: 8, name: 'Continental', roast: 'dark'},
    // {id: 9, name: 'New Orleans', roast: 'dark'},
    // {id: 10, name: 'European', roast: 'dark'},
    // {id: 11, name: 'Espresso', roast: 'dark'},
    // {id: 12, name: 'Viennese', roast: 'dark'},
    // {id: 13, name: 'Italian', roast: 'dark'},
    // {id: 14, name: 'French', roast: 'dark'},
    {
        id: 1,
        name: 'Sulaco',
        roast: 'light',
        description: 'A blend as smooth as the crew who mans her, this coffee will bring you out of hyper-sleep to wake up the Colonial Marine in you.'
    },
    {
        id: 2,
        name: 'Nostromo',
        roast: 'light',
        description: 'Sometimes, the company wants you to go above and beyond.  This brew will fire you up to reach Priority One.'
    },
    {
        id: 3,
        name: 'Promethues',
        roast: 'light',
        description: 'This coffee distills the essence of it\'s namesake. You will get lost in it\'s rich but mild flavor'
    },
    {
        id: 4,
        name: 'Patna',
        roast: 'medium',
        description: 'This company blend will take you to the outer edge, and bring back forgotten riches.'
    },
    {
        id: 5,
        name: 'Auriga',
        roast: 'medium',
        description: 'Medium body with strong resolve, will bring back tastes of the past.'
    },
    {
        id: 6,
        name: 'Covenant',
        roast: 'medium',
        description: 'When you have to colonize new worlds, you\'ll need plenty of fuel.  These beans will make you your planet.'
    },
    {
        id: 7,
        name: "Hicks' Roast",
        roast: 'dark',
        description: 'Frosty and strong you\'ll want to keep this brew nearby for "close encounters".'

    },
    {
        id: 8,
        name: "Hudson's Roast",
        roast: 'dark',
        description: 'You won\'t want out of this "chicken s#*&" outfit. Game over, man, game over.  Winner of the "Paxton Prize" for smoothest taste.'
    },
    {
        id: 9,
        name: 'Bishop\'s Blend',
        roast: 'dark',
        description: 'Always faithful, you\'ll appreciate this roast\'s qualities.  This brew never misses...well almost.'
    },
    {
        id: 10,
        name: 'Vasquez Colombian',
        roast: 'dark',
        description: 'Always on point, this brew is as fierce as it\'s namesake.  You won\'t confuse this with any other coffee.  It\'ll have you doing pull-ups as soon as you wake up!'
    },
    {
        id: 11,
        name: 'Apone Espresso',
        roast: 'dark',
        description: 'This dark draught doesnt cost you a paycheck, makes every meal a banquet, and every formation a parade..'
    },
    {
        id: 12,
        name: 'Gorman\'s Gold Coast',
        roast: 'dark',
        description: 'Sharp and naive at the second drop this young roast is weak at the beginning but gains boldness.'
    },
    {
        id: 13,
        name: 'Hadley\'s Hope House Blend',
        roast: 'dark',
        description: 'This shake and bake coffee has little atmosphere but a strong resolve.  Trust us it\'ll go nuclear'
    },
    {id: 14, name: 'Drake\'s Smartgun Blast', roast: 'dark', description: 'This coffee is just too bad.'},
    {
        id: 15,
        name: 'Ash\'s Arftificial Decaf',
        roast: 'dark',
        description: 'A dark and challenging concoction, I can\'t lie to you about your chances , but you have my sympathy'
    }
];

var coffeeMenu = document.querySelector('#coffeeMenu');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffeeSearch');
var addCoffeeButton = document.querySelector("#add-roast-submit");


coffeeMenu.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);

coffeeSearch.addEventListener('input', updateCoffeesByName);

function addCoffee(e) {
    e.preventDefault();
    var newCoffeeRoast = document.getElementById("add-roast");
    var newCoffeeName = document.getElementById("add-coffee-name");
    if (newCoffeeName.value !== "") {
        var coffeeObj = {
            id: coffees.length,
            name: newCoffeeName.value,
            roast: newCoffeeRoast.value
        };

        coffees.push(coffeeObj);
    }
    roastSelection.value = "all";
    updateCoffees(e);
    coffeeMenu.inneHTML = renderCoffees(coffees);

}

addCoffeeButton.addEventListener('click', addCoffee);


$('.coffeeName').click(function () {
    // $('.modal-body').innerText(coffees.description);
    var brewText = $(this).children().html();
    var drewDesc =
        $('.modal-text').html(brewText);

    var desc = '';

    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name === brewText) {
            desc = coffees[i].description;
            break;
        } else {
            desc = 'No description available.';
        }
    }

    $('.modal-body').html(desc);
});

