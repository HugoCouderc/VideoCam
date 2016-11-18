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
  checkEveryRights: function(req,res){
    Rights.find({userID: req.param('userID')},
      function(err,list){
        for(i=0;i<list.length;i++){
            console.log(list[i].camID);
            console.log(list[i].permissionlevel);
        }
        return list;
      }
    )
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
