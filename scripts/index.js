//generate random background color for each section
const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];
const sections = document.querySelectorAll(".section");
sections.forEach(section => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color +=
      colors[Math.floor(Math.random() * (colors.length - 1 - 0 + 1)) + 0];
  }
  section.style.backgroundColor = `${color}`;
});

// navigation
const main = document.querySelector(".main");
navBtns = document.querySelectorAll(".navBtn");
navBtns.forEach(btn => {
  btn.addEventListener("click", moveToSection);
});
function moveToSection(e) {
  main.style.transform = `translate(${e.target.dataset.x}%, ${e.target.dataset.y}%)`;
}
