import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import moment from 'moment';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import Share from '../components/Share';
import TopPageMenu from '../components/TopPageMenu';
import { newsItems, typesNews } from '../components/settings';
import Footer from '../components/Main/Footer';
import NewsLine from '../containers/NewsLine';
import smoothScroll from '../utils/smoothScroll';

if (process.env.BROWSER) {
  require('./NewsContent.less');
}


class NewsContent extends Component {
  state = {
    windowWidth: ((typeof window === 'object') ? window.innerWidth : 1024)
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
  componentWillMount() {
    this.props.loadNews.bind(this, 600)();
  }
  getTranslate(news, translate_id, language) {
    if(language === 'eng' && news.get(translate_id+'_eng').length) {
      return news.get(translate_id+'_eng');
    } else {
      return news.get(translate_id+'');
    }
  }
  renderItem(news, key, language, boxProcent, box, isMain) {
    if(!news) {
      return (
        <div>Новость не найдена</div>
      );
    }
    const images = JSON.parse(news.get('images'));
    const title = this.getTranslate(news, 'title', language);

    const group = news.get('group_name');

    const defaultPreview = this.getTranslate(news, 'description', language)
    const preview = this.getTranslate(news, 'description', language)

    const textPreview = this.getTranslate(news, 'content', language)
    const text = this.getTranslate(news, 'content', language)

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
        <Share params={{
          url: 'http://alfafuture.com', //(typeof window === 'undefined') ? '' : window.location.href,
          title: title,
          descr: preview,
          img_url: `http://alfafuture.com/images/news/${images.length ? images[images.length-1].name : ''}`
        }} />
        <div className="wrapper">
          <div className="newsBlock">
            <div className="date">{date}</div>
            <div className="title">
              <span className="titleLink" href="#">{title}</span>
            </div>
            {
              images.map((image, key) => {
                return (
                  <img key={key} src={`/upload/images/news/${image.name}`} onError={() => {
                  }}/>
                );
              })
            }
            <div className="text">
              <span className="textLink" href="#" dangerouslySetInnerHTML={{__html: text}}></span>
            </div>
          </div>
        </div>
    </div>
    );
  }

  render() {
    const newsList = this.props.listData.get('news');
    const { language, params: {newsId} } = this.props;
    this.news = newsList.find((item) => {
      return item.get('item_id') === parseInt(newsId);
    });
    if(!this.news) {
      return (
        <div>Loading...</div>
      );
    }
    const title = this.getTranslate(this.news, 'title', language);
    const count = parseInt(this.state.windowWidth / 400);
    const box = parseInt((this.state.windowWidth-275)/count)/1.5;
    const boxProcent = 100/count;
    const types = typesNews;
    return (
      <div className="page NewsContent" id="lineup">
        <div className="top-page-menu fixed">
          <ul>
            <li>
              <Link to='/news'>
                {`${i18n.t('about.news')} → ${title}`}
              </Link>
            </li>
          </ul>
        </div>
        <div className='close-page' onClick={() => {
          this.props.history.goBack()
        }}></div>
        <div className="newsItems main">
          {
            this.renderItem(this.news, 0, language, boxProcent, box, 'main')
          }
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <NewsLine />
        <Footer />
      </div>
    );
  }
}

export default NewsContent;
