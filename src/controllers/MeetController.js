const Meet = require('../models/Meet');
const Group = require('../models/Group');

module.exports = {
	async index(req, res) {
		const result = await Meet.get();
		console.log(result);
		return res.json(result);
	},

	async store(req, res) {
		const { description, group } = req.body;

		const meet = await Meet.create(description, group);

		return res.json(meet); 
	},

	async consult(req, res) {
		const { id } = req.params;
		const result = await Meet.getQuantMeets(id);
		return res.json(result);
	},

	async meets(req, res) {
		const result = [];
		const groups = await Group.get();
		for(let group of groups){
			const { group_id } = group;
			let meetsGroup = await Meet.getGroupMeets(group_id);
			result.push(meetsGroup);
		}
		return res.json({status: 200, result})
	}
}