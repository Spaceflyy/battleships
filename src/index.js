/* eslint-disable no-underscore-dangle */
import "./style.css";
import PubSub from "pubsub-js";
import gameController from "./gameController";
import DOMcontroller from "./DOMcontroller";
import player from "./player";

const game = gameController();
const view = DOMcontroller();

const player1 = player("Luke");
const computer = player("Computer");
game.newGame(player1, computer);
view.renderBoards(player1, 1);
view.renderBoards(computer, 2);
const handleClick = (event) => {
	const { target } = event;
	const playerX = Number(target.getAttribute("data-coord-X"));
	const playerY = Number(target.getAttribute("data-coord-Y"));
	if (target.getAttribute("class") === "boardCell") {
		if (
			target.parentElement.getAttribute("id") === "player2BoardContainer" &&
			player1.checkAlreadyPicked(playerX, playerY) === false
		) {
			// console.log(player1.getPrevMoves());
			player1.launchAttack(computer._playerBoard, playerX, playerY);

			computer.generateRandomMoves();
			const nextMove = computer.getNextMove();
			computer.launchAttack(player1._playerBoard, nextMove[0], nextMove[1]);

			// if (computer._playerBoard.allShipsSunk()) {
			// 	alert("Player 1 wins!");
			// }
		}
	}
};

view.bindClick(handleClick);
PubSub.subscribe("board Updated", () => {
	view.renderBoards(player1, 1);
	view.renderBoards(computer, 2);
});
