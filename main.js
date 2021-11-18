"use strict"

/** added var userInput for the addEventListener userInput*/
    // var userInput = document.querySelector(coffees.reverse());
    //
    // var userSearch = document.getElementById('user-search');
var userSearchValue = document.getElementById('user-search').value;
var userSearchValueLower = userSearchValue.toString().toLowerCase();
var searchBar = document.querySelector("#userInput")
var submitChange = document.querySelector('#submit');
var listBody = document.querySelector('#coffees');

function addCoffee(e) {
    e.preventDefault();
    var userInput = document.getElementById('user-addCoffee').value;
    var message = document.querySelector('message');
    var userSelectRoast = roastSelection2.value;
    var id = coffee.length - 1;  //console.log(userInput);  /** for testing */
    if (userInput !== null) {
        testCoffeeNameIsNew(userInput);

        if ((coffeeExists === false) && (userSelectRoast !== "select roast")) {
            var newCoffee = {
                id: id,
                name: userInput,
                roast: userSelectRoast
            };
            coffees.push(newCoffee);
            //console.log(coffees);  /**for testing */
            $('#myForm')[0].reset();
        } else {
            message.timeout(function () {
                msg.remove();
            }, 3000)  // wooohoo!! TIMER!!
        }
    } else {

        message.innerHTML = "please enter name of coffee";
        setTimeout(function () {
            msg.remove();
        }, 3000);
        { //woohoo!! another timer
        }
        updateCoffees(e);
        {
        }

        function testCoffeeNameIsNew(userInput) {
            for (var i = 0; i < coffees.length; i++) {
                if (userInput === coffees[i].name) {
                    coffeeExists = true;
                }
            }
            return coffeeExists;
        }
        function myFunction(){
            var input, filter, ul, li, a, i, p, eachCoffee, txtValue;
            input = document.getElementById('userInput');
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUl");
            li = ul.getElementById('li');
            p = document.getElementsByTagName('p');
            eachCoffee = document.getElementsByClassName('eachCoffee');

            for(i = 0; i < li.length; i++){
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent  ||  a.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > 1) {
                        li[i].style.display = "";
                        p[i].style.display = "";
                        eachCoffee[i].style.display = "";
                    }else{
                        li[i].style.display = "none";
                        p[i].style.display = "none";
                        eachCoffee[i].style.display ="none";
                    }
                  }
            }



        /**added function for the userInput for the search */
        function userSearch(e) {
            var userKeyStroke = userInput.value;
            userKeyStroke = userKeyStroke.toLowerCase();
            var searchedCoffees = []; //this was never queried, fixed .innerHTML below
            updateCoffees(e).forEach(function (coffee) {
                if (coffee.name.toLowerCase().includes(userKeyStroke)) {
                    searchedCoffees.push(coffee);
                }
            });

            listBody.innerHTML = renderCoffee(searchedCoffees);
        }


        function renderCoffee(coffee) {
            var html = '<tr class="Coffee>';
            html +='<td>' + coffee.id + '</td>';
            html += '<td>' + coffee.name + '</td>';
            html += '<td>' + coffees.roast + '</td>';
            html += '</tr>';

            return html;
        }
        // function renderCoffee(coffee){
        //     var html = '<ul id="myUl" class="coffee">';
        //     html += '<div class=eachCoffee>'
        //     html += '<li><a href="#">' + coffee.name + '</a></li>';
        //     html += '<p>' + coffee.roast + '</p>';
        //     html += '<div class="rearCoffee">' + coffee.description + '</div>'
        //     html += '</div>';
        //     return html;
        // }

        // var html = '<tr class="coffee">';
        // html += '<td>' + coffee.id + '</td>';
        // html += '<td>' + coffee.name + '</td>';
        // html += '<td>' + coffee.roast + '</td>';
        // html += '</tr>';
        function renderCoffees(coffees) {
            var html = '';
            for (var i = coffees.length - 1; i >= 0; i--) {
                html += renderCoffee(coffees[i]);
            }
            return html;
        }
        listBody.innerHTML = renderCoffees(coffees);
        function updateCoffees(e) {
            e.preventDefault(); // don't submit the form, we just want to update the data
            var selectedRoast = roastSelection.value;
            var filteredCoffees = [];

            coffees.forEach(function (coffee) {
                if (coffee.roast === selectedRoast) {
                    filteredCoffees.push(coffee);
                }
            });
            listBody.innerHTML = renderCoffees(filteredCoffees);
            return filteredCoffees;
        }
        let updatedList = '';
        function updateCoffees(){
            let aCoffee = {};
            aCoffee.id = (coffees.length + 1);
            aCoffee.name = (document.getElementById("coffee-name").value.trim());
            aCoffee.roast = (document.getElementById("coffee-roast").value.trim().toLowerCase());
            coffees.push(aCoffee);
            localStorage.setItem("coffees", JSON.stringify(coffees));
            document.getElementById("coffee-name").value = "";
            document.getElementById("coffee-roast").value = "";
        }

        let storedCoffees = localStorage.getItem("coffees");
        updatedList = JSON.parse(storedCoffees);

        if(updatedList === null) {
            listBody.innerHTML = renderCoffees(coffees);
        }else{
            listBody.innerHTML = storedCoffees(updatedList);
        }
        submitChange.addEventListener('change', updateCoffees);


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
        var coffeeExists = false;

        var submitButton = document.querySelector('#submitNewCoffee');
        var roastSelection = document.querySelector('#roast-selection');
        var roastSelection2 = document.querySelector('#roast-selection2');


        userSearch.addEventListener('keyup', updateCoffees);
         listBody.innerHTML = renderCoffees(coffees);

        submitButton.addEventListener('click', updateCoffees);
        userInput.addEventListener('keyup', userSearch);
        roastSelection2.addEventListener('change', updateCoffees);
    }
 
