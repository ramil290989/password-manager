import icons from '../../svg/icons.js';

const passwordHide = (password) => '●'.repeat(password.length);

const hideBtnClick = ({ id, password, setIsDisabled }) => {
  const passwordEl = document.getElementById(`password-span-${id}`);
  const viewBtnIco = document.getElementById(`view-btn-ico-${id}`);
  const isHide = passwordEl.getAttribute('data-hide');
  switch (isHide) {
    case 'true':
      passwordEl.setAttribute('data-hide', 'false');
      passwordEl.textContent = password;
      viewBtnIco.setAttribute('src', icons.hide());
      setIsDisabled();
      break;
    case 'false':
      passwordEl.setAttribute('data-hide', 'true');
      passwordEl.textContent = passwordHide(password);
      viewBtnIco.setAttribute('src', icons.view());
      setIsDisabled('disabled');
      break;
    default:
      break;
  }
};

export { passwordHide, hideBtnClick };
