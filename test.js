console.log("hello world");

var userSearch = document.getElementById('search');

console.log(userSearch.value);

document.querySelector('form.search-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(userSearch.value);
});