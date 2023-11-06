/* eslint-disable no-underscore-dangle */
import "./style.css";
import PubSub from "pubsub-js";
import gameController from "./gameController";
import DOMcontroller from "./DOMcontroller";
import player from "./player";
import ship from "./ship";

const game = gameController();
const view = DOMcontroller();

const player1 = player("Luke");
const computer = player("Computer");

game.newGame(player1, computer);
// view.renderShipPlacementModal();
// view.renderBoards(player1._playerBoard.getBoard(), 1);
// view.renderBoards(computer._playerBoard.getBoard(), 2);
view.renderBoards(player1._playerBoard.getBoard(), 3);

const handleClick = (event) => {
	const { target } = event;

	if (target.getAttribute("class") === "boardCell") {
		const playerX = Number(target.getAttribute("data-coord-X"));
		const playerY = Number(target.getAttribute("data-coord-Y"));
		if (
			target.parentElement.getAttribute("id") === "player2BoardContainer" &&
			player1.checkAlreadyPicked(playerX, playerY) === false
		) {
			player1.launchAttack(computer._playerBoard, playerX, playerY);

			const nextMove = computer.getRandomCoord();
			computer.launchAttack(player1._playerBoard, nextMove[0], nextMove[1]);

			// if (player1._playerBoard.allShipsSunk()) {
			// 	alert("Player 1 wins!");
			// }
		}
	}

	if (target.parentElement.getAttribute("id") === "cellContainer") {
		view.addSelected(target.parentElement);
		game.setSelectedShip(target.parentElement.getAttribute("shipId"));
	}

	if (target.parentElement.getAttribute("id") === "modalBoard") {
		const playerShips = [
			ship(5, "Carrier"),
			ship(4, "Battleship"),
			ship(3, "Destroyer"),
			ship(3, "SubMarine"),
			ship(2, "Patrol Boat"),
		];

		if (
			player1._playerBoard.getValidSpace(
				playerShips[game.getSelectedShip()],
				Number(target.getAttribute("data-coord-x")),
				Number(target.getAttribute("data-coord-y"))
			)
		) {
			player1._playerBoard.placeShip(
				playerShips[game.getSelectedShip()],
				Number(target.getAttribute("data-coord-x")),
				Number(target.getAttribute("data-coord-y"))
			);
		}
	}
};

view.bindClick(handleClick);
PubSub.subscribe("board Updated", () => {
	view.renderBoards(player1._playerBoard.getBoard(), 1);
	view.renderBoards(computer._playerBoard.getBoard(), 2);
	view.renderBoards(player1._playerBoard.getBoard(), 3);
});
