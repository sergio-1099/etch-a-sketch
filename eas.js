function createGrid (squares) {
    let numberOfDivs = squares * squares;
    let newDiv = [];
    for (let i = 1; i <= numberOfDivs; i++) {
        newDiv[i] = document.createElement('div');
        newDiv[i].classList.add(`div${i}`);
        newDiv[i].classList.add('grid-squares');
        document.querySelector('.grid-container').appendChild(newDiv[i]);
        newDiv[i].addEventListener('mouseover', () => {
            newDiv[i].classList.add('color-div');
        });
    }
    document.querySelector('.grid-container').style.cssText += (`grid-template-columns: repeat(${squares}, 1fr);`);
    document.querySelector('.grid-container').style.cssText += (`grid-template-rows: repeat(${squares}, 1fr);`);
}

let gridWidth = 16;
createGrid(gridWidth);

const changeGridButton = document.querySelector('.grid-size');

changeGridButton.addEventListener('click', () => {
    let gridDivs = document.querySelectorAll('.grid-squares');

    for (let i = 0; i < gridWidth*gridWidth; i++) {
        document.querySelector('.grid-container').removeChild(gridDivs[i]);
    }
    gridWidth = prompt("New grid size? Type a width!", "Size");
    while (gridWidth > 100) {
        gridWidth = prompt("Too high! Try again:");
    }
    createGrid(gridWidth);
})