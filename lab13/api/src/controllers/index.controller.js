const Info = require("../models/info");
const Msgs = require("../models/msgs");
const Pokemon = require("../models/pokemon");

const controller = {};

controller.getInfo = () => {
    return Info.getOne();
};

controller.createData = (req, res) => {
    const { name, message } = req.body;
    if (name === undefined || message === undefined) {
        return res.status(401).json({
            msg: "Datos incompletos"
        });
    }

    const msg = new Msgs(name, message);
    msg.save();

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

    Pokemon.create(pokemon);

    return res.status(200).json({
        msg: "Todo bien"
    });
};

controller.deleteData = (_, res) => {
    Msgs.deleteAll();

    return res.status(200).json({
        msg: "Todo bien"
    });
};

controller.myData = async () => {
    return await Msgs.fetchAll();
};


module.exports = controller;