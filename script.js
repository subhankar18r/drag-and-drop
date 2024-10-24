const lists = document.querySelectorAll("li");
const boxes = document.querySelectorAll(".box");

let draggedElement = null;

lists.forEach((list) => {
  list.addEventListener("dragstart", (e) => {
    console.dir(e);
    draggedElement = list;
    list.style.opacity = 0.5;
  });

  list.addEventListener("dragend", (e) => {
    list.style.opacity = 1;
    draggedElement = null;
  });
});

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  box.addEventListener("drop", () => {
    if (draggedElement) {
      box.appendChild(draggedElement);
    }
  });
});
