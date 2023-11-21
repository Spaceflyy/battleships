/* eslint-disable no-underscore-dangle */
import PubSub from "pubsub-js";
import gameBoard from "./gameboard";
import ship from "./ship";

const player = (pName) => {
	const _name = pName;
	const _shotsTaken = [];
	const _playerBoard = gameBoard();
	const getPlayerName = () => _name;
	const _playerShips = [
		ship(5, "Carrier"),
		ship(4, "Battleship"),
		ship(3, "Destroyer"),
		ship(3, "SubMarine"),
		ship(2, "Patrol Boat"),
	];

	const checkAlreadyPicked = (x, y) => {
		JSON.stringify(_shotsTaken);
		return JSON.stringify(_shotsTaken).includes([x, y]);
	};

	const launchAttack = (enemyBoard, x, y) => {
		enemyBoard.receiveAttack(x, y);
		_shotsTaken.push([x, y]);
		PubSub.publish("board Updated");
	};

	const getRandomCoord = () => {
		let x = Math.floor(Math.random() * 10);
		let y = Math.floor(Math.random() * 10);
		while (checkAlreadyPicked(x, y)) {
			x = Math.floor(Math.random() * 10);
			y = Math.floor(Math.random() * 10);
		}

		return [x, y];
	};

	const getPrevMoves = () => _shotsTaken;
	return {
		getPrevMoves,
		checkAlreadyPicked,
		getPlayerName,
		_playerBoard,
		launchAttack,
		getRandomCoord,
		_playerShips,
	};
};

export default player;
