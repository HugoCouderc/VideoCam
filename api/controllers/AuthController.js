/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


 var passport = require ('passport');

 function onPassportAuth(req, res, error, user, info)
 {
     if(error) return res.serverError(error);
  
     if(!user) return res.unauthorized(null,info);

     return res.ok (
         {
             token : SecurityService.createToken(user),
             user:user
         }
     )
 }


 module.exports = {

     signin: function (req,res)
     {
         passport.authenticate('local',
         onPassportAuth.bind(this,req,res))(req,res);
     },
     signup : function (req,res) {
         User
             .create(_.omit(req.allParams(),'id'))
             .then(function(user){
                 return {
                     user: user,
                     token: SecurityService.createToken(user)
                 }

             })
             .then(res.created)
             .catch(res.serverError)
     }

 };
