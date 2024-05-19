const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn, paperBtn, scissorBtn];
		const computerOptions = ['rock', 'paper', 'scissors']

		playerOptions.forEach(option => {
			option.addEventListener('click', function () {

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10 - moves}`;


				const choiceNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[choiceNumber];

				winner(this.innerText, computerChoice)

				if (moves == 10) {
					gameOver(playerOptions, movesLeft);
				}
			})
		})

	}

	const winner = (player, computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if (player === computer) {
			result.textContent = 'Tie.'
		}
		else if (player == 'rock') {
			if (computer == 'paper') {
				result.textContent = '"Ethereal Manifestation" scores.';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			} else {
				result.textContent = 'You score.'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if (player == 'scissors') {
			if (computer == 'rock') {
				result.textContent = '"Ethereal Manifestation" scores.';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			} else {
				result.textContent = 'You score.';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if (player == 'paper') {
			if (computer == 'scissors') {
				result.textContent = '"Ethereal Manifestation" scores.';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			} else {
				result.textContent = 'You score.';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	const gameOver = (playerOptions, movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})


		chooseMove.innerText = 'Enough.'
		movesLeft.style.display = 'none';

		if (playerScore > computerScore) {
			result.style.fontSize = '2rem';
			result.innerText = 'You win. You may proceed: https://youtu.be/82x2xfFarSM'
			result.style.color = '#308D46';
		}
		else if (playerScore < computerScore) {
			result.style.fontSize = '2rem';
			result.innerText = 'You lose. Get out.';
			result.style.color = 'red';
		}
		else {
			result.style.fontSize = '2rem';
			result.innerText = "It seems we aren't going anywhere. Leave.";
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Test your chance of death again.';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click', () => {
			window.location.reload();
		})
	}


	playGame();

}

game();
