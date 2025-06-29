/*------------------Constants---------------- */
const choice = ['rock', 'paper', 'scissors']


/*-------------------Variabls---------------- */
let msg
let playerChoice
let computerChoise


/*-------------------Cached Element Reference---------------- */
const rockBtnEl = document.querySelector('#rock')
const paperbtnEl = document.querySelector('#paper')
const scissorsbtnEl = document.querySelector('#scissors')
const resultDisplayEl = document.querySelector('#result-display')
const resetBtnEl = document.querySelector('#reset-button')
// console.log(resetBtnEl)


/*-------------------Functions---------------- */
function getComputerChoice() {
  //generate a randome number 0 - 2
  const randomIndex = Math.floor(Math.random()* 3)

  //select the item from the array
  return choice[randomIndex]
}


// Initialize game state
function play(event) {
  computerChoise = getComputerChoice()
  playerChoice = event.target.id

  compare()

  //after updating state, render to html
  render()
}


//updates our UI/html directly
function render() {
  resultDisplayEl.textContent = `Computer chose: ${computerChoise} and you chose ${playerChoice}. ${msg}`
  
}


function compare() {
  if (playerChoice === 'rock'){
    if (computerChoise === 'rock'){
      msg = 'You tie'
    }else if(computerChoise === 'paper'){
      msg = 'You lose'
    }else if(computerChoise === 'scissors'){
      msg = 'You win'
    }
  }else if (playerChoice === 'paper'){
    if (computerChoise === 'rock'){
      msg = 'You win'
    }else if(computerChoise === 'paper'){
      msg = 'You tie'
    }else if(computerChoise === 'scissors'){
      msg = 'You lose'
    }
  }else if (playerChoice === 'scissors'){
    if (computerChoise === 'rock'){
      msg = 'You lose'
    }else if(computerChoise === 'paper'){
      msg = 'You win'
    }else if(computerChoise === 'scissors'){
      msg = 'You tie'
    }    
  }
}


function resetGame(){
  resultDisplayEl.textContent = ''
}

/*-------------------Event Listener---------------- */
rockBtnEl.addEventListener('click', play)
paperbtnEl.addEventListener('click', play)
scissorsbtnEl.addEventListener('click', play)
resetBtnEl.addEventListener('click', resetGame)

