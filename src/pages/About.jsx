import React, {Component} from 'react';
import {Link} from 'react-router';
import i18n from 'i18next-client';
import TopPageMenu from '../components/TopPageMenu';
import {aboutItems, aboutMain} from '../components/settings';
import Map from '../components/Map';
import cx from 'classnames';
import Footer from '../components/Main/Footer';
import Share from '../components/Share';
import Scrollable from '../components/Scrollable';

if (process.env.BROWSER) {
  require('./About.less');
}

class About extends Component {
  displayName = 'About';
  static propTypes = {
    children: React.PropTypes.element,
    language: React.PropTypes.string
  };
  state = {
    tabGetIndex: 0,
    tabLiveIndex: 0
  };
  render() {
    const {language} = this.props;
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const paddingLeft = (screenWidth - 720 - 250 - 40) / 2;
    return (
      <div className="About">
        <TopPageMenu
          fixed
          items={aboutItems}
          language={language}
        />
        {this.props.children} {''}
        <div className="About">
          <article
            className="screen aboutTop" style={{
              backgroundImage: 'url(\'/assets/img/AFP-170.jpg\')'
            }}
          >
            <Share
              params={{
                // (typeof window === 'undefined') ? '' : window.location.href,
                url: 'http://alfafuture.com',
                title: aboutMain[language].title,
                descr: aboutMain[language].text,
                imgUrl: 'http://afp.ru/assets/img/share.jpg'
              }}
            />
            <div className="screen-inner aboutTop-inner">
              <h2
                className="aboutTop-heading"
                dangerouslySetInnerHTML={{__html: i18n.t('about.title')}}
              ></h2>

              <p
                className="screen-text"
                dangerouslySetInnerHTML={{__html: i18n.t('about.titleText')}}
              ></p>
            </div>
          </article>

          <div id="map">
            <Map
              center={
                {lat: 56.405924, lng: 43.750291}
              }
              markers={[
                {
                  position: {
                    lat: 56.405924, lng: 43.750291
                  },
                  defaultAnimation: 2,
                  title: 'Нижегородская обл.,Балахнинский район, пос.Большое Козино,улица Луговая',
                  label: 'Afp',
                  clickable: true
                }
              ]}
            />
            <article className="screen aboutWay">

              <div className="screen-inner">
                <h3 className="screen-title">{aboutMain.howToGetThere[language === 'eng' ? 'title_eng' : 'title']}</h3>
                <ul className="tabs">
                  {
                    aboutMain.howToGetThereList.map((item, key) => {
                      return (
                        <li
                          className={cx('tabs-item', {active: key === this.state.tabGetIndex})}
                          key={key}
                          onClick={() => {
                            this.setState({
                              tabGetIndex: key
                            });
                          }}
                        >{item[language === 'eng' ? 'title_eng' : 'title']}</li>
                      );
                    })
                  }
                </ul>
                <div>
                  {
                    aboutMain.howToGetThereList.find(
                      (item, key) => key === this.state.tabGetIndex
                    )[language === 'eng' ? 'text_eng' : 'text']
                  }
                </div>
              </div>
            </article>
          </div>
          <article className="screen aboutWay" id="live">
            <div className="screen-inner">
              <h3 className="screen-title">{aboutMain.whereToLive[language === 'eng' ? 'title_eng' : 'title']}</h3>
              <ul className="tabs">
                {
                  aboutMain.whereToLiveList.map((item, key) => {
                    return (
                      <li className={cx('tabs-item', {active: key === this.state.tabLiveIndex})}
                        key={key}
                        onClick={() => {
                          this.setState({
                            tabLiveIndex: key
                          });
                        }}
                      >{item[language === 'eng' ? 'title_eng' : 'title']}</li>
                    );
                  })
                }
              </ul>
              <div>
                {
                  aboutMain.whereToLiveList.find(
                    (item, key) => key === this.state.tabLiveIndex
                  )[language === 'eng' ? 'text_eng' : 'text']
                }
              </div>

              <Link to="/about/main/rules">
                <span className="aboutWay-rules" dangerouslySetInnerHTML={{__html: i18n.t('about.rulesLink')}}></span>
              </Link>
            </div>
          </article>
          <article
            className="screen screen--banner aboutVip"
            style={{
              backgroundImage: 'url(\'/assets/img/about/vip.jpg\')'
            }}
          >
            <div className="screen-inner">
              <h3 className="screen-title">{aboutMain.vipZone[language === 'eng' ? 'title_eng' : 'title']}</h3>

              <div
                className="screen-text aboutVip-text"
                dangerouslySetInnerHTML={{__html: aboutMain.vipZone[language === 'eng' ? 'text_eng' : 'text']}}
              ></div>
              <Link to="/media" className="aboutVip-btn">
                <img src="/assets/img/about/icon-photo.svg" width="16" height="13"/>
                <span className="white">{aboutMain.vipZone[language === 'eng' ? 'button_eng' : 'button']}</span>
              </Link>
            </div>
          </article>
          <article className="screen aboutInfo">
            <div className="screen-inner">
                {
                  aboutMain.info.map((info, index) => {
                    return (
                      <div className="aboutInfo-block" key={index}>
                        <h2 className="screen-title">
                          {info[language === 'eng' ? 'title_eng' : 'title']}
                          <img className="aboutInfo-titleIcon" src={`/assets/img/about/${info.icon}`} height="30" width="30" />
                        </h2>
                        <div className="screen-text">
                          {info[language === 'eng' ? 'text_eng' : 'text']}
                        </div>
                      </div>
                    );
                  })
                }
            </div>
          </article>
          <article
            className="screen screen--banner aboutFood"
            id="food"
            style={{
              backgroundImage: 'url(\'/assets/img/about/foodcort.jpg\')'
            }}
          >
            <div className="screen-inner">
              <h3 className="screen-title">{aboutMain.foodCourt[language === 'eng' ? 'title_eng' : 'title']}</h3>

              <div className="screen-text aboutFood-text">
                {aboutMain.foodCourt[language === 'eng' ? 'text_eng' : 'text']}
              </div>
              <div className="screen-text aboutFood-benefits">
                <div className="benefitFood aboutFood-benefit aboutFood-benefit--2">
                  <img className="benefitFood-icon" src="/assets/img/about/icon-burger.svg" width="70" height="76"/>

                  <div className="benefitFood-desc">
                    {aboutMain.foodCourt.items[1][language === 'eng' ? 'title_eng' : 'title']}
                  </div>
                  <span className="benefitFood-count">{aboutMain.foodCourt.items[1].num}</span>

                  <div
                    className="benefitFood-countDesc"
                    dangerouslySetInnerHTML={
                      {__html: aboutMain.foodCourt.items[1][language === 'eng' ? 'desc_eng' : 'desc']}
                    }
                  ></div>
                </div>

              </div>
              <div className="screen-text aboutFood-text aboutFood-text--bottom">
                {aboutMain.foodCourt[language === 'eng' ? 'text_bottom_eng' : 'text_bottom']}
              </div>
            </div>
          </article>
          <article className="screen aboutGood" id="advises">
            <div className="aboutGood-inner">
              <h2 className="screen-title">{aboutMain.goods[language === 'eng' ? 'title_eng' : 'title']}</h2>
              <ul className="aboutGood-arrows hide">
                <li className="aboutGood-arrow disable"><img src="/assets/img/about/icon-arrow-back.svg" width=""/></li>
                <li className="aboutGood-arrow"><img src="/assets/img/about/icon-arrow-back.svg" width=""/></li>
              </ul>
              <Scrollable x={true} y={false} navigator={true} paddingLeft={paddingLeft}>
                <div className="aboutGood-track">
                  {
                    aboutMain.goodsList.map((good, index) => {
                      return (
                        <div className="advice aboutGood-advice" key={index}>
                          <img className="advice-img" src={`/assets/img/about/${good.icon}`}/>
                          <p className="advice-text screen-text">{good[language === 'eng' ? 'text_eng' : 'text']}</p>
                        </div>
                      );
                    })
                  }
                </div>
              </Scrollable>
            </div>
          </article>
          <div id="faq"></div>
          <div id="rules"></div>
          <div
            className="aboutCategory"
            style={{
            }}
          >
            {
              /*
              <Link className="aboutCategory-item aboutCategory-item--1" to="/store">
                <img className="aboutCategory-img" src="/assets/img/about/icon-market.svg" width="66"/>
                <span className="aboutCategory-label">{i18n.t('about.store')}</span>
              </Link>
              */
            }
            {

              language === 'ru' ? (
                <Link className="aboutCategory-item aboutCategory-item--2" to="/about/main/rules">
                  <img className="aboutCategory-img" src="/assets/img/about/icon-book--white.svg" width="76"/>
                  <span className="aboutCategory-label">{i18n.t('about.rules')}</span>
                </Link>
              ) : <div></div>

            }
            {
              language === 'ru' ? (
                <Link className="aboutCategory-item aboutCategory-item--3" to="/faq">
                  <img className="aboutCategory-img" src="/assets/img/about/icon-messages.svg" width="73"/>
                  <span className="aboutCategory-label">{'FAQ'}</span>
                </Link>
              ) : <div></div>
            }
          </div>
        </div>
        <Footer noborder />
      </div>
    );
  }
}

export default About;
