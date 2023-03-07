let button = document.querySelector("button");

function initializeGrid() {
  let container = document.getElementById("container");
  for (i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("toggle-off");
    newDiv.addEventListener("mouseover", function () {
      newDiv.classList.remove("toggle-off");
      newDiv.classList.add("toggle-on");
    });
    container.appendChild(newDiv);
  }
}

initializeGrid();

button.addEventListener("click", function () {
  let toggledDivs = document.querySelectorAll("div.toggle-on");
  for (let i = 0; i < toggledDivs.length; i++) {
    toggledDivs[i].classList.remove("toggle-on");
    toggledDivs[i].classList.add("toggle-off");
  }
})