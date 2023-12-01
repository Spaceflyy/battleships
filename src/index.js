/* eslint-disable no-underscore-dangle */
import "./style.css";
import PubSub, { publish } from "pubsub-js";
import gameController from "./gameController";
import DOMcontroller from "./DOMcontroller";
import player from "./player";

const game = gameController();
const view = DOMcontroller();

let player1 = player("Player");
let computer = player("Computer");

game.newGame(player1, computer);

view.renderBoards(player1._playerBoard.getBoard(), 3);
view.renderGameOver();
const handleClick = (event) => {
	const { target } = event;

	if (target.getAttribute("id") === "verticalPlacement") {
		if (target.classList.contains("on")) {
			target.classList.remove("on");
		} else {
			target.classList.add("on");
		}
	}

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

			if (player1._playerBoard.allShipsSunk()) {
				view.renderGameOver(computer.getPlayerName());
			} else if (computer._playerBoard.allShipsSunk()) {
				view.renderGameOver(player1.getPlayerName());
			}
		}
	}

	if (target.parentElement.getAttribute("class") === "cellContainer") {
		view.addSelected(target.parentElement);
		game.setSelectedShip(target.parentElement.getAttribute("shipId"));
	}

	if (target.parentElement.getAttribute("id") === "modalBoard") {
		const verticalTick = document.getElementById("verticalPlacement");

		if (game.getSelectedShip() !== null) {
			const x = Number(target.getAttribute("data-coord-x"));
			const y = Number(target.getAttribute("data-coord-y"));

			const shipElement = document.querySelector(
				`[shipid="${game.getSelectedShip()}"]`
			);

			if (verticalTick.getAttribute("class") === "on") {
				player1._playerShips[game.getSelectedShip()].setOrientation(true);
			} else {
				player1._playerShips[game.getSelectedShip()].setOrientation(false);
			}

			if (
				player1._playerBoard.getValidSpace(
					player1._playerShips[game.getSelectedShip()],
					x,
					y
				)
			) {
				shipElement.style.visibility = "hidden";
				player1._playerBoard.placeShip(
					player1._playerShips[game.getSelectedShip()],
					x,
					y
				);
				player1._playerShips[game.getSelectedShip()] = null;
				game.setSelectedShip(null);
			}

			if (player1._playerShips.every((val) => val === player1._playerShips[0])) {
				view.renderShipPlacement();
			}
		}
	}

	if (target.getAttribute("id") === "restartBtn") {
		player1 = player("Player");
		computer = player("Computer");
		view.renderGameOver();
		game.newGame(player1, computer);
		PubSub.publish("board Updated");
		view.renderShipPlacement();
	}
};

view.bindClick(handleClick);
PubSub.subscribe("board Updated", () => {
	view.renderBoards(player1._playerBoard.getBoard(), 1);
	view.renderBoards(computer._playerBoard.getBoard(), 2);
	view.renderBoards(player1._playerBoard.getBoard(), 3);
});
