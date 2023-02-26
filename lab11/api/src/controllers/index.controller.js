const fs = require("fs");
const path = require("path");

const controller = {};

controller.getInfo = (_, res) => {
    const msgs = [
        "Bonjour!",
        "Wlikommen!",
        "¿Hermoso día no crees?",
        "600 marcos de oro",
        "A Freda no le gusta el pollo"
    ]
    const length = msgs.length;
    const randomIndex = Math.floor(Math.random() * length);
    const phrase = msgs[randomIndex];

    res.status(200).json({
        msg: phrase
    })
};

controller.createData = (req, res) => {
    const { name, message } = req.body;
    if (name === undefined || message === undefined) {
        return res.status(401).json({
            msg: "Datos incompletos"
        });
    }

    fs.readdir(path.join(__dirname, "../memories"), (err, files) => {
        const createStream = fs.createWriteStream(path.join(__dirname, `../memories/memory${files.length == 0 ? "" : "(" + files.length + ")"}.txt`));
        createStream.write(name + "\n");
        createStream.write(message);
        createStream.end();
    });

    return res.status(200).json({
        msg: "Todo bien"
    });
};

controller.createPokemonRegistry = (req, res) => {
    const { pokemon } = req.body;
    if (pokemon === undefined) {
        return res.status(401).json({
            msg: "Datos incompletos"
        });
    }

    fs.readFile(path.join(__dirname, "../pokemons/index.txt"), 'utf-8', function (err, content) {
        if (err) {
            return;
        }

        const newValue = `${content}\n${pokemon}`;

        fs.writeFileSync(path.join(__dirname, "../pokemons/index.txt"), newValue, 'utf-8');

    });
    return res.status(200).json({
        msg: "Todo bien"
    });
};

controller.deleteData = (_, res) => {
    fs.readdirSync(path.join(__dirname, "../memories")).forEach(f => {
        try {
            fs.unlinkSync(path.join(__dirname, `../memories/${f}`));
        } catch (error) {
            console.log("error", error);
        }
    });;

    return res.status(200).json({
        msg: "Todo bien"
    });
};

controller.myData = async (_, res) => {
    const files = fs.readdirSync(path.join(__dirname, "../memories"));
    const resData = await Promise.all(files.map(async (filename) => {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, "../memories/", filename), 'utf-8', function (err, content) {
                if (err) {
                    reject();
                    return;
                }
                resolve({
                    name: content.split("\n")[0],
                    message: content.split("\n")[1],
                });
            });
        });
    }));

    return res.status(200).json({
        msg: resData
    });
};


module.exports = controller;