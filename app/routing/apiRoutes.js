var friendsData = require('../data/friends.js');

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  })
 

   app.post('/api/friends', function(req,res) {

    
    var newFriend = req.body;

    console.log('newFriend array',newFriend);
    console.log(newFriend["scores[]"]);
    var newFriendScores = newFriend["scores[]"].map(parseFloat);

    for (var i = 0; i < friendsData.length; i++) {
		var totalDifferenceArray = [];
		var scoreDifferencesArray = [];

    	var friendsDataScores = friendsData[i].scores.map(parseFloat);
    	console.log('friendsDataScores',friendsDataScores)
    	for(var j = 0; j < friendsDataScores.length; j++ ){

    		var totalDifference = 0

    		totalDifference += Math.abs(friendsDataScores[j] - newFriendScores[j]);
    		 // console.log('totalDifference'+totalDifference);
    		totalDifferenceArray.push(totalDifference);
    		  // console.log('totalDifferenceArray '+ totalDifferenceArray);
    		var differenceSum = totalDifferenceArray.reduce(function(sum, score) {
    			return sum + score
    		})
    		   scoreDifferencesArray.push(differenceSum)
    		   var diffTotalArray = (scoreDifferencesArray.pop())

    	}

    		// console.log(scoreDifferencesArray)
    		 console.log('individual totals ',diffTotalArray)
    		//Make new blank array push all diffTotalArray
    		//then get lowest number from this array 
    		//this number will be the match
    		//
    }	


})

   app.post('api/clear', function(req,res){
   	tableData = [];
   	waitingListData = [];

   })
};
