"use strict"

var array=["Advent","Advent calendar","Angel","Announcement","Anticipation","Appreciation","Aroma","Artificial tree","Awe","Baby","Baking","Balsam","Beauty","Belief","Bells","Belonging","Bethlehem","Birth","Blessing","Blitzen","Blizzard","Blustery","Boots","Bough","Bow","Box","Boxing Day","Buche de Noel","Buffet","Camel","Candle","Candle light","Candy","Candy cane","Cap","Card","Caring","Carol","Carolers","Caroling","Carols","Cedar","Celebrate","Celebration","Ceremony","Charity","Cheer","Chestnuts","Children","Chill","Chimney","Chocolate","Christmas","Christmas card","Christmas carol","Christmas cookie","Christmas day","Christmas Eve","Christmas future","Christmas gift","Christmas lights","Christmas miracle","Christmas morning","Christmas pageant","Christmas past","Christmas play","Christmas present","Christmas star","Christmas tree","Christmas tree stand","Christmas wish","Christmastide","Church","Cider","Cloves","Coal","Comet","Comfort","Communication","Community","Companionship","Cookie","Cooking","Cornucopia","Counting","Cranberries","Cranberry sauce","Crèche","Crowds","There are many gifts under the Christmas tree, and the best one is you! TWEET THIS","Dancer","Dancing","Dasher","December","December 25","Decorate","Decorations","Display","Dolls","Donations","Donner","Dream","Dreidel","Dressing","Drinking","Duck","Eating","Ebenezer Scrooge","Effort","Eggnog","Elf","Elves","Email","Embrace","Emmanuel","Entertain","Entertainment","Epiphany","Eve","Evergreen","Exchange","Expectation","Faith","Familiar","Familiarity","Family","Family reunion","Father Christmas","Feast","Feliz Navidad","Fervor","Festival","Festive","Figgy pudding","Fir","Fireplace","Firewood","Flat-bread","Forgiveness","Frankincense","Freedom","Fresh snowfall","Friends","Friendship","Frosty","Frosty the snowman","Fruitcake","Gala","Garland","Gather","Gathering","Generations","Generosity","Ghost of Christmas past","Gift","Gift box","Gift exchange","Gift-giving","Gift list","Gingerbread","Gingerbread house","Gingerbread man","Gingerbread woman","Give","Glad tidings","Glitter","Gloria","God's holy son","Gold","Goodwill","Goose","Gourmet","Grace","Gratitude","Gravy","Green","Greenery","Greens","Greetings","Grinch","Group","Guest","Ham","Hanukkah","Happiness","Hard sauce","Harvest","Heart","Heartland","Heaven","Heritage","Holding hands","Holiday","Holiness","Holly","Home","Homeward","Honor","Hope","Host","Hostess","Hot chocolate","Hot cider","Hug","Humility","Hymn","Ice","Ice skates/skating","Icicle","Illumination","Infant","Inn","Innocence","Invitation","Ivy","Jack Frost","Jack-in-the-box","Jerusalem","Jesus (Christ)","Jingle bells","Jolly","Joseph","Journey","Joy","Joyeux noel","Karamu","Kibbe","Kinara","King","King Wenselaus","Kiss","Krampus","Kris Kringle","Kwanzaa","Lantern","Laughter","Letter (to Santa)","Lighting","Lights","List","Little drummer boy","Log","Lord","Love","Luminaria","Lump of coal","Magi","Magic","Mail","Majesty","Manger","Mantle","Mary","Mass","Meat and spices","Memories","Menorah","Merriment","Merry Christmas","Message","Midnight","Mince pie","Mincemeat","Minister","Miracle (of Christmas)","Mirth","Mistletoe","Mittens","Mosque","Mrs. Claus (Jessica)","Music","Music box","Myrrh","Myths","Nativity","Naughty","Network","New fallen snow","Night before Christmas","Noel","North Pole","Nostalgia","Nut","Nutcracker","Nutmeg","Observance","Occasion","Open","Ornaments","Oven","Package","Packing","Pageant","Pageantry","Paper (whites)","Parade","Partridge","Party","Peace","Peace dove","Peppermint","Phone call","Pie","Pine","Pine tree","Pinecone","Pixie","Plum pudding","Poinsettia","Popcorn string","Post office","Prancer","Prayer","Presents","Pride","Priest","Prince of Peace","Priorities","Proclaim","Program","Prophecy","Pumpkin pie","Punch","Purity","Quality (time)","Quantity","Questions","Quince pie","Quirky","Rabbi","Ramadan","Reason for the season","Receive","Reconciliation","Red","Reflection","Refuge","Reindeer","Rejoice","Relationships","Relatives","Religion","Reminiscence","Resolutions","Return of light","Reunion","Reveal","Revel","Reverence","Ribbon","Ritual","Rooftop","Roots","Rudolph","Sack","Sacred","Saint Nicholas","Sales","Sanctuary","Santa Claus","Santa's bag","Santa's beard","Santa's elves","Santa's helpers","Santa's list","Santa's sleigh","Santa's workshop","Sauce","Savior","Scarf","Scent","Scrooge","Season","Season's greetings","Secret Santa","Secular","Sending","Service","Sharing","Shepherd","Shopping","Silver","Silver bells","Skate","Sled","Sleigh","Sleigh bells","Snow","Snow angel","Snowball","Snowbound","Snowfall","Snowflake","Snowman","Sock","Singing","Songs","Spirit","Stable","Stand","Star","Star of David","Starlight","St. Nick","Stocking","Stocking stuffer","Straws (billygoat)","Stuffing","Sugarplum","Sundown","Surprise","Sun","Sustenance","Sweater","Symbol","Symbolism","Synagogue","Tannenbaum","Teddy bear","Temple","Tenderness","Texts","Thanks","Three Kings Day","Tidings","Tinsel","Tiny Tim","Toboggan","Together","Toy","Tradition","Train","Tranquility","Travel","Tree","Tree stand","Trimming","Trip","Trumpets","Trust","Tug","Turkey","Twinkling","Unboxing","Understanding","Unity","Universality","Unwrap","Vacation","Value","Values","Vanilla","Venison","Vixen","Visit","Volunteer","Walnuts","Warmness","Wassail","Wenceslaus","White","Winter","Winter solstice","Winter Wonderland","Wintertime","Wintry","Wise men","Wish","Wishes","Wonder","Wonderland","Workshop","Worship","Wrap","Wrapping paper","Wreath","Xmas","Yorkshire pudding","Youth","Yule","Yule Goat","Yule log","Yuletide","Zest"];

function renderCoffee(coffee) {
    var html = '<div class="row col-6 coffee">';
    html += '<h2 class="col-8">' + coffee.name + '</h2>';
    html += '<p class="col-4">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    if (selectedRoast==="all"){
        filteredCoffees=[...coffees];
    }

    div.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffeeNames(e) {
    //e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee,i) {
        if ((coffee.roast === selectedRoast || selectedRoast=== "all")&& coffee.name[0].toLowerCase()===coffeeSearch.value[0].toLowerCase()){
            if ((coffee.roast === selectedRoast || selectedRoast==="all")&& coffee.name.toLowerCase().indexOf(coffeeSearch.value.toLowerCase()) !== -1) {
                filteredCoffees.push(coffee);
            }
        }

    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

function addedCoffee(name, roast) {
    //name.preventDefault(); // don't submit the form, we just want to update the data
    if (array.includes(name)) {
        var html = '<div class="row col-6 coffee">';
        html += '<h2 class="col-6 Christmas">' + name + '</h2>';
        html += '<p class="col-6">' + roast + '</p>';
        html += '</div>';
        div.innerHTML+=html
    } else {
        var html = '<div class="row col-6 coffee">';
        html += '<h2 class="col-6">' + name + '</h2>';
        html += '<p class="col-6">' + roast + '</p>';
        html += '</div>';
        div.innerHTML+=html
    }

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide.
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
var coffeeSearch = document.forms.coffeeFilterSearch.TextInput
var input = document.querySelector(".form-select")
var search = document.querySelector(".form-control")

var userRoastSelection = document.querySelector('#userRoastSelection').value;
var coffeeSubmit = document.querySelector('#submitCoffee');

div.innerHTML = renderCoffees(coffees);

//submitButton.addEventListener('click', searchCoffeeNames);
input.addEventListener("change", function(){
    roastSelection=document.querySelector('#roast-selection');
    updateCoffees()
});

search.addEventListener("input", function() {
    searchCoffeeNames()
});

coffeeSubmit.addEventListener("click", function() {
    var name = document.forms.addCoffee.TextInput.value
    addedCoffee(name, userRoastSelection)
})
