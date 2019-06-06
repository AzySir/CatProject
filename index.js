
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
 
        catMaleArray = getCat(maleArray);
        catFemaleArray = getCat(femaleArray);

        sortedMaleArray = sortAlphabetical(catMaleArray);
        sortedFemaleArray = sortAlphabetical(catFemaleArray);

        displayCats("Male", sortedMaleArray)
        console.log("      ")
        displayCats("Female", sortedFemaleArray)
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
    petTypeArray = []; 
    petArray = getPet(custJSON);
    for (var i = 0; i < petArray.length; i++) {
           for (var j = 0; j < petArray[i].pets.length; j++) {
                if (petArray[i].pets[j].type == "Cat") {
                    catArray.push(petArray[i].pets[j].name);
                }    
           }
    }
    
    return catArray;
  }

  function getPet(custJSON) {
    petArray = [];
    var count = 0;
    for (var i = 0; i < custJSON.length; i++) {
        if (custJSON[i].pets != null) {
            petArray.push(custJSON[i]);
        }
        else {
            count++;
        }
    }
    return petArray;
  }

  function sortAlphabetical(sortGenderArr) {
    return sortGenderArr.sort();
  }

  function displayCats(gender, catArr) {
    console.log(gender)
    for (var i = 0; i < catArr.length; i++) {
        console.log(" * " + catArr[i]);
    }
  }

run(url)