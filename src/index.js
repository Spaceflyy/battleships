function ship(shipLength) {
	const length = shipLength;
	let hits = 0;
	let isSunk = false;

	const setHits = () => (hits += 1);
	const getHits = () => hits;
	const setSunk = () => {
		if (hits >= length) {
			isSunk = true;
		}
	};
	const getSunk = () => isSunk;

	return { length, hits, isSunk, setHits, getHits, setSunk, getSunk };
}
module.exports = ship;
