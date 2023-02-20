const form = document.getElementById("form-validate-password");
const inputPassword = document.getElementById("input-password");
const validateResult = document.getElementById("validate-result");
let inputValue = "";

/**
 * This function validates an input and returns the result in text
 * @param {string} inputValue - The current value of the input
 * @returns The text to be written at the DOM
 */
const validate = (inputValue) => {
    const checkLength = new RegExp('(?=.{8,})');
    const checkMayus = new RegExp('(?=.*[A-Z])');
    const checkMin = new RegExp('(?=.*[a-z])');
    const checkDigits = new RegExp('(?=.*[0-9])');
    const checkSpecialChar = new RegExp('([^A-Za-z0-9])');
    const resLength = checkLength.test(inputValue);
    const resMayus = checkMayus.test(inputValue);
    const resMin = checkMin.test(inputValue);
    const resDigits = checkDigits.test(inputValue);
    const resSpecialChar = checkSpecialChar.test(inputValue);
    if (!resLength) {
        validateResult.classList = "incorrect";
        return "El número mínimo de caracteres debe de ser 8"
    }
    if (!resMayus) {
        validateResult.classList = "incorrect";
        return "La contraseña debe de tener al menos una letra en mayúscula"
    }
    if (!resMin) {
        validateResult.classList = "incorrect";
        return "La contraseña debe de tener al menos una letra en minúscula"
    }
    if (!resDigits) {
        validateResult.classList = "incorrect";
        return "La contraseña debe de tener al menos un digito"
    }
    if (!resSpecialChar) {
        validateResult.classList = "incorrect";
        return "La contraseña debe de tener al menos un caracter especial"
    }
    
    validateResult.classList = "correct";
    return "Contraseña válida"
}

const onSubmit = (e) => {
    e.preventDefault();
    const result = validate(inputValue);
    validateResult.innerText = result;
};

const onChange = (e) => {
    inputValue = e.target.value;
    validateResult.innerText = "";
    validateResult.classList = "";
};

form.addEventListener("submit", onSubmit);
inputPassword.addEventListener("change", onChange);