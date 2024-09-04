let boxes = document.querySelectorAll('.box')
let rest_btn = document.querySelector('.restBtn')
let new_btn = document.querySelector('#new-button')
let msgcontainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let trunO = true //playerO playerX
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (trunO === true) {
      box.innerHTML = 'O'
      box.style.color = 'black'
      trunO = false
    } else {
      box.innerHTML = 'X'
      box.style.color = '#b0413e'
      trunO = true
    }
    box.disabled = true

    checkWinner()
  })
})

let winPetterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

const checkWinner = () => {
  for (let pattern of winPetterns) {
    let pos1Val = boxes[pattern[0]].innerHTML
    let pos2Val = boxes[pattern[1]].innerHTML
    let pos3Val = boxes[pattern[2]].innerHTML

    if (pos1Val !== '' && pos2Val !== '' && pos3Val !== '') {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log('winner', pos1Val)
        ShowWinner(pos1Val)
      }
    }
  }
}
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true
  }
}

const ShowWinner = (winner) => {
  msg.innerHTML = `Congratulations, Winner is ${winner}`
  msgcontainer.classList.remove('hide')
  disableBoxes()
}

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false
    box.innerHTML = ''
  }
}

const resetGame = () => {
  trunO = true
  enableBoxes()
  msgcontainer.classList.add('hide')
}

new_btn.addEventListener('click', resetGame)
rest_btn.addEventListener('click', resetGame)
