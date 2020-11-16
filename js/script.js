{
const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

const getMoveName = function (argMoveId){
	console.log('Wywołano funkcję getMovesName z argumentami:' + argMoveId);
	if(argMoveId == 1) {
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

const playGame = function(playerInput) {
	clearMessages();
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	const computerMove = getMoveName(randomNumber);
	printMessage('Mój ruch to: ' + computerMove);
	printMessage('Twój ruch to: ' + playerInput);
	displayResult(computerMove, playerInput);
}

document.getElementById('play-rock').addEventListener("click", function () {
	playGame('kamień');
});

document.getElementById('play-paper').addEventListener("click", function () {
	playGame('papier');
});

document.getElementById('play-scissors').addEventListener("click", function () {
	playGame('nożyce');
});
}