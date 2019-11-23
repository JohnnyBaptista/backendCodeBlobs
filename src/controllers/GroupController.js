const Group = require('../models/Group');

module.exports = {
	async index(req, res) {
		const result = await Group.get();
		return res.json(result);
	},

	async store(req, res) {
		const { name, type } = req.body;
		const result = await Group.create(name, type);
		return res.json(result); 
	},

	async update(req, res) {
		const { id, name, type } = req.body;
		const result = await Group.upd(id, name, type);
		return res.json(result);
	},

	async delete(req, res) {
		const { id } = req.params;
		const result = await Group.del(id);
		return res.json(result); 
	}
}