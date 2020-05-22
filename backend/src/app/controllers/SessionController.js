const UserSchema = require('../models/UserSchema');
const Yup = require('yup');

module.exports = {
    async storage(req, res){
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password_hash: Yup.string().required().min(6),
        });

        //verificação dos dados
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Campos informados com erro!' })
        }

        const { email, password_hash } = req.body;
        const correntUser = await UserSchema.findOne({ email }, function(err, user){
            
            if(err) throw err;
            user.comparePassword(password_hash, function(err, isMatch) {
                if (err) throw err;
            });
        });

        if(!correntUser){
            return res.status(401).json({ error: 'Usuario não encontrado!' });
        }

        return res.json({ user:correntUser.token, id: correntUser._id });
    }
}