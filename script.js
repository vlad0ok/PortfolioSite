// Hover Front-end skills

document.getElementById("front-skill").addEventListener("mouseover", () => {
  let zagolovok = document.querySelector("#front-skill h2");
  zagolovok.textContent = "My skills";
});

document.getElementById("front-skill").addEventListener("mouseout", () => {
  let zagolovok = document.querySelector("#front-skill h2");
  zagolovok.textContent = "FrontEnd Dev";
});

// Modal window

const modal = document.getElementById("modal");
const openModalBtn1 = document.getElementById("openModal1");
const openModalBtn2 = document.getElementById("openModal2");
const closeModalBtn = document.getElementById("closeModal");
const main = document.querySelector("main");

openModalBtn1.addEventListener("click", () => {
  modal.style.display = "flex";
  main.classList.add("blur");
});

openModalBtn2.addEventListener("click", () => {
  modal.style.display = "flex";
  main.classList.add("blur");
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  main.classList.remove("blur");
});
