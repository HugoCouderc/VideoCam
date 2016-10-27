/**
 * Created by admin on 07/10/2016.
 */

var passport = require('passport');

module.exports = function (req,res,next)
{
    passport.authenticate('jwt',function(error,user,info)
    {
      if(error) return res.serverError(error);
        if(!user)
            return res.unauthorized(null,info)
        req.user = user;
        next();

    })(req, res)
}