function addDivToContainer() {
  let container = document.getElementById("container");
  for (i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.addEventListener("mouseover", function () {
      this.style.backgroundColor = "black";
    });
    container.appendChild(newDiv);
  }
}
addDivToContainer();


let button = document.querySelector("button")

button.addEventListener("click", function(){
    let gridSize = parseInt(prompt("Grid Size?"))
    if (gridSize > 100 || gridSize < 1){
        
    }
    else console.log("hooray")
})
     