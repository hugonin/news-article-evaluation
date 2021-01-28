import { updateUI } from '../src/client/js/updateUI'
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


describe("Testing the UI update functionality", () => {
    test("UI should be updated properly with results of API call", () => {
        const dom = new JSDOM(`<div id="results"></div>`);
        const data = { Confidence: "100",Score_tag: "P", Subjectivity: "SUBJECTIVE", Irony: "NONIRONIC" };
        const element = dom.window.document.getElementById('results'); 

        expect(updateUI(element, data)).resolves.toBe( `<strong>Confidence: </strong>100<br>
        <strong>Score_tag: </strong>P<br>
        <strong>Subjectivity: </strong>SUBJECTIVE<br>
        <strong>Irony: </strong>NONIRONIC`);
    }); 

    test("the fetch fails with an error'", () => {
        const dom = new JSDOM(`<div id="results"></div>`);
        const data = { Confidence: "100",Score_tag: "P", Subjectivity: "SUBJECTIVE", Irony: "NONIRONIC" };
        const element = dom.window.document.getElementById('results'); 
        expect(updateUI(element, data)).rejects.toMatch('error');

    }); 

}); 

