export const validate = (inputValue) => {
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
        return "El número mínimo de caracteres debe de ser 8"
    }
    if (!resMayus) {
        return "La contraseña debe de tener al menos una letra en mayúscula"
    }
    if (!resMin) {
        return "La contraseña debe de tener al menos una letra en minúscula"
    }
    if (!resDigits) {
        return "La contraseña debe de tener al menos un digito"
    }
    if (!resSpecialChar) {
        return "La contraseña debe de tener al menos un caracter especial"
    }
    
    return "Contraseña válida"
}