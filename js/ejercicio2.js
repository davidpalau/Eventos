
let capa1;
let capa2;

capa1 = document.getElementById("capa1");
capa2 = document.getElementById("capa2");

document.addEventListener('drag', handleDragStart);
document.addEventListener('dragenter', elArrastrado);

function handleDragStart(e) {
    document.getElementById("capa1").style.opacity = '0.5';

}
function elArrastrado(e) {
    document.getElementById("capa1").style.opacity = '0.5';

}