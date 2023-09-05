const modal = document.querySelector("#kvkkModal");
const closeButton = document.querySelector("#closeButton");
const kullanimKosullariLink = document.querySelector("#kvkkLink");

kullanimKosullariLink.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
