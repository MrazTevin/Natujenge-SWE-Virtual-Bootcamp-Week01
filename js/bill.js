let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let submit = document.getElementById("submit");
let edit = document.getElementsByClassName("edit");

edit.onclick = function() {
    modal.style.display = "block";
}

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

submit.onclick = function() {
  modal.style.display = "none";
}

var selectedRow = null; 

function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".containers");
  const main = document.querySelector(".mains");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clearing form
function clearForm() {
    document.querySelector("#e-bill").value = "";
    document.querySelector("#e-amount").value = "";
}

// Populating the table
document.querySelector("#bills-form").addEventListener("submit", (e) =>{
  e.preventDefault();

  const bill = document.querySelector("#e-bill").value;
  const amount = document.querySelector("#e-amount").value;

  if (bill === "" || amount === "") {
    showAlert("Please fill in all the fields!")
  } else{
    if (selectedRow == null) {
      const table = document.querySelector("#myTable");
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${bill}</td>
        <td>${amount}</td>
        <td class="action">
            <a id="#" class="t-edit"><i class="fa-solid fa-pen-to-square"></i></a>
            <a id="#" class="t-delete"><i class="fa-solid fa-trash-can"></i></a>
        </td>
      `;
      table.appendChild(row);
      selectedRow = null;
      showAlert("New bill added");
    } else {
        selectedRow.children[0].textContext = bill;
        selectedRow.children[1].textContext = amount;
        selectedRow = null;
        showAlert("Bill info edited");
    }

    clearForm();
  }
});

// Updating Table
document.querySelector("#myTable").addEventListener("click", (e)=>{
target = e.target;
if(target.classList.contains("fa-pen-to-square")){
    selectedRow = target.parentElement.parentElement.parentElement;
    document.querySelector("#e-bill").value = selectedRow.children.children[0].textContext;
    document.querySelector("#e-amount").value = selectedRow.children.children[1].textContext;
}
});

// Delete data
document.querySelector("#myTable").addEventListener("click", (e)=>{
  target = e.target;
  if(target.classList.contains("fa-trash-can")){
    target.parentElement.parentElement.parentElement.remove();
    showAlert("This bill has been deleted");
  }
});