

const cube = document.getElementById('cube');
cube.addEventListener('click', moveCubeToRandomPosition);

const cubeText = document.getElementById('cube-text');

var cubeCounter = 0;

//viewport size variables
var width = window.innerWidth;
var height = window.innerHeight;

var randomX;
var randomY;

function moveCubeToRandomPosition() {
    cubeCounter++;
     //random X Y variables set a random number between 0 and width
    randomX = Math.floor(Math.random() * width);
    randomY = Math.floor(Math.random() * height);

    cubeText.innerHTML = cubeCounter;
    cube.style.transform = `translate3d(${randomX}px, ${randomY}px, 0px)`;
}