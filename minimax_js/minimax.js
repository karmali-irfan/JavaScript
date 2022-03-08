//Function for best move
function bestMove() { 
    let best = -Infinity;
    let move = {}; 
    let val;
    for (let i = 0; i < 3 ; i++){
        for (let j  = 0; j < 3 ; j++){
            if (board[i][j] == '_'){
                board[i][j] = 'X';
                val = minimax(board, 0, false); 
                board[i][j] = '_';
            }
            if (val > best){
                best = val; 
                move = {i, j};
            }
        }
    }
    board[move.i][move.j] = 'X';
    currentPlayer = Player2;
}

//Implementation of the minimax algorithm
function minimax(board, depth, AI){ 
    if (win() ==  'X'){
        return 10 / depth; 
    }//Tries to win 
    if (win() ==  'O'){
        return -10 * depth; 
    }//Prevents a loss
    if (moves_left() == false){
        return 0;
    }//Forces a draw

    if (AI == true){
        let best = -Infinity;
        for (let i = 0; i < 3 ; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] == '_'){
                    board[i][j] = 'X';
                    best = max(best, minimax(board, depth + 1, false));
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
    
    else if (AI == false){
        let best = Infinity;
        for (let i = 0; i < 3 ; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] == '_'){
                    board[i][j] = 'O';
                    best = min(best, minimax(board, depth + 1, true));
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
}

//Function to check for a winner 
function win(){
    //Horizontal wins
    if (board[0][0] == board[0][1] && board[0][2] == board[0][1]){
        return board[0][0];
    }
    else if (board[1][0] == board[1][1] && board[1][2] == board[1][1]){
        return board[1][0];
    }
    else if (board[2][0] == board[2][1] && board[2][2] == board[2][1]){
        return board[2][0];
    }
    //Vertical wins
    else if (board[0][0] == board[1][0] && board[2][0] == board[1][0] ){
        return board[0][0];
    }
    else if (board[0][1] == board[1][1] && board[2][1] == board[1][1]){
        return board[0][1];
    }
    else if (board[0][2] == board[1][2] && board[2][2] == board[0][2]){
        return board[0][2];
    }
    //Diagonal Wins 
    else if (board[2][0] == board[1][1] && board[0][2] == board[1][1]){
        return board[2][0];
    }
    else if (board[0][0] == board[1][1] && board[2][2] == board[1][1]){
        return board[0][0];
    }
    else if (moves_left() == false){
        return 'tie';
    }
}

//Function to check if any moves are left 
function moves_left(){
    for (let i = 0; i < 3 ; i++){
        for (let j = 0 ; j < 3 ; j++){
            if (board[i][j] == "_"){
                return true;
            }
        }
    }
    return false;
}