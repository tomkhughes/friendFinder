var friendsData = require('../data/friends.js');

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  })
 
  app.post("/api/friends", function(req, res) {
    	
    	var smallestDifference = 1000;
        var bestMatch;
    	var differenceArray = [];

        var userScores = req.body['scores[]'].map(function(num) {
            return parseInt(num);
        });

        for (var i = 0; i < friendsData.length; i++) {
            var friendScores = friendsData[i].scores.map(function(num) {
                return parseInt(num);
            });
            console.log('friendScores' + friendScores) 

            for (var j = 0; j < userScores.length; j++) {
                var difference = userScores[j] - friendScores[j];
                if (difference < 0) {
                    difference = difference * -1;
                }
                differenceArray.push(difference);
                // console.log('differenceArray'+differenceArray)
            }
            var totalDifference = differenceArray.reduce(function(sum, value) {
                return sum + value;
            });
                            console.log('totalDifference' + totalDifference)

            if (totalDifference <= smallestDifference) {
                smallestDifference = totalDifference;
                bestMatch = friendsData[i];
                console.log('friendsData[i]',friendsData[i])
                console.log('bestMatch',bestMatch)

            }
            differenceArray = [];
        }

        res.json(bestMatch);
        console.log(res.json(bestMatch))

        friendsData.push(req.body);


    });

//    app.post('/api/friends', function(req,res) {

    
//     var newFriend = req.body;

//     console.log('newFriend array',newFriend);
//     console.log(newFriend["scores[]"]);
//     var newFriendScores = newFriend["scores[]"].map(parseFloat);

//     for (var i = 0; i < friendsData.length; i++) {
// 		var totalDifferenceArray = [];
// 		var scoreDifferencesArray = [];

//     	var friendsDataScores = friendsData[i].scores.map(parseFloat);
//     	console.log('friendsDataScores',friendsDataScores)
//     	for(var j = 0; j < friendsDataScores.length; j++ ){

//     		var totalDifference = 0

//     		totalDifference += Math.abs(friendsDataScores[j] - newFriendScores[j]);
//     		 // console.log('totalDifference'+totalDifference);
//     		totalDifferenceArray.push(totalDifference);
//     		  // console.log('totalDifferenceArray '+ totalDifferenceArray);
//     		var differenceSum = totalDifferenceArray.reduce(function(sum, score) {
//     			return sum + score
//     		})
//     		   scoreDifferencesArray.push(differenceSum)
//     		   console.log(scoreDifferencesArray)

//     		   scoreDifferencesArray

//     		   var diffTotalArray = (scoreDifferencesArray.pop())

//     	}
//     		// console.log(scoreDifferencesArray)
//     		 console.log('individual totals ',diffTotalArray)
//     		//Make new blank array push all diffTotalArray
//     		//then get lowest number from this array 
//     		//this number will be the match
//     		//
//     }	


// })

   app.post('api/clear', function(req,res){
   	tableData = [];
   	waitingListData = [];

   })
};
