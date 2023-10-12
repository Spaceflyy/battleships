const ship = require("./index");

describe("Ship tests", () => {
	let newShip;

	beforeEach(() => {
		newShip = ship(3, "Destroyer");
	});

	test("Factory creates ship correctly", () => {
		expect(newShip).toMatchObject({ length: 3, hits: 0, isSunk: false });
	});

	test("Increases number of hits correctly", () => {
		newShip.setHits();
		expect(newShip.getHits()).toBe(1);
	});

	test("Checks if ship is sunk after recieving correct number of hits", () => {
		newShip.setHits();
		newShip.setHits();
		newShip.setHits();

		expect(newShip.getSunk()).toBe(true);
	});
});
