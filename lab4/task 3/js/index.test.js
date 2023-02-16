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
    const negative = 4;
    const zero = 4;
    const positive = 4;

    const result = task3([
        ...Array.from({length: negative}, () => -1),
        ...Array.from({length: zero}, () => 0),
        ...Array.from({length: positive}, () => 1),
    ]);

    const assertion = `<div><div>Cantidad de valores &lt; 0: <span>${negative}</span></div><div>Cantidad de valores == 0: <span>${zero}</span></div><div>Cantidad de valores &gt; 0: <span>${positive}</span></div></div>`;
    return assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 1");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test2() {
    const negative = 0;
    const zero = 3;
    const positive = 10;

    const result = task3([
        ...Array.from({length: negative}, () => -1),
        ...Array.from({length: zero}, () => 0),
        ...Array.from({length: positive}, () => 1),
    ]);

    const assertion = `<div><div>Cantidad de valores &lt; 0: <span>${negative}</span></div><div>Cantidad de valores == 0: <span>${zero}</span></div><div>Cantidad de valores &gt; 0: <span>${positive}</span></div></div>`;
    return assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 2");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test3() {
    const negative = 0;
    const zero = 0;
    const positive = 0;

    const result = task3([
        ...Array.from({length: negative}, () => -1),
        ...Array.from({length: zero}, () => 0),
        ...Array.from({length: positive}, () => 1),
    ]);

    const assertion = `<div><div>Cantidad de valores &lt; 0: <span>${negative}</span></div><div>Cantidad de valores == 0: <span>${zero}</span></div><div>Cantidad de valores &gt; 0: <span>${positive}</span></div></div>`;
    return assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 3");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test4() {
    const negative = 100;
    const zero = 100;
    const positive = 100;

    const result = task3([
        ...Array.from({length: negative}, () => -1),
        ...Array.from({length: zero}, () => 0),
        ...Array.from({length: positive}, () => 1),
    ]);

    const assertion = `<div><div>Cantidad de valores &lt; 0: <span>${negative}</span></div><div>Cantidad de valores == 0: <span>${zero}</span></div><div>Cantidad de valores &gt; 0: <span>${positive}</span></div></div>`;
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
 * Main function to run task 3 tests
 */
function main() {
    try {
        tests();
    } catch (error) {
        alert(error);
    }
}
main();