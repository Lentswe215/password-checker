let mySpecTester = require('../src/password_checker');
let passwordIsValid = mySpecTester.passwordIsValid;

describe('passwordIsValid', function() {
    it("should be false if the password don't exist", function() {


        expect(()=>{passwordIsValid("")}).toThrow(new Error("Your password should exist"));
    })
    it("should be false if the password length is 8 or less", function() {


        expect(()=>{passwordIsValid("Ethr@1")}).toThrow(new Error("Your password need to have more that 8 characters"));
    })
    it("should be false if the password doesn't have uppercase", function() {


        expect(()=>{passwordIsValid("ephr@im213")}).toThrow(new Error("Your password need to have atleast 1 uppercase"));
    })
    it("should be false if the password doesn't have lowercase", function() {


        expect(()=>{passwordIsValid("EPHRAIM@2")}).toThrow(new Error("Your password need to have atleast 1 lowercase"));
    })
    it("should be false if the password doesn't have a number", function() {


        expect(()=>{passwordIsValid("EphraimMam@")}).toThrow(new Error("Your password need to have atleast 1 number"));
    })
    it("should be false if the password doesn't have a special character", function() {


        expect(()=>{passwordIsValid("Ephraim45")}).toThrow(new Error("Your password need to have atleast 1 special character"));
    })
})

