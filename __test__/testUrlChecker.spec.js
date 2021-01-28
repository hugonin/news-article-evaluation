import { checkForURL } from '../src/client/js/urlChecker'
 
describe("Testing the url Checker functionality", () => {
    test("should be true if the url is valid",  () => {
        const input = "https://jestjs.io/en/";
        const output = checkForURL(input);
        expect(output).toBeDefined();
        expect(output).toBe(true);              
    });

});