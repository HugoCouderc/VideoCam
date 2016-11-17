/**
 * RightsCOntroller
 *
 * @description :: Server-side logic for managing Rights
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  checkRights: function (req, res) {
    Rights.findOne(
      { userID: req.param('userID'), camID: req.param('camID') },
      function (err, right) {
        console.log(right.permissionlevel);
        return right.permissionlevel;
      }
    );

  },

  addRights: function (req, res) {
    Rights.create({ userID: req.param('userID'), camID: req.param('camID'), permissionlevel: req.param('permissionlevel') })
      .exec(function afterwards(err, myRight) {
        if (err) { console.log(err); }
        console.log(myRight);
        return res.ok();
      });

  },
}
