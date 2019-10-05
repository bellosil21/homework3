/* orders.js
 * 
 * Creates JSON path for commmunication between server
 * and client
 * 
 * Paul Patrick Bellosillo
 * October 8, 2019
 * CS 341 - Dr. Nuxoll
 * Homework #5
 * 
 */
var express = require('express');
var dbms = require('./dbms.js');
var router = express.Router();

/*
  * External citation
  * Date: September 21, 2019
  * Problem: Didn't know how to format a JSON array of JSON objects
  * Resource: https://www.w3schools.com/js/js_json_arrays.asp
  * Resolution: Used given help from link to help format JSON object
  */
  var jsonObject= {
    error: null,
    /* Creates the array of JSON objects with fixed values */
    "data":[
      {
        "topping":"cherry",
        "quantity": 2,
      },

      {
        "topping":"chocolate",
        "quantity": 1,
      },

      {
        "topping":"plain",
        "quantity": 9,
      }
    ]
  };

/* GET users listing. */
router.get('/', function(req, res, next) {
  /* Sends JSON object to the client*/
  res.json(jsonObject);
});

/*
 * External Citation
 * September 24, 2019
 * Problem: Didn't truly understood how to use the post method
 * Resource: Peer: Dylan Pascua
 * Resolution: Dylan helped me by showing me how to use this method to handle POST
 * requests
 */
router.post('/', function(req, res){

  var month = req.body.month;
  console.log("Month: " + month);// Testing month pushed


  dbms.dbquery("SELECT * FROM ORDERS WHERE MONTH='"+ month +"'", processMonthData);
  function processMonthData(rows, result){
    if (rows == false){
      /* Initializing variables for topping count */
      var obj_string;
      var obj_json;
      var quan_cherry = 0;
      var quan_choc = 0; 
      var quan_plain = 0;
      for (var row = 0; row < result.length; row++){
        // Parses to string and back for easier read
        obj_string = JSON.stringify(result[row]);
        obj_json = JSON.parse(obj_string);
        console.log("" + obj_json.TOPPING + " " + obj_json.QUANTITY);

        // Counts the number of cheesecakes for each topping
        if (obj_json.TOPPING == 'plain'){
          quan_plain += obj_json.QUANTITY;
        }
        else if (obj_json.TOPPING == 'chocolate'){
          quan_choc += obj_json.QUANTITY;
        }
        else if (obj_json.TOPPING == 'cherry'){
          quan_cherry += obj_json.QUANTITY;
        }
      }
      console.log(" " + quan_plain + " " + quan_choc + " " + quan_cherry);
      
      /* Gets information for cherry orders and turns it into Strings and
       * Creates JSON object with details of month orders
       */
      var orderDetails = {
        "cherryDescription": quan_cherry + " " + jsonObject.data[0].topping,
        "chocolateDescription": quan_choc + " " + jsonObject.data[1].topping,
        "plainDescription": quan_plain + " " + jsonObject.data[2].topping
      };

      // Sends Order detail JSON to client
      res.send(orderDetails);
    }
  }
});


module.exports = router;
// Created Export for the JSON object to check for existence of object
module.exports.jsonObject = jsonObject;
