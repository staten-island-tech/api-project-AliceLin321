import "../styles/style.css";
const URL = "https://api.quotable.io/random";
async function getData(URL) {
  const response = await fetch(URL);
  const data = response.json();
  console.log(data);
}
getData(URL);
