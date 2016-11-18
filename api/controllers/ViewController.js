/**
 * HomepageControllerController
 *
 * @description :: Server-side logic for managing Homepagecontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	homepageView : function (req,res) {
		res.view('homepage', {user : req.user});
	},
	addcameraView : function (req,res) {
		res.view('addcamera', {user : req.user});
	},
	rightmanagerView : function (req,res) {
		res.view('rightmanager', {user : req.user});
	}
};

