const Info = require("../models/info");
const Msgs = require("../models/msgs");
const Pokemon = require("../models/pokemon");

const controller = {};

controller.getInfo = async () => {
    return await Info.getOne();
};

controller.createData = async (req, res) => {
    const { name, message } = req.body;
    if (name === undefined || message === undefined) {
        return res.status(401).json({
            msg: "Datos incompletos"
        });
    }

    const msg = new Msgs(name, message);
    await msg.save();

    return res.status(200).json({
        msg: "Todo bien"
    });
};

controller.createPokemonRegistry = async (req, res) => {
    const { pokemon } = req.body;
    if (pokemon === undefined) {
        return res.status(401).json({
            msg: "Datos incompletos"
        });
    }

    await Pokemon.create(pokemon);

    return res.status(200).json({
        msg: "Todo bien"
    });
};

controller.deleteData = async (_, res) => {
    await Msgs.deleteAll();

    return res.status(200).json({
        msg: "Todo bien"
    });
};

controller.myData = async () => {
    return await Msgs.fetchAll();
};


module.exports = controller;