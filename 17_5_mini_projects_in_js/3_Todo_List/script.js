let addBtn = document.querySelector(".add_todo");
let list = document.querySelector(".list");

let searchInput = document.querySelector("#search");

let todo = ["hello", "I"];

function createDeleteBtn(index) {
  let deleteBtn = document.createElement("button");

  deleteBtn.textContent = "❌";

  deleteBtn.addEventListener("click", () => {
    todo.splice(index, 1);
    todoElement();
  });
  return deleteBtn;
}

function todoElement() {
  list.innerHTML = "";
  todo.forEach((element, index) => {
    let div = document.createElement("div");
    div.classList.add("text");

    let p = document.createElement("p");

    p.textContent = element;

    let deleteBtn = createDeleteBtn(index);

    div.append(p, deleteBtn);
    list.append(div);
  });
}

addBtn.addEventListener("click", () => {
  let inputValue = searchInput.value.trim();

  if (inputValue.trim() === "") {
    return;
  }
  inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

  todo.unshift(inputValue);

  searchInput.value = "";

  todoElement();
});

searchInput.addEventListener("input", () => {
  let searchValue = searchInput.value.trim().toLowerCase();
  let result = todo.filter((element) => {
    return element.toLowerCase().includes(searchValue);
  }); // here is store array of searched element

  list.innerHTML = "";

  result.forEach((element,index) => {
    let div = document.createElement("div");
    div.classList.add("text");

    let p = document.createElement("p");

    p.textContent = element;
    let deleteBtn = createDeleteBtn(index)
    div.append(p,deleteBtn);
    list.append(div);
  });
});

todoElement();
