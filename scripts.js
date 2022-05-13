//Assign all elements
const grid = Array.from(document.querySelectorAll('.grid'));
const sizeBtn = document.querySelectorAll('.size-button');
const clearBtn = document.querySelector('.clear-button');
const rainbowBtn = document.getElementById('rainbow');
const blackBtn = document.getElementById('black');
const eraseBtn = document.getElementById('eraser');

//On loading page
window.addEventListener('load', createDiv(256));
let currentMode = 'black'

//Set color mode
blackBtn.onclick = () => setCurrentMode ('black')
rainbowBtn.onclick = () => setCurrentMode ('rainbow')
eraseBtn.onclick = () => setCurrentMode ('erase')
clearBtn.onclick = () => {
    clearGrid();
    createDiv(256);
}

function setCurrentMode (newMode) {
    currentMode = newMode
}

function clearGrid () {
    const bigBox = document.getElementById("big-box");
    bigBox.innerHTML = ''
}

//Change grid size by button input
sizeBtn.forEach(button => button.addEventListener('click', function(e){
    clearGrid ();
    userInput = e.target.id;
    createDiv(userInput); 
}))

//Create the square divs
function createDiv (userInput) {
    for (let i = 0; i < userInput; i++) {
        const newDiv = document.createElement('div');
        newDiv.appendChild(document.createTextNode(``));
        newDiv.setAttribute("class", "square-div");
        newDiv.setAttribute("id", `Square #${i}`);
        let squareSize = Math.sqrt((360000 / userInput));
        let roundedSquareSize = Math.round(squareSize * 100) / 100;
        newDiv.style.width = roundedSquareSize + 'px';
        newDiv.style.height = roundedSquareSize + 'px';
        grid[0].appendChild(newDiv);
    }
}

//Color on click
function colorOnClick (elem) {
    if(elem.target.classList == 'square-div') {
        if(currentMode == 'black'){
            let square = elem.target
            square.style.backgroundColor = 'black'
        } else if (currentMode == 'rainbow') {
            let square = elem.target
            square.style.backgroundColor = getRandomRgb()
        } else if (currentMode == 'erase'){
            let square = elem.target;
            square.style.backgroundColor = 'white';
        }
    }
}

//Generate random RGB color
function getRandomRgb (){
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

//Mouse event
let mouseIsDown = false;
window.addEventListener('mousedown', () => {mouseIsDown = true})
window.addEventListener('mouseup', () => {mouseIsDown = false})

//ETCH-A-SKETCH !
window.addEventListener('mousemove', (event) => {
    if (mouseIsDown) {
        colorOnClick(event)
    } else if (mouseIsDown == false) {
        return
    }    
})

window.addEventListener('click', (event) => {
    colorOnClick(event);
});