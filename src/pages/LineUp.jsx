import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import $ from 'jquery';
import Social from '../components/Social';
import TopPageMenu from '../components/TopPageMenu';
import { lineUpItems } from '../components/settings';
import Scrollable from '../components/Scrollable';

if (process.env.BROWSER) {
  require('./Lineup.less');
}
let djsBlock = (
  <div>
    <div className="djs-block">
      <div className="row">
        <div className="left-col padding-left-50">
          <div className="col-title">
          </div>
        </div>
      </div>
      <Scrollable x={true} y={false}>
        <div className="row line-up">
          <ul>
            <Link to="/lineup/2016/main/136">
              <li className="dj1"></li>
            </Link>
            <Link to="/lineup/2016/main/134">
              <li className="dj2"></li>
            </Link>
            <li className="dj3"></li>
            <li className="dj4"></li>
            <li className="dj5"></li>
            <li className="dj6"></li>
          </ul>
        </div>
      </Scrollable>
    </div>
  </div>
);

const scenes = [
  {
    id: 1,
    title: 'Main stage'
  },
  {
    id: 2,
    title: 'Live & Bass stage'
  },
  {
    id: 3,
    title: 'Tot:Spot'
  },
  {
    id: 4,
    title: 'Mendeleev Stage'
  },
  {
    id: 5,
    title: 'Flat 247'
  },
  {
    id: 6,
    title: 'Circle'
  },
  {
    id: 7,
    title: ''
  }
]

class LineUp extends Component {
  state = {
    windowWidth: ((typeof window === "object") ? window.innerWidth : 1024)
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
    return (
      <div className="page djs-page" id="lineup">
        <TopPageMenu items={lineUpItems[this.props.routeParams.year]} language={language} />
        <div className="years-selector">
          <Link to="/lineup/2016/main" activeClassName="active">2016</Link>
          <Link to="/lineup/2015/main" activeClassName="active">2015</Link>
          <Link to="/lineup/2014/main" activeClassName="active">2014</Link>
        </div>
        {
          this.props.routeParams.year === '2016' ? djsBlock : (<div></div>)
        }
        <div className="djs-list">
          {
            scenes.map((scene, keyScene) => {
              if (this.props.routeParams.year === '2016') {
                return;
              }
              let djsFiltered = djs.filter((dj) => {
                return (dj.get('year') === this.props.routeParams.year && dj.get('stage') === scene.id);
              });
              if(djsFiltered.size === 0) {
                return (<div key={keyScene}></div>);
              }
              const sceneTitle = scene.title;
              return (
                <div className="scene-wrapper" key={keyScene}>
                  {
                    sceneTitle ? <h3>{scene.title}</h3> : <div></div>
                  }
                  <div>
                    {
                      djsFiltered.map((dj, key) => {
                        return (
                          <div className="dj-wrapper" key={`${keyScene} ${key}`} style={{
                            width: `${boxProcent}%`,
                            height: box
                          }}>
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
                                  {
                                    dj.get(`preview${lang}`)
                                  }
                                </div>
                                {
                                  dj.get(`top`) ? (
                                    <div className="dj-top">
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
            })
          }
        </div>
      </div>
    );
  }
}

export default LineUp;
