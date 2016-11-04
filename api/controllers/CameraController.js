/**
 * CameraController
 *
 * @description :: Server-side logic for managing Cameras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {

 	myCameras: function (req,res)
 	{
 		Camera.find(
 			{owner: req.user.id},
 			function(err, list)
 			{
 				return res.json(list);
 			}
 			);
 	},

 	myCamRights: function(req,res)
 	{
 		Rights.find(
 			{userID: req.param('userID')},
 			function(err, list)
 			{
 				var cams=[];
 				var perms=[];
 				for(i=0; i<list.length;i++)
 				{
 					cams.push(list[i].camID);
 					perms.push(list[i].permissionlevel);
 				}

 				Camera.find(
 					{id : cams},
 					function(err, list2)
 					{
 						console.log("=====================");
 						console.log(list2);
 						for(j=0; j<list.length;j++)
 						{
 							list2[j].permission = perms[j];
 						}
 						return list2;
 					}
 				);

 			}
 		);
 	},



 	getCamera: function(req,res)
 	{
 		return res.ok(Camera.findOne({
 			id: req.param('id')
 		}).exec(function(err, camera){

 			if(camera){
 				console.log(camera);
 			}
 			return camera;
 		}))
 	},

 	myCamRightsView : function(req, res) {
 		Camera.find({owner: req.user.id}, function (err, list) {
 			console.log(list);
 			return res.view('personalcameras', {cameras : list});
 		});
	}

 };
