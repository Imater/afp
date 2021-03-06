import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import { noun } from '../../utils/noun.js';


class Counter extends Component {
  state = {
    time: {
      days: 0,
      hours: 0,
      minutes: 0
    }
  };

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 30000);
    this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick () {
    var target = new Date('Jul 22 2016 15:00:00 +0300');
    var time = new Date(Date.now());
    var t = target - (new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    this.setState({time: {
      days: days,
      hours: hours,
      minutes: minutes
    }});
  }

  render() {
    return (
      <div id="counter">
        <div className="before-festival">
          <div className='bg-overlay'></div>
          <div className="row">
            <div className="left-col padding-left-50">
              <div className="before-festival-title">
                {i18n.t('about.beforeFestivalTitle')}
              </div>
            </div>
            <div className="right-col padding-right-40 text-right">
              <Link to="/ticket" className="buy-button">
                {i18n.t('menu.buyTicket')}
              </Link>
            </div>
          </div>
          <div className="row timer padding-left-50 padding-right-40">
            <span
              className="days-before"
              data-name={noun(this.state.time.days, i18n.t('counter.day_1'), i18n.t('counter.day_2'), i18n.t('counter.day_5'))}
            >
              {this.state.time.days}
            </span>
            <span
              className="hour-before"
              data-name={noun(this.state.time.hour, i18n.t('counter.hour_1'), i18n.t('counter.hour_2'), i18n.t('counter.hour_5'))}
            >
              {this.state.time.hours}
            </span>
            <span
              className="minute-before"
              data-name={noun(this.state.time.minutes, i18n.t('counter.minute_1'), i18n.t('counter.minute_2'), i18n.t('counter.minute_5'))}
            >
              {this.state.time.minutes}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
