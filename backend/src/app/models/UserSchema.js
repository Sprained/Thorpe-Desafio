const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password_hash: {
        type: String,
        required: true,
    },
});

UserSchema.pre('save', async function save(next){
    const user = this;
    user.password_hash = await bcrypt.hash(user.password_hash, 8);
    next();
});

UserSchema.methods.comparePassword = function(password, cb){
    bcrypt.compare(password, this.password_hash, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}

module.exports = mongoose.model('UserSchema', UserSchema);