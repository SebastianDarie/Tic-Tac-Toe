const player = (name, marker) => {
    return {name, marker}
}

const gameBoard = (() => {
    let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

    const getBoard = () => board

    const getCell = (cellId) => board[cellId]

    const updateBoard = (cell, mark) => board[cell] = mark

    const clearBoard = () => board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]



    //return {getBoard, getCell, updateBoard, clearBoard, checkWin, checkTie}
})()

const game = (() => {
    const gameBoard = document.querySelector('.game-board')
    const cells = Array.from(document.querySelectorAll('.cell'))
    const gameOptions = document.querySelector('.game-options')
    const options = document.querySelectorAll('.option')
    const plrContainer = document.querySelector('.player-container')
    const form  = document.querySelector('.form-select')
    const leftName = document.querySelector('#left')
    const rightName = document.querySelector('#right')
    const resetBtn = document.querySelector('#reset')

    let turn = 1

    let plr1 = player('', 'x')
    let plr2 = player('', 'o')

    gameBoard.classList.add('hidden')
    plrContainer.classList.add('hidden')

    options.forEach(option => {
        option.addEventListener('click', function(e){
            gameOptions.classList.add('hidden')
            plrContainer.classList.remove('hidden')
        })
    })

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        gameBoard.classList.remove('hidden')
        gameOptions.classList.add('hidden')
        plrContainer.classList.add('hidden')

        plr1 = player(this.elements['name-1'].value, 'x')
        leftName.innerHTML = this.elements['name-1'].value
        plr2 = player(this.elements['name-2'].value, 'o')
        rightName.innerHTML = this.elements['name-2'].value
    })
})()