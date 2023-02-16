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
    const table = task1(5);
    const assertion = "<table><tr><th>Número</th><th>Número al cuadrado</th><th>Número al cubo</th></tr><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>2</td><td>4</td><td>8</td></tr><tr><td>3</td><td>9</td><td>27</td></tr><tr><td>4</td><td>16</td><td>64</td></tr><tr><td>5</td><td>25</td><td>125</td></tr></table>";
    return assert(table.outerHTML.toString() === assertion, "No coinciden las tablas en el test 1");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test2() {
    const table = task1(11);
    const assertion = "<table><tr><th>Número</th><th>Número al cuadrado</th><th>Número al cubo</th></tr><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>2</td><td>4</td><td>8</td></tr><tr><td>3</td><td>9</td><td>27</td></tr><tr><td>4</td><td>16</td><td>64</td></tr><tr><td>5</td><td>25</td><td>125</td></tr><tr><td>6</td><td>36</td><td>216</td></tr><tr><td>7</td><td>49</td><td>343</td></tr><tr><td>8</td><td>64</td><td>512</td></tr><tr><td>9</td><td>81</td><td>729</td></tr><tr><td>10</td><td>100</td><td>1000</td></tr><tr><td>11</td><td>121</td><td>1331</td></tr></table>";
    return assert(table.outerHTML.toString() === assertion, "No coinciden las tablas en el test 2");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test3() {
    const table = task1(0);
    const assertion = "<table><tr><th>Número</th><th>Número al cuadrado</th><th>Número al cubo</th></tr></table>";
    return assert(table.outerHTML.toString() === assertion, "No coinciden las tablas en el test 3");
}

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
function test4() {
    const table = task1(-3);
    const assertion = "<table><tr><th>Número</th><th>Número al cuadrado</th><th>Número al cubo</th></tr></table>";
    return assert(table.outerHTML.toString() === assertion, "No coinciden las tablas en el test 4");
}

/**
 * It runs all the individual tests and logs if all tests were successfull
 */
function tests() {
    if (test1() &&
        test2() &&
        test3() &&
        test4()) {
        console.log("Todos los tests pasaron!!!");
    }
}

/**
 * Main function to run task 1 tests
 */
function main() {
    try {
        tests();
    } catch (error) {
        alert(error);
    }
}
main();