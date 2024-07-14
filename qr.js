
let qrimage = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");





function qrchange(){
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
}

