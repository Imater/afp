import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import moment from 'moment';

class NewsLine extends Component {
  componentWillMount() {
    this.newsList = this.props.listData.get('news').setSize(10);
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

  renderItem(news, key, language) {
    const image = news.get('cms_news_item_images').last().get('name');
    const group = news.get('group_name');
    const title = this.getTranslate(news, 8, language, news.get('title'));

    const defaultPreview = news.get('cms_news_item_data').filter((item) => {
      return item.get('key') === 'description'
    }).first().get('data');
    const preview = this.getTranslate(news, 9, language, defaultPreview)

    const dateFormat = (dateString) => {
      return moment(dateString).locale(language).format('LL'); // padding
    }
    const date = dateFormat(news.get('date'));
    return (
      <li key={key}>
        <Link to={`/news/main/${news.get('item_id')}`}>
          <img src={`/upload/images/news/${image}`} alt="news-01" />
          <div className="news-overlay" dangerouslySetInnerHTML={{__html: preview}}></div>
        </Link>
      </li>
    );
  }

  render() {
    const { language } = this.props;
    return (
      <div className="page news-page" id="news">
        <div className="row">
          <div className="left-col padding-left-50">
            <a name="news"></a>
            <div className="news-title">
              {i18n.t('about.news')}
            </div>
          </div>
          <div className="right-col padding-right-40 text-right">
            <Link to="/news" className="transparent-button">
              {i18n.t('about.allNews')}
            </Link>
          </div>
        </div>
        <div className="row">
          <ul className="news-list">
            {
              this.newsList.map((news, key) => {
                return this.renderItem(news, key, language)
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default NewsLine;
