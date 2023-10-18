//Creating object to maintain score in local storage
// let score_str = localStorage.getItem('score');
// let score;
// if(score_str !== undefined){
//     score = JSON.parse(score_str);
// }
// else{
//  score = {
//     win : 0,
//     lost : 0,
//     Draw : 0,
//     round : 0,
//  }
// } 
// score.display_score = function() {
//     return `Your overall Score Tally is\n Won: ${score.win} Lost: ${score.lost} Draw: ${score.Draw}`
// };
//Creating object to maintain score in local storage "OPTIMIZED WAY"
let score_str = localStorage.getItem('score');
let score;
reset_score(score_str);

function reset_score (score_str)  {
    score = score_str ? JSON.parse(score_str) : {
        win : 0,
        lost : 0,
        Draw : 0,
        round : 0,
    };
    
    score.display_score = function() {
        return `Your overall Score Tally is\n Won: ${score.win} Lost: ${score.lost} Draw: ${score.Draw}`
    };
    result_popup();
}

//Function to generate computer choice
let generate_computer_choice = () => {
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
        return 'Stone';
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Paper';
    }
    else if (randomNumber > 2 && randomNumber <= 3) {
        return 'Scissors';
    }
}
//Function to generate result
let get_result = (user_move, computer_move) => {
    score.round++;
    if (user_move === 'Stone') {

        if (computer_move === 'Stone') {
            score.Draw++;
            return 'It is Draw';
        }
        else if (computer_move === 'Paper') {
            score.lost++;
            return 'Computer has Won';
        }
        else if (computer_move === 'Scissors') {
            score.win++;
            return 'You have won';
        }
        
    }
    else if (user_move === 'Paper') {

        if (computer_move === 'Stone') {
            score.win++;
            return 'You have won';
        }
        else if (computer_move === 'Paper') {
            score.Draw++;
            return 'It is Draw';
        }
        else if (computer_move === 'Scissors') {
            score.lost++;
            return 'Computer has Won';
        }
    }
    else if (user_move === 'Scissors') {

        if (computer_move === 'Stone') {
            score.lost++;
            return 'Computer has Won';
        }
        else if (computer_move === 'Paper') {
            score.win++;
            return 'You have won';
        }
        else if (computer_move === 'Scissors') {
            score.Draw++;
            return 'It is Draw';
        }
    }
}
//Function to display result
function result_popup (user_move, computer_move, result) {
    localStorage.setItem('score' , JSON.stringify(score));
    document.querySelector('#user_move').innerText = 
     user_move !== undefined ?`You have selected: ${user_move}` : '';
    document.querySelector('#computer_move').innerText = 
    computer_move !== undefined ? `Computer has selected: ${computer_move}` : '';
    document.querySelector('#result').innerText = 
    result !== undefined ? `Result: ${result}` : '';
    document.querySelector('#score').innerText = `${score.display_score()}`;
    document.querySelector('#round').innerText = `Total Rounds Played: ${score.round}`;
    // alert(`You have selected: ${user_move} \n Computer has selected: ${computer_move} \n Result: ${result} \n ${score.display_score()} \n Total Rounds Played: ${score.round}`)
}

