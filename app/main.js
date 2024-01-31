const accordion = document.querySelector(".accordion");

const accordions = [
  {
    title: "bob",
    text: "bobby",
  },
  {
    title: "gert",
    text: "jens",
  },
  {
    title: "benny",
    text: "kurt",
  },
  {
    title: "bubber",
    text: "kaj",
  },
];

accordions.forEach((acc) => {
  accordion.innerHTML += `<div class="row"> ${acc.title} 
    <div class="content"> ${acc.text} </div>    
    <a class="btn">+</a>
    </div>`;
});

const btn = document.querySelectorAll(".btn");
const content = document.querySelectorAll(".content");
const row = document.querySelectorAll(".row");

btn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    content[i].classList.toggle("show");
  });
});
