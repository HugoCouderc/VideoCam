/**
 * CameraController
 * 
 * @description :: Server-side logic for managing Cameras
 * @help :: See http://sailsjs.org/#!/documentation/concepts/Controllers
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

	myCamRights : function(req, res) {
		Rights.find({
			userID : req.param('userID')
		}, function(err, list) {
			var cams = [];
			var perms = [];
			for (i = 0; i < list.length; i++) {
				cams.push(list[i].camID);
				perms.push(list[i].permissionlevel);
			}

			Camera.find({
				id : cams
			}, function(err, list2) {
				console.log("=====================");
				console.log(list2);
				for (j = 0; j < list.length; j++) {
					list2[j].permission = perms[j];
				}
				return list2;
			});

		});
	},

	getCamera : function(req, res) {
		return res.ok(Camera.findOne({
			id : req.param('id')
		}).exec(function(err, camera) {

			if (camera) {
				console.log(camera);
			}
			return camera;
		}))
	},


 	myCamRightsView : function(req, res) {
 		Camera.find({owner: req.user.id}, function (err, list) {
 			console.log(list);
 			return res.view('personalcameras', {cameras : list, user : req.user});
 		});
	},

	//https://github.com/EmergingTechnologyAdvisors/node-serialport/blob/5.0.0-beta2/README.md#ubuntudebian-linux
	changeAngle: function(req,res){
		if(req.param('angle')<=180 || req.param('angle')>=0){
			Camera.findOne({id:req.param('id')},function(err,camera){
				
				if(err){console.log(err);}
				Camera.update({id:req.param('id')},{angle:req.param('angle')}).exec(function afterwards(err,updated){
					if(err)
					{
						console.log("problem on camera angle update");
						return;
					}
					console.log(camera.angle);
					return res.ok();
					})
				}
			);
			
				
		}
	}

};
