import React from 'react';
import { useTranslation } from 'react-i18next';
import icons from '../../svg/icons.js';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='mt-auto bg-body-secondary' style={{display: 'block'}}>
      <div className="container">
        <div className='d-flex flex-column flex-sm-row justify-content-between mt-3'>
          <p className="fs-5 text text-body-secondary">&copy; {t('footer.developer')}</p>
          <div className='d-flex gap-3 mb-2'>
            <a href='mailto:garifullinramil290989@gmail.com'>
              <img src={icons.envelope()} alt='gMail' />
            </a>
            <a href='https://t.me/ramilgarifullin29'>
              <img src={icons.telegram()} alt='telegramIco' />
            </a>
            <a href='https://github.com/ramil290989'>
              <img src={icons.gitHub()} alt='githubIco' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
