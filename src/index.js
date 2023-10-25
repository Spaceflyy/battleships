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

	if (target.getAttribute("class") === "boardCell") {
		const prev = [
			target.getAttribute("data-coord-X"),
			target.getAttribute("data-coord-Y"),
		];

		player1.launchAttack(
			computer._playerBoard,
			Number(target.getAttribute("data-coord-X")),
			Number(target.getAttribute("data-coord-Y"))
		);
		computer.generateRandomMoves();
		const nextMove = computer.getNextMove();
		computer.launchAttack(player1._playerBoard, nextMove[0], nextMove[1]);

		// if (computer._playerBoard.allShipsSunk()) {
		// 	alert("Player 1 wins!");
		// }
	}
};

view.bindClick(handleClick);
PubSub.subscribe("board Updated", () => {
	view.renderBoards(player1, 1);
	view.renderBoards(computer, 2);
});
