const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema
({
    name:{ 
        type: String,
        required: true,

    },
    email:{ 
        type: String,
        required: true,
    },
    age :{ 
        type: Number,
        required: true,
    },
}

);
const UserModel= mongoose.model("user details", UserSchema);
module.exports = UserModel;