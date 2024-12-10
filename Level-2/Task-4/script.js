const toggleCheckbox = document.getElementById("mode-toggle");
var head = document.getElementsByTagName("header");
var foot = document.getElementsByTagName("footer");
var card = document.getElementsByClassName("card");

// Toggle dark mode
toggleCheckbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggleCheckbox.checked);
  head[0].style.backgroundColor = toggleCheckbox.checked ? "#151515" : "#fff";
  foot[0].style.backgroundColor = toggleCheckbox.checked ? "#151515" : null;
  Array.from(card).forEach(
    (cards) =>
      (cards.style.backgroundColor = toggleCheckbox.checked ? "black" : null)
  );
});
