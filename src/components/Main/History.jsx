import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';

import classNames from 'classnames';
import Social from '../Social';

const stats = {
  '2014': {
    scene: 3,
    dj: 30,
    sound: '1МВТ',
    viewer: '30 000',
    hectare: '50'
  },
  '2015': {
    scene: 6,
    dj: 100,
    sound: '1МВТ',
    viewer: '50 000',
    hectare: '75'
  }
};

const tabs = [
  {
    title: '2015'
  },
  {
    title: '2014'
  }
];

const params = [
  {
    name: 'scene'
  },
  {
    name: 'dj'
  },
  {
    name: 'sound'
  },
  {
    name: 'viewer'
  },
  {
    name: 'hectare'
  }
];

class History extends Component {
  state = {
    tab: '2015'
  }

  selectTab(tab) {
    this.setState({
      tab: tab
    });
  }

  render() {
    const stat = stats[this.state.tab];
    return (
      <div className="page second-page">
        <div className="row">
          <div className="left-col padding-left-50">
            <div className="col-title">
              <span>{i18n.t('history.howItWas')}</span><br />
              {
                tabs.map((tab, key) => {
                  return (
                    <a href="javascript:void(0);"
                      onClick={this.selectTab.bind(this, tab.title)}
                      className={classNames({active: (tab.title === this.state.tab)})}
                      key={key}>
                      {tab.title}
                    </a>
                  );
                })
              }
            </div>
          </div>
          <div className="right-col text-right padding-right-40">
            <a href='javascript:void(0)' className="language" onClick={this.props.changeLanguage.bind(this, this.props.language==='eng' ? 'ru' : 'eng')}>
              {this.props.language==='eng' ? 'en' : 'ru'}
            </a>
          </div>
        </div>
        <div className="row vertical-center-row padding-left-50">
          {
            params.map((param, key) => {
              return (
                <div className={classNames('was-block', `${param.name}-block`)}
                  key={key}
                  data-name={i18n.t(`history.${param.name}`)}>
                  {stat[param.name]}
               </div>
              );
            })
          }
        </div>
        <div className="row bottom-row social-row">
          <div className="left-col padding-left-50 text-left">
            <div className="festival-location">Нижний Новгород, аэродром на берегу Волги</div>
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

export default History;
