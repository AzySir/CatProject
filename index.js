
// var http = require("http");
var axios = require('axios');
var url = "http://agl-developer-test.azurewebsites.net/people.json";
var maleJSON = "";
var femaleJSON = "";

function run(url) {
    axios.get(url)
    .then(response => {
        maleArray = getGender(response.data, response.data.length, "Male");
        femaleArray = getGender(response.data, response.data.length, "Female");


        console.log("----- Male Cat -----")
        sortedMaleArray = getCat(maleArray);
        console.log("----- END OF Male Cat -----")
        console.log("----- Female Cat -----")
        sortedFemaleArray = getCat(femaleArray);
        console.log("----- END Of Female Cat -----")

        // sortedMaleArray = sortAlphabetical(maleArray);
        // sortedFemaleArray = sortAlphabetical(femaleArray);
        
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

  function getCat(custJSON) {
    catArray = []
    petsArray = getPets(custJSON);
    petTypeArray = []; 
    for (var i = 0; i < petsArray.length; i++) {
        petTypeArray.push(petsArray[i].pets);
    }

    
  }

  function getPets(custJSON) {
    petsArray = [];
    var count = 0;
    for (var i = 0; i < custJSON.length; i++) {
        if (custJSON[i].pets != null) {
            petsArray.push(custJSON[i]);
        }
        else {
            count++;
        }
    }

    console.log(petsArray)
    return petsArray;
  }


  
  


run(url)