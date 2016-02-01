import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import moment from 'moment';
import Scrollable from '../Scrollable';

class NewsLine extends Component {

  state = {
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
    this.newsList = this.props.listData.get('news').filter((item) => {
      return item.get('enabled') === true;
    }).setSize(10);
  }

  getTranslate(news, translate_id, language) {
    if(language === 'eng' && news.get(translate_id+'_eng').length) {
      return news.get(translate_id+'_eng').replace(/\\"/g, '"');;
    } else {
      return news.get(translate_id+'').replace(/\\"/g, '"');;
    }
  }

  renderItem(news, key, language) {
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
    return (
      <li key={key}>
        <Link to={`/news/main/${news.get('item_id')}`} onClick={this._disableIfScroll.bind(this)}>
          <div className="img" style={{
            backgroundImage: `url('/upload/images/news/${image}')`
          }} ></div>
          <div className="news-overlay" dangerouslySetInnerHTML={{__html: title}}></div>
        </Link>
      </li>
    );
  }

  render() {
    const { language } = this.props;
    return (
      <div className="news-page" id="news">
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
          <Scrollable x={true} y={false} disableClick={this.disableClick.bind(this)}>
            <ul className="news-list">
              {
                this.newsList.map((news, key) => {
                  return this.renderItem(news, key, language)
                })
              }
            </ul>
          </Scrollable>
        </div>
      </div>
    );
  }
}

export default NewsLine;
