const memories = document.getElementById("memories");

const getData = async () => {
    const res = await fetch("api/datos");
    const data = await res.json();

    try {
        for (let i = 0; i < data.msg.length; i++) {
            const { name, message } = data.msg[i];
            const div = document.createElement("div");
            const divName = document.createElement("div");
            divName.classList = "title";
            const textName = document.createTextNode(name);
            divName.append(textName);

            const divMsg = document.createElement("div");
            divMsg.classList = "msg";
            const textMsg = document.createTextNode(message);
            divMsg.append(textMsg);

            div.append(divName);
            div.append(divMsg);
            memories.append(div);
        }
    } catch { };
};
getData();
