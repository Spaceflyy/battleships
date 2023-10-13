/* eslint-disable no-underscore-dangle */
function gameBoard() {
	const _board = [];
	const _placedShips = [];

	const getBoard = () => _board;

	const getShip = (x, y) => {
		for (let i = 0; i < _placedShips.length; i++) {
			if (_placedShips[i].getName() === _board[x][y].taken) {
				return i;
			}
		}
	};

	const getPlacedShips = () => _placedShips;

	(function setupBoard() {
		for (let i = 0; i < 10; i++) {
			_board[i] = [];
			for (let j = 0; j < 10; j++) {
				_board[i][j] = {
					location: [i, j],
					taken: null,
				};
			}
		}
	})();

	const placeShip = (ship, x, y) => {
		for (let i = x; i < ship.getLength(); i++) {
			_board[i][y].taken = ship.getName();
		}
		_placedShips.push(ship);
	};

	const receiveAttack = (x, y) => {
		const shipAtLoc = _placedShips[getShip(x, y)];
		if (shipAtLoc !== undefined) {
			shipAtLoc.setHits();
		} else {
			_board[x][y].taken = "miss";
		}
	};

	return {
		placeShip,
		getBoard,
		receiveAttack,
		getPlacedShips,
	};
}

module.exports = gameBoard;
