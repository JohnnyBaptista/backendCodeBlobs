const connection = require('../database')();

const get = () => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT * FROM meet', (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}

const create = (description, group) => {
	const sql = 'INSERT INTO meet SET meet.meet_id = NULL, meet.meet_description = ?, meet.group_id = (SELECT group_id FROM groups WHERE groups.group_id = ?)';
	const params = [description, group];
	return new Promise((resolve, reject) => {
		connection.query(sql, params, (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}

const getQuantMeets = (group_id) => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT COUNT(*) as meetNumber FROM meet WHERE group_id = (SELECT group_id FROM groups WHERE groups.group_id = ?)', group_id, (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}

const getGroupMeets = (group_id) => {
	return new Promise((resolve, reject) => {
		const sql = 'SELECT groups.group_name as nameGroup, type.type_name as nameType, COUNT(meet.group_id) as qntMeets FROM groups JOIN meet ON groups.group_id = meet.group_id JOIN type ON groups.type_id = type.type_id WHERE groups.group_id = ?';
		connection.query(sql, group_id, (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	})
}

module.exports = { 
	get, 
	create,
	getQuantMeets,
	getGroupMeets
};