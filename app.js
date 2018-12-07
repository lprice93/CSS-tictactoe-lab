let cells = document.querySelectorAll('.row div');
let CurrentPlayer = 'X';
cells.forEach(function (cell) {
    cell.addEventListener('click', cellClicked);
});

console.log(cells);

/* above forEach is shorthand for below.
for(let i =0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}; */

function cellClicked() {
    console.log(event.target);
    /* checks to make sure cell is not empty */
    if (event.target.textContent !== "") {
        return;
    }
    event.target.textContent = CurrentPlayer;
    togglePlayer(); /* this nests a function inside of a function */
    checkWinLoseOrDraw(); /* this invokes a function within a function of a function */
};

function checkWinLoseOrDraw() {
    if (checkTop() || checkMiddle() || checkBottom() || checkVertical1() || checkVertical2() || checkVertical3() || checkDiagonalLeft() || checkDiagonalRight()) {
        console.log('We have a winner!');
    } else if (checkWinLoseOrDraw !== false) {
        console.log('We have a draw!');
    }
}

function checkTop() {
    if (cells[0].textContent === cells[1].textContent && cells[2].textContent === cells[0].textContent && !isEmpty(0, 1, 2)) {
        return true;
    }
}

function checkMiddle() {
    if (cells[3].textContent === cells[4].textContent && cells[5].textContent === cells[3].textContent && !isEmpty(3, 4, 5)) {
        return true;
    }
}

function checkBottom() {
    if (cells[6].textContent === cells[7].textContent && cells[8].textContent === cells[6].textContent && !isEmpty(6, 7, 8)) {
        return true;
    }
}

function checkVertical1() {
    if (cells[0].textContent === cells[3].textContent && cells[6].textContent === cells[0].textContent && !isEmpty(0, 3, 6)) {
        return true;
    }
}

function checkVertical2() {
    if (cells[1].textContent === cells[4].textContent && cells[7].textContent === cells[1].textContent && !isEmpty(1, 4, 7)) {
        return true;
    } else {

    }
}

function checkVertical3() {
    if (cells[2].textContent === cells[5].textContent && cells[8].textContent === cells[2].textContent && !isEmpty(2, 5, 8)) {
        return true;
    }
}

function checkDiagonalLeft() {
    if (cells[0].textContent === cells[4].textContent && cells[8].textContent === cells[0].textContent && !isEmpty(0, 4, 8)) {
        return true;
    }
}

function checkDiagonalRight() {
    if (cells[2].textContent === cells[4].textContent && cells[6].textContent === cells[2].textContent && !isEmpty(2, 4, 6)) {
        return true;
    }
}

function isEmpty(a, b, c) {
    if (cells[a].textContent === "" || cells[b].textContent === "" || cells[c].textContent === "") {
        return true;
    }
}

function togglePlayer() {
    if (CurrentPlayer === 'X') {
        CurrentPlayer = 'O';
    } else {
        CurrentPlayer = 'X';
    }
}


/*
row.addEventListener("click", myFunction);

function myFunction() {
    onclick("X");
} */
function checkMiddle() {
    if (cells[3].textContent === cells[4].textContent && cells[5].textContent === cells[3].textContent && !isEmpty(3, 4, 5)) {
        return true;
    }
}

function checkBottom() {
    if (cells[6].textContent === cells[7].textContent && cells[8].textContent === cells[6].textContent && !isEmpty(6, 7, 8)) {
        return true;
    }
}

function checkVertical1() {
    if (cells[0].textContent === cells[3].textContent && cells[6].textContent === cells[0].textContent && !isEmpty(0, 3, 6)) {
        return true;
    }
}

function checkVertical2() {
    if (cells[1].textContent === cells[4].textContent && cells[7].textContent === cells[1].textContent && !isEmpty(1, 4, 7)) {
        return true;
    } else {

    }
}

function checkVertical3() {
    if (cells[2].textContent === cells[5].textContent && cells[8].textContent === cells[2].textContent && !isEmpty(2, 5, 8)) {
        return true;
    }
}

function checkDiagonalLeft() {
    if (cells[0].textContent === cells[4].textContent && cells[8].textContent === cells[0].textContent && !isEmpty(0, 4, 8)) {
        return true;
    }
}

function checkDiagonalRight() {
    if (cells[2].textContent === cells[4].textContent && cells[6].textContent === cells[2].textContent && !isEmpty(2, 4, 6)) {
        return true;
    }
}

function isEmpty(a, b, c) {
    if (cells[a].textContent === "" || cells[b].textContent === "" || cells[c].textContent === "") {
        return true;
    }
}

function togglePlayer() {
    if (CurrentPlayer === 'X') {
        CurrentPlayer = 'O';
    } else {
        CurrentPlayer = 'X';
    }
}


/*
row.addEventListener("click", myFunction);

function myFunction() {
    onclick("X");
} */
