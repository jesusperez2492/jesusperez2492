bootstrapTooltips();
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

function bootstrapTooltips(){
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}

function addLenguaje(){
  if(document.getElementById("lenguage").value && parseInt(document.getElementById("programmers").value) > 0){
    tableBody = document.getElementById("tableBody");
    let lastCell = parseInt(tableBody.lastElementChild.firstElementChild.innerText);
    let description;
    if(document.getElementById("description").value) description = document.getElementById("description").value;
    else description = "No description added";
    let lst = [];
    lst.push(lastCell+1);
    lst.push(document.getElementById("lenguage").value);
    lst.push(document.getElementById("programmers").value);
    addRow("tableBody",lst);
    let value = tableBody.lastElementChild.children.item(1).innerHTML;
    let newTag=`<td data-bs-toggle="tooltip" data-bs-placement="top"
    data-bs-custom-class="custom-tooltip"
    data-bs-title="${description}">${value}</td>`;
    tableBody.lastElementChild.children.item(1).outerHTML = newTag;
    bootstrapTooltips();
    clear();
  }
  
}