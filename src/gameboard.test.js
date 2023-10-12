const ship = require("./index");
const gameBoard = require("./gameboard");

describe("Gameboard tests", () => {
	let newShip;
	let newGameboard;

	beforeEach(() => {
		newShip = ship(3, "Destroyer");
		newGameboard = gameBoard();
	});

	test("Places ship on board at correct positon", () => {
		newGameboard.placeShip(newShip, 0, 0);
		expect(newGameboard.getBoard()[0][0].taken).toBe(newShip.name);
	});
});
