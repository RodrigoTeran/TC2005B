class Algorithm {
    constructor() {
        this.CURRENT_QUANTITY = 100;
    }

    /**
     * 
     * @param {number[]} height - An array of n positive integers
     * @returns {number} - The amount of water trapped
     */
    trappingRainWater(height) {
        let [left, right] = [0, height.length - 1];
        let res = 0;
        let [leftMax, rightMax] = [height[left], height[right]];

        while (left < right) {
            if (leftMax < rightMax) {
                left += 1;
                leftMax = Math.max(leftMax, height[left]);
                res += leftMax - height[left];
            } else {
                right -= 1;
                rightMax = Math.max(rightMax, height[right]);
                res += rightMax - height[right];
            }
        };
        return res;
    }
}

class Manipulation {
    /**
     * 
     * @param {string} idContainer - The parent container div id
     * @param {string} idInput - The input to listen changes
     * @param {string} idResult - The container div id to show algorithm result
     * @param {string} idBtnRandom - The btn id to restart random building
     * @param {string} classError - The container div class to show errors
     */
    constructor(idContainer, idInput, idResult, idBtnRandom, classError) {
        this.container = document.getElementById(idContainer);
        this.input = document.getElementById(idInput);
        this.result = document.getElementById(idResult);
        this.btnRandom = document.getElementById(idBtnRandom);
        this.error = document.querySelector(classError);
        this.algorithm = new Algorithm();

        this.input.addEventListener("input", (event) => {
            this.manipulateQuantity(event);
        });

        this.btnRandom.addEventListener("click", (event) => {
            this.manipulateDOM();
        });
    }

    /**
     * 
     * @param {number} lowerBound - An positive integer that specifies the lower bound of the random number
     * @param {number} upperBound  - An positive integer that specifies the upper bound of the random number
     * @returns {number} - A random positive integer between lowerBound and upperBound
     */
    getRandomNumber(
        lowerBound = 10,
        upperBound = 100
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
     * 
     * @param {Event} e - The ref of the input
     */
    manipulateQuantity(e) {
        const number = parseInt(e.target.value);
        this.error.innerHTML = "";

        if (isNaN(number)) {
            this.error.innerHTML = "Debes de poner un número...";
            return;
        }
        if (number === "" || number <= 0) {
            this.error.innerHTML = "Debes de poner un número mayor a 0...";
            return;
        }

        this.algorithm.CURRENT_QUANTITY = number;

        this.manipulateDOM();
    }

    /**
     * It allows manipulation with the DOM
     */
    manipulateDOM() {
        const arr = [];
        this.container.innerHTML = "";
        this.result.innerHTML = "";

        for (let i = 0; i < this.algorithm.CURRENT_QUANTITY; i++) {
            const bar = document.createElement("div");
            const height = this.getRandomNumber();
            bar.style.height = `${height}px`;
            arr.push(height);
            this.container.appendChild(bar);
        }

        const res = this.algorithm.trappingRainWater(arr);
        this.result.innerHTML = res;
    }
}

function main() {
    const manipulation = new Manipulation("container", "quantity-input", "result", "btn-random", ".error");
    manipulation.manipulateDOM();
}
main();
