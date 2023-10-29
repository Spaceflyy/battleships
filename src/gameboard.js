/* eslint-disable no-underscore-dangle */
export default function gameBoard() {
	const _board = [];
	const _placedShips = [];

	(function setupBoard() {
		for (let i = 0; i < 10; i += 1) {
			_board[i] = [];
			for (let j = 0; j < 10; j += 1) {
				_board[i][j] = {
					location: [i, j],
					taken: null,
					status: null,
				};
			}
		}
	})();

	const getBoard = () => _board;

	const getShip = (x, y) => {
		let index;
		for (let i = 0; i < _placedShips.length; i += 1) {
			if (_placedShips[i].getName() === _board[x][y].taken) {
				index = i;
			}
		}
		return index;
	};

	const getPlacedShips = () => _placedShips;

	const placeShip = (ship, x, y) => {
		for (let i = x; i < x + ship.getLength(); i += 1) {
			_board[i][y].taken = ship.getName();
		}

		// for (let i = y; i < x + ship.getLength(); i += 1) {
		// 	_board[x][i].taken = ship.getName();
		// }
		_placedShips.push(ship);
	};

	const receiveAttack = (x, y) => {
		const shipAtLoc = _placedShips[getShip(x, y)];
		if (shipAtLoc !== undefined) {
			_board[x][y].status = "hit";
			shipAtLoc.setHits();
		} else {
			_board[x][y].status = "miss";
		}
	};

	const getValidSpace = (shipLength, x, y) => {
		let valid = true;

		for (let i = x - 1; i < x + (shipLength + 1); i += 1) {
			if (i !== -1) {
				if (
					(_board[i][y] !== undefined && _board[i][y].taken !== null) ||
					(_board[i][y + 1] !== undefined && _board[i][y + 1].taken !== null) ||
					(_board[i][y - 1] !== undefined && _board[i][y - 1].taken !== null)
				) {
					valid = false;
				}
			}
		}

		return valid;
	};

	const allShipsSunk = () => _placedShips.every((element) => element.getSunk());

	return {
		placeShip,
		getBoard,
		receiveAttack,
		getPlacedShips,
		allShipsSunk,
		getValidSpace,
	};
}
