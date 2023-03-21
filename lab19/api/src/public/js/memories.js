const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const hidden = document.getElementById("hidden");
const messageInput = document.getElementById("message");

const submitForm = async (e) => {
    e.preventDefault();
    const body = {
        name: nameInput.value,
        message: messageInput.value,
    };
    await fetch("api/datos", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": hidden.value
        }
    });

    nameInput.value = "";
    messageInput.value = "";
};

form.addEventListener("submit", submitForm);