	

	function playGame(playerInput){
	clearMessages();
	function printMessage(msg){
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}
	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
	}
	const getMoveName = function (argMoveId){
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
	  
	}
	const displayResult = function (argComputerMove, argPlayerMove){
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

	const randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	const computerMove = getMoveName(randomNumber);

	console.log('Ruch komputera to:' + computerMove);

	printMessage('Mój ruch to: ' + computerMove);

	console.log('Gracz wpisał: ' + playerInput);

	const playerMove = getMoveName(playerInput);

	console.log('Ruch gracza to:' + playerMove);
	printMessage('Twój ruch to: ' + playerMove);
	displayResult(playerMove, computerMove);
	console.log('moves:', argComputerMove, argPlayerMove);
}


document.getElementById('play-rock').addEventListener("click", function (){
	buttonClicked('kamień');
	printMessage('Kamień został kliknięty');
});
document.getElementById('play-paper').addEventListener("click", function (){
	buttonClicked('papier');
	printMessage('Papier został kliknięty');
});
document.getElementById('play-scissors').addEventListener("click", function (){
	buttonClicked('nożyce');
	printMessage('Nożyce zostały kliknięte.');
});

}