function createGrid (squares) {
    let newDiv = [];
    for (let i = 1; i <= squares; i++) {
        newDiv[i] = document.createElement('div');
        newDiv[i].classList.add(`div${i}`);
        document.querySelector('.grid-container').appendChild(newDiv[i]);
    }
}

createGrid(16);