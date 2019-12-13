let mySpecTester = require('../src/password_checker');
let passwordIsOk = mySpecTester.passwordIsOk;
describe('passwordIsOk', function() {
    it("should be true if the password meet 3 or more conditions", function() {


        expect(passwordIsOk("ephraimoh")).toBe(true);
    })
})