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

		for (let i = 0; i < newShip.getLength(); i++) {
			expect(newGameboard.getBoard()[i][0].taken).toBe(newShip.getName());
		}

		expect(newGameboard.getBoard()[3][0].taken).toBe(null);
	});

	test("Test if gameboard and ship recieves attacks correctly", () => {
		newGameboard.placeShip(newShip, 0, 0);
		newGameboard.receiveAttack(0, 0);

		expect(newGameboard.getPlacedShips()[0].getHits()).toBe(1);
	});

	test("Test if gameboard records misses correctly", () => {
		newGameboard.receiveAttack(5, 5);
		expect(newGameboard.getBoard()[5][5].taken).toBe("miss");
	});
});
