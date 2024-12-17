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

//  console.log(getComputerChoice())
//  console.log(getHumanChoice())

 

 

 




function playGame () {
    let humanScore = 0
    let machineScore = 0

    
    

    function playRound (humanChoise, machineChoise) {
        if (humanChoise === machineChoise ){
            console.log("you : " + humanChoise)
            console.log("pc : " + machineChoise)
            console.log('draw: ' +  machineChoise + " and " + humanChoise + " is draw")
            console.log("you: " + humanScore)
            console.log("pc: " + machineScore)
        } else if (humanChoise === 'rock' && machineChoise === 'scissors' || humanChoise === "paper" && machineChoise === "rock" || humanChoise === "scissors" && machineChoise === "paper" ){
            console.log("you : " + humanChoise)
            console.log("pc : " + machineChoise)
            console.log('you win')
            humanScore ++
            console.log("you: " + humanScore)
            console.log("pc: " + machineScore)
        } else {
            console.log("you : " + humanChoise)
            console.log("pc : " + machineChoise)
            console.log('you loose')
            machineScore ++
            console.log("you: " + humanScore)
            console.log("pc: " + machineScore)
        }
    }
    for (let i = 0; i < 123; i++) { 
        if (humanScore < 5 &&  machineScore < 5 ) {
        let humanSelection = getHumanChoice(); 
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    } else {
        if ( humanScore > machineScore) {
            console.log("winner is youuu youuuuuuuuuu")
            console.log("you: " + humanScore)
            console.log("pc: " + machineScore)
        } else if ( humanScore = machineScore) {
            console.log("draw")
            console.log("you: " + humanScore)
            console.log("pc: " + machineScore)
        } else {
            console.log("you loser is youuuuuuuuuu sorry")
            console.log("you: " + humanScore)
            console.log("pc: " + machineScore)
        }
        break;
    }
    }
    

}


playGame()