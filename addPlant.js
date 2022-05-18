const newPlantsaveButton = document.querySelector('#submutButton');


const d = document.querySelector('#name').value;
const img = document.querySelector('#img').value;
const content = document.querySelector('#content').value;
const sideList = document.querySelector('#sideList');
const newForm = document.querySelector('.newPlantInfo');

newForm.addEventListener('submit',addPlant);

function addPlant(e){
    e.preventDefault;

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(d))
    sideList.appendChild(li)

    hiddenModal();
    
}
