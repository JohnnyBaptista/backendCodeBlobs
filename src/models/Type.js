const connection = require('../database')();

const get = () => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM type', (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}

const create = (type) =>{
	return new Promise((resolve, reject) => {
		let sql = `INSERT INTO type SET type_id = NULL, type.type_name = ?`;
		connection.query(sql, type, (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}

const upd = (id, name) => {
	let sql = 'CALL UPD_TYPE(?, ?);';
	let params = [id, name];
	return new Promise((resolve, reject) => {
		connection.query(sql, params, (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}

const del = (id) => {
    let sql = 'CALL DEL_TYPE(?);';
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
};