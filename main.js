const button = document.getElementById('button');
const body = document.getElementById('body');
const colors = ['red', 'blue', 'green', 'purple', 'pink'];

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}