//Assign all elements
const sizeButton = document.querySelectorAll('.size-button');
const container = Array.from(document.querySelectorAll('.main-container'));
const blocks = Array.from(document.querySelectorAll('.square-div'));
const clearButton = document.querySelector('.clear-button');
const rainbowButton = document.querySelector('.rainbow');

//On loading page
window.addEventListener('load', createDiv(256));


//Get the player input and set the divs
sizeButton.forEach(button => button.addEventListener('click', function(e){
    clear ();
    userInput = e.target.id;
    createDiv(userInput); 
}))

//Create the square divs
function createDiv (userInput) {
    for (let i = 0; i < userInput; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute("class", "square-div");
        newDiv.setAttribute("id", `Square #${i}`);
        newDiv.setAttribute('tabindex',`${i}`);
        newDiv.appendChild(document.createTextNode(``));
        let squareSize = Math.sqrt((160000 / userInput));
        let roundedSquareSize = Math.round(squareSize * 100) / 100;
        newDiv.style.width = roundedSquareSize + 'px';
        newDiv.style.height = roundedSquareSize + 'px';
        container[0].appendChild(newDiv);
    }
}

//Clear function on player selection
function clear () {
    const bigBox = document.getElementById("big-box");
    bigBox.innerHTML = ''
}

//
clearButton.addEventListener('click', () => {
    clear();
    createDiv(256);
})

//Color on click
function colorOnClick (colorInput) {
    for (let i = 0; i < container.length; i++){
        container[i].addEventListener('click', function(e) {
            e.target.style.backgroundColor = colorInput;
        });
    }
}   


//Generate random RGB color
function getRandomRgb (){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
}

console.log(getRandomRgb())
colorOnClick(getRandomRgb());