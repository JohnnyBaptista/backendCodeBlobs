const connection = require('../database')();


const get = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM member', (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
}

const create = (name, description, group) => {
    let sql = 'CALL INS_MEMBER(?, ?, ?);';
    const params = [name, description, group];
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
}


const upd = (id, name, description, group) => {
    let sql = 'CALL UPD_MEMBER(?, ?, ?, ?);';
    let params = [id, name, description, group];
    return new Promise((resolve, reject) => {
        connection.query(sql, params, (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
}

const del = (id) => {
    let sql = 'CALL DEL_MEMBER(?);';
    return new Promise((resolve, reject) => {
        connection.query(sql, id, (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
}

module.exports = {
    get,
    create,
    upd, 
    del
}