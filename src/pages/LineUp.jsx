import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import $ from 'jquery';
import Social from '../components/Social';
import TopPageMenu from '../components/TopPageMenu';
import { lineUpItems, lineUpMain } from '../components/settings/lineup';
import Scrollable from '../components/Scrollable';
import Footer from '../components/Main/Footer';
import { checkAdmin } from '../components/admin.jsx';

if (process.env.BROWSER) {
  require('./Lineup.less');
}

class LineUp extends Component {
  state = {
    windowWidth: ((typeof window === "object") ? window.innerWidth : 1024),
    disableClick: false
  };

  disableClick() {
    this.setState({
      disableClick: true
    });
    setTimeout(()=>{
      this.setState({
        disableClick: false
      });
    }, 500)
  }

  _disableIfScroll(e) {
    if(this.state.disableClick) {
      e.preventDefault();
    }
  }

  componentWillMount() {
    this.props.loadDjs.bind(this, 600)();
  }

  componentDidMount() {
    let self = this;
    window.onresize = function() {
      self.tick();
    };
  }

  tick() {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  componentWillUnmount() {
    window.onresize = () => {};
  }

  render() {
    const { language } = this.props;
    const lang = language === 'eng' ? '_eng' : '';
    const djs = this.props.listData.get('djs');
    let count = parseInt(this.state.windowWidth / 300);
    let box = parseInt((this.state.windowWidth-275)/count);
    if(box < 200) {
      box = 200;
    }
    let boxProcent = 100/count;
    const isAdmin = checkAdmin();
    const addDjButton = isAdmin ? (
      <Link className="addDj" to="/admin/dj/add">
        Добавить диджея
      </Link>
    ) : (<div></div>);
    const djsList = () => {
      let djsFiltered = djs.filter((dj) => {
        return (dj.get('year') === this.props.routeParams.year);
      });
      if(djsFiltered.size === 0) {
        return (<div></div>);
      }
      return (
        <div className="scene-wrapper">
          <div>
            {
              djsFiltered.map((dj, key) => {
                return (
                  <div className="dj-wrapper" key={`${key}`} style={{
                    width: `${boxProcent}%`,
                    height: box
                  }}>
                    {
                      isAdmin ? (
                        <div className="adminButton">
                          <Link to={`/admin/dj/${dj.get('id')}`}>Edit</Link>
                        </div>
                      ) : (<div></div>)
                    }
                    <Link to={`/lineup/${this.props.params.year}/${this.props.params.part}/${dj.get('id')}`}>
                      <div className="dj-item">
                        <div className="dj-overlay">
                        </div>
                        <div className="dj-image" style={{
                          backgroundImage: `url("/upload/content/${dj.get('image') ? dj.get('image') : 'bro.jpg'}")`
                        }}>
                        </div>
                        <div className="dj-title">
                          {
                            dj.get(`title${lang}`)
                          }
                        </div>
                        <div className="dj-preview">
                          <span dangerouslySetInnerHTML={{
                            __html: dj.get(`preview${lang}`)
                          }}></span>
                        </div>
                        {
                          dj.get(`top`) ? (
                            <div className="dj-top" title="DJ MAG TOP 100">
                              {
                                `#${dj.get('top')}`
                              }
                            </div>
                          ) : ''
                        }
                      </div>
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>
      );
    }
    return (
      <div className="page djs-page" id="lineup">
        <div className="years-selector">
          <Link to="/lineup/2016/main" activeClassName="active">2016</Link>
          <Link to="/lineup/2015/main" activeClassName="active">2015</Link>
          <Link to="/lineup/2014/main" activeClassName="active">2014</Link>
        </div>
        {
          this.props.routeParams.year === '2016' ? (
            <div>
              <div className="djs-block">
                <div className="row">
                  <div className="left-col padding-left-50">
                    <div className="col-title">
                    </div>
                  </div>
                </div>
                <Scrollable x={true} y={false} navigator="true" disableClick={this.disableClick.bind(this)}>
                  <div className="row line-up">
                    <ul>
                      <Link to="/lineup/2016/main/138" onClick={this._disableIfScroll.bind(this)}>
                        <li className="dj1"></li>
                      </Link>
                      <Link to="/lineup/2016/main/134" onClick={this._disableIfScroll.bind(this)}>
                        <li className="dj3"></li>
                      </Link>
                      <Link to="/lineup/2016/main/136" onClick={this._disableIfScroll.bind(this)}>
                        <li className="dj2"></li>
                      </Link>
                      <li className="dj4"></li>
                      <li className="dj5"></li>
                      <li className="dj6"></li>
                    </ul>
                  </div>
                </Scrollable>
              </div>
            </div>
          ) : (<div></div>)
        }
        {
          lineUpMain[this.props.routeParams.year] ? (
            <div className="djsText">
                <span dangerouslySetInnerHTML={{
                   __html: lineUpMain[this.props.routeParams.year][`text${lang}`]
                }}></span>
            </div>
          ) : (
            <div>
            </div>
          )
        }
        {addDjButton}
        <div className="djs-list">
          {
            djsList()
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default LineUp;
