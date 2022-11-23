const User  = require('../models/User.js');

class UserServices {
    static createUser(name, lastName, age, instalment){
        return new User(name, lastName, age, 0, 0, 'none', instalment);
    }
    


}

module.exports = UserServices;