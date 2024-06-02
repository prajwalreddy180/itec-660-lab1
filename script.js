function Game() {
  // Generate two random numbers in the range of 1 - 3
  let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
  let random2 = Math.floor(Math.random() * 3) + 1; // 1-3
  
  let ImageSource1, ImageSource2;
  
  // Assign the appropriate image based on random numbers
  switch(random1) {
    case 1:
      ImageSource1 = "img/rock.png";
      break;
    case 2:
      ImageSource1 = "img/scissors.png";
      break;
    case 3:
      ImageSource1 = "img/paper.png";
      break;
  }

  switch(random2) {
    case 1:
      ImageSource2 = "img/rock.png";
      break;
    case 2:
      ImageSource2 = "img/scissors.png";
      break;
    case 3:
      ImageSource2 = "img/paper.png";
      break;
  }

  // Update images
  document.querySelectorAll("img")[0].setAttribute("src", ImageSource1);
  document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);

  // Determine the winner
  if (random1 === random2) {
    document.querySelector("h1").innerHTML = "It's a tie!";
  } else if (
    (random1 === 1 && random2 === 2) || // Rock beats Scissors
    (random1 === 2 && random2 === 3) || // Scissors beat Paper
    (random1 === 3 && random2 === 1)    // Paper beats Rock
  ) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (
    (random2 === 1 && random1 === 2) || // Rock beats Scissors
    (random2 === 2 && random1 === 3) || // Scissors beat Paper
    (random2 === 3 && random1 === 1)    // Paper beats Rock
  ) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
}
