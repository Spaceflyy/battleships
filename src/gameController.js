/* eslint-disable no-underscore-dangle */

import ship from "./ship";

export default function gameController() {
	const currentTurn = 1;

	const newGame = (player1, player2) => {
		const ships = [
			ship(5, "Carrier"),
			ship(4, "Battleship"),
			ship(3, "Destroyer"),
			ship(3, "SubMarine"),
			ship(2, "Patrol Boat"),
		];

		player1._playerBoard.placeShip(ships[0], 0, 0);
		player1._playerBoard.placeShip(ships[1], 0, 2);
		player1._playerBoard.placeShip(ships[2], 0, 4);
		player1._playerBoard.placeShip(ships[3], 0, 6);
		player1._playerBoard.placeShip(ships[4], 0, 8);

		player2._playerBoard.placeShip(ships[0], 5, 0);
		player2._playerBoard.placeShip(ships[1], 6, 2);
		player2._playerBoard.placeShip(ships[2], 7, 4);
		player2._playerBoard.placeShip(ships[3], 7, 6);
		player2._playerBoard.placeShip(ships[4], 8, 8);
	};

	const startGame = () => {
		// while all sunk on both boards is not true
		// player 1 chooses attack
		// computer chooses attack
	};

	return { newGame };
}
