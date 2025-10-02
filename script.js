let count = 0;

function addBox() {
  count++;
  const container = document.getElementById("box-container");
  const box = document.createElement("div");
  box.className = "box";
  box.innerText = "Box " + count;
  container.appendChild(box);
}
