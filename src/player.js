/* eslint-disable no-underscore-dangle */
import PubSub from "pubsub-js";
import gameBoard from "./gameboard";

const player = (pName) => {
	const _name = pName;
	const _shotsTaken = [];
	const _playerBoard = gameBoard();
	const _moves = [];
	const getPlayerName = () => _name;

	const checkAlreadyPicked = (x, y) =>
		JSON.stringify(_shotsTaken).includes(JSON.stringify([x, y]));

	const launchAttack = (enemyBoard, x, y) => {
		enemyBoard.receiveAttack(x, y);
		_shotsTaken.push([x, y]);
		PubSub.publish("board Updated");
	};

	const generateRandomMoves = () => {
		let x = Math.floor(Math.random() * 10);
		let y = Math.floor(Math.random() * 10);
		while (JSON.stringify(_shotsTaken).includes([x, y])) {
			x = Math.floor(Math.random() * 10);
			y = Math.floor(Math.random() * 10);
		}

		_moves.push([x, y]);
	};

	const getNextMove = () => _moves.pop();

	const getPrevMoves = () => _shotsTaken;
	return {
		getPrevMoves,
		checkAlreadyPicked,
		getPlayerName,
		_playerBoard,
		launchAttack,
		generateRandomMoves,
		getNextMove,
	};
};

export default player;
