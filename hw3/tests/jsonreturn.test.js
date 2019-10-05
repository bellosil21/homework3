/* jsonreturn.test.js
 * 
 * Test file to check for the POST JSON file 
 * and determine if it exists and fixed
 * 
 * Paul Patrick Bellosillo
 * September 24, 2019
 * CS 341 - Dr. Nuxoll
 * Homework #4
 * 
 */
var jsonReturn = require('../routes/orders');

test('test selectEvent', () => {
    expect(jsonReturn).toEqual(expect.anything());

    // Checks if the JSON object and inside array exists
    var jsonReturnObject = jsonReturn.jsonObject;
    expect(jsonReturnObject.data[1]).toEqual(expect.anything());

    // Checks if attributes in objects exists and are equal to what is expected
    expect(jsonReturnObject.data[0].topping).toEqual("cherry");
    expect(jsonReturnObject.data[2].quantity).toEqual(9);
    expect(jsonReturnObject.data[1].topping).toEqual("chocolate");
});