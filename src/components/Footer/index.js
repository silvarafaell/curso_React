/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.futebolnews.net/">
        <img src="https://www.futebolnews.net/wp-content/uploads/2020/03/logo-futebul-news.png" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a>
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
