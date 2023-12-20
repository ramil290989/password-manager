const clipboardWrite = (id, setOverlayShow) => {
  const range = document.createRange();
  range.selectNode(document.querySelector(`#password-span-${id}`));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  setOverlayShow(true);
  setTimeout(() => { setOverlayShow(false); }, 1000);
};

export default clipboardWrite;
