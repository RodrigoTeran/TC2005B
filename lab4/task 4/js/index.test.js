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
    const [length1, value1] = [4, -1];
    const [length2, value2] = [4, 0];
    const [length3, value3] = [4, 1];

    const result = task4([
        Array.from({ length: length1 }, () => value1),
        Array.from({ length: length2 }, () => value2),
        Array.from({ length: length3 }, () => value3)
    ]);
    
    const assertion = `<table><tr><th>Número de arreglo</th><th>Tamaño del arreglo</th><th>Promedio del arreglo</th></tr><tr><td>1</td><td>${length1}</td><td>${value1.toFixed(2)}</td></tr><tr><td>2</td><td>${length2}</td><td>${value2.toFixed(2)}</td></tr><tr><td>3</td><td>${length3}</td><td>${value3.toFixed(2)}</td></tr></table>`;

    return assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 1");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test2() {
    const [length1, value1] = [14, -1];
    const [length2, value2] = [24, 0];
    const [length3, value3] = [3, 1];

    const result = task4([
        Array.from({ length: length1 }, () => value1),
        Array.from({ length: length2 }, () => value2),
        Array.from({ length: length3 }, () => value3)
    ]);
    
    const assertion = `<table><tr><th>Número de arreglo</th><th>Tamaño del arreglo</th><th>Promedio del arreglo</th></tr><tr><td>1</td><td>${length1}</td><td>${value1.toFixed(2)}</td></tr><tr><td>2</td><td>${length2}</td><td>${value2.toFixed(2)}</td></tr><tr><td>3</td><td>${length3}</td><td>${value3.toFixed(2)}</td></tr></table>`;

    return assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 2");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test3() {
    const [length1, value1] = [24, 5];
    const [length2, value2] = [15, 5];
    const [length3, value3] = [27, 5];

    const result = task4([
        Array.from({ length: length1 }, () => value1),
        Array.from({ length: length2 }, () => value2),
        Array.from({ length: length3 }, () => value3)
    ]);
    
    const assertion = `<table><tr><th>Número de arreglo</th><th>Tamaño del arreglo</th><th>Promedio del arreglo</th></tr><tr><td>1</td><td>${length1}</td><td>${value1.toFixed(2)}</td></tr><tr><td>2</td><td>${length2}</td><td>${value2.toFixed(2)}</td></tr><tr><td>3</td><td>${length3}</td><td>${value3.toFixed(2)}</td></tr></table>`;

    return assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 3");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test4() {
    const [length1, value1] = [14, 0];
    const [length2, value2] = [14, 0];
    const [length3, value3] = [14, 0];

    const result = task4([
        Array.from({ length: length1 }, () => value1),
        Array.from({ length: length2 }, () => value2),
        Array.from({ length: length3 }, () => value3)
    ]);
    
    const assertion = `<table><tr><th>Número de arreglo</th><th>Tamaño del arreglo</th><th>Promedio del arreglo</th></tr><tr><td>1</td><td>${length1}</td><td>${value1.toFixed(2)}</td></tr><tr><td>2</td><td>${length2}</td><td>${value2.toFixed(2)}</td></tr><tr><td>3</td><td>${length3}</td><td>${value3.toFixed(2)}</td></tr></table>`;

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
 * Main function to run task 4 tests
 */
function main() {
    try {
        tests();
    } catch (error) {
        alert(error);
    }
}
main();