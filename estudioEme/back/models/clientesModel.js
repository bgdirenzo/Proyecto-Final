var pool = require('./bdModel');

async function getClientes() {
    var query = "select * from clientes";
    var rows = await pool.query(query);
    return rows;
}

async function insertCliente(obj) {
    try {
        var query = "insert into clientes set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getClientes, insertCliente }