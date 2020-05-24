const jwt = require('jsonwebtoken');
const Yup = require('yup');

const UserSchema = require('../models/UserSchema');
const authConfig = require('../config/auth');

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
        const user = await UserSchema.create({ 
            name, 
            email, 
            password_hash,
        });

        const id = user._id;

        return res.json({
            token: jwt.sign({id} , authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        });
    }
}