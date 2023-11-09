/* eslint-disable no-underscore-dangle */
import PubSub from "pubsub-js";

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

	const getValidSpace = (ship, x, y) => {
		let valid = true;
		if (ship.getOrientation()) {
			for (let i = y - 1; i < y + (ship.getLength() + 1); i += 1) {
				if (i > 10) {
					valid = false;
				}
				if (_board[x][i] !== undefined && _board[x][i].taken !== null) {
					valid = false;
				}

				if (x + 1 <= 9) {
					if (_board[x + 1][i] !== undefined && _board[x + 1][i].taken !== null) {
						valid = false;
					}
				}

				if (x - 1 >= 0) {
					if (_board[x - 1][i] !== undefined && _board[x - 1][i].taken !== null) {
						valid = false;
					}
				}
			}
		} else {
			for (let i = x - 1; i < x + (ship.getLength() + 1); i += 1) {
				if (i > 10) {
					valid = false;
				}
				if (i > 0 && i < 10) {
					if (_board[i][y] !== undefined && _board[i][y].taken !== null) {
						valid = false;
					}
					if (y + 1 <= 9) {
						if (_board[i][y + 1] !== undefined && _board[i][y + 1].taken !== null) {
							valid = false;
						}
					}
					if (y - 1 >= 0) {
						if (_board[i][y - 1] !== undefined && _board[i][y - 1].taken !== null) {
							valid = false;
						}
					}
				}
			}
		}

		return valid;
	};

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
		if (ship.getOrientation()) {
			for (let i = y; i < y + ship.getLength(); i += 1) {
				_board[x][i].taken = ship.getName();
			}
		} else {
			for (let i = x; i < x + ship.getLength(); i += 1) {
				_board[i][y].taken = ship.getName();
			}
		}
		_placedShips.push(ship);
		PubSub.publish("board Updated");
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
