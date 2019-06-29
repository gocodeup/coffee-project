"use strict";

var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'}
];
var coffeesAuto = ["Light City", "Half City", "Cinnamon", "City", "American", "Breakfast", "High", "Continental", "New Orleans", "European", "Espresso", "Viennese", "Italian", "French"];


var reversed = coffees.reverse();

var tbody = document.querySelector('#coffees');



function addNewCoffee(e) {
    e.preventDefault();
    var theNewCoffee = document.getElementById("myInput2").value;
    var starbucksCoffee = {
        id: (coffees.length + 1),
        name: theNewCoffee,
        roast: document.getElementById("add-roast-selection").value
    };
    coffees.push(starbucksCoffee);
};

function addNewCoffeeAuto() {
    var theNewCoffee = document.getElementById("myInput2").value;
    coffeesAuto.push(theNewCoffee);
};

document.getElementById("submitButton").addEventListener("click", addNewCoffee);
document.getElementById("submitButton").addEventListener("click", addNewCoffeeAuto);
document.getElementById("submitButton").addEventListener("click", renderAgain);

 function renderAgain() {
     tbody.innerHTML = renderCoffees(coffees);
 }

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

tbody.innerHTML = renderCoffees(coffees);


/* this is some code i found that should supposedly alter the list of coffees as the user types out a coffee name. i can't get it to work but it might be something worth playing around with */

// var $coffees = $('#coffees'); $('#myInput').onkeydown(function () {
//     var re = new RegExp($(this).valueOf(), 'i'); $coffees.show().filter(function () {
//         return !re.test($(this).test());
//     })
// })


function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) { //up
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById("myInput"), coffeesAuto);

function switchCoffees() {
        var html = '';
        var filterVal = document.getElementById('roast-selection').value;
        console.log(filterVal);
    coffees.forEach(function (coffee) {
        if (coffee.roast === filterVal) {
            html += renderCoffee(coffee);
        }
        tbody.innerHTML = html;
    });
}











