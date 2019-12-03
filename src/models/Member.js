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

const getQuantMembers = (group_id) => {
	return new Promise((resolve, reject) => {
		connection.query('SELECT COUNT(*) as memberNumber FROM member WHERE group_id = (SELECT group_id FROM groups WHERE groups.group_id = ?)', group_id, (error, result) => {
			if(error) reject(error);
			resolve(result);
		});
	});
}

const list = (group_id) => {
    let sql = 'SELECT * FROM member WHERE member.group_id = ?';
    return new Promise((resolve, reject) => {
        connection.query(sql, group_id, (error, result) => {
            if(error) reject(error);
            resolve(result);
        });
    });
}

module.exports = {
    get,
    create,
    upd, 
    del,
    getQuantMembers,
    list
}