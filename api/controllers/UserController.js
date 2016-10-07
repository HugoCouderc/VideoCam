/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	me: function (req,res)
    {
        return  res.ok(
            { user: req.user}
        )
    }
};

