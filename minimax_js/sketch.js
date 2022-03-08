//Initializing the board
let board = [
  ['_', '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_'],
];

//Declaring variables
let Player1 = 'X'; 
let Player2 = 'O';
let currentPlayer;

function setup() {
  createCanvas(500, 500);
  bestMove();
  //currentPlayer = Player2;
}

//draw function
function draw() {
  background(250);
  let w = width / 3;
  let h = height / 3; 
  for (let j = 0 ; j < 2 ; j++){
    line (w + (j * w) , 20, w + (j * w) , height-20);
  } //for loop for drawing grid lines
  for (let i = 0 ; i < 2 ; i ++){
    line (20, h + h * i, width - 20, h + h * i );
  } //for loop for drawing grid lines
  for (let i = 0; i < 3 ; i++){
    for (let j = 0; j < 3 ; j++){
      let x = w * j + w/2; 
      let y = h * i + h/2;
      textSize(32);
      strokeWeight(4);
      if (board[i][j] == Player1){
        let xr = w/4; 
        //Drawing an X for the AI 
        line(x - xr, y + xr, x + xr, y - xr);
        line(x + xr, y + xr, x - xr, y - xr);
      } 
      else if (board[i][j] == Player2){
        //Drawing an ellipse for the human player
        noFill();
        ellipse(x, y, w/2);
      }
    }
  }
  
  //checking to see the outcome of the game
  if (win() == 'O') {
    fill(255, 0, 0);
    text('O wins!', width/2 - 50, height - 10);
  }
  if (win() == 'X') {
    fill(255, 0, 0);
    text('X wins!', width/2 - 50, height - 50);
  }
  if (win() == 'tie'){
    fill(255, 0, 0);
    text('Tie!', width/2 - 35, height - 50);
  }
}

//Function to allow user to click on the grid to mark position 
function mousePressed() {
  if (win() != 'X' && win()!= 'O' && moves_left() == true){
   if (currentPlayer == Player2){
    let i = floor(mouseX); 
    let j = floor(mouseY);
    if (i >= 0 && i < width / 3){
      i = 0;
    }
    else if (i > width / 3 && i < 2 * width / 3){
      i = 1; 
    }
    else if ( i > 2 + width / 3){
      i = 2;
    }
    if (j >= 0 && j < height / 3){
      j = 0;
    }
    else if (j > height / 3 && j < 2 * height / 3){
      j = 1; 
    }
    else if (j > 2 * height / 3){
      j = 2;
    }
    if (board[j][i] == '_'){
      board[j][i] = 'O'; //j is the row and i is the column.
      bestMove(); //calling best move
    }
  }  
}
}
