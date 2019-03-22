var friendsArray = require("../data/friends");

module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });


  app.post("/api/friends", function(req, res) {
   
    console.log (req.body.scores);

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    }


    var userData =req.body;
    var userScores = userData.scores;

    var totalDifference;

    for(var i = 0; i< friendsArray.length; i++){

      var currentFriend = friendsArray[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      for (var j=0; j < currentFriend.scores.length; j++) {
        var currentFriendScores = currentFriend.scores[j];
        var currentUserScores = userScores[j];


        totalDifference += Math.abs(parseInt(currentUserScores) - parseInt(currentFriendScores));
      }
     
          
          if(totalDifference < bestMatch.friendDifference){
            bestMatch.name = currentFriend.name;
            bestMatch.photo = currentFriend.photo;
            bestMatch.friendDifference = totalDifference;
          }
        }
          
      friendsArray.push(userData);
      
      res.json(bestMatch);
  

 // }
  });
  };