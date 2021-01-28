import { updateUI } from '../src/client/js/updateUI'
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


describe("Testing the UI update functionality", () => {
    test("UI should be updated properly with results of API call", () => {
        const dom = new JSDOM(`<div id="results"></div>`);
        const data = { confidence: "100",score_tag: "P", subjectivity: "SUBJECTIVE", irony: "NONIRONIC" };
        const element = dom.window.document.getElementById('results'); 

        updateUI(element, data);

        expect(element.innerHTML).toEqual(
            `<strong>Confidence: </strong>${data.confidence}<br>
            <strong>Score tag: </strong>${data.score_tag}<br>
            <strong>Subjectivity: </strong>${data.subjectivity}<br>
            <strong>Irony: </strong>${data.irony}`
        );
    }); 


}); 

