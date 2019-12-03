const Member = require('../models/Member');
const Group = require('../models/Group');

module.exports = {
	async index(req, res) {
		const result = await Member.get();
		return res.json(result);
	},

	async store(req, res) {
		const { name, description, group } = req.body;
		const result = await Member.create(name, description, group);
		return res.json(result);
	},
	
	async update(req, res) {
		const { id, name, description, group } = req.body;
		const result = await Member.upd(id, name, description, group);
		return res.json(result);
	},

	async delete(req, res) {
		const { id } = req.params;
		const result = await Member.del(id);
		return res.json(result);
	},

	async consult(req, res) {
		const result = [];
		const groups = await Group.get();
		for(let group of groups){
			const { group_id } = group;
			let membersGroup = await Member.getQuantMembers(group_id);
			result.push(membersGroup);
		}
		return res.json(result);
	}

}