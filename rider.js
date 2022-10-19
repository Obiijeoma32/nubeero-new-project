const admin = document.querySelector(".dashboard-admin"); //admin bar
const viewProfile = document.querySelectorAll(".view-user-profile"); // rider table
const createAdmin = document.querySelector(".main-modal-form"); // admin form
const userProfile = document.querySelector(".user-profile"); // modal with the image
const rootBody = document.querySelector(".profile-content");
const overlay = document.querySelector(".modal-content"); //root bar for admin

// console.log(rootBody);

admin.addEventListener("click", adminHandler);
rootBody.addEventListener("click", userProfileHider);
overlay.addEventListener("click", overlayHandler);

for (let i = 0; i < viewProfile.length; i++) {
  viewProfile[i].addEventListener("click", viewProfileHandler);

  function viewProfileHandler() {
    if (userProfile) {
      userProfile.style.display = "block";
    }
  }
}
function userProfileHider() {
  if ((userProfile.style.display = "block")) {
    userProfile.style.display = "none";
  }
}

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
