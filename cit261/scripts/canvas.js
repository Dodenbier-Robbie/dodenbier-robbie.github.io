function drawCanvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var textarea = document.getElementById("code");
    var code = textarea.value;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    eval(textarea.value);
}

function clearFields() {
    location.reload();
}