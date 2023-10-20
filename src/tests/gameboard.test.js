import gameBoard from "../gameboard";

import ship from "../ship";

describe("Gameboard tests", () => {
	let newShip;
	let newGameboard;

	beforeEach(() => {
		newShip = ship(3, "Destroyer");
		newGameboard = gameBoard();
	});

	test("Places ship on board at correct positon", () => {
		newGameboard.placeShip(newShip, 0, 0);

		for (let i = 0; i < newShip.getLength(); i += 1) {
			expect(newGameboard.getBoard()[i][0].taken).toBe(newShip.getName());
		}

		expect(newGameboard.getBoard()[3][0].taken).toBe(null);
	});

	test("Gameboard and ship recieves attacks correctly", () => {
		newGameboard.placeShip(newShip, 0, 0);
		newGameboard.receiveAttack(0, 0);

		expect(newGameboard.getPlacedShips()[0].getHits()).toBe(1);
	});

	test("Gameboard records misses correctly", () => {
		newGameboard.receiveAttack(5, 5);
		expect(newGameboard.getBoard()[5][5].taken).toBe("miss");
	});

	test("Returns true if all ships are sunk", () => {
		newGameboard.placeShip(newShip, 0, 0);
		newGameboard.receiveAttack(0, 0);
		newGameboard.receiveAttack(0, 0);
		newGameboard.receiveAttack(0, 0);
		expect(newGameboard.allShipsSunk()).toBe(true);
	});

	test("Returns false if not all ships are sunk", () => {
		newGameboard.placeShip(newShip, 0, 0);

		expect(newGameboard.allShipsSunk()).toBe(false);
	});
});
