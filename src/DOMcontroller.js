import player from "./player";
import icon from "./imgs/github-mark-white.png";
/* eslint-disable no-underscore-dangle */
const player1BoardContainer = document.getElementById("player1BoardContainer");
const player2BoardContainer = document.getElementById("player2BoardContainer");
const modalBoard = document.getElementById("modalBoard");

const root = document.getElementById("boardContainer");
const DOMcontroller = () => {
	const renderShipPlacement = () => {
		const modelContainer = document.getElementById("modalContainer");
		if (modelContainer.style.display === "none") {
			modelContainer.style.display = "flex";
		} else {
			modelContainer.style.display = "none";
		}

		player1BoardContainer.style.display = "flex";
		player2BoardContainer.style.display = "flex";
	};

	const renderBoards = (playerBoard, playerNo) => {
		if (playerNo === 1) {
			player1BoardContainer.innerHTML = "";
		}

		if (playerNo === 2) {
			player2BoardContainer.innerHTML = "";
		}

		if (playerNo === 3) {
			modalBoard.innerHTML = "";
		}

		for (let i = 0; i < 10; i += 1) {
			for (let j = 0; j < 10; j += 1) {
				const cell = document.createElement("div");
				cell.classList.add("boardCell");
				cell.setAttribute("data-coord-X", j);
				cell.setAttribute("data-coord-Y", i);

				if (playerNo === 1 || playerNo === 3) {
					if (playerBoard[j][i].taken !== null) {
						cell.style.backgroundColor = "black";
					}
				}
				if (playerBoard[j][i].status === "miss") {
					cell.style.backgroundColor = "cyan";
				}

				if (playerBoard[j][i].status === "hit") {
					cell.style.backgroundColor = "red";
				}

				if (playerNo === 1) {
					player1BoardContainer.appendChild(cell);
				}

				if (playerNo === 2) {
					player2BoardContainer.appendChild(cell);
				}

				if (playerNo === 3) {
					modalBoard.appendChild(cell);
				}
			}
		}
	};

	const addSelected = (shipToPlace) => {
		const allContainers = document.querySelectorAll("#cellContainer");
		allContainers.forEach((container) => {
			container.style.border = "";
		});
		// eslint-disable-next-line no-param-reassign
		shipToPlace.style.border = "blue solid";
	};

	function bindClick(handler) {
		root.addEventListener("click", (event) => {
			handler(event);
		});
	}
	return { bindClick, renderBoards, addSelected, renderShipPlacement };
};

export default DOMcontroller;
