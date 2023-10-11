function ship(shipLength) {
	const length = shipLength;
	let hits = 0;
	let isSunk = false;

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

	return { length, hits, isSunk, setHits, getHits, checkSunk, getSunk };
}
module.exports = ship;
