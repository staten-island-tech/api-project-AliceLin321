import "../styles/style.css";
import "../js/dom.js";
import { DOM } from "../js/dom.js";
const URL = "https://rickandmortyapi.com/api/character"; //use https


async function getData(URL) {
  try {
  const response = await fetch(URL);
  if (response.status <200 || response.status > 299) {
    throw error(response);
  }
else{
const data = await response.json();
const yes = data.results; 
  display(yes)

} //makes data into json object

 } catch (error) {
    console.log(error);
    console.log("sad");

  } };

getData(URL);

DOM.alive.addEventListener("click", function() {
  DOM.main.innerHTML ="";
  const answer = yes.filter((yes => yes.status) === "Alive")
  display(answer)
});
DOM.dead.addEventListener("click", function() {
  DOM.main.innerHTML ="";
  const answer = yes.filter((yes => yes.status) === "Dead")
  display(answer)
})
DOM.humanoid.addEventListener("click", function() {
  DOM.main.innerHTML ="";
  const answer = yes.filter((yes => yes.species) === "Humanoid")
  display(answer)
})
DOM.alien.addEventListener("click", function() {
  DOM.main.innerHTML ="";
  const answer = yes.filter((yes => yes.species) === "Alien")
  display(answer)
})
DOM.human.addEventListener("click", function() {
  DOM.main.innerHTML ="";
  const answer = yes.filter((yes => yes.species) === "Human")
  display(answer)
})
DOM.female.addEventListener("click", function() {
  DOM.main.innerHTML ="";
  const answer = yes.filter((yes => yes.gender) === "Female")
  display(answer)
})
DOM.male.addEventListener("click", function() {
  DOM.main.innerHTML ="";
  const answer = yes.filter((yes => yes.status) === "Male")
  display(answer)
})

function display(yes) {
  DOM.main.innerHTML ="";
  yes.forEach((yes) =>
    DOM.menupage.insertAdjacentHTML(
      "beforeend",
      `
  <div class="child">
<img class="img" src="${yes.img}"><img>
<h1 class="price">${yes.name}</h1>
<h2 class="price">$${yes.price}</h2>
</div>
`));

    }