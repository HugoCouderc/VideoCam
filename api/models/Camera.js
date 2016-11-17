//camera.js

module.exports={

  schema: true,
  attributes:{
    name:{
      type:'string',
      unique: true,
      required: true
    },
    owner:{
      model:'User',
      required:true
    },
    adress:{
      type:'string',
      required:true
    },
    angle:{
      type:'int',
      required:true
    }
  }
}
