/**
 * RightsCOntroller
 *
 * @description :: Server-side logic for managing Rights
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  checkRights: function (req,res)
  {
    Rights.findOne(
      {userID: req.param('userID'), camID: req.param('camID')},
      function(err, right)
      {
        console.log(right.permissionlevel);
        return right.permissionlevel;
      }
    );

  },

  subscribe: function(req,res)
  {
    right.subscribe(req.socket);

    right.subscribe(req.socket,user);
  }


}
