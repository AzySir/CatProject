var axios = require('axios'); //Include Axios Library for JS handling
const url = "http://agl-developer-test.azurewebsites.net/people.json"; //Set API 
const selectedPet = "Cat" //Change this configuration variable to get the Pet of your selection

function run(url) {
    axios.get(url) //Get API 
    .then(response => { //Then do -
        
        maleArray = getGender(response.data, "Male"); //Set Male Genders into an Array
        femaleArray = getGender(response.data, "Female"); //Set Female Genders into an Array
 
        catMaleArray = getAnimal(maleArray, selectedPet); //Set an array from the list of Males with cats
        catFemaleArray = getAnimal(femaleArray, selectedPet); //Set an array from the list of Females with cats 

        sortedMaleArray = sortAlphabetical(catMaleArray); //Sort the Male Array alphabetically
        sortedFemaleArray = sortAlphabetical(catFemaleArray); //Sort the Female Array alphabetically

        if (sortedMaleArray.length > 0) { //Will only display Male if the array is greater than 0
            displayCats("Male", sortedMaleArray) //Print out Cats with Male Owners
            console.log("      ") //Seperator on the output
        }

        if (sortedFemaleArray.length > 0) { //Will only display Female if the array is greater than 0
            displayCats("Female", sortedFemaleArray) //Print out Cats with Female Owners
            console.log("      ") //Seperator on the output
        }
    })
}

    function getGender(custJSON, gender) {
      let genderArr = []; //init Array
    for (var i = 0; i < custJSON.length; i++) { //Loop through the JSON 
        if (custJSON[i].gender == gender) { //If gender of "customer" is Male/Female
            genderArr.push(custJSON[i]) //Add to gender Array
        }
    }
    return genderArr; //return genderArray to be handled
  }

  function getAnimal(custJSON, animal) {
    animalArray = [] //Init Arrays
    petTypeArray = []; 
    petArray = getPet(custJSON); //get petArray
    for (var i = 0; i < petArray.length; i++) { //Loop through Customer Array
           for (var j = 0; j < petArray[i].pets.length; j++) { //Loop through the Pets details
                if (petArray[i].pets[j].type.toLocaleLowerCase() == animal.toLocaleLowerCase()) { //If pet Type == cat
                    animalArray.push(petArray[i].pets[j].name);
                }    
           }
    }
    
    return animalArray;
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
    if (catArr == null) {
        console.log(Gender + " has nothing to show as there was no Cat's detected")
    }
    else {
        console.log(gender)
        for (var i = 0; i < catArr.length; i++) {
            console.log(" * " + catArr[i]);
        }
    }
  }

run(url) //Run the main code