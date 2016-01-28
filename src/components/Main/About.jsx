import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../Social';
import $ from 'jquery';
import classNames from 'classnames';
import { tween } from 'react-imation';
import History from './History.jsx';
import isMobile from '../is-mobile.js';

class About extends Component {
  state = {
    isMobile: isMobile(),
    silence: true
  };

  componentDidMount () {
    var video = this.refs.video;
    this.isMobile = isMobile();
    if(!this.isMobile) {
      this.playSilence()
    }
    video.addEventListener('ended', () => {
      if(!this.state.silence) {
        this.stopPlay();
      } else {
        this.stopPlay();
      }
    });
  }

  stopPlay() {
    $('html').removeClass('hide-bg').removeClass('play');
    this.refs.video.currentTime = 0;;
    this.refs.video.load();
  }

  playSilence () {
    if(this.refs.video.paused) {
      this.refs.video.play();
      this.refs.video.muted = true;
      this.setState({
        silence: true
      });
      $('html').addClass('hide-bg');
    } else {
      this.refs.video.pause();
      this.stopPlay();
    }
  }

  play () {
    if(this.refs.video.paused || this.state.silence) {
      this.refs.video.play();
      this.refs.video.muted = false;
      this.setState({
        silence: false
      });
      $('html').addClass('hide-bg');
      $('html').addClass('play');
    } else {
      this.refs.video.pause();
      this.stopPlay();
    }
  }

  changeLanguage() {
  }

  render() {
    const { scrollY, screenHeight, screenWidth } = this.props;
    const screenHeightCorrected = screenHeight < 480 ? 480 : screenHeight;
    const blur = this.state.isMobile ? 0 : parseInt(tween(scrollY, [[0, 0], [screenHeight*0.1, 0], [screenHeightCorrected*0.8, 8]])*10, 10)/10;
    const marginLogo = 0; // tween(scrollY, [[0, 0], [screenHeight/6, -screenHeight]]);
    const marginTitle = 0; //  tween(scrollY, [[0, 0], [screenHeight/4, 0], [screenHeight*0.8, -screenHeight]]);
    const marginDate = 0; //  tween(scrollY, [[0, 0], [screenHeight/2, 0], [screenHeight*0.8, -screenHeight/2]]);
    const historyMargin = 0; //  tween(scrollY, [[0, screenWidth], [screenHeight*0.5, 0]]);
    const historyOpacity = this.state.isMobile ? 1 : tween(scrollY, [[0, 0], [screenHeightCorrected*0.8, 0.2], [screenHeightCorrected*1, 1]]);
    const footerOpacity = this.state.isMobile ? 1 :tween(scrollY, [[0, 1], [screenHeightCorrected*2, 1], [screenHeightCorrected*2.1, 0]]);
    const isHide =scrollY > 2 * screenHeightCorrected;
    return (
      <div>
        <div className="page main-page set-height" id="about">
          <div className={classNames('fixed-background', {
            hide: isHide
          })}
          >
            <div className={classNames('fixed-background-img', {
              'blur': scrollY > screenHeightCorrected / 10
            })} style={{
              WebkitFilter: `blur(${blur}px)`,
              MozFilter: `blur(${blur}px)`,
              OFilter: `blur(${blur}px)`,
              MsFilter: `blur(${blur}px)`,
              filter: `blur(${blur}px)`
            }}></div>
          </div>
          <div className="right-col text-right padding-right-40" hide-on-video style={{
            position: 'absolute',
            right: 0
          }}>
            <a href='javascript:void(0)' className="language" onClick={this.props.changeLanguage.bind(this, this.props.language==='eng' ? 'ru' : 'eng')}>
              {this.props.language==='eng' ? 'en' : 'ru'}
            </a>
          </div>
          <div className="row logoBlock">
            <div className="fullscreen-bg">
              <video ref="video" className="bg-video">
                <source src="assets/video/afp.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="left-col padding-left-50 hide-on-video float-left" style={{
            }}>
              <a href="http://alfabank.ru"
                target="_blank"
                className={classNames('logo', this.props.language)}></a>
            </div>
          </div>
          <div className="row padding-left-50 hide-on-video" style={{
            }}>
            <h1>{i18n.t('about.mainFestival')}<br />{i18n.t('about.musicAndTechnology')}</h1>
            <div className="festival-date" style={{
            }}>{i18n.t('about.festivalDate')}</div>
          </div>

        </div>
        <History language={this.props.language} changeLanguage={this.props.changeLanguage} margin={0} opacity={historyOpacity}/>
        <div className={classNames({
          hide: isHide
        })}>
          <div className="row how-was-row" style={{

          }}>
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
          <div className="row social-row" style={{
            opacity: footerOpacity
          }}>
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
      </div>
    );
  }
}

export default About;
