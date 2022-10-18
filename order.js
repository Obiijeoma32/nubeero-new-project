const assign = document.querySelector(".assign"); //assign

// const riderCard = document.querySelector(".modal"); //rider card list

assign.addEventListener("click", assignHandler);
function assignHandler() {
  const assignOrder = document.querySelector(".assign-order");
  if (assignOrder) {
    assignOrder.style.display = "block";
    console.log("i got clicked");
  }
}
const admin = document.querySelector(".dashboard-admin"); //admin bar
const overlay = document.querySelector(".main-overlay");

// console.log(admin);
// const viewProfile = document.querySelector(".view-user-profile"); //admin bar
// console.log(viewProfile);
// viewProfile.addEventListener("click", viewProfileHandler);
admin.addEventListener("click", adminHandler);
overlay.addEventListener("click", overlayHandler);
// admin.addEventListener("mousemove", adminMouseOut);

const createAdmin = document.querySelector(".main-modal-form");
function adminHandler() {
  if (createAdmin) {
    createAdmin.style.display = "block";
  }
}
function overlayHandler() {
  createAdmin.style.display = "none";
  console.log("something got clicked");
}
// function adminMouseOut() {
//   if (!createAdmin) {
//     createAdmin.removeProperty("block");
//   }
// }

// function viewProfileHandler() {
//   const userProfile = document.querySelector(".user-profile");
//   if (userProfile) {
//     userProfile.style.display = "block";
//   }
// }

// console.log();
