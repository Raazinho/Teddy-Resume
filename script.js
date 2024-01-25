/* 
   Final Project resume menu toggle script 
   Filename: script.js
   HTML5 and CSS3 Illustrated Final Project
 */

var navButton = document.querySelector("#menu");
if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   }, false);
}