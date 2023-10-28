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

		ships.forEach((s) => {
			let x = Math.floor(Math.random() * (10 - s.getLength()));
			let y = Math.floor(Math.random() * 10);
			while (!player2._playerBoard.getValidSpace(s.getLength(), x, y)) {
				x = Math.floor(Math.random() * (10 - s.getLength()));
				y = Math.floor(Math.random() * 10);
			}

			player2._playerBoard.placeShip(s, x, y);
		});
	};

	const startGame = () => {
		// while all sunk on both boards is not true
		// player 1 chooses attack
		// computer chooses attack
	};

	return { newGame };
}
