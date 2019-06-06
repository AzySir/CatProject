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
                if (petArray[i].pets[j].type.toLocaleLowerCase() == animal.toLocaleLowerCase()) { //If pet Type == animal in the config also make all strings lowercase
                    animalArray.push(petArray[i].pets[j].name); //Add to pet's name to array
                }    
           }
    }
    
    return animalArray; //return array to run() 
  }

  function getPet(custJSON) {
    petArray = []; //init Array
    for (var i = 0; i < custJSON.length; i++) { //Loop through Customer JSON 
        if (custJSON[i].pets != null) { //If Customer JSON is not null(have a pet) then
            petArray.push(custJSON[i]);  //Push to array
        }
    }
    return petArray; //return list of pets 
  }

  function sortAlphabetical(sortArray) {
    return sortArray.sort(); //Sort Array by alphabetical for pet's name
  }

  function displayCats(gender, petArr) {
    console.log(gender) // ** Displays the gender as the Heading **
    for (var i = 0; i < petArr.length; i++) { //Loop Through the Pet Array
        console.log(" * " + petArr[i]); //Display Pets 
    }
  }

run(url) //Run the main code