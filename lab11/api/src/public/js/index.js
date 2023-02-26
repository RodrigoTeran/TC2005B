const h1 = document.getElementById("h1");

const getData = async () => {
    const res = await fetch("api/info");
    const data = await res.json();
    const text = document.createTextNode(data.msg);
    h1.append(text);
};
getData();
