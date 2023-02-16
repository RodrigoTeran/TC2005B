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
 * It gets a number and then creates a table from 1 to n
 * with the squares and cubes of each number
 * @param {number} number - The number that the user digited
 * @returns {HTMLTableElement} table - It returns the generated table
 */
function task1(number) {
    // Create table
    const table = document.createElement("table");

    // Create Headers Row
    const headerRow = document.createElement("tr");

    createTableCell(headerRow, "Número", "th");
    createTableCell(headerRow, "Número al cuadrado", "th");
    createTableCell(headerRow, "Número al cubo", "th");

    table.appendChild(headerRow);

    for (let i = 1; i <= number; i++) {
        // Create Row
        const newRow = document.createElement("tr");

        createTableCell(newRow, i);
        createTableCell(newRow, Math.pow(i, 2));
        createTableCell(newRow, Math.pow(i, 3));

        table.appendChild(newRow);
    }

    return table;
}

/**
 * This function prompts to the user to digit a numeric number
 * and throws an Error if it is NaN. It calls the related task
 * and add the table to the DOM
 */
function promptNumber() {
    // Ask for number
    const number = prompt("Digita un número:", 0);

    if (isNaN(number)) {
        throw new Error("El valor debe de ser un número...");
    }

    const table = task1(number);
    document.body.appendChild(table);
}

/**
 * Main function to run this task and catch errors
 */
function main() {
    try {
        promptNumber();
    } catch (error) {
        alert(error);
        main();
    }
}
main();
