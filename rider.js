const admin = document.querySelector(".dashboard-admin"); //admin bar
const viewProfile = document.querySelector(".view-user-profile"); //admin bar
const createAdmin = document.querySelector(".main-modal-form");
// console.log(admin, viewProfile, createAdmin);
admin.addEventListener("click", adminHandler);
viewProfile.addEventListener("click", viewProfileHandler);

const userProfile = document.querySelector(".user-profile");
function viewProfileHandler() {
  if (userProfile) {
    userProfile.style.display = "block";
  }
}

function adminHandler() {
  if (createAdmin) {
    createAdmin.style.display = "block";
  }
}
