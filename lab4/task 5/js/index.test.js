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
    const result = task5(-600);
    const assertion = `<div>Número: ${-600}, dígitos en reverso: ${-6}</div>`;

    return assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 1");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test2() {
    const result = task5(123);
    const assertion = `<div>Número: ${123}, dígitos en reverso: ${321}</div>`;

    return assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 2");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test3() {
    const result = task5(0);
    const assertion = `<div>Número: ${0}, dígitos en reverso: ${0}</div>`;

    return assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 3");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test4() {
    const result = task5(-130);
    const assertion = `<div>Número: ${-130}, dígitos en reverso: ${-31}</div>`;

    return assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 4");
}


/**
 * It runs all the individual tests and logs if all tests were successfull
 */
async function tests() {
    if (
        test1() &&
        test2() &&
        test3() &&
        test4()
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