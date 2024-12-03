"use strict";

const div = document.querySelector("div");

div.setAttribute("id", "teste");

div.setAttribute("class", "active");
div.setAttribute("class", "background-red");

//div.setAttribute("class", "active background-red");

const divId = div.getAttribute("id");
const divClass = div.getAttribute("class");
div.setAttribute("class", `${divClass} active`);

//div.removeAttribute("class");

console.log(div);

//////////////////////////////////////////////////////////////////

// dom [principal]
// fragmentDom [secundario, fora do principal, performatico em grandes projetos]

const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();

console.log(fragment);

const lanches = ["Lanche 1", "Lanche 2", "Lanche 3", "Lanche 4"];

lanches.forEach((element) => {
  const li = document.createElement("li");
  li.textContent = element;

  fragment.append(li);
});
ul.append(fragment);

//////////////////////////////////////////////////////////////////

setTimeout(() => {
  const li = document.querySelectorAll("li");
  li[2].remove();

  const h1 = document.querySelector("h1");
  h1.remove();
}, 2000);
