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

	var expDate = new Date();
	expDate.setDate(expDate.getDate() + 2);
    token = SecurityService.createToken(user);
    res.cookie("access_token", token, { httpOnly: true, expires: expDate })
    
    return res.ok (
        {
            token : token,
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
                    user: SecurityService.createToken(user),
                    token: token
                }

            })
            .then(res.created)
            .catch(res.serverError)
    }
	
};