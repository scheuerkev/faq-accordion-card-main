//Targeting all faq items in an array

const question = document.querySelectorAll(".faq__content");

//Adding a click listener on each one of the array, getting the childs (a node list)
//of each element and toggling each class on proper elements

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    let childs = question[i].childNodes;
    question[i].classList.toggle("active__content");
    childs[1].classList.toggle("active__question");
    childs[3].classList.toggle("active__answer");
  });
}
