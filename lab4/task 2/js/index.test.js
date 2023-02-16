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
const test1 = new Promise((resolve) => {
    const number1 = 344
    const number2 = 124;

    const start = performance.now();
    const timeOut = setTimeout(() => {
        const end = performance.now();
        const userTime = end - start;
        const result = task2(number1, number2, number1 + number2, userTime);
        const assertion = `<div><div>El resultado fue <span class="correct">Correcto!</span></div><div>Te tardaste <span>${(userTime / 1000).toFixed(2)}</span> segundos en dar la respuesta </div></div>`;
        clearTimeout(timeOut);
        resolve(assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 1"));
    }, 524);
})

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
const test2 = new Promise((resolve) => {
    const number1 = 1
    const number2 = 1;

    const start = performance.now();
    const timeOut = setTimeout(() => {
        const end = performance.now();
        const userTime = end - start;
        const result = task2(number1, number2, 100, userTime);
        const assertion = `<div><div>El resultado fue <span class="incorrect">Incorrecto :(</span></div><div>Te tardaste <span>${(userTime / 1000).toFixed(2)}</span> segundos en dar la respuesta </div></div>`;
        clearTimeout(timeOut);
        resolve(assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 2"));
    }, 100);
})

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
const test3 = new Promise((resolve) => {
    const number1 = 123
    const number2 = 456;

    const start = performance.now();
    const timeOut = setTimeout(() => {
        const end = performance.now();
        const userTime = end - start;
        const result = task2(number1, number2, number1 + number2, userTime);
        const assertion = `<div><div>El resultado fue <span class="correct">Correcto!</span></div><div>Te tardaste <span>${(userTime / 1000).toFixed(2)}</span> segundos en dar la respuesta </div></div>`;
        clearTimeout(timeOut);
        resolve(assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 3"));
    }, 315);
})

/**
 * 
 * @returns {boolean} - It returns if the test was successfull or not
 */
const test4 = new Promise((resolve) => {
    const number1 = 44
    const number2 = 44;

    const start = performance.now();
    const timeOut = setTimeout(() => {
        const end = performance.now();
        const userTime = end - start;
        const result = task2(number1, number2, number1 + number2 + 1, userTime);
        const assertion = `<div><div>El resultado fue <span class="incorrect">Incorrecto :(</span></div><div>Te tardaste <span>${(userTime / 1000).toFixed(2)}</span> segundos en dar la respuesta </div></div>`;
        clearTimeout(timeOut);
        resolve(assert(result.outerHTML.toString() === assertion, "No coinciden los resultados del test 4"));
    }, 524);
})


/**
 * It runs all the individual tests and logs if all tests were successfull
 */
async function tests() {
    const res = await Promise.all([
        test1,
        test2,
        test3,
        test4,
    ]);

    const reduced = res.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );    

    if (reduced === 4) { // 4 == number of tests
        console.log("Todos los tests pasaron!!!");
        return;
    }

    console.log("Algunos tests no pasaron :(");
}

/**
 * Main function to run task 2 tests
 */
function main() {
    try {
        tests();
    } catch (error) {
        alert(error);
    }
}
main();