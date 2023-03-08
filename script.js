// const clearButton = document.querySelector(".clearButton");
// const container = document.getElementById("container");
// const cdButton = document.querySelector(".cdButton");

// function initializeGrid() {
//   for (i = 0; i < 256; i++) {
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("toggle-off");
//     newDiv.addEventListener("mousedown", function () {
//       newDiv.classList.remove("toggle-off");
//       newDiv.classList.add("toggle-on");
//       container.addEventListener("mouseover", toggleOn);
//     });
//     container.appendChild(newDiv);
//   }
// }

// function toggleOn(event) {
//   const target = event.target;
//   target.classList.remove("toggle-off");
//   target.classList.add("toggle-on");
// }

// function newGrid() {
//   let userInput = prompt("Enter a number between 1 and 99:");
//   if (userInput < 1 || userInput > 99) {
//     alert("Please enter a valid number between 1 and 99.");
//     return;
//   }
//   while (container.firstChild) {
//     container.removeChild(container.firstChild);
//   }
//   const numDivs = userInput ** 2;
//   const divSize = 400 / userInput;
//   for (let i = 0; i < numDivs; i++) {
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("toggle-off");
//     newDiv.style.width = `${divSize}px`;
//     newDiv.style.height = `${divSize}px`;
//     newDiv.addEventListener("mouseover", function () {
//       newDiv.classList.remove("toggle-off");
//       newDiv.classList.add("toggle-on");
//     });
//     container.appendChild(newDiv);
//   }
// }

// initializeGrid();

// clearButton.addEventListener("click", function () {
//   const toggledDivs = document.querySelectorAll("div.toggle-on");
//   for (let i = 0; i < toggledDivs.length; i++) {
//     toggledDivs[i].classList.remove("toggle-on");
//     toggledDivs[i].classList.add("toggle-off");
//   }
//   container.removeEventListener("mouseover", toggleOn);
// });

// cdButton.addEventListener("click", function () {
//   newGrid();
// });
const clearButton = document.querySelector(".clearButton");
const container = document.getElementById("container");
const cdButton = document.querySelector(".cdButton");

let mouseDown = false;

function initializeGrid() {
  for (i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("toggle-off");

    newDiv.addEventListener("mousedown", function () {
      mouseDown = true;
      newDiv.classList.remove("toggle-off");
      newDiv.classList.add("toggle-on");
    });

    newDiv.addEventListener("mouseup", function () {
      mouseDown = false;
    });

    newDiv.addEventListener("mouseover", function () {
      if (mouseDown) {
        newDiv.classList.remove("toggle-off");
        newDiv.classList.add("toggle-on");
      }
    });

    container.appendChild(newDiv);
  }
}

function toggleOn(event) {
  const target = event.target;
  target.classList.remove("toggle-off");
  target.classList.add("toggle-on");
}

function newGrid() {
  let userInput = prompt("Enter a number between 1 and 99:");
  if (userInput < 1 || userInput > 99) {
    alert("Please enter a valid number between 1 and 99.");
    return;
  }
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const numDivs = userInput ** 2;
  const divSize = 400 / userInput;
  for (let i = 0; i < numDivs; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("toggle-off");
    newDiv.style.width = `${divSize}px`;
    newDiv.style.height = `${divSize}px`;
    newDiv.addEventListener("mousedown", function () {
      mouseDown = true;
      newDiv.classList.remove("toggle-off");
      newDiv.classList.add("toggle-on");
    });

    newDiv.addEventListener("mouseup", function () {
      mouseDown = false;
    });

    newDiv.addEventListener("mouseover", function () {
      if (mouseDown) {
        newDiv.classList.remove("toggle-off");
        newDiv.classList.add("toggle-on");
      }
    });
    container.appendChild(newDiv);
  }
}

initializeGrid();

clearButton.addEventListener("click", function () {
  const toggledDivs = document.querySelectorAll("div.toggle-on");
  for (let i = 0; i < toggledDivs.length; i++) {
    toggledDivs[i].classList.remove("toggle-on");
    toggledDivs[i].classList.add("toggle-off");
  }
});

cdButton.addEventListener("click", function () {
  newGrid();
});
