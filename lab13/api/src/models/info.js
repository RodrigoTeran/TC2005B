module.exports = class Info {
    constructor() {}

    static msgs = [
        "Bonjour!",
        "Wlikommen!",
        "¿Hermoso día no crees?",
        "600 marcos de oro",
        "A Freda no le gusta el pollo"
    ];

    static getOne() {
        const length = this.msgs.length;
        const randomIndex = Math.floor(Math.random() * length);
        const phrase = this.msgs[randomIndex];

        return phrase;
    }
}