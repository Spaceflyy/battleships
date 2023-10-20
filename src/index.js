import "./style.css";
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
