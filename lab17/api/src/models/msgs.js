const { pool } = require("../db/index");

const insertNewStory = (name, message) => {
    return {
        name: 'insert-story',
        text: 'INSERT INTO stories(name, message) VALUES ($1, $2);',
        values: [name, message]
    }
};

const fetchAllStories = () => {
    return {
        name: 'get-all-stories',
        text: 'SELECT * FROM stories;'
    }
};

const deleteStories = () => {
    return {
        name: 'delete-all-stories',
        text: 'DELETE FROM stories;'
    }
};

module.exports = class Msg {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }

    async save() {
        await pool.query(insertNewStory(this.name, this.message));
    }

    static async fetchAll() {
        const data = await pool.query(fetchAllStories());

        const res = [];

        for (let i = 0; i < data.rows.length; i++) {
            res.push({
                name: data.rows[i].name,
                message: data.rows[i].message
            })
        }

        return res;
    }

    static async deleteAll() {
        await pool.query(deleteStories());
    }
}