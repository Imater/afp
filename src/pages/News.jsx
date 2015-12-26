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
  renderItem(news, key, language, boxProcent, box, isMain) {
    const image = news.get('cms_news_item_images').last().get('name');
    const group = news.get('group_name');
    const title = news.get('title');
    const preview = !isMain ? '' : news.get('cms_news_item_data').filter((item) => {
      return item.get('key') === 'description'
    }).first().get('data');
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
        <div className="newsBlock">
          <div className='imageWrapper' style={{
            width: isMain ? `${boxProcentCorrected}%` : 'auto',
          }}>
            <div className="image" title={0} style={{
              backgroundImage: `url('/upload/images/news/${image}')`,
              height: box
            }}>
              <a className="imageLink" href="#"></a>
            </div>
          </div>
          <div className='info' style={{
            width: isMain ? `${100-boxProcentCorrected}%` : 'auto',
          }}>
            <div className="group">
              <a className="groupLink" href="#">{group}</a>
            </div>
            <div className="title">
              <a className="titleLink" href="#">{title}</a>
            </div>
            <div className="preview">
              <a className="titleLink" href="#" dangerouslySetInnerHTML={{__html: preview}}></a>
            </div>
            <div className="date">{date}</div>
          </div>
        </div>
      </div>
    </div>
    );
  }

  render() {
    const count = parseInt(this.state.windowWidth / 400);
    const box = parseInt((this.state.windowWidth-275)/count)/1.5;
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
