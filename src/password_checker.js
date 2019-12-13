"use strict"

function passwordIsValid(pssword) {

    let UpperCase= new RegExp(/[A-Z]/)
    let lowerCase = new RegExp(/[a-z]/)
    let numbers = new RegExp(/[0-9]/)
    let specialCharacter = new RegExp(/[#?*&^%$"'@_-]/)
    let lengthOfPassword = new RegExp(/[A-Za-z0-9]{8,}/);

  
        if (pssword == "") throw new Error("Your password should exist")
        if (UpperCase.test(pssword) == false) throw new Error("Your password need to have atleast 1 uppercase");
        if (lowerCase.test(pssword) == false) throw new Error("Your password need to have atleast 1 lowercase");
        if (numbers.test(pssword) == false) throw new Error("Your password need to have atleast 1 number");
        if (specialCharacter.test(pssword) == false) throw new Error("Your password need to have atleast 1 special character");
        if (lengthOfPassword.test(pssword) == false) throw new Error("Your password need to have more that 8 characters");
   return true
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


