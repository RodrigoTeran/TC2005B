const fs = require("fs");
const path = require("path");

module.exports = class Pokemon {
    constructor() {}

    static create(pokemon) {
        fs.readFile(path.join(__dirname, "../pokemons/index.txt"), 'utf-8', function (err, content) {
            if (err) {
                return;
            }
    
            const newValue = `${content}\n${pokemon}`;
    
            fs.writeFileSync(path.join(__dirname, "../pokemons/index.txt"), newValue, 'utf-8');
    
        });
    }
}