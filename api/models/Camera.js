//camera.js

module.exports={

  schema: true,
  attributes:{
    name:{
      type:'string',
      required: true
    },
    owner:{
      model:'User',
      unique:true,
      required:true
    },
    adress:{
      type:'string',
      required:true
    }
  }
}
