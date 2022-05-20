const newname = document.querySelector("#name");
const img = document.querySelector("#img");
const content = document.querySelector("#content");
const sideList = document.querySelector("#sideList");
const newForm = document.querySelector(".newPlantInfo");
const section = document.querySelector("section");

function addPlantHandler(e) {
  e.preventDefault();

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newname.value));
  sideList.appendChild(li);

  const cardDiv = document.createElement("div");
  cardDiv.classList.add('card');
  section.appendChild(cardDiv);

  const imgSrc = document.createElement("img");
  imgSrc.setAttribute("src", img.value);
  imgSrc.setAttribute("alt", newname.value);
  const span = document.createElement("span")
  span.appendChild(document.createTextNode(content.value));
  cardDiv.appendChild(imgSrc);
  cardDiv.appendChild(span);

  hiddenModal();
}

newForm.addEventListener("submit", addPlantHandler);
