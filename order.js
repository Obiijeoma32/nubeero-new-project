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
