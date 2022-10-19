const assign = document.querySelectorAll(".assign"); //assign
const assignOrder = document.querySelector(".assign-order"); //assign order modal
const assignOrderRoot = document.querySelector(".assign-modal-content"); //root handler

// console.log(assignOrderRoot);
for (let i = 0; i < assign.length; i++) {
  assign[i].addEventListener("click", assignHandler);

  function assignHandler() {
    if (assignOrder) {
      assignOrder.style.display = "block";
      console.log("i got clicked");
    }
  }
}

assignOrderRoot.addEventListener("click", assignHandlerHide);

function assignHandlerHide() {
  if ((assignOrder.style.display = "block")) {
    assignOrder.style.display = "none";
  }
}

const createAdmin = document.querySelector(".main-modal-form");
const admin = document.querySelector(".dashboard-admin"); //admin bar
const overlay = document.querySelector(".modal-content");

admin.addEventListener("click", adminHandler);
overlay.addEventListener("click", overlayHandler);

function adminHandler() {
  if (createAdmin) {
    createAdmin.style.display = "block";
  }
}
function overlayHandler() {
  if ((createAdmin.style.display = "block")) {
    createAdmin.style.display = "none";
  }
}
