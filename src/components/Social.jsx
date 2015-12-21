import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';

class Social extends Component {
  render() {
    return (
      <ul className="social">
        <li>
          <a href="https://vk.com/alfafuture" target="blank">
            <img src="/assets/svg/vk.svg" />
          </a>
        </li>
        <li>
          <a href="http://www.facebook.com/alfafuture" target="blank">
            <img src="/assets/svg/facebook.svg" />
          </a>
        </li>
        <li>
          <a href="http://www.youtube.com/user/alfafuturepeople" target="blank">
            <img src="/assets/svg/youtube.svg" />
          </a>
        </li>
        <li>
          <a href="http://instagram.com/alfafuturepeople" target="blank">
            <img src="/assets/svg/instagram.svg" />
          </a>
        </li>
        <li>
          <a href="http://twitter.com/Alfa_Future" target="blank">
            <img src="/assets/svg/twitter.svg" />
          </a>
        </li>
        <li>
          <a href="https://plus.google.com/u/0/104083107251110907167/posts" target="blank">
            <img src="/assets/svg/google.svg" />
          </a>
        </li>
        <li>
          <a href="http://www.odnoklassniki.ru/alfafuture" target="blank">
            <img src="/assets/svg/ok.svg" />
          </a>
        </li>
      </ul>
    );
  }
}

export default Social;
