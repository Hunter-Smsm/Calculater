if (localStorage.color) {
    document.styleSheets[0].cssRules[8].style.setProperty(
        "border-color",
        `${localStorage.color}`
    );
    document.styleSheets[0].cssRules[9].style.setProperty(
        "background-color",
        `${localStorage.color}`
    );
    document.styleSheets[0].cssRules[10].style.setProperty(
        "box-shadow",
        `0 0 20px 2px ${localStorage.color}`
    );
    document.getElementById("color").value = localStorage.color;
}

document.getElementById("color").onchange = function () {
    localStorage.color = document.getElementById("color").value;
    document.styleSheets[0].cssRules[8].style.setProperty(
        "border-color",
        `${localStorage.color}`
    );
    document.styleSheets[0].cssRules[9].style.setProperty(
        "background-color",
        `${localStorage.color}`
    );
    document.styleSheets[0].cssRules[10].style.setProperty(
        "box-shadow",
        `0 0 20px 2px ${localStorage.color}`
    );
};

let num1 = "",
    num2 = "",
    op = "";

let used = false;

function buttons() {
    let audio = document.querySelector("audio").cloneNode();
    audio.play();
    if (this.innerHTML === "=") {
        if (op === "+") {
            num1 = +num1 + +num2;
        } else if (op === "-") {
            num1 -= num2;
        } else if (op === "X") {
            num1 *= num2;
        } else if (op === "/") {
            num1 /= num2;
        }
        (num2 = ""), (op = "");
        used = true;
    } else if (this.innerHTML === "Reset") {
        num1 = num2 = op = "";
    } else if (
        this.innerHTML === "+" ||
        this.innerHTML === "-" ||
        this.innerHTML === "X" ||
        this.innerHTML === "/"
    ) {
        if (num1 !== "") {
            op = this.innerHTML;
        }
    } else if (op === "" && used === false) {
        num1 += this.innerHTML;
    } else if (op === "") {
        num1 = "";
        used = false;
        num1 += this.innerHTML;
    } else {
        num2 += this.innerHTML;
    }
    document.querySelector(".result span").innerHTML = `${num1} ${op} ${num2}`;
    if (!this.classList.contains("op")) {
        this.classList.add("btnc");
        setTimeout(() => {
            this.classList.remove("btnc");
        }, 350);
    } else {
        this.classList.add("opc");
        setTimeout(() => {
            this.classList.remove("opc");
        }, 350);
    }
}

document.querySelectorAll(".btn").forEach(function (el) {
    el.onclick = buttons;
});
