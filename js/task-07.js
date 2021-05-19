const refs7 = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs7.input.addEventListener("input", changeFontSize);

function changeFontSize(e) {
  refs7.span.style.fontSize = e.target.value + "px";
};
