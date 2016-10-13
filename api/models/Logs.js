//logs.js

module.exports={

  schema:true,
  attributes:{
    camID:{
      type: 'int',
      required: true
    },
    userID:{
      type: 'int',
      required: true
    },
    message:{
      type:'string',
      required: true
    }

}

}
