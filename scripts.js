//Assign all elements
const sizeButton = document.querySelectorAll('.size-button');
const container = document.querySelectorAll('.main-container');
const blocks = document.querySelectorAll('.square-div');

//Get the player input and set the divs
sizeButton.forEach(button => button.addEventListener('click', function(e){
    clear ();
    userInput = e.target.id;
    // console.log(userInput);
    createDiv(userInput); //create n divs = button pushed #
    // console.log(blocks);
    console.log(document.querySelectorAll('.square-div'));
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

//Clear function
function clear () {
    const bigBox = document.getElementById("big-box");
    bigBox.innerHTML = ''
}

//Color on hover
blocks.forEach(block => block.addEventListener('click', function (e){
    console.log(e.target);
    e.target.style.backgroundColor = "black";
}))

