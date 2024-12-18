console.log('hello')

function getComputerChoice() {
    let random = Math.floor(Math.random()*3) + 1
    let choice = "rock" 
    if (random === 1) {
        choice = "rock"
    } else if (random === 2) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice
}

function getHumanChoice(){
    console.log("rock : r, papper: p, scissors: s")
    letter = prompt("play r,p,s")

    if (letter === "r") {
        choice = "rock"
        return choice
    } else if (letter === "p") {
        choice = "paper"
        return choice
    } else if (letter === "s") {
        choice = "scissors"
        return choice
    } else {
        console.log("invalid play")
        return 0
    }

    
}



function playGame () {
    let humanScore = 0
    let machineScore = 0
    let rounds = 0
    
    

    function playRound (humanChoise, machineChoise) {
        const roundDecision =  document.querySelector('.roundDecision')
        const humanMark = document.querySelector('.hmark')
        const computerMark = document.querySelector('.cmark')
        const display = document.querySelector('.final')

        if (humanChoise === machineChoise ){
            roundDecision.style.display = 'flex'
            roundDecision.style.color = 'yellow'
            roundDecision.textContent = 'DRAW'
        } else if (humanChoise === 'rock' && machineChoise === 'scissors' || humanChoise === "paper" && machineChoise === "rock" || humanChoise === "scissors" && machineChoise === "paper" ){
            roundDecision.style.display = 'flex'
            roundDecision.style.color = 'green'
            roundDecision.textContent = 'WIN'
            humanScore ++
        } else {
            roundDecision.style.display = 'flex'
            roundDecision.style.color = 'red'
            roundDecision.textContent = 'LOSS'
            machineScore ++         
        }
        humanMark.textContent = 'you: ' + humanScore
        computerMark.textContent = 'ai: '+ machineScore
        rounds ++

        if (rounds === 5 ) {
            if(humanScore > machineScore) {
                display.style.display = 'flex'
                display.style.color = 'green'
                display.textContent = 'you won the game bravoooo'
            } else if( machineScore > humanScore) {
                display.style.display = 'flex'
                display.style.color = 'red'
                display.textContent = 'you lost the game to ai  buuu'
            } else {
                display.style.display = 'flex'
                display.style.color = 'yellow'
                display.textContent = 'you dreww'
            }
            rockSelection.disabled = true
            paperSelection.disabled = true
            scissorsSelection.disabled = true
        }

    }


    const rockSelection = document.getElementById('rock')
    const paperSelection = document.getElementById('paper')
    const scissorsSelection = document.getElementById('scissors')
    const hscreen = document.getElementById('hscreen')
    const cscreen = document.getElementById('cscreen')
    
    rockSelection.onclick = ()=>{
        
        hscreen.src= "./Images/r1.jpg"
        let computerSelection = getComputerChoice()

         switch (computerSelection) {
            case 'rock':
                cscreen.src="./Images/r2.jpg";
                break;
            case 'paper':
                cscreen.src="./Images/p2.jpg";
                break;
            default:
                cscreen.src="./Images/s2.jpg";
                break;
            
         }

        playRound('rock', computerSelection)
    };
    paperSelection.onclick = () => {
        hscreen.src = "./Images/p1.jpg"
        let computerSelection = getComputerChoice()
        switch (computerSelection) {
            case 'rock':
                cscreen.src="./Images/r2.jpg";
                break;
            case 'paper':
                cscreen.src="./Images/p2.jpg";
                break;
            default:
                cscreen.src="./Images/s2.jpg";
                break;
            
         }
        playRound('paper',computerSelection)
    };
    scissorsSelection.onclick = () => {
        hscreen.src = "./Images/s1.jpg"
        let computerSelection = getComputerChoice()
        switch (computerSelection) {
            case 'rock':
                cscreen.src="./Images/r2.jpg";
                break;
            case 'paper':
                cscreen.src="./Images/p2.jpg";
                break;
            default:
                cscreen.src="./Images/s2.jpg";
                break;
            
         }
        playRound('scissors', computerSelection)
    };

    const newGameButton = document.getElementById('start');
    
    newGameButton.onclick = () => {
        // Reset all values
        humanScore = 0
        machineScore = 0
        rounds = 0

        // Reset the UI
        const roundDecision =  document.querySelector('.roundDecision')
        const display = document.querySelector('.final')
        const humanMark = document.querySelector('.hmark')
        const computerMark = document.querySelector('.cmark')

        roundDecision.style.display = 'none'
        humanMark.textContent = 'you: ' + humanScore
        computerMark.textContent = 'ai: ' + machineScore
        hscreen.src = "./Images/defoult.PNG"
        cscreen.src = "./Images/defoult.PNG"

        // Enable the selection buttons
        rockSelection.disabled = false
        paperSelection.disabled = false
        scissorsSelection.disabled = false
        display.style.display = 'none'
    }
}


playGame()