const { pool } = require("../db/index");

const selectInfo = (id) => {
    return {
        name: 'get-single-info',
        text: 'SELECT * FROM msgs WHERE id = $1 LIMIT 1;',
        values: [id]
    }
};

const getInfoLength = () => {
    return {
        name: 'get-all-info',
        text: 'SELECT * FROM msgs;',
    }
};

module.exports = class Info {
    constructor() { }

    static async getOne() {
        const dataLength = await pool.query(getInfoLength());
        const length = dataLength.rowCount;
        const randomIndex = Math.floor(Math.random() * length);
        const data = await pool.query(selectInfo(randomIndex + 1));

        if (data.rowCount === 0) {
            return "";
        }

        const phrase = data.rows[0].text;

        return phrase;
    }
}