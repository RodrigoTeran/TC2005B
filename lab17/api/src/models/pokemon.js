const { pool } = require("../db/index");

const insertNewPokemon = (pokemon) => {
    return {
        name: 'insert-pokemon',
        text: 'INSERT INTO pokemons(pokemon) VALUES ($1);',
        values: [pokemon]
    }
};

module.exports = class Pokemon {
    constructor() {}

    static async create(pokemon) {
        await pool.query(insertNewPokemon(pokemon));
    }
}