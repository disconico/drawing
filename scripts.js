//Assign all elements
const container = document.getElementsByClassName('main-container');

//Create div function
function createDiv (userInput) {
    for (let i = 0; i < userInput; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute("class", "square-div");
        newDiv.setAttribute("id", `Square #${i}`);
        newDiv.appendChild(document.createTextNode(`I'm the div ${i+1}`));
        container[0].appendChild(newDiv);
    }
}



//Go
createDiv(16);
