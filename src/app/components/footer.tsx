import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();


  return (
    <footer className='flex flex-row items-center justify-between p-4 bg-app-white'>
      <p>{t('title')}</p>

      
    </footer>
  );
};

export default Footer;
