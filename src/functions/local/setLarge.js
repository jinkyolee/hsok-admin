const setLargeCheck = () => {
  const checkboxList = document.querySelectorAll(".check-small");
  const largeCheck = document.querySelector("#check-big");
  const checkboxes = Array.from(checkboxList);
  const allChecked = checkboxes.every((checkbox) => {
    return checkbox.checked === true;
  });

  if (allChecked) {
    largeCheck.checked = true;
  } else {
    largeCheck.checked = false;
  }
};

export default setLargeCheck;
