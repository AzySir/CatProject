const axios = require('axios');
const { getAnimal, getGender } = require('../index')
const jestinc = require('jest');

var mockGreen = [
    {
      name: "Adam",
      gender: "Male",
      age: 27,
      pets: [
        {
          name: "Lloyd",
          type: "Dog"
        },
        {
          name: "Whiskers",
          type: "Cat"
        }
      ]
    }
];

var mockRed = [
  {
    name: "Ashton",
    gender: "Male",
    age: 37,
    pets: [
      {
        name: "Bananas",
        type: "Monkey"
      },
      {
        name: "Dumbo",
        type: "Elephant"
      }
    ]
  }
]

describe('#1 Test Suite', () => {

  describe('getGender() test...', () => {
      it("Returns an array", async () => {
          let result = await getGender(mockGreen, 'Male');
          let count = result.length;
          Promise.all([result, count])
          .then(() => {
            expect(count).toBeGreaterThan(0);
          }
          )
      });
  });  

  describe("getAnimal() test...", () => {
    it("Returns an array", async () => {
        let result = await getAnimal(mockRed, 'Cat');
        let count = result.length;
        Promise.all([result, count])
        .then(() => {
          expect(count).toBeLessThanOrEqual(0);
        }
        )
    });
  })


})
    