import player from "./player";
import icon from "./imgs/github-mark-white.png";
import ship from "./ship";
/* eslint-disable no-underscore-dangle */
const player1BoardContainer = document.getElementById("player1BoardContainer");
const player2BoardContainer = document.getElementById("player2BoardContainer");
const boardContainer = document.getElementById("boardContainer");
const modalBoard = document.getElementById("modalBoard");
const root = document.getElementById("mainContainer");
const footer = document.querySelector("footer a");

const githubicon = new Image();
githubicon.src = icon;
footer.appendChild(githubicon);

const DOMcontroller = () => {
	const renderGameOver = (winner = "bob") => {
		const gameOverMenu = document.getElementById("gameOver");
		const winnerText = document.getElementById("winnerText");

		if (gameOverMenu.style.display === "none") {
			gameOverMenu.style.display = "block";
			winnerText.textContent = `${winner} wins!`;
		} else {
			gameOverMenu.style.display = "none";
		}
	};
	const renderShipPlacement = () => {
		const modelContainer = document.getElementById("placeShipsContainer");
		const shipContainers = Array.from(
			document.getElementsByClassName("cellContainer")
		);

		shipContainers.forEach((element) => {
			element.style.visibility = "visible";
			element.style.removeProperty("border");
		});

		if (modelContainer.style.display === "none") {
			modelContainer.style.display = "flex";

			player1BoardContainer.style.display = "none";
			player2BoardContainer.style.display = "none";
			boardContainer.style.display = "none";
		} else {
			modelContainer.style.display = "none";
			player1BoardContainer.style.display = "flex";
			player2BoardContainer.style.display = "flex";
			boardContainer.style.display = "flex";
		}
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

				if (playerBoard[j][i].taken !== null) {
					cell.style.backgroundColor = "black";
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
	return {
		bindClick,
		renderBoards,
		addSelected,
		renderShipPlacement,
		renderGameOver,
	};
};

export default DOMcontroller;
