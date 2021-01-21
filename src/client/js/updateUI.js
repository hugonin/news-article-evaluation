
const updateUI = async (inputText) => {
    console.log("::: Running updateUI :::", inputText);
  
    const request = await fetch('/add');
    try{
        const allData = await request.json();
        document.getElementById('results').innerHTML = `<strong>Confidence: </strong>${data.confidence}<br>
        <strong>Score tag: </strong>${data.score_tag}<br>
        <strong>Subjectivity: </strong>${data.subjectivity}<br>
        <strong>Irony: </strong>${data.irony}`
  
    }catch(error){
      console.log("error", error);
    }
  }



export { updateUI };

