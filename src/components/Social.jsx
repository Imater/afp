import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';

class Social extends Component {
  render() {
    return (
      <ul className="social">
        <li>
          <a href="#">
            <img src="/assets/svg/vk.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/assets/svg/facebook.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/assets/svg/youtube.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/assets/svg/instagram.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/assets/svg/twitter.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/assets/svg/google.svg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/assets/svg/ok.svg" />
          </a>
        </li>
      </ul>
    );
  }
}

export default Social;
