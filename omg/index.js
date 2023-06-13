const DOMselectors = {
    form: document.getElementById("form"),
    title: document.getElementById("title"),
    display: document.getElementById("display"),
    btn: document.getElementById("btn"),
  };
  DOMselectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    input();
  });
  function input() {
    DOMselectors.display.insertAdjacentHTML(
      "beforeend",
  
      `<div class="display-card">
          <h3 class="display-album">${DOMselectors.title.value}</h3>
          <button class="remove btn">remove</button>
        </div>`
    );
    card();
  }
  function card() {
    let remove = document.querySelectorAll(".remove");
    console.log(remove);
    remove.forEach((el) => {
      el.addEventListener("click", function (el) {
        this.parentElement.remove();
      });
    });
  }