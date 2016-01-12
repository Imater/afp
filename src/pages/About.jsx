import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import TopPageMenu from '../components/TopPageMenu';
import { aboutItems, aboutMain } from '../components/settings';
import Map from '../components/Map';
import cx from 'classnames'
import Footer from '../components/Main/Footer';
import Share from '../components/Share';
if (process.env.BROWSER) {
  require('./About.less');
}



class About extends Component {
  state = {
    tabGetIndex: 0,
    tabLiveIndex: 1,
  }
  render() {
    const { language } = this.props;
    return (
      <div className="About" id="lineup">
        <TopPageMenu items={aboutItems} language={language} fixed={true}/>
        {this.props.children} {''}
        <div className="About">
          <div className="ticket-back-overlay" style={{
            opacity: 0
          }}></div>
        <article className="screen aboutTop" style={{
          backgroundImage: "url('/assets/img/about/aboutTop-cover.jpg')"
        }}>
        <Share params={{
          url: 'http://alfafuture.com', //(typeof window === 'undefined') ? '' : window.location.href,
          title: aboutMain[language].title,
          descr: aboutMain[language].text,
          img_url: 'http://alfafuture.com/upload/content/totspot.jpg'
        }} />
        <div className="screen-inner aboutTop-inner">
          <h2 className="aboutTop-heading" dangerouslySetInnerHTML={{__html: i18n.t('about.title')}}></h2>

          <p className="screen-text" dangerouslySetInnerHTML={{__html: i18n.t('about.titleText')}}>
          </p>
        </div>
      </article>

      <div id='map'></div>
      <Map center={
        {lat: 56.413617, lng: 43.731237}
      } markers={[
        {
          position: {
            lat: 56.413617, lng: 43.731237
          },
          defaultAnimation: 2,
          title: 'Нижегородская обл.,Балахнинский район, пос.Большое Козино,улица Луговая',
          label: 'Afp',
          clickable: true
        }
      ]}/>

    <article className="screen aboutWay">
      <div className="screen-inner">
        <h3 className="screen-title">{aboutMain.howToGetThere[language === 'eng' ? 'title_eng' : 'title']}</h3>
        <ul className="tabs">
          {
            aboutMain.howToGetThereList.map((item, key) => {
              return (
                <li className={cx("tabs-item", {"active": key === this.state.tabGetIndex})} key={key} onClick={() => {
                  this.setState({
                    tabGetIndex: key
                  })
                }}>{item[language === 'eng' ? 'title_eng' : 'title']}</li>
              );
            })
          }
        </ul>
        <div>
          {
            aboutMain.howToGetThereList.find((item, key) => key === this.state.tabGetIndex)[language === 'eng' ? 'text_eng' : 'text']
          }
        </div>
      </div>
    </article>
    <div id='live'></div>
    <article className="screen aboutWay">
      <div className="screen-inner">
        <h3 className="screen-title">{aboutMain.whereToLive[language === 'eng' ? 'title_eng' : 'title']}</h3>
        <ul className="tabs">
          {
            aboutMain.whereToLiveList.map((item, key) => {
              return (
                <li className={cx("tabs-item", {"active": key === this.state.tabLiveIndex})} key={key} onClick={() => {
                  this.setState({
                    tabLiveIndex: key
                  })
                }}>{item[language === 'eng' ? 'title_eng' : 'title']}</li>
              );
            })
          }
        </ul>
        <div>
          {
            aboutMain.whereToLiveList.find((item, key) => key === this.state.tabLiveIndex)[language === 'eng' ? 'text_eng' : 'text']
          }
        </div>

          <Link to='/about/main/rules'>
            <span className="aboutWay-rules" dangerouslySetInnerHTML={{__html: i18n.t('about.rulesLink')}}></span>
          </Link>
      </div>
    </article>
    <article className="screen screen--banner aboutVip" style={{
      backgroundImage: "url('/assets/img/about/vip.jpg')"
    }}>
    <div className="screen-inner">
      <h3 className="screen-title">{aboutMain.vipZone[language === 'eng' ? 'title_eng' : 'title']}</h3>

      <div className="screen-text aboutVip-text" dangerouslySetInnerHTML={{__html: aboutMain.vipZone[language === 'eng' ? 'text_eng' : 'text']}}></div>
      <a href="#" className="aboutVip-btn">
        <img src="/assets/img/about/icon-photo.svg" width="16"/>
        <span>{aboutMain.vipZone[language === 'eng' ? 'button_eng' : 'button']}</span>
      </a>
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
                  <img className="aboutInfo-titleIcon" src={`/assets/img/about/${info.icon}`} />
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
  <div id='food'></div>
  <article className="screen screen--banner aboutFood" style={{
    backgroundImage: "url('/assets/img/about/foodcort.jpg')"
  }}>
  <div className="screen-inner">
    <h3 className="screen-title">{aboutMain.foodCourt[language === 'eng' ? 'title_eng' : 'title']}</h3>

    <div className="screen-text aboutFood-text">{aboutMain.foodCourt[language === 'eng' ? 'text_eng' : 'text']}</div>
    <div className="screen-text aboutFood-benefits">
      <div className="benefitFood aboutFood-benefit aboutFood-benefit--1">
        <img src="/assets/img/about/icon-beer.svg" width="53" className="benefitFood-icon"/>

        <div className="benefitFood-desc">{aboutMain.foodCourt.items[0][language === 'eng' ? 'title_eng' : 'title']}</div>
        <span className="benefitFood-count">{aboutMain.foodCourt.items[0].num}</span>

        <div className="benefitFood-countDesc" dangerouslySetInnerHTML={{__html: aboutMain.foodCourt.items[0][language === 'eng' ? 'desc_eng' : 'desc']}}></div>
      </div>
      <div className="benefitFood aboutFood-benefit aboutFood-benefit--2">
        <img src="/assets/img/about/icon-burger.svg" width="70" className="benefitFood-icon"/>

        <div className="benefitFood-desc">{aboutMain.foodCourt.items[1][language === 'eng' ? 'title_eng' : 'title']}</div>
        <span className="benefitFood-count">{aboutMain.foodCourt.items[1].num}</span>

        <div className="benefitFood-countDesc" dangerouslySetInnerHTML={{__html: aboutMain.foodCourt.items[1][language === 'eng' ? 'desc_eng' : 'desc']}}></div>
      </div>

    </div>
    <div className="screen-text aboutFood-text aboutFood-text--bottom">{aboutMain.foodCourt[language === 'eng' ? 'text_bottom_eng' : 'text_bottom']}</div>
  </div>
</article>
<div id='advises'></div>
<article className="screen aboutGood">
  <div className="screen-inner aboutGood-inner">
    <h2 className="screen-title">{aboutMain.goods[language === 'eng' ? 'title_eng' : 'title']}</h2>
    <ul className="aboutGood-arrows hide">
      <li className="aboutGood-arrow disable"><img src="/assets/img/about/icon-arrow-back.svg" width=""/></li>
      <li className="aboutGood-arrow"><img src="/assets/img/about/icon-arrow-back.svg" width=""/></li>
    </ul>
    <div className="aboutGood-track" style={{left: 0}}>
      {
        aboutMain.goodsList.map((good, index) => {
          return (
            <div className="advice aboutGood-advice" key={index}>
              <img src={`/assets/img/about/${good.icon}`} className="advice-img"/>
              <p className="advice-text screen-text">{good[language === 'eng' ? 'text_eng' : 'text']}</p>
            </div>
          );
        })
      }
    </div>
  </div>
</article>
<div id='faq'></div>
<div id='rules'></div>
<div className="aboutCategory">
  <Link to='/store' className="aboutCategory-item aboutCategory-item--1">
    <img src="/assets/img/about/icon-market.svg" className='aboutCategory-img' width="66"/>
    <span className="aboutCategory-label">{i18n.t('about.store')}</span>
  </Link>
  <Link to='/about/main/rules' className="aboutCategory-item aboutCategory-item--2">
      <img src="/assets/img/about/icon-book--white.svg" className='aboutCategory-img' width="76"/>
      <span className="aboutCategory-label">{i18n.t('about.rules')}</span>
  </Link>
  <Link to='/faq' className="aboutCategory-item aboutCategory-item--3">
      <img src="/assets/img/about/icon-messages.svg" className='aboutCategory-img' width="66"/>
      <span className="aboutCategory-label">FAQ</span>
  </Link>

</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
