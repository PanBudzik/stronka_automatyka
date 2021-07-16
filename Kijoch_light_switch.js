window.onload=function(){
    light_switch();
}

var paths = ['img/light_on.png','img/light_off.png'];
var is_off = true;

function light_switch (){
    var picture = document.getElementById('bulb');
            if(is_off)
            {
            picture.src = paths[0];
            is_off=false;
            alert("Światło włączone");
            }
            else
            {
                picture.src = paths[1];
                is_off=true;
                alert("Światło wyłączone");
            }
}
