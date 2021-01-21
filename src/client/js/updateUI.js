
const updateUI = async (element,data) => {
    console.log("::: Running updateUI :::", data);
    console.log("::: Running updateUI :::", element);
  
    try{
        element.innerHTML = `<strong>Confidence: </strong>${data.confidence}<br>
        <strong>Score tag: </strong>${data.score_tag}<br>
        <strong>Subjectivity: </strong>${data.subjectivity}<br>
        <strong>Irony: </strong>${data.irony}`
  
    }catch(error){
      console.log("error", error);
    }
  }

export { updateUI };

