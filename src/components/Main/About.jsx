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
import Mobile from '../Mobile';

class About extends Component {
  state = {
    isMobile: typeof window === 'undefined' ? true : isMobile(),
    silence: true
  };

  componentDidMount () {
    this.isMobile = isMobile();
    setTimeout(()=>{
      if(!this.refs.video) {
        return;
      }
      var video = this.refs.video;
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
    }, 0);
  }

  stopPlay() {
    $('html').removeClass('hide-bg').removeClass('play');
    this.refs.video.currentTime = 0;
    this.refs.video.load();
  }

  playSilence () {
    if(!this.refs.video || this.isMobile) {
      return;
    }
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
    if(!this.refs.video) {
      return;
    }
    if(this.refs.video.paused || this.state.silence) {
      this.refs.video.currentTime = 0;
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
    const historyScale = 1; //this.state.isMobile ? 1 : tween(scrollY, [[0, 0.85], [screenHeightCorrected*0.4, 0.85], [screenHeightCorrected*0.6, 1.05], [screenHeightCorrected*0.8, 1]]);
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
            <div className="phone-block hide-on-video">
              <div
                dangerouslySetInnerHTML={{__html: i18n.t('ticket.phone')}}
              ></div>
              <div>+7 (495) 909 98 93</div>
            </div>
          </div>
          <div className="row logoBlock">
            <div className="fullscreen-bg">
              <Mobile mobile={false} >
                <video ref="video" className="bg-video">
                  <source src="assets/video/afp.mp4" type="video/mp4" />
                  <source src="assets/video/afp.ogg" type="video/ogg" />
                  <source src="assets/video/afp.webm" type="video/webm" />
                </video>
              </Mobile>
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
          <Mobile>
            <div className="buy-ticket-mobile">
              <Link className="ticket" to='/ticket'>{i18n.t('menu.buyTicket')}</Link>
              <a target="_blank" href='http://viptravelnn.wikiplanet.ru/tour/komfortniy_tur_na_mejdunarodniy_festival_elektronnoy_muziki_i_tehnologiy_alfa_future_people_2016?month_at=07.2016&month_to=07.2016&decodeNums=2&chosenDates=' className="buy-tour tour">{i18n.t('menu.buyTour')}</a>
            </div>
            <div className="plus18">18+</div>
          </Mobile>

        </div>
        <History language={this.props.language} changeLanguage={this.props.changeLanguage} margin={0} scale={historyScale} opacity={historyOpacity}/>
        <div className={classNames({
          hide: isHide
        })}>
          <Mobile mobile={false}>
            <div className="row how-was-row" style={{

            }}>
              <div className="left-col padding-left-50">
                <div className="how-it-was" onClick={this.play.bind(this)}>
                  Alfa Future People 2015<br />{i18n.t('about.howItWas')}
                </div>
              </div>
              <div className="right-col padding-right-40 text-right hide-on-video">
                <a href="http://premia.event.ru/nominees2016/alfa-future-people-2015/" target="_blank" className="best"></a>
                <a href="http://www.eubeafestival.com/events/alfa-future-people/" target="_blank" className="eubea"></a>
                <a href="http://award.kudago.com/the-nomination/" target="_blank" className="kudago"></a>
                <a href="http://premia.event.ru/nominees/2014/festival-muzyiki-i-tehnologiy-alfa-future-people/" target="_blank" className="best"></a>
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
          </Mobile>
        </div>
      </div>
    );
  }
}

export default About;
