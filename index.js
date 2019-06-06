
// var http = require("http");
var axios = require('axios');
var url = "http://agl-developer-test.azurewebsites.net/people.json";
var maleJSON = "";
var femaleJSON = "";

function run(url) {
    axios.get(url)
    .then(response => {
        maleArray = getGender(response.data, response.data.length, "Male");
        console.log("----Male----")
        console.log(maleArray);
        console.log("----END OF MALE----")
        femaleArray = getGender(response.data, response.data.length, "Female");
        console.log("----Female----")
        console.log(femaleArray);
        console.log("----END OF FEMALE----")

        sortedMaleArray = sortAlphabetical(maleArray);
        sortedFemaleArray = sortAlphabetical(femaleArray)
        
    })
}

  function getGender(custJSON, jsonLength, gender) {
      let genderArr = [];
    for (var i = 0; i < jsonLength; i++) {
        if (custJSON[i].gender == gender) {
            genderArr.push(custJSON[i])
        }
    }
    return genderArr;
  }

  
  


run(url)