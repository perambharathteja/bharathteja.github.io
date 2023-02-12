let contactUSEl = document.getElementById("contactUS");
let statusEl = document.getElementById("status");

contactUSEl.onclick = function (){
    statusEl.textContent = "We will reach you ofter some time!";
    statusEl.style.color = "orange";
    statusEl.style.fontSize = "24px";
    statusEl.style.fontWeight = "bold";
}

