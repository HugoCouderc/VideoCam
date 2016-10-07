var bCrypt= require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

module.exports = {
  hashPassword : function(user){
    if(user.password){
      user.password = bCrypt.hashSync(user.password)
    }
  },

  comparePassword: function (password,user){
    return bcrypt.compareSync(password,user.password)
  },

  createToken : function(user)
  {
    return jwt.sign({
      user: user.toJSON()
    },
      sails.config.jwtSettings.secret,
      {
        algorithm: sails.config.jwtSettings.algo,
        expiresIn: sails.config.jwtSettings.expires
      }
    )
  }
}
