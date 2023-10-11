const ship = require("./index");

describe("Ship tests", () => {
	const newShip = ship(3);

	test("Factory creates ship correctly", () => {
		expect(newShip).toMatchObject({ length: 3, hits: 0, isSunk: false });
	});

	test("Increases number of hits correctly", () => {
		newShip.hit();
		expect(newShip.getHits()).toBe(1);
	});
});
