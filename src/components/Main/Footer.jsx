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

            <p className="text">
              {
                i18n.t('footer.name')
              }
              <br/>
              {
                i18n.t('footer.copyright')
              }

            </p>

            <div className="apps">
              <a href="#" className="link"><img src="/assets/svg/appstore.svg" width="142" height='50'/></a>
              <a href="#" className="link"><img src="/assets/svg/googleplay.svg" width="142" height='50'/></a>
            </div>

            <p className="text">
              {
                i18n.t('footer.created')
              }
              <a href="http://looi.ru" className="looi"><img src="/assets/svg/looi.svg" width="30"/></a>
            </p>
          </div>

          <div className="col">
            <span className="title">
              {
                i18n.t('footer.social')
              }
            </span>

            <ul className="socialFooter">
              <li className="item">
                <a href="https://vk.com/alfafuture" target="blank" className="link">
                  <img src="/assets/svg/vk-blue.svg" height="18" width="18"/>{i18n.t('footer.vk')}
                </a>
              </li>
             <li className="item">
                <a href="http://twitter.com/Alfa_Future" target="blank" className="link"><img src="/assets/svg/twitter-blue.svg"  height="18" width="17"/>Twitter</a>
             </li>
             <li className="item">
                <a href="http://www.facebook.com/alfafuture" target="blank" className="link"><img src="/assets/svg/facebook-blue.svg"  height="18" width="11"/>Facebook</a>
             </li>
             <li className="item">
                <a href="https://plus.google.com/u/0/104083107251110907167/posts" target="blank" className="link"><img src="/assets/svg/google-blue.svg" width="17" height="18" />Google+</a>
             </li>
             <li className="item">
                <a href="http://www.youtube.com/user/alfafuturepeople" target="blank" className="link"><img src="/assets/svg/youtube-blue.svg" width="14" height="18" />Youtube</a>
             </li>
             <li className="item">
                <a href="http://www.odnoklassniki.ru/alfafuture" target="blank" className="link"><img src="/assets/svg/ok-blue.svg" width="14" height="18" />{i18n.t('footer.ok')}</a>
             </li>
             <li className="item">
                <a href="http://instagram.com/alfafuturepeople" target="blank" className="link"><img src="/assets/svg/instagram-blue.svg" width="14" height="18" />Instagram</a>
             </li>
            </ul>

          </div>

          <div className="col">
            <span className="title">
              {
                i18n.t('footer.subscribe')
              }
            </span>

            <p className="text">
              {
                i18n.t('footer.enterEmail')
              }
            </p>

            <form className="subscribe">
              <input type="text" placeholder={i18n.t('footer.email')} className='input'/>
              <input type="submit" className='btn'/>
            </form>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
