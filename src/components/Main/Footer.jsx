import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../Social';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="left-col padding-left-50">
            <div className="row position-relative">
              <div className="copyright">
                ® 2015 Alfa Future People.<br />Все права защищены.
              </div>
              <Social />
              <a href="#" className="appstore">
                <img src="/assets/svg/appstore.svg" />
              </a>
              <a href="#" className="appstore">
                <img src="/assets/svg/appstore.svg" />
              </a>

            </div>
          </div>
          <div className="right-col padding-right-40">
            <div className="row">
              <div className="left-col">
                <a href="#" className="googleplay">
                  <img src="/assets/svg/googleplay.svg" />
                </a><br />
                <a href="#" className="created-by">Сделано в
                  <img src="/assets/svg/looi.svg" />
                </a>
              </div>
              <div className="right-col">
                <form action="#">
                  <input type="text" placeholder="Как вас зовут?" />
                  <input type="text" placeholder="Адрес электронной почты" />
                  <input type="text" className="half-width" placeholder="Телефон" />
                  <input type="submit" value="Подписаться" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
