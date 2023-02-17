/**
 * 
 * @param {boolean} condition - Condition to do assertion
 * @param {string} message - Message to display in case the assertion fails
 * @returns {boolean} -  It returns if the assertion was successfull or not
 */
function assert(condition, message) {
    if (!condition) {
        const msg = message || "Assertion failed";
        console.assert(condition, msg);
        return false;
    }
    return true;
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test1() {
    const algo = new Algorithm();
    const result = algo.trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
    const assertion = 6;

    return assert(result === assertion, "No coinciden los resultados del test 1");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test2() {
    const algo = new Algorithm();
    const result = algo.trappingRainWater([4, 2, 0, 3, 2, 5]);
    const assertion = 9;

    return assert(result === assertion, "No coinciden los resultados del test 2");
}

/**
 * It runs all the individual tests and logs if all tests were successfull
 */
async function tests() {
    if (
        test1() &&
        test2()
    ) {
        console.log("Todos los tests pasaron!!!");
        return;
    }

    console.log("Algunos tests no pasaron :(");
}

/**
 * Main function to run task 5 tests
 */
function main() {
    try {
        tests();
    } catch (error) {
        alert(error);
    }
}
main();