const bcrypt = require('bcryptjs');
const { pool } = require("../db/index");

const insertNewUser = (email, pswd) => {
    return {
        name: 'insert-user',
        text: 'INSERT INTO users(email, pswd) VALUES ($1, $2);',
        values: [email, pswd]
    }
};

const getUserByEmail = (email) => {
    return {
        name: 'get-user-by-email',
        text: 'SELECT * FROM users WHERE email = $1;',
        values: [email]
    }
};

module.exports = class User {
    constructor(email, pswd) {
        this.email = email;
        this.pswd = pswd;
    }

    async save() {
        const hashedPswd = await bcrypt.hash(this.pswd, 12);

        await pool.query(insertNewUser(this.email, hashedPswd));
    }

    static async logIn(req, res) {
        try {
            const hasRelatedEmail = await  pool.query(getUserByEmail(req.body.email));
            if (hasRelatedEmail.rowCount === 0) {
                return res.json({
                    msg: "Claves inválidas"
                });
            }
    
            const user = hasRelatedEmail.rows[0];

            console.log(user);
    
            const doMatch = await bcrypt.compare(req.body.password, user.pswd);
    
            if (!doMatch) {
                return res.json({
                    msg: "Claves inválidas"
                });
            }
    
            req.session.isLoggedIn = true;
            req.session.user = user;

            return req.session.save(err => {
                res.json({
                    msg: "Todo bien"
                });
            });
            
        } catch(error) {
            console.error(error);
            return res.json({
                msg: "Error del servidor"
            });
        }
    }
}