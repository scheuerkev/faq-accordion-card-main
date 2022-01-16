"use strict";

//Targeting all faq items in an array
var question = document.querySelectorAll(".faq__content");

//Adding a click listener on each one of the array, getting the childs (a node list)
//of each element and toggling each class on proper elements

var _loop = function _loop(i) {
  question[i].addEventListener("click", function () {
    var childs = question[i].childNodes;
    question[i].classList.toggle("active__content");
    childs[1].classList.toggle("active__question");
    childs[3].classList.toggle("active__answer");
  });
};

for (var i = 0; i < question.length; i++) {
  _loop(i);
}
