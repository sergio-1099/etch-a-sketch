function createGrid (squares) {
    let numberOfDivs = squares * squares;
    let newDiv = [];
    for (let i = 1; i <= numberOfDivs; i++) {
        newDiv[i] = document.createElement('div');
        newDiv[i].classList.add(`div${i}`);
        newDiv[i].classList.add('gridSquares');
        document.querySelector('.grid-container').appendChild(newDiv[i]);
    }
}

createGrid(16);