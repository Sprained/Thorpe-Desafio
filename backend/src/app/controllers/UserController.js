const UserSchema = require('../models/UserSchema');
const generateToken = require('../../utils/generateToken');
const Yup = require('yup');

module.exports = {
    async storage(req, res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password_hash: Yup.string().required().min(6),
        });

        //verificação dos dados
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Campos informados com erro!' });
        }

        const { name, email, password_hash } = req.body
        const token = generateToken()
        const user = await UserSchema.create({ token, name, email, password_hash });

        return res.json(user);
    }
}