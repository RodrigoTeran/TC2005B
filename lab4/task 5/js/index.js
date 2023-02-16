/**
 * 
 * @param {number} number - A number
 * @returns {HTMLDivElement} - A div with the digits of the number in reverse
 */
function task5(number) {
    // Create div
    const div = document.createElement("div");
    let isPositive = true;
    let parsedNumber = number;

    if (number < 0) {
        parsedNumber = Math.abs(number);
        isPositive = false;
    }

    const reverse = parsedNumber.toString().split("").reverse().join("");
    const content = document.createTextNode(`Número: ${number}, dígitos en reverso: ${parseInt(reverse) * (isPositive ? 1 : -1)}`);
    div.appendChild(content);

    return div;
}

/**
 * 
 * @param {number} lowerBound - An integer that specifies the lower bound of the random number
 * @param {number} upperBound  - An positive integer that specifies the upper bound of the random number
 * @returns {number} - A random integer between lowerBound and upperBound
 */
function getRandomNumber(
    lowerBound = -1000,
    upperBound = 1000
) {
    lowerBound = parseInt(lowerBound);
    upperBound = parseInt(upperBound);

    if (upperBound < lowerBound) {
        upperBound = lowerBound + 1;
    }

    return lowerBound + Math.floor(Math.random() * (upperBound - lowerBound));
}

/**
 * This function gets a random number
 * Then it calls task5 and adds the result to the DOM
 */
function getNumberAnInverse() {
    const number = getRandomNumber();

    const result = task5(number);

    document.body.appendChild(result);
}

/**
 * Main function to run this task and catch errors
 */
function main() {
    try {
        getNumberAnInverse();
    } catch (error) {
        alert(error);
        main();
    }
}
main();
