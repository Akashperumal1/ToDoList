let inputList = document.getElementById("input-list");
let inputBtn = document.getElementById("input-btn");
let listContainer = document.getElementById("list-container");
let listTimer = document.getElementById("input-date");
inputBtn.addEventListener("click", () => {
  let newListItemEl = document.createElement("li");
  let div = document.createElement("div"); 
  let divTm = document.createElement("div"); 
  let divBtn = document.createElement("div");
  newListItemEl.append(div,divTm,divBtn);
  div.textContent = inputList.value;
  divTm.textContent = listTimer.value;
  newListItemEl.className = "list-item";
  divBtn.parentElement.setAttribute("onClick", "removeListItem(event)");
  divBtn.innerHTML = `<i class="fa fa-xmark"></i>`;
  newListItemEl.append(divBtn);
  listContainer.prepend(newListItemEl);
  inputList.value = "";
  listTimer.value = "";
});
function removeListItem(event) {
  const existingList = event.target.parentNode.parentNode;
  console.log("logging event", event.target.parentNode);

  existingList.parentNode.removeChild(existingList);
}

