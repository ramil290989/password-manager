import icons from '../../svg/icons.js';

const passwordHide = (password) => '●'.repeat(password.length);

const hideBtnClick = ({ id, password }) => {
  const passwordEl = document.getElementById(`password-span-${id}`);
  const viewBtnIco = document.getElementById(`view-btn-ico-${id}`);
  const copyBtn = document.getElementById(`copyBtn-${id}`);
  const isHide = passwordEl.getAttribute('data-hide');
  switch (isHide) {
    case 'true':
      passwordEl.setAttribute('data-hide', 'false');
      passwordEl.textContent = password;
      viewBtnIco.setAttribute('src', icons.hide());
      copyBtn.removeAttribute('disabled');
      break;
    case 'false':
      passwordEl.setAttribute('data-hide', 'true');
      passwordEl.textContent = passwordHide(password);
      viewBtnIco.setAttribute('src', icons.view());
      copyBtn.setAttribute('disabled', '');
      break;
    default:
      break;
  }
};

export { passwordHide, hideBtnClick };
