const result = document.querySelector(".calculator .result");
const allBtns = document.querySelectorAll(".calculator .buttons button");

const handelBtnClick = (e) => {
	const btn = e.target;
	btn.classList.add("dark");
	setTimeout(() => {
		btn.classList.remove("dark");
	}, 200);
	if (
		btn.textContent !== "=" &&
		btn.textContent !== "X" &&
		btn.textContent !== "Ac"
	) {
		if (
			btn.textContent === "+" ||
			btn.textContent === "-" ||
			btn.textContent === "*" ||
			btn.textContent === "/"
		) {
			result.innerHTML += `<span>${btn.textContent}</span>`;
		} else {
			result.innerHTML += btn.textContent;
		}
	} else if (btn.textContent === "=") {
		result.textContent = eval(result.textContent);
	} else if (btn.textContent === "Ac") {
		result.textContent = "";
	} else {
		result.innerHTML = result.innerHTML.substring(
			0,
			result.textContent.length - 1
		);
	}
};

allBtns.forEach((btn) => btn.addEventListener("mousedown", handelBtnClick));
