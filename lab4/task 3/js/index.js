/**
 * 
 * @param {number[]} arr - An array of integers
 * @returns {HTMLDivElement} - A div with the number of values > 0, values == 0 and values < 0
 */
function task3(arr) {
    const negative = "Cantidad de valores < 0:";
    const zero = "Cantidad de valores == 0:";
    const positive = "Cantidad de valores > 0:";

    const hashMap = {};
    hashMap[negative] = 0;
    hashMap[zero] = 0;
    hashMap[positive] = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            hashMap[negative] = hashMap[negative] + 1;
            continue;
        }
        if (arr[i] == 0) {
            hashMap[zero] = hashMap[zero] + 1;
            continue;
        }
        if (arr[i] > 0) {
            hashMap[positive] = hashMap[positive] + 1;
        }
    }


    const div = document.createElement("div");

    for (let i = 0; i < Object.keys(hashMap).length; i++) {
        const key = Object.keys(hashMap)[i];
        const value = hashMap[key];

        // Result
        const divResult = document.createElement("div");
        const spanResult = document.createElement("span");
    
        const spanResultContent = document.createTextNode(`${value}`);
        spanResult.appendChild(spanResultContent);
    
        const divResultContent = document.createTextNode(`${key} `);
        divResult.appendChild(divResultContent);
        divResult.appendChild(spanResult);

        div.appendChild(divResult);
    }

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
 * This function creates an array of random length of random integers
 * Then it calls task3 and adds the result to the DOM
 */
function createArrayNumbers() {
    const lengthArr = getRandomNumber(10, 100);
    const arr = [];

    for (let i = 0; i < lengthArr; i++) {
        const randomNumber = getRandomNumber(-10, 10);
        arr.push(randomNumber);
    };

    const result = task3(arr);

    document.body.appendChild(result);
}

/**
 * Main function to run this task and catch errors
 */
function main() {
    try {
        createArrayNumbers();
    } catch (error) {
        alert(error);
        main();
    }
}
main();
