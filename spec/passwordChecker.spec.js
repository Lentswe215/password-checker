let mySpecTester = require('../passwordChecker');
let passwordIsValid = mySpecTester.passwordIsValid;
let passwordIsOk = mySpecTester.passwordIsOk;

describe('passwordIsValid', function() {
    it("should be true if the password exist", function() {


        expect(passwordIsValid("Ephraim@23")).toBe(true);
    })
    it("should be true if the password length is 8 or more ", function() {


        expect(passwordIsValid("Ephraim2@")).toBe(true);
    })
    it("should be true if the password has uppercase", function() {


        expect(passwordIsValid("Ephr@im213")).toBe(true);
    })
    it("should be true if the password has a lowercase", function() {


        expect(passwordIsValid("ePhraim@2")).toBe(true);
    })
    it("should be true if the password has a number", function() {


        expect(passwordIsValid("2Ephraim@")).toBe(true);
    })
    it("should be true if the password has character", function() {


        expect(passwordIsValid("@Ephraim45")).toBe(true);
    })
})

describe('passwordIsOk', function() {
    it("should be true if the password meet 3 or more conditions", function() {


        expect(passwordIsOk("ephraiM42")).toBe(true);
    })
})