/**
 * 
 * @param {number} randomNumber1 - The first number of the random equation sum
 * @param {number} randomNumber2  - The second number of the random equation sum
 * @param {string} userResult - The result of the user of the random sum
 * @param {number} userTime - Time in miliseconds the user took to give the answer
 * @returns {HTMLDivElement} - A div with the result it it was correct or not and the time the user took
 */
function task2(randomNumber1, randomNumber2, userResult, userTime) {
    const result = randomNumber1 + randomNumber2 === parseInt(userResult);

    const div = document.createElement("div");

    // Result
    const divResult = document.createElement("div");
    const spanResult = document.createElement("span");

    spanResult.classList = result ? "correct" : "incorrect";

    const spanResultContent = document.createTextNode(`${result ? "Correcto!" : "Incorrecto :("}`);
    spanResult.appendChild(spanResultContent);

    const divResultContent = document.createTextNode("El resultado fue ");
    divResult.appendChild(divResultContent);
    divResult.appendChild(spanResult);


    // Time
    const divTime = document.createElement("div");
    const spanTime = document.createElement("span");

    const spanTimeContent = document.createTextNode(`${(userTime / 1000).toFixed(2)}`);
    spanTime.appendChild(spanTimeContent);

    const divTimeContent1 = document.createTextNode("Te tardaste ");
    const divTimeContent2 = document.createTextNode(" segundos en dar la respuesta ");
    divTime.appendChild(divTimeContent1);
    divTime.appendChild(spanTime);
    divTime.appendChild(divTimeContent2);

    // Add both divs
    div.appendChild(divResult);
    div.appendChild(divTime);

    return div;
}

/**
 * 
 * @param {number} lowerBound - A positive integer that specifies the lower bound of the random number
 * @param {number} upperBound  - A positive integer that specifies the upper bound of the random number
 * @returns {number} - A random positive integer between lowerBound and upperBound
 */
function getRandomNumber(
    lowerBound = 1,
    upperBound = 1000
) {
    lowerBound = parseInt(lowerBound);
    upperBound = parseInt(upperBound);

    if (upperBound < lowerBound) {
        upperBound = lowerBound + 1;
    }

    if (lowerBound < 0) {
        lowerBound = 1;
        upperBound = 2;
    }

    return lowerBound + Math.floor(Math.random() * (upperBound - lowerBound));
}

/**
 * This function prompts to the user to digit the result to the sum of
 * two random numbers. It calls the task2 function to check the result
 * and then adds the result to the DOM
 */
function promptEquation() {
    // Ask for number
    const number1 = getRandomNumber(50, 100);
    const number2 = getRandomNumber(50, 100);

    const start = performance.now();
    const userResult = prompt(`¿Cuál es el resultado de: ${number1} + ${number2}?`, 0);
    const end = performance.now();

    const result = task2(number1, number2, userResult, end - start);

    document.body.appendChild(result);
}

/**
 * Main function to run this task and catch errors
 */
function main() {
    try {
        promptEquation();
    } catch (error) {
        alert(error);
        main();
    }
}
main();
