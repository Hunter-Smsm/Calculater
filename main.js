const result = document.querySelector(".calculator .result");
const allBtns = document.querySelectorAll(".calculator .buttons button");

const handelBtnClick = (e) => {
	const btn = e.target;
	btn.classList.add("dark");
	const audio = document.createElement("audio");
	audio.src = "./sounds/mixkit-arcade-game-jump-coin-216.wav";
	audio.play();
	setTimeout(() => {
		btn.classList.remove("dark");
	}, 200);
	if (
		btn.textContent !== "=" &&
		btn.textContent !== "X" &&
		btn.textContent !== "Ac"
	) {
		result.textContent += btn.textContent;
	} else if (btn.textContent === "=") {
		result.textContent = eval(result.textContent);
	} else if (btn.textContent === "Ac") {
		result.textContent = "";
	} else {
		result.textContent = result.textContent.substring(
			0,
			result.textContent.length - 1
		);
	}
};

allBtns.forEach((btn) => btn.addEventListener("mousedown", handelBtnClick));
