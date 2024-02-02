window.onload = function () {
  document.getElementById("addTableBtn").addEventListener("click", addTable);
};

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function (colNode) {
    trNode.appendChild(colNode);
  });
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  tdNode.classList = "tdNode";
  return tdNode;
}

function createBtn(action) {
  let buttonNode = document.createElement("button");
  buttonNode.textContent = "Edit text";
  buttonNode.onclick = action;
  return buttonNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for (let i = 0; i < 3; i++) {
    let textNode = createTxtNode("Cell (" + i + ", 0)");
    let col1 = createTDNode(textNode);
    let col2 = createTDNode(
      createBtn(() => {
        let fieldNode = document.createElement("input");
        fieldNode.placeholder = "Enter cell (x, y) ...";
        textNode.replaceWith(fieldNode);
      })
    );
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
