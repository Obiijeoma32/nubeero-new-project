const admin = document.querySelector(".dashboard-admin"); //admin bar
const viewProfile = document.querySelectorAll(".view-user-profile"); // rider table
const createAdmin = document.querySelector(".main-modal-form"); // admin form
const userProfile = document.querySelector(".user-profile"); // modal with the image
// console.log(admin, viewProfile, createAdmin);
admin.addEventListener("click", adminHandler);
for (let i = 0; i < viewProfile.length; i++) {
  viewProfile[i].addEventListener("click", viewProfileHandler);

  function viewProfileHandler() {
    if (userProfile) {
      userProfile.style.display = "block";
    }
  }
}

function adminHandler() {
  if (createAdmin) {
    createAdmin.style.display = "block";
  }
}
