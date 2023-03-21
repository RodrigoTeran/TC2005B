const { pool } = require("../db/index");

const getArrayActionsForRol = (role) => {
    return {
        name: 'get-actions',
        text: 'SELECT privileges.action, roles.description FROM (SELECT "roleId", "privilegeID" FROM "rolesPrivileges") rp, privileges, roles WHERE privileges.id = rp."privilegeID" AND rp."roleId" = roles.id AND roles.description = $1;',
        values: [role]
    }
};

module.exports = class Rol {
    constructor() {}

    static async getActions(role) {
        console.log("role:", role);

        // Roles
        if (role !== "admin" && role !== "client") {
            return [];
        }

        const res = await pool.query(getArrayActionsForRol(role));
        const aux = [];

        for (let i = 0; i < res.rows.length; i++) {
            aux.push(res.rows[i].action);
        };

        console.log(aux);
        return aux;
    }
}