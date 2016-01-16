import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../Social';
import $ from 'jquery';
import classNames from 'classnames';
import { tween } from 'react-imation';
import History from './History.jsx';

class About extends Component {
  componentDidMount () {
    var video = this.refs.video;
    video.addEventListener('ended', () => {
      this.stopPlay();
    });
  }

  stopPlay() {
    $('.main-page').removeClass('hide-bg');
    this.refs.video.currentTime = 0;;
    this.refs.video.load();
  }

  play () {
    if(this.refs.video.paused) {
      this.refs.video.play();
      $('.main-page').addClass('hide-bg');
    } else {
      this.refs.video.pause();
      this.stopPlay();
    }
  }

  changeLanguage() {
  }

  render() {
    const { scrollY, screenHeight, screenWidth } = this.props;
    const blur = tween(scrollY, [[0, 0], [screenHeight*0.5, 0], [screenHeight*0.8, 5]]);
    const marginLeftLogo = tween(scrollY, [[0, 0], [screenHeight*0.8, -screenWidth]]);
    const marginLeftTitle = tween(scrollY, [[0, 0], [screenHeight/5, 0], [screenHeight*0.8, -screenWidth]]);
    const marginLeftDate = tween(scrollY, [[0, 0], [screenHeight/2, 0], [screenHeight*0.8, -screenWidth/2]]);
    const historyMargin = tween(scrollY, [[0, screenWidth], [screenHeight*0.8, 0]]);
    return (
      <div className="page main-page set-height" id="about">
        <div className="fixed-background">
          <div className={classNames('fixed-background-img', {
            'blur': scrollY > screenHeight / 10
          })} style={{
            WebkitFilter: `blur(${blur}px)`,
            MozFilter: `blur(${blur}px)`,
            OFilter: `blur(${blur}px)`,
            MsFilter: `blur(${blur}px)`,
            filter: `blur(${blur}px)`
          }}></div>
        </div>
        <div className="row logoBlock">
          <div className="fullscreen-bg">
            <video ref="video" className="bg-video">
              <source src="assets/video/afp.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="left-col padding-left-50 hide-on-video" style={{
            marginLeft: marginLeftLogo
          }}>
            <a href="http://alfabank.ru"
              target="_blank"
              className={classNames('logo', this.props.language)}></a>
          </div>
          <div className="right-col text-right padding-right-40" hide-on-video>
            <a href='javascript:void(0)' className="language" onClick={this.props.changeLanguage.bind(this, this.props.language==='eng' ? 'ru' : 'eng')}>
              {this.props.language==='eng' ? 'en' : 'ru'}
            </a>
          </div>
        </div>
        <div className="row padding-left-50 hide-on-video">
          <h1 style={{
            marginLeft: marginLeftTitle
          }}>{i18n.t('about.mainFestival')} <br />{i18n.t('about.musicAndTechnology')}</h1>
          <div className="festival-date" style={{
            marginLeft: marginLeftDate
          }}>{i18n.t('about.festivalDate')}</div>
        </div>

        <History language={this.props.language} changeLanguage={this.props.changeLanguage} margin={historyMargin}/>


        <div className="row how-was-row">
          <div className="left-col padding-left-50">
            <div className="how-it-was" onClick={this.play.bind(this)}>
              Alfa Future People 2015<br />{i18n.t('about.howItWas')}
            </div>
          </div>
          <div className="right-col padding-right-40 text-right hide-on-video">
            <a href="http://www.eubeafestival.com/" target="_blank" className="eubea"></a>
            <a href="http://kudago.com/" target="_blank" className="kudago"></a>
          </div>
        </div>
        <div className="row social-row">
          <div className="left-col padding-left-50 text-left">
            <div className="festival-location">
              <Link to='/about/map'>{i18n.t('about.novgorod')}</Link>
            </div>
            <div className="plus18">18+</div>
          </div>
          <div className="right-col padding-right-40 text-right">
            <Social />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
