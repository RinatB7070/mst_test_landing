"use strict"

window.addEventListener('scroll', function() {
  if(window.scrollY !== 0) {
    this.document.querySelector("header").classList.add("header_scroll");
  } else {
    this.document.querySelector("header").classList.remove("header_scroll");
  }
});