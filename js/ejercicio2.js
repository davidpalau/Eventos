
let capa1;
let capa2;

capa1 = document.getElementById("capa1");
capa2 = document.getElementById("capa2");

document.addEventListener('drag', arrastrando);
document.addEventListener('dragend', elArrastrado);
document.addEventListener('drag', handleDragStart);
document.addEventListener('dragend', elArrastrado);
function arrastrando(e) {
    document.getElementById("capa1").style.opacity = '0.5';

}
function elArrastrado(e) {
    document.getElementById("capa1").style.opacity = '0.5';

}
