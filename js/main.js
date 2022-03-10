"use strict"
function selectedRoast() {
    var roastType = document.getElementById("roastType");
    if (roastType.value !== '---Select a Roast---') {
        document.getElementById("selectedRoast").value = roastType.options[roastType.selectedIndex].text;
    }
}

function customCoffee() {
    let customName = document.getElementById("custom-name").value;
    console.log(customName);
    document.getElementById("customCoffeeName").value =
        customName;
}

function renderCoffee(coffee) {
    var html = '<section class="coffee" style="list-style: none">';
    html += '<div class="d-flex mx-2">'
    // html += '<div>' + coffee.id + '</div>';
    html += '<div class="mx-2">' + '{' + coffee.name + '</div>';
    html += '<div class="my-1 text-primary">' + coffee.roast + '}' + '</div>';
    html += '</div>'
    html += '</section>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//filters by roast type including all
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all") {
            filteredCoffees.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//search bar
function search_coffee() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('coffee');

    for (var i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}
document.getElementById('searchbar').addEventListener('keyup', search_coffee);


//TODO FOR MARK: Try this -Mark:
// I present you with the cleanest way ever, in the form of the world's smallest jquery plugin:
// jQuery.fn.reverse = [].reverse;
// Usage:
//     $('jquery-selectors-go-here').reverse().each(function () {
//         //business as usual goes here
//     });
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

tbody.innerHTML = renderCoffees(coffees.reverse());

submitButton.addEventListener('click', updateCoffees);

//TODO: Sandbox:
//addeventbutton
//     $(document).ready(function(){
//     $('#addEventBtn').on('click', function(e){
//         e.preventDefault();
//         localStorage.setItem('openModal', '#addEventModal');
//         let href = e.target.href;
//         window.location.replace(href);
//     });
// })


//Supposdely local storage call
//     var modalId = localStorage.getItem('openModal');
//     if(modalId != null){
//     $(modalId).modal("show"); //use modal with id addEventModal
//     localStorage.removeItem('openModal');
// }


//TODO: review boostrap modal JS
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var modalTitle = exampleModal.querySelector('.modal-title')
    var modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = 'Add a Custom brew!'
    modalBodyInput.value = recipient
})

var send = function() {
    let newCoffee =
        {
            id: coffees.length + 1,
            name: document.getElementById('custom-name').value,
            roast: document.getElementById('roastType').value

        };

    coffees.unshift(newCoffee)

}


document.getElementById('send').addEventListener('click', send);
document.getElementById('send').addEventListener('click', updateCoffees);





document.getElementById('youtube-button').addEventListener('click', function(event){
    let p = event.target;
    if (p.classList.contains('hidden')) {
        p.classList.remove('hidden');
        event.target.innerHTML = '<iframe \n' +
            '            width=70%\n' +
            '            src="https://www.youtube.com/embed/zyS3siSF62M?start=1&autoplay=1&mute=0&enablejsapi=1"\n' +
            '            title="YouTube video player" frameborder="0"\n' +
            '            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n' +
            '            allowfullscreen>' + '</iframe>';
    } else {
        p.classList.add('hidden');
        event.target.innerHTML = 'Vibes' ;
    }
});










































//Mark playing with background images using JS


    // The function below will change the background image
    function changeBackgroundImage(bgImage) {
        document.body.style.backgroundImage = "url(" + bgImage +  ")";
        // document.body.style.backgroundImage = "url('../assets/amberRetroTerminal.png')";
        // document.body.style.backgroundImage = "url('../assets/blackMacRetroTerm.png)')";
        // document.body.style.backgroundImage = "url('../assets/blueRetroTerminal.png')";
        // document.body.style.backgroundImage = "url('../assets/greenRetroTerminal.png')";

        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";}
    // call the function when the whole DOM content is loaded
    // document.addEventListener("DOMContentLoaded", changeBackgroundImage());