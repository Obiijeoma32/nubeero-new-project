const admin = document.querySelector(".dashboard-admin"); //admin bar
// console.log(assign);
const viewProfile = document.querySelector(".view-user-profile"); //admin bar

// const riderCard = document.querySelector(".modal"); //rider card list
viewProfile.addEventListener("click", viewProfileHandler);
admin.addEventListener("click", adminHandler);

function adminHandler() {
  const createAdmin = document.querySelector(".main-modal-form");

  if (createAdmin) {
    createAdmin.style.display = "block";
  }
}

function viewProfileHandler() {
  const userProfile = document.querySelector(".user-profile");
  if (userProfile) {
    userProfile.style.display = "block";
  }
}

console.log(assign);
