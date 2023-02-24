const gameGrid = document.querySelectorAll(".game-grid");
const game = document.getElementById('game')
const button = document.querySelector('button')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const h1 = document.querySelector('h1')
const div = document.querySelector('div')
const Xcounter  = document.getElementById('Xcounter') 
const Ocounter  = document.getElementById('Ocounter') 

//X's turn first
let Oturn = false

//individual cells combined in a single variable
const cell = [one, two, three, four, five, six, seven, eight, nine]

//sets X's wins and O's wins to 0
let Xcount = 0
let Ocount = 0


//when a cell is clicked 
gameGrid.forEach( gameBoard => {
    gameBoard.addEventListener('click',  (e) => {
      cells = e.target
      
      if(cells.classList.contains('X') || cells.classList.contains('O') ){
       return
      }

      if(Oturn && h1.innerText === '') {
       cells.classList.add('O') 
       checkWin()
       checkDraw()
       changeMark()
      } else if(!Oturn && h1.innerText === ''){ 
        cells.classList.add('X')
        checkWin()
        checkDraw()
        changeMark()
      } 
     } 
    )
  }
)

//when the restart button is clicked, function restart() is called
button.addEventListener('click', restart)

//switches turns
function changeMark(){ 
  Oturn = !Oturn
}


//checks if someone has won and restart button appears
function checkWin(currentMark1) {
 Oturn ? currentMark1 = 'O' : currentMark1 = 'X'

  if(one.classList.contains(currentMark1) && two.classList.contains(currentMark1) && three.classList.contains(currentMark1)) {
    h1.innerText = (`${currentMark1}'s Win!`)
    console.log(currentMark1)
    audio = new Audio('./Tac Tac Toe/mixkit-winning-chimes-2015.wav')
    audio.play()
    button.classList.add('winordraw')
    if(Oturn) {
      Ocount++
      Ocounter.innerText = `O: ${Ocount}`
    } else {
      Xcount++
      Xcounter.innerText = `X: ${Xcount}`
    }
   return true
    
  } else if (four.classList.contains(currentMark1) && five.classList.contains(currentMark1) && six.classList.contains(currentMark1)) {
    h1.innerText = (`${currentMark1}'s Win!`)
    console.log(currentMark1)
    audio = new Audio('./Tic Tac Toe/mixkit-winning-chimes-2015.wav')
    audio.play()
    button.classList.add('winordraw') 
    if(Oturn) {
      Ocount++
      Ocounter.innerText = `O: ${Ocount}`
    } else {
      Xcount++
      Xcounter.innerText = `X: ${Xcount}`
    }
   return true
   
  } else if (seven.classList.contains(currentMark1) && eight.classList.contains(currentMark1) && nine.classList.contains(currentMark1)){
    h1.innerText = (`${currentMark1}'s Win!`)
    console.log(currentMark1)
    audio = new Audio('./Tic Tac Toe/mixkit-winning-chimes-2015.wav')
    audio.play()
    button.classList.add('winordraw') 
    if(Oturn) {
      Ocount++
      Ocounter.innerText = `O: ${Ocount}`
    } else {
      Xcount++
      Xcounter.innerText = `X: ${Xcount}`
    }
   return true
   
  } else if (one.classList.contains(currentMark1) && five.classList.contains(currentMark1) && nine.classList.contains(currentMark1)){
    h1.innerText = (`${currentMark1}'s Win!`)
    console.log(currentMark1)
    audio = new Audio('./Tic Tac Toe/mixkit-winning-chimes-2015.wav')
    audio.play()
    button.classList.add('winordraw') 
    if(Oturn) {
      Ocount++
      Ocounter.innerText = `O: ${Ocount}`
    } else {
      Xcount++
      Xcounter.innerText = `X: ${Xcount}`
    }
   return true
  
  } else if (three.classList.contains(currentMark1) && five.classList.contains(currentMark1) && seven.classList.contains(currentMark1)){
    h1.innerText = (`${currentMark1}'s Win!`)
    console.log(currentMark1)
    audio = new Audio('./Tic Tac Toe/mixkit-winning-chimes-2015.wav')
    audio.play()
    button.classList.add('winordraw') 
    if(Oturn) {
      Ocount++
      Ocounter.innerText = `O: ${Ocount}`
    } else {
      Xcount++
      Xcounter.innerText = `X: ${Xcount}`
    }
   return true

  } else if (one.classList.contains(currentMark1) && four.classList.contains(currentMark1) && seven.classList.contains(currentMark1)){
    h1.innerText = (`${currentMark1}'s Win!`)
    console.log(currentMark1)
    audio = new Audio('./Tic Tac Toe/mixkit-winning-chimes-2015.wav')
    audio.play()
    button.classList.add('winordraw') 
    if(Oturn) {
      Ocount++
      Ocounter.innerText = `O: ${Ocount}`
    } else {
      Xcount++
      Xcounter.innerText = `X: ${Xcount}`
    }
   return true
   
  } else if (two.classList.contains(currentMark1) && five.classList.contains(currentMark1) && eight.classList.contains(currentMark1)){
    h1.innerText = (`${currentMark1}'s Win!`)
    console.log(currentMark1)
    audio = new Audio('./Tic Tac Toe/mixkit-winning-chimes-2015.wav')
    audio.play()
    button.classList.add('winordraw') 
    if(Oturn) {
      Ocount++
      Ocounter.innerText = `O: ${Ocount}`
    } else {
      Xcount++
      Xcounter.innerText = `X: ${Xcount}`
    }
   return true
   
    
  } else if (three.classList.contains(currentMark1) && six.classList.contains(currentMark1) && nine.classList.contains(currentMark1)){
    h1.innerText = (`${currentMark1}'s Win!`)
    console.log(currentMark1)
    audio = new Audio('./Tic Tac Toe/mixkit-winning-chimes-2015.wav')
    audio.play()
    button.classList.add('winordraw') 
    if(Oturn) {
      Ocount++
      Ocounter.innerText = `O: ${Ocount}`
    } else {
      Xcount++
      Xcounter.innerText = `X: ${Xcount}`
    }
   return true
  } else {
    return false
  }
}

//checks if no one wins and retsart button appears
const checkDraw = () => {
 if(cell.every((cells) =>
  (cells.classList.contains('X') || cells.classList.contains('O'))) && h1.innerText === ''){
  h1.innerText = 'Draw...'
  button.classList.add('winordraw')
 }
}

//funtion to restart the game board
function restart() {
  cell.forEach(cells => {
    cells.classList.remove('X', 'O')
    }
  )
  h1.innerText = ''
  button.classList.remove('winordraw')
  console.log('restart')
  Oturn = false 
}
