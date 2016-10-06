module.exports = {
  schema: true,
  attributes: {
    username: {},
    password: {},
    email: {},
    firstName: {},
    lastName: {},
    toJson: function(){
      var obj= this.toObject();
      delete obj.password;
      return obj;
    }
  },
  /*value = current object*/
  beforeUpdate: function (value,next){
    /*todo hash password if necessary*/
    //SecurityService.comparePassword(value.password,)
    return next();
  },
  beforeCreate: function(value,next){
    SecurityService.hashPassword(value);
    return next();
  }
}
