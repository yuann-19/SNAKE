const lob=new Audio("lobi.mp3");
const click=new Audio("click.mp3");
lob.loop=true;
document.addEventListener('DOMContentLoaded', function() {
    lob.play();
});
const boton=document.getElementById('btn');
boton.addEventListener("click",
function(){
click.play();
window.location.href = 'https://yuann-19.github.io/SNAKE-GAME/';});
var miAudio = document.getElementById('miAudio');
miAudio.play();
