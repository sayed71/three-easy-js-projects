const closedF = document.querySelector(".closed");
const openF = document.querySelector(".open");
const handsM = document.querySelector(".hands");
const earsM = document.querySelector(".ears");

closedF.addEventListener("click", () => {
  if (openF.classList.contains("open")) {
    openF.classList.add("active");
    closedF.classList.remove("active");
  }
});
openF.addEventListener("click", () => {
  if (handsM.classList.contains("hands")) {
    handsM.classList.add("active");
    openF.classList.remove("active");
  }
});
handsM.addEventListener("click", () => {
  if (earsM.classList.contains("ears")) {
    earsM.classList.add("active");
    handsM.classList.remove("active");
  }
});
earsM.addEventListener("click", () => {
    if (closedF.classList.contains("closed")) {
      closedF.classList.add("active");
      earsM.classList.remove("active");
    }
  });