const DOM = {
main: document.getElementById("main"),
    everything: document.getElementById("everything"),
    female: document.getElementById("female"),
   male: document.getElementById("male"),
    alive: document.getElementById("alive"),
    dead: document.getElementById("dead"),
    human: document.getElementById("human"),
    alien: document.getElementById("alien"),
    humanoid: document.getElementById("humanoid"),
    unknown: document.getElementById("unknown"),
    theme: document.getElementById("btn"),
  };
  DOM.theme.addEventListener("click", function () {
    if (document.body.classList.contains("cool")) {
      document.body.classList.remove("cool");
      document.body.classList.add("warm");
    } else {
      document.body.classList.remove("warm");
      document.body.classList.add("cool");
    }
  });
  export {DOM}