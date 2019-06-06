var axios = require('axios'); //Include Axios Library for JS handling
const url = "http://agl-developer-test.azurewebsites.net/people.json"; //Set API 
const selectedPet = "Cat" //Change this configuration variable to get the Pet of your selection



function run(url) {    axios.get(url) //Get API 
    .then(response => { //Then do -
        maleArray = getGender(response.data, "Male"); //Set Male Genders into an Array
        femaleArray = getGender(response.data, "Female"); //Set Female Genders into an Array
 
        sortedMaleArray = getAnimal(maleArray, selectedPet); //Set an array from the list of Males with cats
        sortedFemaleArray = getAnimal(femaleArray, selectedPet); //Set an array from the list of Females with cats 

        if (sortedMaleArray.length > 0) { //Will only display Male if the array is greater than 0
            displayPet("Male", sortedMaleArray) //Print out Cats with Male Owners
            console.log("      ") //Seperator on the output
        }

        if (sortedFemaleArray.length > 0) { //Will only display Female if the array is greater than 0
            displayPet("Female", sortedFemaleArray) //Print out Cats with Female Owners
            console.log("      ") //Seperator on the output
        }
    })
}

function getGender(customers, gender) {
      let genders = []; //init Array
      customers.forEach(cust => {
          if(cust.gender === gender)
            genders.push(cust);
      });
      return genders;
}

  function getAnimal(customers, petType) {
    const pets = [] //Init Arrays
    const custWithPets = customers.filter(cust => {
        return cust.pets && cust.pets.length > 0
    })

    custWithPets.forEach(cust => {
        cust.pets.forEach(pet => {
            if (pet.type.toLocaleLowerCase() === petType.toLocaleLowerCase()) { //If pet Type == animal in the config also make all strings lowercase
                pets.push(pet.name); //Add to pet's name to array
            }  
        });
    });

    
    return pets.sort(); //return array to run() 
  }


  function displayPet(gender, petNames) {   
    console.log(gender) // ** Displays the gender as the Heading **
    petNames.forEach(petName => {
        console.log(" * " + petName); //Display Pets 
    })
  }

run(url) //Run the main code

module.exports = getAnimal