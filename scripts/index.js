//generate random background color for each section
// const colors = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f"
// ];
// const sections = document.querySelectorAll(".section");
// sections.forEach(section => {
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color +=
//       colors[Math.floor(Math.random() * (colors.length - 1 - 0 + 1)) + 0];
//   }
//   section.style.backgroundColor = `${color}`;
// });

// navigation
const main = document.querySelector(".main");
const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
navBtns = document.querySelectorAll(".navBtn");
navBtns.forEach(btn => {
  btn.addEventListener("click", moveToSection);
});
function moveToSection(e) {
  if (!e.target.classList.value.includes("active")) {
    main.style.transform = `scale(.9) translate(${e.target.dataset.x}%, ${e.target.dataset.y}%)`;
    setTimeout(() => {
      main.style.transform = ` translate(${e.target.dataset.x}%, ${e.target.dataset.y}%)`;
    }, 800);
  }
  nav.classList.remove("active");
  navBtns.forEach(btn => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
}
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

main.addEventListener("click", () => {
  nav.classList.remove("active");
  main.classList.toggle("pers");
});
