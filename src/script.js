"use strict";
const addBtn = document.querySelector("#btn");
const userInput = document.querySelector("#user-input");
const listTheItems = document.querySelector("#list-items");
let arr = [];
// *setting local storage
let storage = localStorage.getItem("listOfItems");
let storedItem = JSON.parse(storage);

if (storage) {
  storedItem.forEach((element) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = element;
    listTheItems.appendChild(listItem);
    let crossElement = document.createElement("span");
    listItem.appendChild(crossElement);
  });
}

// * adding todo list task
const span = addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (userInput.value === "") {
    alert("Please enter an you todo task");
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = userInput.value;
    listTheItems.appendChild(listItem);
    let crossElement = document.createElement("span");
    listItem.appendChild(crossElement);
    arr.push(listItem.textContent);
    localStorage.setItem("listOfItems", JSON.stringify(arr));
  }
  userInput.value = "";
});

// removing element and mark complete
listTheItems.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  if (e.target.tagName === "SPAN") {
    e.target.closest("li").remove();
    let indexToRemove = storedItem.indexOf(e.target.closest("li").textContent);
    if (indexToRemove !== -1) {
      storedItem.splice(indexToRemove, 1);
      localStorage.setItem("listOfItems", JSON.stringify(storedItem));
    }
  }
});
