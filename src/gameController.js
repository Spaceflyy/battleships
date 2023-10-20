/* eslint-disable no-underscore-dangle */
import player from "./player";
import ship from "./ship";

export default function gameController() {
	const newGame = () => {
		const player1 = player("Luke");
		const computer = player("Computer");
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

		computer._playerBoard.placeShip(ships[0], 5, 0);
		computer._playerBoard.placeShip(ships[1], 6, 2);
		computer._playerBoard.placeShip(ships[2], 7, 4);
		computer._playerBoard.placeShip(ships[3], 8, 6);
		computer._playerBoard.placeShip(ships[4], 8, 8);
	};

	const startGame = () => {
		// while all sunk on both boards is not true
		// player 1 chooses attack
		// computer chooses attack
	};

	return { newGame };
}
