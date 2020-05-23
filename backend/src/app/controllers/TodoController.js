const TodoSchema = require('../models/TodoSchema');

module.exports = {
    async index(req, res){
        const todo = await TodoSchema.find({ user: req.userId })

        return res.status(200).json(todo);
    },
    async storage(req, res){
        const { content } = req.body;

        await TodoSchema.create({ content, user: req.userId });

        return res.status(200).json(req.userId);
    },
    async delete(req, res){
        await TodoSchema.findByIdAndDelete(req.params.id);


        return res.status(200).json();
    }
}