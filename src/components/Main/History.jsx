import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';

import classNames from 'classnames';

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
    name: 'scene',
    img: 'icon-face.svg'
  },
  {
    name: 'dj',
    img: 'icon-dj.svg'
  },
  {
    name: 'sound',
    img: 'icon-sound.svg'
  },
  {
    name: 'viewer',
    img: 'icon-users.svg'
  },
  {
    name: 'hectare',
    img: 'icon-hectares.svg'
  },
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
      <div className="page set-height second-page hide-on-video" style={{
        marginTop: this.props.margin,
        opacity: this.props.opacity
      }}>
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
        </div>
        <div className="row vertical-center-row padding-left-50" hidden>
          {
            params.map((param, key) => {
              return (
                <div className={classNames('was-block', `${param.name}-block`)}
                  key={key}
                  data-name={i18n.t(`history.${param.name}`)}>
                  <span>{stat[param.name]}</span>
                  <img src={`/assets/img/${param.img}`} />
               </div>
              );
            })
          }
        </div>
        <div className="mainIcons padding-left-50">
          {
            params.map((param, key) => {
              return (
                <div className='mainIcon' key={key}>
                  <span className="mainIcon-num">{stat[param.name]}</span>
                  <img className="mainIcon-img" src={`/assets/img/${param.img}`}/>
                  <p className="mainIcon-desc">{i18n.t(`history.${param.name}`)}</p>
               </div>
              );
            })
          }
        </div>

      </div>
    );
  }
}

export default History;
