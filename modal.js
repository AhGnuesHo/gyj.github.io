const HIDDEN_CLASSNAME = 'hidden'

const openModal = document.getElementById("addPlant")
const modalDiv = document.querySelector('.modal');
const closeModal = document.querySelector('#closeModal');

openModal.onclick = () => {
    modalDiv.classList.remove(HIDDEN_CLASSNAME);
}

function hiddenModal() {
     modalDiv.classList.add(HIDDEN_CLASSNAME);
}