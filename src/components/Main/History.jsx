import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import { noun } from '../../utils/noun.js';

import classNames from 'classnames';

const stats = {
  '2014': {
    scene: 3,
    dj: 30,
    sound: '1МВТ',
    hectare: '50',
    viewer: '30 000'
  },
  '2015': {
    scene: 6,
    dj: 100,
    sound: '1МВТ',
    hectare: '75',
    viewer: '50 000'
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
    name: 'hectare',
    img: 'icon-hectares.svg'
  },
  {
    name: 'viewer',
    img: 'icon-users.svg'
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
      <div className="page set-height second-page hide-on-video" style={{
        marginTop: this.props.margin,
      }}>
      <div className="row mainIcons-header" style={{
        opacity: this.props.opacity*5
      }}>
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
        <div className="mainIcons-wrap" style={{
          opacity: this.props.opacity
        }}>
          <div className="mainIcons padding-left-50">
            {
              params.map((param, key) => {
                return (
                  <div className='mainIcon' key={key}>
                    <span className="mainIcon-num">{stat[param.name]}</span>
                    <img className="mainIcon-img" src={`/assets/img/${param.img}`}/>
                    <p className="mainIcon-desc">{noun(stat[param.name], i18n.t(`history.${param.name}_1`), i18n.t(`history.${param.name}_2`), i18n.t(`history.${param.name}_5`))}</p>
                 </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default History;
