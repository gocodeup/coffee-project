var display = {
    1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    2: [1, 2, 3],
    3: [4, 5, 6],
    4: [7, 8, 9, 10, 11, 12, 13, 14],
}

function selectChanged() {
    var sel = document.getElementById("select");
    for (var i = 1; i < 15; i++) {
        document.getElementById("box" + i).classList.add("hidden");
    }
    display[sel.value].forEach(function(i) {
        document.getElementById("box" + i).classList.remove("hidden");
    });
}




