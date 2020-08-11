const player = (name, marker) => {
    return {name, marker}
}

const gameBoard = (() => {
    let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

    const getBoard = () => board

    const getCell = (cellId) => board[cellId]

    const updateBoard = (cell, mark) => board[cell] = mark

    const clearBoard = () => board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

    const win = (mark) => {
        let combos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
        ]

        let win

        combos.forEach(combo => {
            let idx = combo.map(index => board[index])
            if(idx.every(cell => cell === mark)) {
                win = combo
            }
        })
        return win || false
    }

    const tie = () => {
        return board.every(cell => cell === 'x' || cell === 'o')
    }

    return {getBoard, getCell, updateBoard, clearBoard, win, tie}
})()

const game = (() => {
    const table = document.querySelector('.game-board')
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

    const render = () => {
        cells.forEach(cell => {
            cell.innerHTML = gameBoard.getCell(cell.id - 1)
        }) 
    }

    const getPlr = () => {
        return (turn % 2 === 0) ? plr2 : plr1
    }

    const checkStatus = (plr) => {
        let combo = gameBoard.win(plr.marker)
        if(combo != false) {
            alert(`${getPlr().name} wins!`)
            return true
        } else if (gameBoard.tie()) {
            alert('It\'s a tie')
            return false
        } else {
            return false
        }
    }

    const move = (e) => {
        let plr = getPlr()
        if(e.target.innerText === '') {
            gameBoard.updateBoard(e.target.id - 1, plr.marker)
            render()

            if(checkStatus(plr)) {
                restart()
            } else {
                turn ++
            }
        }
    }

    const restart = () => {
        gameBoard.clearBoard()
        turn = 1
        render()
    }

    table.classList.add('hidden')
    plrContainer.classList.add('hidden')

    options.forEach(option => {
        option.addEventListener('click', function(e){
            gameOptions.classList.add('hidden')
            plrContainer.classList.remove('hidden')
        })
    })

    cells.forEach(cell => {
        cell.addEventListener('click', move)
    })

    resetBtn.addEventListener('click', restart)

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        table.classList.remove('hidden')
        gameOptions.classList.add('hidden')
        plrContainer.classList.add('hidden')

        plr1 = player(this.elements['name-1'].value, 'x')
        leftName.innerHTML = this.elements['name-1'].value
        plr2 = player(this.elements['name-2'].value, 'o')
        rightName.innerHTML = this.elements['name-2'].value
    })
})()