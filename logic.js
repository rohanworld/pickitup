function copyToClipboard(elementId) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById("myDiv").innerText);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  window.alert("Copied ✔");
}

const button = document.getElementById("myButton");
button.addEventListener("click", getData);

async function getData() {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch("https://api.jcwyt.com/pickup", {
    method: "GET",
    headers: headersList,
  });

  let data = await response.text();
  document.getElementById("myDiv").innerHTML = data;
}
document.addEventListener("contextmenu", (event) => event.preventDefault());
