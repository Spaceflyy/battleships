function ship(shipLength, shipName) {
	const length = shipLength;
	let hits = 0;
	let isSunk = false;
	const name = shipName;

	const checkSunk = () => {
		if (hits === length) {
			isSunk = true;
		}
	};
	const getSunk = () => isSunk;
	const getHits = () => hits;
	const setHits = () => {
		if (getHits() < length) {
			hits += 1;
			checkSunk();
		}
	};

	return { name, length, hits, isSunk, setHits, getHits, checkSunk, getSunk };
}
module.exports = ship;
