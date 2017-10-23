function myAnimate() {
    var sun = document.getElementById("animate"); 
    var pos = 300;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 0) {
        clearInterval(id);
        } else {
        pos--; 
        sun.style.top = pos + 'px'; 
        }
    }
}