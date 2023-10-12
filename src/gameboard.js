function gameBoard() {
	const board = [];
	(function setupBoard() {
		for (let i = 0; i < 10; i++) {
			board[i] = [];
			for (let j = 0; j < 10; j++) {
				board[i][j] = {
					location: [i, j],
					taken: false,
				};
			}
		}
	})();
	const getBoard = () => board;
	const placeShip = (ship, x, y) => {
		getBoard()[x][y].taken = ship.name;
	};

	return {
		board,
		placeShip,
		getBoard,
	};
}

module.exports = gameBoard;
