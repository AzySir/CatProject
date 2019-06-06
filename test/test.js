var expect = require("chai");
var mocha = require("mocha");
var axios = require('axios');
var assert = require('assert');
// var getAnimal = require('./index.js').getAnimal;
// import getGender from './index.js';
var getGender = require('../index.js');

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

describe('API Service working', function() {
require('http').request()
    it("returns status 200", function() {
        var url = "http://agl-developer-test.azurewebsites.net/people.json"
        axios.get(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });
});

describe('getAnimal() test...', function() {
    it("Returns an array", function() {
        var result = getGender(mockGreen, "cat");
        var count = result.length;
        expect(result).to.be.above(0);
    });
});
describe('getPet() test...', function() {
    it("Returns an array", function() {
        var result = getAnimal(mockGreen, cat);
        var count = result.length;
        expect(result).to.be.above(0);
    });
});