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

		// player1._playerBoard.placeShip(ships[0], 0, 0);
		// player1._playerBoard.placeShip(ships[1], 0, 2);
		// player1._playerBoard.placeShip(ships[2], 0, 4);
		// player1._playerBoard.placeShip(ships[3], 0, 6);
		// player1._playerBoard.placeShip(ships[4], 9, 8);

		// const x = 9;
		// const y = 1;

		// if (player2._playerBoard.getValidSpace(ships[1].getLength(), x, y)) {
		// 	player2._playerBoard.placeShip(ships[1], x, y);
		// }
		// if (player2._playerBoard.getValidSpace(ships[1].getLength(), 7, 1)) {
		// 	player2._playerBoard.placeShip(ships[1], 7, y);
		// }

		// if (player2._playerBoard.getValidSpace(ships[0].getLength(), x, y)) {
		// 	player2._playerBoard.placeShip(ships[0], x, y);
		// }

		// player2._playerBoard.placeShip(ships[1], 1, 2);
		// player2._playerBoard.placeShip(ships[2], 2, 4);
		// player2._playerBoard.placeShip(ships[3], 3, 6);
		// player2._playerBoard.placeShip(ships[4], 4, 8);

		ships.forEach((s) => {
			let x = 0;
			let y = 0;
			const orien = Math.random() >= 0.5;
			s.setOrientation(orien);
			if (s.getOrientation() === true) {
				y = Math.floor(Math.random() * (10 - s.getLength()));
				x = Math.floor(Math.random() * 10);
			} else {
				x = Math.floor(Math.random() * (10 - s.getLength()));
				y = Math.floor(Math.random() * 10);
			}
			while (!player2._playerBoard.getValidSpace(s, x, y)) {
				if (s.getOrientation() === true) {
					y = Math.floor(Math.random() * (10 - s.getLength()));
					x = Math.floor(Math.random() * 10);
				} else {
					x = Math.floor(Math.random() * (10 - s.getLength()));
					y = Math.floor(Math.random() * 10);
				}
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
