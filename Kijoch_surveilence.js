window.onload = function() {
    surveilence();
    next();
    back();

}

function surveilence(ID) {
    var cam = document.getElementById('main');
    if (cam.src != document.getElementById(ID).src) {
        cam.src = 'img/' + ID + '.jpg';
    }
}

function next() {
    var cam = document.getElementById('main');
    var now = parseInt(cam.src.slice((cam.src.search(".jpg") - 1), ((cam.src.search(".jpg"))))); //wyszukanie numeru aktualnej kamery

    if (now == 4) {
        now = 1;
        cam.src = 'img/ch' + now + '.jpg';
    } else {
        now = (now + 1);
        cam.src = 'img/ch' + now + '.jpg';
    }
}

function back() {
    var cam = document.getElementById('main');
    var now = parseInt(cam.src.slice((cam.src.search(".jpg") - 1), ((cam.src.search(".jpg")))));

    if (now == 1) {
        now = 4;
        cam.src = 'img/ch' + now + '.jpg';
    } else {
        now = (now - 1);
        cam.src = 'img/ch' + now + '.jpg';
    }
}