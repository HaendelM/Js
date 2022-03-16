





human= prompt(" rock , paper , scissors");


let computer = computerPlay

function computerPlay() {
    random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * random.length )];
}
   

function game(human , computer) {
    if (human === "rock") {
        if (computer === "rock") {
            return "Draw!";
        } else if (computer === "paper") {
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } else if (human === "paper") {
        if (computer === "rock") {
            return "You win! Paper beats rock.";
        } else if (computer === "paper") {
            return "Draw!";
        } else {
            return "You lose! Scissors beats paper.";
        }
    } else {
        if (computer === "rock") {
            return "You lose! Rock beats scissors.";
        } else if (computer === "paper") {
            return "You win! Scissors beats paper.";
        } else {
            return "Draw!";
        }
    }
}
console.log(game(human , computer));


