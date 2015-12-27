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
  require('./NewsContent.less');
}


class NewsContent extends Component {
  state = {
    windowWidth: ((typeof window === 'object') ? window.innerWidth : 1024)
  }

  componentWillMount() {
    const newsList = this.props.listData.get('news');
    const { params: {newsId} } = this.props;
    this.news = newsList.find((item) => {
      return item.get('item_id') === parseInt(newsId);
    });
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
  getTranslate(news, translate_id, language, defaultValue) {
    if(language === 'eng') {
      let text = news.get('cms_lang_translate_values').find((item) => {
        return item.get('translate_id') === translate_id;
      });
      if(text && text.get('value') && text.get('value').length) {
        return text.get('value');
      }
    }
    return defaultValue;
  }
  renderItem(news, key, language, boxProcent, box, isMain) {
    if(!news) {
      return (
        <div>Новость не найдена</div>
      );
    }
    const image = news.get('cms_news_item_images').last().get('name');
    const group = news.get('group_name');
    const title = this.getTranslate(news, 8, language, news.get('title'));

    const defaultPreview = news.get('cms_news_item_data').filter((item) => {
      return item.get('key') === 'description'
    }).first().get('data');
    const preview = !isMain ? '' : this.getTranslate(news, 9, language, defaultPreview)

    const textDefault = news.get('cms_news_item_data').find((item) => {
      return item.get('key') === 'content'
    }).get('data').replace(/\\/ig, '');
    const text = !isMain ? '' : this.getTranslate(news, 10, language, textDefault)

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
              <span className="imageLink" href="#"></span>
            </div>
          </div>
          <div className='info' style={{
            width: isMain ? `${100-boxProcentCorrected}%` : 'auto',
          }}>
            <div className="group">
              <span className="groupLink" href="#">{group}</span>
            </div>
            <div className="title">
              <span className="titleLink" href="#">{title}</span>
            </div>
            <div className="preview">
              <span className="titleLink" href="#" dangerouslySetInnerHTML={{__html: preview}}></span>
            </div>
            <div className="date">{date}</div>
          </div>
        </div>
        <div className="text">
          <span className="textLink" href="#" dangerouslySetInnerHTML={{__html: text}}></span>
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
      <div className="page NewsContent" id="lineup">
        <TopPageMenu items={newsItems} language={language} />
        <div className='close-page' onClick={() => {
          this.props.history.goBack()
        }}></div>
        <div className="newsItems main">
          {
            this.renderItem(this.news, 0, language, boxProcent, box, 'main')
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default NewsContent;
