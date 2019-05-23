var imagenes=['../imagenes/img1.jpg','../imagenes/img2.jpg','../imagenes/img3.jpg','../imagenes/img4.jpg','../imagenes/img5.jpg','../imagenes/img6.jpg','../imagenes/img7.jpg','../imagenes/img8.jpg','../imagenes/img9.jpg','../imagenes/img10.jpg'];
var num = 1;
function aleat(){
    return Math.round(Math.random() * (10 - 1) + 1);
}
function adelante(){
    num++;
    if(num>10){
        num=1;
    }
    var foto=document.getElementById("foto");
    foto.src="../imagenes/img"+num+".jpg";
}

function atras(){
    num--;
    if(num<10){
        num=1;
    }
    var foto=document.getElementById("foto");
    foto.src="../imagenes/img"+num+".jpg";
}

function aleatorio(){
        a=aleat();
        var foto=document.getElementById("foto");
        foto.src="../imagenes/img"+a+".jpg";
}