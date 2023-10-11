function ship(shipLength) {
	const length = shipLength;
	let hits = 0;
	const isSunk = false;

	const hit = () => (hits += 1);
	const getHits = () => hits;

	return { length, hits, isSunk, hit, getHits };
}
module.exports = ship;
