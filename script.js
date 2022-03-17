function computer() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * random.length)];

}


function game( userPlay , computerPlay) {


    if (userPlay === "rock") {
        if (computerPlay === "rock") {
            return "Draw!";
        } else if (computerPlay === "paper") {
            computerScore++;
            return "You lose! Paper beats rock.";
        } else {

            // incrementing userscore by 1 everytime i win
            // thus the reason of this next line of code
            userScore++;
            return "You win! Rock beats scissors.";
        }
    } else if (userPlay === "paper") {
        if (computerPlay === "rock") {
            userScore++;
            return "You win! Paper beats rock.";
        } else if (computerPlay === "paper") {
            return "Draw!";
        } else {
            computerScore++
            return "You lose! Scissors beats paper.";
        }
    } else {
        if (computerPlay === "rock") {
            computerScore++;
            return "You lose! Rock beats scissors.";
        } else if (computerPlay === "paper") {
            userScore++;
            return "You win! Scissors beats paper.";
        } else {
            return "Draw!";

        }
    }
   
}

let userScore = parseInt(0);
let computerScore = parseInt(0);

// I am going to be creating a loop that gives user
// 5 chances of playing the game 
for ( let i = 0 ; i < 5 ;  i++ ) {

   
    let userPlay = prompt(" rock , paper , scissors");
    const computerPlay = computer();
  
    console.log(game(userPlay , computerPlay));
    console.log("your score is " + userScore);
    console.log("computer score is " + computerScore);


    }

    if (userScore > computerScore) {
        console.log("Human won this round");

    } if ( userScore < computerScore) {
        console.log("Computer won this round");
    } else {
        console.log("We couldn't get a winner");
    }
   