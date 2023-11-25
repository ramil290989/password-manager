const clipboardWrite = (password) => {
  navigator.clipboard.writeText(password);
  return;
};

export default clipboardWrite;
