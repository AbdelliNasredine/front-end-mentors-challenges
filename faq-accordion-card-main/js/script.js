var h2s = document.querySelectorAll("h2");

h2s.forEach((h2) => {
  h2.addEventListener("click", function (e) {
    var parent = this.parentElement;
    parent.classList.toggle("active");
  });
});
