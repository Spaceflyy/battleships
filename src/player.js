/* eslint-disable no-underscore-dangle */
import gameBoard from "./gameboard";

const player = (pName) => {
	const _name = pName;
	const _shotsTaken = [];
	const _playerBoard = gameBoard();

	const getPlayerName = () => _name;

	const launchAttack = (enemyBoard, x, y) => {
		if (!_shotsTaken.includes([x, y])) {
			enemyBoard.receiveAttack(x, y);
			_shotsTaken.push([x, y]);
		}
	};

	const generateRandomCoord = () => [
		Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10),
	];

	return { getPlayerName, _playerBoard, launchAttack, generateRandomCoord };
};

export default { player };
