function createGrid (squares) {
    let numberOfDivs = squares * squares;
    let newDiv = [];
    for (let i = 1; i <= numberOfDivs; i++) {
        newDiv[i] = document.createElement('div');
        newDiv[i].classList.add(`div${i}`);
        newDiv[i].classList.add('grid-squares');
        document.querySelector('.grid-container').appendChild(newDiv[i]);
        newDiv[i].addEventListener('mouseover', () => {
            if (rainbow == false) {
                newDiv[i].classList.add('color-div');
            }
            else if (rainbow == true) {
                newDiv[i].style.cssText += (`background-color: rgb(${randomColors()});`); 
            }
        });
    }
    document.querySelector('.grid-container').style.cssText += (`grid-template-columns: repeat(${squares}, 1fr);`);
    document.querySelector('.grid-container').style.cssText += (`grid-template-rows: repeat(${squares}, 1fr);`);
}

function randomColors() {
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    let cssString = `${redValue}, ${greenValue}, ${blueValue}`;
    console.log(cssString);
    return cssString;
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('toggle-animation');
}

let gridWidth = 16;
let rainbow = false;

const changeGridButton = document.querySelector('.grid-size');
const resetButton = document.querySelector('.reset');
const rainbowButton = document.querySelector('.rainbow');

changeGridButton.addEventListener('click', () => {
    changeGridButton.classList.add('toggle-animation');
    changeGridButton.addEventListener('transitionend', removeTransition);

    let gridDivs = document.querySelectorAll('.grid-squares');

    for (let i = 0; i < gridWidth*gridWidth; i++) {
        document.querySelector('.grid-container').removeChild(gridDivs[i]);
    }
    gridWidth = prompt("New grid size? Type a width!", "Size");
    while (gridWidth > 100) {
        gridWidth = prompt("Too high! Try again:");
    }
    createGrid(gridWidth);
});

resetButton.addEventListener('click', () => {
    resetButton.classList.add('toggle-animation');
    resetButton.addEventListener('transitionend', removeTransition);
    let resetDivs = document.querySelectorAll('.grid-squares');

    for (let i = 0; i < resetDivs.length; i++) {
        resetDivs[i].classList.remove('color-div');
        resetDivs[i].style.cssText = '';
    }
});

rainbowButton.addEventListener('click', () => {
    rainbowButton.classList.add('toggle-animation');
    rainbowButton.addEventListener('transitionend', removeTransition);
    if (rainbow == true) {
        rainbow = false;
        rainbowButton.style.cssText = '';
    }
    else {
        rainbow = true;
        rainbowButton.style.cssText = `background-color: rgb(${randomColors()})`;
    }
});

createGrid(gridWidth);