const player = (name, marker) => {
    return {name, marker}
}

const gameBoard = (() => {
    let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
})

const game = (() => {
    const gameBoard = document.querySelector('.game-board')
    const plrContainer = document.querySelector('.player-container')
    // const plrSelect = document.querySelector('.player-select')
    const gameOptions = document.querySelector('.game-options')
    const options = document.querySelectorAll('.option')

    gameBoard.classList.add('hidden')
    plrContainer.classList.add('hidden')

    options.forEach(option => {
        option.addEventListener('click', function(e){
            gameOptions.classList.add('hidden')
            plrContainer.classList.remove('hidden')
        }
        )
    })
})