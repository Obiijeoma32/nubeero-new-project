const admin = document.querySelector(".dashboard-admin"); //admin bar
const overlay = document.querySelector(".main-modal-form");
const rootPage = document.querySelector(".modal-content"); //root bar for admin

admin.addEventListener("click", adminHandler);
overlay.addEventListener("click", overlayHandler);
rootPage.addEventListener("click", rootPageHandler);

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
function rootPageHandler() {
  if ((createAdmin.style.display = "block")) {
    createAdmin.style.display = "none";
  }
}
