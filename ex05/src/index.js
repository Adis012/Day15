function myObject() {
    'use strict';
    const MATH_CONSTANTS = {
        E: 2.718228
    };
    // Only change code below this line

    // Only change code above this line
    try {
        MATH_CONSTANTS.E = 23;
    } catch(error) {
        console.log(error.message);
    }
    return MATH_CONSTANTS.E;
}
const E = myObject();

module.exports = myObject;