const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", changeFontSize);

function changeFontSize(e) {
  refs.span.style.fontSize = e.target.value + "px";
};
