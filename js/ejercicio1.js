
// A la escucha de eventos presion en tecla del teclado
document.addEventListener('keydown', (eve)=>{

   // Insertar imagen de fondo al presionar Alt + F12
   if(eve.altKey && eve.key == 'F12'){
      document.getElementById('imagen').style.backgroundImage = "url(https://source.unsplash.com/random)";
   }
});
