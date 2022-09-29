table = document.getElementById("table");
let children = table.children;
  for(element of children){
    element.setAttribute("class","centrado");
  }

let addRow = (tableId, cellValues) => {
  let table = document.getElementById(tableId);
  let newRow = table.insertRow(-1);
  for(let i =0; i < cellValues.length; i++){
    let newCell = newRow.insertCell(i);
    let text = document.createTextNode(cellValues[i]);
    newCell.appendChild(text);
  }
}

let clear = () =>{
  document.getElementById("lenguage").value = null;
  document.getElementById("programmers").value = null;
  document.getElementById("description").value = null;
}

function addLenguaje(){
  let lastCell = parseInt(document.getElementById("tableBody").lastElementChild.firstElementChild.innerText);
  console.log(lastCell);
  let lst = [];
  lst.push(lastCell+1);
  lst.push(document.getElementById("lenguage").value);
  lst.push(document.getElementById("programmers").value);
  addRow("tableBody",lst);
  clear();
}