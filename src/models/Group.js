const connection = require('../database')();

const get = () => {
	return new Promise((resolve, reject) => {
		connection.query('select * from groups', (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}

const create = (name, type) => {
	const sql = 'INSERT INTO groups SET groups.group_id = NULL, groups.group_name = ?, groups.type_id = (SELECT type_id FROM type WHERE type.type_id = ?)';
	const params = [name, type];
	return new Promise((resolve, reject) => {
		connection.query(sql, params, (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}


const upd = (id, name, type) => {
	let sql = 'CALL UPD_GROUP(?, ?, ?);';
    let params = [id, name, type];
    return new Promise((resolve, reject) => {
		connection.query(sql, params, (error, result) => {
			if(error) reject(error);
            resolve(result);
        });
    });
}

const del = (id) => {
	let sql = 'CALL DEL_GROUP(?);';
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
	del,
	upd
};