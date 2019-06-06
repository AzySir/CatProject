const except = require('chai').except;
const chai = require('chai');
const assert = require('chai').assert;
const mocha = require('mocha');
const axios = require('axios');
// var assert = require('assert');
// var getAnimal = require('./index.js').getAnimal;
// import getGender from './index.js';
var getGender = require('../index.js');
var getAnimal = require('../index.js');
var getNumber = require('../index.js');
var require = require('http')

var mockGreen = [
    {
      "name": "Adam",
      "gender": "Male",
      "age": 27,
      "pets": [
        {
          "name": "Lloyd",
          "type": "Dog"
        },
        {
          "name": "Whiskers",
          "type": "Cat"
        }
      ]
    }
]

var mockRed = [
    {
      "name": "Ashton",
      "gender": "Male",
      "age": 37,
      "pets": [
        {
          "name": "Bananas",
          "type": "Monkey"
        },
        {
          "name": "Dumbo",
          "type": "Elephant"
        }
      ]
    }
]


describe('getGender() test...', function() {
    it("Returns an array", function() {
        let result = getGender(mockGreen, "Male");
        let count = result.length;
        expect(result).to.be.an('array');
    });
});
// describe('getNumber() test...', function() {
//   it("Returns an array", function() {
//       let result = getGender(mockGreen, "Male");
//       let count = result.length;
//       expect(getNumber()).to.equal(2);
//   });
// });
describe('getAnimal() test...', function() {
    it("Returns an array", function() {
        expect(getAnimal(mockGreen, "cat")).to.be.an('array');
    });
});

describe('API Service working', function() {
        require.request();
        it("returns status 200", function() {
            var url = "http://agl-developer-test.azurewebsites.net/people.json"
            axios.get(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
            }); 
        });
    });
    