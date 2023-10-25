/* eslint-disable no-underscore-dangle */
const player1BoardContainer = document.getElementById("player1BoardContainer");
const player2BoardContainer = document.getElementById("player2BoardContainer");
const root = document.getElementById("boardContainer");
const DOMcontroller = () => {
	const renderBoards = (player, playerNo) => {
		if (playerNo === 1) {
			player1BoardContainer.innerHTML = "";
		}

		if (playerNo === 2) {
			player2BoardContainer.innerHTML = "";
		}
		for (let i = 0; i < 10; i += 1) {
			for (let j = 0; j < 10; j += 1) {
				const cell = document.createElement("div");
				cell.classList.add("boardCell");
				cell.setAttribute("data-coord-X", j);
				cell.setAttribute("data-coord-Y", i);

				if (player._playerBoard.getBoard()[j][i].taken !== null) {
					cell.style.backgroundColor = "black";
				}
				if (player._playerBoard.getBoard()[j][i].status === "miss") {
					cell.style.backgroundColor = "cyan";
				}

				if (player._playerBoard.getBoard()[j][i].status === "hit") {
					cell.style.backgroundColor = "red";
				}

				if (playerNo === 1) {
					player1BoardContainer.appendChild(cell);
				}

				if (playerNo === 2) {
					player2BoardContainer.appendChild(cell);
				}
			}
		}
	};

	function bindClick(handler) {
		root.addEventListener("click", (event) => {
			handler(event);
		});
	}
	return { bindClick, renderBoards };
};

export default DOMcontroller;
