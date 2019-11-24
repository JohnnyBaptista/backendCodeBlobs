const Meet = require('../models/Meet');

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
	}
}