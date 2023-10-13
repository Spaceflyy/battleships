/* eslint-disable no-underscore-dangle */
function ship(shipLength, shipName) {
	const _length = shipLength;
	let _hits = 0;
	let _isSunk = false;
	const _name = shipName;

	const getSunk = () => _isSunk;
	const getHits = () => _hits;
	const getLength = () => _length;
	const getName = () => _name;

	const checkSunk = () => {
		if (_hits === _length) {
			_isSunk = true;
		}
	};

	const setHits = () => {
		if (getHits() < _length) {
			_hits += 1;
			checkSunk();
		}
	};

	return {
		getName,
		getLength,
		setHits,
		getHits,
		getSunk,
	};
}
module.exports = ship;
