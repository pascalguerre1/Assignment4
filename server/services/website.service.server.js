module.exports = function(app){

var websites = [
    { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
    { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
    { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
    { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
  ];


  	app.post('/api/user/:uid/website', createWebsite); 
	app.get('/api/user/:uid/website', findAllWebsitesForUser);
	app.get('/api/website/:wid', findWebsiteById);
	app.put('/api/website/:wid', updateWebsite);
	app.delete('/api/website/:wid', deleteWebsite);


	function createWebsite(req, res){
		var website = req.body;
		var uid = req.params['uid'];
		website._id = Math.floor(Math.random() * 10000).toString();
    	website.developerId = uid;
    	websites.push(website);
    	res.json(website);
	}

	function findAllWebsitesForUser(req, res){
		var uid = req.params['uid'];
		var result = [];
    	for (let x = 0; x < websites.length; x++) {
      		if (websites[x].developerId === uid) {
        		result.push(websites[x]);
       		}
    	}
    	res.json(result);
	}

	function selectWebsiteById(wid){
		for (let x = 0; x < websites.length; x++) {
      		if (websites[x]._id === wid) {
        		return websites[x];
        	}
    	}
	}

	function findWebsiteById(req, res){
		var wid = req.params['wid']
		var website = selectWebsiteById(wid);
		res.json(website);
	}

	function updateWebsite(req, res){
		var wid = req.params['wid'];
		var website = req.body;
		var oldWeb = selectWebsiteById(wid);
    	var index = websites.indexOf(oldWeb);
    	websites[index].name = website.name;
    	websites[index].description = website.description;
    	res.json(website);
	}

	function deleteWebsite(req, res){
		var wid = req.params['wid'];
		var web = selectWebsiteById(wid);
    	var index = websites.indexOf(web);
    	websites.splice(index,1);
    	res.json(websites);
	}

}

