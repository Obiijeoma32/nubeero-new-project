const admin = document.querySelector(".dashboard-admin"); //admin bar
const overlay = document.querySelector(".main-overlay");

// console.log(admin);
// console.log(viewProfile);

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

//

// console.log();
