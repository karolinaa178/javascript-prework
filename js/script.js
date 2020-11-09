function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	console.log('Wywołano funkcję getMovesName z argumentami:' + argMoveId);
	if(argMoveId == 1){
		return 'kamień';
	} else if(argMoveId == 2){
		return 'papier';
	} else if(argMoveId == 3){
		return 'nożyce';
	} else {  
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
	}
  }

  function displayResult(argComputerMove, argPlayerMove){
	  console.log('Wywołano funkcję displayResult z argumentami:' + argComputerMove +argComputerMove);
	  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
	  if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
		  printMessage('Wygrywasz!');
	  } else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
		  printMessage('Wygrywasz!');
	  } else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
		  printMessage('Wygrywasz!');
	  } else if(argPlayerMove == argComputerMove){
		  printMessage('Remis!');
	  } else {
		  printMessage('Przegrywasz :(');
	  }
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

console.log('Ruch komputera to:' + computerMove);

/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
	comuterMove = 'papier';
} else if(randomNumber == 3){
	computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

console.log('Ruch gracza to:' + playerMove);

/* if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
	playerMove = 'papier';
} else if(playerInput == '3'){
	playerMove = 'nożyce';
} else if(playerInput > 3){
	playerMove = 'nieznany ruch';
} */

printMessage('Twój ruch to: ' + playerMove);

/* if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
} else if( computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('Mamy remis!');
} else if( computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Ty przegrywasz!:(');
} else if( computerMove == 'papier' && playerMove == 'papier'){
	printMessage('Mamy remis!');
} else if( computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Ty przegrywasz!:(');
}  else if( computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Ty przegrywasz!:(');
} else if( computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Ty pwygrywasz!');
}  else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('Mamy remis!');
} else if( computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Ty przegrywasz!:(');
} else if( playerMove == 'nieznany ruch'){
	printMessage('Ups! Coś poszło nie tak!');
}  */

displayResult(playerMove, computerMove);
console.log('moves:', argComputerMove, argPlayerMove);