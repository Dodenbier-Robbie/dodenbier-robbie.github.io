function changePictureWidth() {
    
    document.getElementById("myPic").style.width = "40%"; 
}

function changeFontSize() {
    document.getElementById("fontChange").style.fontSize = "20px";
}

function changeFontColor() {
    var colorValue = document.getElementById("fontColor").value;
    document.getElementById("fontChange").style.color = colorValue;
}

function clearItems() {
    window.localStorage.clear();
    location.reload();
}