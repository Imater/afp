import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import TopPageMenu from '../components/TopPageMenu';
import { lineUpItems } from '../components/settings';
import $ from 'jquery';
import Footer from '../components/Main/Footer';

if (process.env.BROWSER) {
  require('./LineupContent.less');
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

class LineUpContent extends Component {
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
  componentWillMount() {
    this.props.loadDjs.bind(this, 600)();
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
    let boxProcent = 100/count;
    let dj = djs.find((djOne) => {
      return djOne.get('id') === parseInt(this.props.params.id);
    });
    if(!dj) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    const title = dj.get(`title${lang}`);
    const preview = dj.get(`preview${lang}`);
    const text = dj.get(`description${lang}`);
    return (
      <div className="page dj-page-content" id="lineup">
        <div className='close-page' onClick={() => {
          this.props.history.goBack()
        }}></div>
        <div className="dj-wrapper">
          <div className="dj-item">
            <div className="dj-image" style={{
            }}>
              <img src={`/upload/content/${dj.get('image') ? dj.get('image') : 'bro.jpg'}`} />
            </div>
            <div className="dj-title">
              {
                title
              }
            </div>
            <div className="dj-text">
              {
                text ? text : preview
              }
            </div>
            {
              dj.get(`top`) ? (
                <div className="dj-top" title="DJ Mag Top 100">
                  {
                    `#${dj.get('top')}`
                  }
                </div>
              ) : ''
            }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LineUpContent;
