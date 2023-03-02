const memories = document.getElementById("memories");
const deleetBtn = document.getElementById("delete-btn");

const deleteMemories = async () => {
    await fetch("api/datos", {
        method: "DELETE"
    });
    window.location.reload();
};


deleetBtn.addEventListener("click", deleteMemories);