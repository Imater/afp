import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../Social';

if (process.env.BROWSER) {
  require('./Footer.less');
}


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="inner">
          <div className="col">

            <p className="text">© Фестиваль Alfa Future People. <br/>2014 - 2016, Все права защищены</p>

            <div className="apps">
              <a href="#" className="link"><img src="assets/svg/appstore.svg" width="142"/></a>
              <a href="#" className="link"><img src="assets/svg/googleplay.svg" width="142"/></a>
            </div>

            <p className="text">
              Сделано в <a href="http://looi.ru" className="looi"><img src="assets/svg/looi.svg" width="30"/></a>
            </p>
          </div>

          <div className="col">
            <span className="title">Соцсети</span>

            <ul className="socialFooter">
              <li className="item">
                <a href="#" target="blank" className="link"><img src="assets/svg/vk-blue.svg" width="18"/>Вконтакте</a>
              </li>
             <li className="item">
                <a href="#" target="blank" className="link"><img src="assets/svg/twitter-blue.svg" width="17"/>Twitter</a>
             </li>
             <li className="item">
                <a href="#" target="blank" className="link"><img src="assets/svg/facebook-blue.svg" width="11"/>Facebook</a>
             </li>
             <li className="item">
                <a href="#" target="blank" className="link"><img src="assets/svg/google-blue.svg" width="17"/>Google+</a>
             </li>
             <li className="item">
                <a href="#" target="blank" className="link"><img src="assets/svg/youtube-blue.svg" width="14"/>Youtube</a>
             </li>
             <li className="item">
                <a href="#" target="blank" className="link"><img src="assets/svg/ok-blue.svg" width="14"/>Одноклассники</a>
             </li>
             <li className="item">
                <a href="#" target="blank" className="link"><img src="assets/svg/instagram-blue.svg" width="14"/>Instagram</a>
             </li>
            </ul>

          </div>

          <div className="col">
            <span className="title">Подписка</span>

            <p className="text">Оставьте ваш e-mail, чтобы получать наши новости</p>

            <form className="subscribe">
              <input type="text" placeholder='Ваш e-mail' className='input'/>
              <input type="submit" className='btn'/>
            </form>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
