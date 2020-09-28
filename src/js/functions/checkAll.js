const checkAllBoxes = () => {
  const checkboxes = document.querySelectorAll(".check-small");
  const largeCheck = document.querySelector("#check-big");
  let checkState = false;

  if (largeCheck.checked) {
    checkState = true;
  } else {
    checkState = false;
  }

  for (let checkbox of checkboxes) {
    checkbox.checked = checkState;
  }
};

export default checkAllBoxes;
