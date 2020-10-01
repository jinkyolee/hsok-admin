const imageButtonClick = (nameTag) => {
  const fileInput = document.getElementsByName(`${nameTag}File`);
  fileInput[0].click();
};

export default imageButtonClick;
