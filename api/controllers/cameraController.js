/**
 * CameraController
 *
 * @description :: Server-side logic for managing Cameras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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
	}
};
