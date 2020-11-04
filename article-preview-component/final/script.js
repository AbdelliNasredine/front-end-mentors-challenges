// get the share link
const share = document.querySelector('a[href="#share"]');
// listen when it clicked
share.addEventListener("click", function () {
  // toggle the styling of share div
  const authorDiv = document.querySelector("div.author");
  const shareDiv = document.querySelector("div.share");
  authorDiv.classList.toggle("hide");
  shareDiv.classList.toggle("show");
  // change the footer bg color
  share.parentElement.classList.toggle("bg");
});
