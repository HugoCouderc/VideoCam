/**
 * HomepageControllerController
 *
 * @description :: Server-side logic for managing Homepagecontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	homepageView : function (req,res) {
		return res.view('homepage', {user : req.user});
	},

	rightmanagerView : function (req,res) {
		return res.view('rightmanager', {user : req.user});
	},
	
	addcameraView : function (req,res) {
		return res.view('addcamera', {user : req.user});
	}
};

