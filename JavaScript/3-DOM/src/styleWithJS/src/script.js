function useLightTheme() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#f1f5f9";
  document.getElementById("lightBtn").classList.add("active-theme");
  document.getElementById("darkBtn").classList.remove("active-theme");
}

function useDarkTheme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212529";
  document.getElementById("lightBtn").classList.remove("active-theme");
  document.getElementById("darkBtn").classList.add("active-theme");
}

document.getElementById("lightBtn").addEventListener("click", useLightTheme);
document.getElementById("darkBtn").addEventListener("click", useDarkTheme);

