module.exports = {
  schema: true /* remove if mongoDB is used*/
  attributes:{
    username:{},
    password:{},
    email:{},
    firstName:{},
    lastName:{},
    toJson:function (){
      var obj = this.toObject();
      /*todo remove password*/
      return obj;
    }

  },
  /*value = current object*/
  beforeUpdate: function (value,next){
    /*todo hash password*/
  },
  beforeCreate: function (value, next)
    /*todo has password*/
};
