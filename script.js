const modal = document.getElementsByClassName("modal");
const pledgeModal = document.getElementsByClassName("pledge-modal");
const sucess = document.getElementsByClassName("Thanks-modal");
const Cancel = document.getElementsByClassName("cancel");
const pledges = document.getElementsByClassName("make-pledge");
// const progressBar = document.getElementsByClassName("progress-bar")[0];
const progressLine = document.getElementsByClassName("progress-line")[0];

const goal=100_000;
var currentAmount=0;
console.log(progressLine)
function showThankyou(element) {
    const amountPledged = element.parentNode.children[1].value;
    currentAmount+=amountPledged;
    var percentage=currentAmount/goal*100;
    progressLine.style.width=percentage.toString()+'%'
    console.log((percentage));
  sucess[0].classList.remove("none");
  console.log(sucess[0].classList);
  pledgeModal[0].classList.add("none");
}
function remove_modal(element) {
  element.parentNode.parentNode.classList.add("none");
  close_input();
}
function show_modal() {
  pledgeModal[0].classList.remove("none");
}
function disableScrolling() {
  setTimeout(function () {
    pledgeModal[0]
      .getElementsByClassName("modal")[0]
      .classList.add("change-scrollbar");
  }, 1500);
}
function close_input() {
  for (let index = 0; index < pledges.length; index++) {
    const element = pledges[index];
    if ("none" in element.classList) {
    } else {
      element.classList.add("none");
      element.parentNode.parentNode.classList.remove("pledge-outline");
      element.parentNode.parentNode
        .querySelector("input[type='radio']")
        .removeAttribute("checked");
    }
  }
}
function show_input(ele) {
  close_input();
  ele.querySelector("input[type='radio']").setAttribute("checked", true);
  ele.classList.add("pledge-outline");
  try {
    ele.getElementsByClassName("make-pledge")[0].classList.remove("none");
  } catch (error) {
    console.log(error);
  }
}
function enableScrolling() {
  pledgeModal[0]
    .getElementsByClassName("modal")[0]
    .classList.remove("change-scrollbar");
}
window.onclick = function (event) {
  if (event.target == pledgeModal[0]) {
    console.log("clicked");
    pledgeModal[0].classList.add("none");
    close_input();
  } else if (event.target == sucess[0].parentNode) {
    // @ts-ignore
    sucess[0].parentNode.classList.add("none");
    close_input();
  }
};
