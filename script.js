const lob=new Audio("lobi.mp3");
lob.loop=true;
document.addEventListener('DOMContentLoaded', function() {
    lob.play();
});
const boton=document.getElementById('btn');
boton.addEventListener("click",
function(){
window.location.href = 'https://yuann-19.github.io/SNAKE-GAME/';});
