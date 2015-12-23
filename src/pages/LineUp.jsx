import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import TopPageMenu from '../components/TopPageMenu';
import { lineUpItems } from '../components/settings';
import $ from 'jquery';

if (process.env.BROWSER) {
  require('./Lineup.less');
}
let djsBlock = (
  <div className="djs-block">
    <div className="row">
      <div className="left-col padding-left-50">
        <div className="col-title">
        </div>
      </div>
    </div>
    <div className="row line-up">
      <ul>
        <li className="dj1"></li>
        <li className="dj2"></li>
        <li className="dj3"></li>
        <li className="dj4"></li>
        <li className="dj5"></li>
        <li className="dj6"></li>
      </ul>
    </div>
  </div>
);

class LineUp extends Component {
  componentDidMount() {
    console.info($('window').width());
  }
  render() {
    const { language } = this.props;
    const lang = language === 'eng' ? '_eng' : '';
    const djs = this.props.listData.get('djs');
    let box = (typeof window === "object") ? (window.innerWidth-275)/4 : 50;
    return (
      <div className="page djs-page" id="lineup">
        <TopPageMenu items={lineUpItems[this.props.routeParams.year]} language={language} />
        <div className="years-selector">
          <Link to="/lineup/2016/main" activeClassName="active">2016</Link>
          <Link to="/lineup/2015/main" activeClassName="active">2015</Link>
        </div>
        {
          this.props.routeParams.year === '2016' ? djsBlock : (<div></div>)
        }
        <div className="djs-list">
          <h3>Main stage</h3>
          {
            djs.map((dj, key) => {
              if(dj.get('year') === this.props.routeParams.year) {
                return (
                  <div className="dj-wrapper" key={key} style={{
                    width: box,
                    height: box
                  }}>
                    <div className="dj-item">
                      <div className="dj-overlay">
                      </div>
                      <div className="dj-image" style={{
                        backgroundImage: `url("/upload/content/${dj.get('image')}")`
                      }}>
                      </div>
                      <div className="dj-title">
                        {
                          dj.get(`title${lang}`)
                        }
                      </div>
                      <div className="dj-preview">
                        {
                          dj.get(`preview${lang}`)
                        }
                      </div>
                    </div>
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    );
  }
}

export default LineUp;
