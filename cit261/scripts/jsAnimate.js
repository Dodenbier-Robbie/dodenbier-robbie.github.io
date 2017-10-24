function sunSet() {
    var sun = document.getElementById("animate");
    var sky = document.getElementById("container");
    var pos = 5;
    var id = setInterval(frame, 10);
    sky.style.transition = "opacity 3s linear 0s";
    sky.style.opacity = 0;
    
    function frame() {
        if (pos == 400) {
        clearInterval(id);
        sun.style.transition = "borderRadius 0s opacity 0s linear 0s";
        sun.style.borderRadius = 0;
        sun.style.opacity = 0;
        } else {
        pos++; 
        sun.style.top = pos + 'px';
        }
    }
}

function sunRise() {
    var sun = document.getElementById("animate");
    var sky = document.getElementById("container");
    var pos = 300;
    var id = setInterval(frame, 10);    
    sky.style.transition = "opacity 3s linear 0s";
    sky.style.opacity = 1;
    
    function frame() {
        if (pos == 5) {
        clearInterval(id);
        } else {
        pos--; 
        sun.style.top = pos + 'px';
        sun.style.borderRadius = "50px";
        sun.style.transition = "opacity 0s linear 0s";
        sun.style.opacity = 1;
        }
    }
}