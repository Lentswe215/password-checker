"use strict"

function passwordIsValid(pssword) {

    let myRegex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?*&^%$"'@_-]).{8,}/);

    try {
        if (pssword == "") throw "Enter your password"
        if (myRegex.test(pssword) == false) throw "Your password need to have atleast 1 uppercase, lowercase, digit and special character";
    } catch (err) {
        return err;
    }
    return true;
}

function passwordIsOk(pssword2) {

    let lowercase = /^[a-z]/g;
    let uppercase = /^[A-Z]/g;
    let numbers = /^[0-9]/g;
    let specChar = /^[\[\#\?\*\&\^\%\$\"\'\@\_]/g;
    let result;

    if (pssword2.length > 8 && pssword2 != "") {

        if (uppercase.test(pssword2) || lowercase.test(pssword2) || numbers.test(pssword2) || specChar.test(pssword2)) {
            result = true;
        }
    } else {
        result = false;
    }

    return result;
}
module.exports = {
    passwordIsValid, passwordIsOk
}


