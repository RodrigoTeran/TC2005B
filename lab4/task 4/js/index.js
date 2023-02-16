/**
 * It creates a new cell, add content to it and append it to the specified row
 * @param {string} row - The row where the cell is going to be appended
 * @param {string} value - The content of the cell
 * @param {"td" | "th"} cellType - The cell type, either "td" or "th"
 */
function createTableCell(
    row,
    value,
    cellType = "td"
) {
    const cell = document.createElement(cellType);
    const cellContent = document.createTextNode(value);
    cell.appendChild(cellContent);
    row.appendChild(cell);
}

/**
 * 
 * @param {number[]} matrix - An array of arrays of integers
 * @returns {HTMLTableElement} - A table with the mean of each array
 */
function task4(matrix) {
    // Create table
    const table = document.createElement("table");

    // Create Headers Row
    const headerRow = document.createElement("tr");

    createTableCell(headerRow, "Número de arreglo", "th");
    createTableCell(headerRow, "Tamaño del arreglo", "th");
    createTableCell(headerRow, "Promedio del arreglo", "th");

    table.appendChild(headerRow);

    for (let i = 0; i < matrix.length; i++) {
        const arr = matrix[i];
        const arrReducedSum = arr.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        );

        // Create Row
        const newRow = document.createElement("tr");

        createTableCell(newRow, i + 1);
        createTableCell(newRow, arr.length);
        createTableCell(newRow, (arrReducedSum / arr.length).toFixed(2));

        table.appendChild(newRow);
    }

    return table;
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
 * This function creates an array of random length of random integers and returns it
 * @returns {number[]} arr - Array of random length of random integers
 */
function createArrayNumbers() {
    const lengthArr = getRandomNumber(10, 100);
    const arr = [];

    for (let i = 0; i < lengthArr; i++) {
        const randomNumber = getRandomNumber(-10, 10);
        arr.push(randomNumber);
    };

    return arr;
}

/**
 * This function creates an array of arrays of random integers
 * Then it calls task4 and adds the result to the DOM
 */
function createMatrixNumbers() {
    const lengthArr = getRandomNumber(5, 20);
    const arr = [];

    for (let i = 0; i < lengthArr; i++) {
        const randomArr = createArrayNumbers();
        arr.push(randomArr);
    };

    const result = task4(arr);

    document.body.appendChild(result);
}

/**
 * Main function to run this task and catch errors
 */
function main() {
    try {
        createMatrixNumbers();
    } catch (error) {
        alert(error);
        main();
    }
}
main();
