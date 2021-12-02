var imagenes= new Array("img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg" );
var posicion=0;
var img=document.querySelector(".img");
img.style.backgroundImage ='url('+imagenes[posicion]+')';

function izquierda(){
    if (posicion==0){
        posicion=3;
    }else{
        posicion--;
    }
    img.style.backgroundImage ='url('+imagenes[posicion]+')';
}
function derecha(){
    if (posicion==3){
        posicion=0;
    }else{
        posicion++;
    }
    img.style.backgroundImage ='url('+imagenes[posicion]+')';
}