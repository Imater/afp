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
import classnames from 'classnames';

if (process.env.BROWSER) {
  require('./News.less');
}


class News extends Component {
  state = {
    windowWidth: ((typeof window === 'object') ? window.innerWidth : 1024)
  };

  componentWillMount() {
    this.props.loadNews.bind(this, 600)();
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

  renderItem(news, key, language, boxProcent, box, isMain, isAdmin) {
    const images = JSON.parse(news.get('images'));
    const image = images.length ? images[images.length-1].name : '';
    const group = news.get('group_name');
    const title = this.getTranslate(news, 'title', language);

    const defaultPreview = this.getTranslate(news, 'description', language)
    const preview = !isMain ? '' : this.getTranslate(news, 'description', language)

    const dateFormat = (dateString) => {
      return moment(dateString).locale(language).format('LL'); // padding
    }
    const date = dateFormat(news.get('date'));
    const boxProcentCorrected = boxProcent === 100 ? 50 : boxProcent;
    const adminButton = isAdmin === true ? (
      <Link to={`/admin/news/${news.get('item_id')}`}>
        Редактировать новость
      </Link>
    ):(<div></div>);
    return (
      <div className={classnames("newsItem", {
        'disabled': !news.get('enabled')
       })} key={key} style={{
        width: `${isMain ? 100 : boxProcent}%`,
        minHeight: box,
      }}>
      <div className="wrapper">
          <div className="newsBlock">
              <Link to={`/news/main/${news.get('item_id')}`}>
                <div className='imageWrapper' style={{
                  width: isMain ? `${boxProcentCorrected}%` : 'auto',
                }}>
                  <img className="image" src={`/upload/images/news/${image}`} />
                </div>
              </Link>
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
                {
                  adminButton
                }
              </div>
          </div>
      </div>
    </div>
    );
  }

  render() {
    const isAdmin = this.props.location.query ? this.props.location.query.admin === 'afp990990' : false;
    const addNewsButton = isAdmin ? (
      <div className="newsItem">
        <div className="wrapper">
          <Link to="/admin/news/add">
            Добавить новость
          </Link>
        </div>
      </div>
    ) : (<div></div>);
    this.newsList = this.props.listData.get('news').filter((item) => {
      return item.get('enabled') === true || isAdmin;
    });
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
            addNewsButton
          }
          {
            this.newsList.map((news, key) => {
              if(key === 0) {
                return this.renderItem(news, key, language, boxProcent, box, 'main', isAdmin)
              }
            })
          }
        </div>
        <div className="newsItems">
          <div className="row newsItemsHolder">
            {
              this.newsList.map((news, key) => {
                if(key>0) {
                  return this.renderItem(news, key, language, boxProcent, box, false, isAdmin)
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
