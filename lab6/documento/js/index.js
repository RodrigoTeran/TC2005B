const elements = Array.from(document.querySelectorAll("body>header>h1>div>span"));
const inputFirstname = document.querySelector("#fname");
const inputLastname = document.querySelector("#lname");
const inputEmail = document.querySelector("#email");

const hover = (element) => {
    element.style.transform = "scale(0.5)";
}
const out = (element) => {
    const t = setTimeout(() => {
        element.style.transform = "scale(1)";
        clearTimeout(t);
    }, 1000);
}

const focus = (element) => {
    const t = setTimeout(() => {
        let index = 0;
        const phrase = "Te estás tardando mucho en escribir..."
        const interval = setInterval(() => {
            element.value = phrase.slice(0, index);
            index += 1;
            if (index === phrase.length + 1) {
                clearInterval(interval);
            }
        }, 100);
        clearTimeout(t);
    }, 2000);
}

elements.map((element) => {
    element.addEventListener("mouseover", () => {
        hover(element);
    });
    element.addEventListener("mouseout", () => {
        out(element);
    });
});

inputFirstname.addEventListener("focus", () => {
    focus(inputFirstname);
});
inputLastname.addEventListener("focus", () => {
    focus(inputLastname);
});
inputEmail.addEventListener("focus", () => {
    focus(inputEmail);
});