const memories = document.getElementById("memories");
const hidden = document.getElementById("hidden");
const deleetBtn = document.getElementById("delete-btn");

const deleteMemories = async () => {
    await fetch("api/datos", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": hidden.value
        }
    });
    window.location.reload();
};


deleetBtn.addEventListener("click", deleteMemories);