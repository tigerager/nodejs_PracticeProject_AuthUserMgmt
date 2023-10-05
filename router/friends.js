const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  router.get("/",(req,res)=>{
    res.send(JSON.stringify(friends,null,4));

});

  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  router.get('/:email',function (req, res) {
    const email = req.params.email;
    res.send(friends[email])
    });

  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
  router.post("/",function (req,res){
    if (req.body.email){
        friends[req.body.email] = {
            "firstName":req.body.firstName,
            //Add similarly for lastName
            //Add similarly for DOB
            }
    }
res.send("The user" + (' ')+ (req.body.firstName) + " Has been added!");
});

  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  router.put("/:email", function (req, res) {
    const email = req.params.email;
    let friend = friends[email]
    if (friend) { //Check is friend exists
        let DOB = req.body.DOB;
        //Add similarly for firstName
        //Add similarly for lastName

        //if DOB the DOB has been changed, update the DOB 
        if(DOB) {
            friend["DOB"] = DOB
        }
        //Add similarly for firstName
        //Add similarly for lastName
        friends[email]=friend;
        res.send(`Friend with the email  ${email} updated.`);
    }
    else{
        res.send("Unable to find friend!");
    }
  });
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  router.delete("/:email", (req, res) => {
    const email = req.params.email;
    if (email){
        delete friends[email]
    }
    res.send(`Friend with the email  ${email} deleted.`);
  });
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;
