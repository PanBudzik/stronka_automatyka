window.onload = function() {
    temp();
}

var a = 0,
    b = 40;
var temperature = Math.floor(Math.random() * (b - a + 1) + a);
var heating = false,
    ventilation = false;
console.log(heating);

function temp() {
    if (heating == true) {
        alert("Jest aktualnie " + temperature + "℃, ogrzewanie włączone")
    } else if (ventilation == true) {
        alert("Jest aktualnie " + temperature + "℃, wentylacja włączona")
    } else if ((temperature > 22) && (heating == false)) {
        document.getElementById('tool').src = "img/hot.png";
        if (confirm("Jest aktualnie " + temperature + "℃, czy włączyć wentylację?")) {
            ventilation = true;
        } else {
            document.getElementById('tool').src = "img/hot_alert.png";
        }
    } else if ((temperature < 15) && (ventilation == false)) {
        document.getElementById('tool').src = "img/cold.png";
        if (confirm("Jest aktualnie " + temperature + "℃, czy włączyć ogrzewanie?")) {
            heating = true;
        } else {
            document.getElementById('tool').src = "img/cold_alert.png";
        }
    } else
        alert("Jest aktualnie " + temperature + "℃, temperatura w normie.");
}