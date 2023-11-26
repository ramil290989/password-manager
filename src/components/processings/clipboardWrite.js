const clipboardWrite = (password, setShow) => {
  navigator.clipboard.writeText(password);
  setShow(true);
  setTimeout(() => { setShow(false)}, 1000);
};

export default clipboardWrite;
