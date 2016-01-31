import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { newsItems, typesNews } from '../components/settings';
import Footer from '../components/Main/Footer';
import moment from 'moment';

if (process.env.BROWSER) {
  require('./News.less');
}


class News extends Component {
  state = {
    windowWidth: ((typeof window === 'object') ? window.innerWidth : 1024)
  }

  componentWillMount() {
    this.newsList = this.props.listData.get('news');
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
  getTranslate(news, translate_id, language) {
    if(language === 'eng' && news.get(translate_id+'_eng')) {
      return news.get(translate_id+'_eng');
    } else {
      return news.get(translate_id+'');
    }
  }

  renderItem(news, key, language, boxProcent, box, isMain) {
    const images = JSON.parse(news.get('images'));
    const image = images.length ? images[images.length-1].name : undefined;
    const group = news.get('group_name');
    const title = this.getTranslate(news, 'title', language);

    const defaultPreview = this.getTranslate(news, 'description', language)
    const preview = this.getTranslate(news, 'description', language)

    const dateFormat = (dateString) => {
      return moment(dateString).locale(language).format('LL'); // padding
    }
    const date = dateFormat(news.get('date'));
    const boxProcentCorrected = boxProcent === 100 ? 50 : boxProcent;
    return (
      <div className="newsItem" key={key} style={{
        width: `${isMain ? 100 : boxProcent}%`,
        minHeight: box
      }}>
      <div className="wrapper">
        <Link to={`/news/main/${news.get('item_id')}`}>
          <div className="newsBlock">
            <div className='imageWrapper' style={{
              width: isMain ? `${boxProcentCorrected}%` : 'auto',
            }}>
              <img className="image" src={`/upload/images/news/${image}`} />
            </div>
            <div className='info' style={{
              width: isMain ? `${100-boxProcentCorrected}%` : 'auto',
            }}>
              <div className="group">
                <span className="groupLink">{group}</span>
              </div>
              <div className="title">
                <span className="titleLink">{title}</span>
              </div>
              <div className="preview">
                <span className="titleLink" dangerouslySetInnerHTML={{__html: preview}}></span>
              </div>
              <div className="date">{date}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    );
  }

  render() {
    let count = parseInt(this.state.windowWidth / 400);
    if(count <= 0) {
      count = 1;
    }
    if(count > 3) {
      count = 3;
    }
    let box = parseInt((this.state.windowWidth-275)/count)/1.5;
    if(box < 200) {
      box = 200;
    }
    const boxProcent = 100/count;
    const { language } = this.props;
    const types = typesNews;
    return (
      <div className="page News" id="lineup">
        <TopPageMenu items={newsItems} language={language} />
        <div className="newsItems main">
          {
            this.newsList.map((news, key) => {
              if(key === 0) {
                return this.renderItem(news, key, language, boxProcent, box, 'main')
              }
            })
          }
        </div>
        <div className="newsItems">
          <div className="row newsItemsHolder">
            {
              this.newsList.map((news, key) => {
                if(key>0) {
                  return this.renderItem(news, key, language, boxProcent, box)
                }
              })
            }
          </div>
          {
            //<div className="newsMore">
            //  <a href="#" className="newsMoreLink">
            //    <span className="newsMoreIcon"></span> Показать ещё
            //  </a>
            //</div>
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default News;
