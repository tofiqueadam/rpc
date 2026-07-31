const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector("#play-button");
const itemList = document.querySelector("#item-list");

function addListItem() {
  const text = inputBox.value;

  const listItem = document.createElement("li");
  listItem.textContent = text;

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.appendChild(removeButton);
  itemList.appendChild(listItem);

  inputBox.value = "";
  inputBox.focus();
}

addButton.addEventListener("click", addListItem);
inputBox.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addListItem();
  }
});