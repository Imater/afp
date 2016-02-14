import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import { fromJS, List } from 'immutable';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { mediaItems, typesSport, mainSport, partners } from '../components/settings';
import Footer from '../components/Main/Footer';
import { checkAdmin } from '../components/admin.jsx';
import $ from 'jquery';

if (process.env.BROWSER) {
  require('./Media.less');
}

class Media extends Component {
  state = {
    windowWidth: ((typeof window === "object") ? window.innerWidth : 1024)
  };

  componentWillMount() {
    this.props.loadGallery.bind(this, 10000)();
  }

  componentDidMount() {
    let self = this;
    window.onresize = function () {
      self.tick();
    };
  }

  tick() {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  componentWillUnmount() {
    window.onresize = () => {
    };
  }

  getTranslate(news, translate_id, language, defaultValue) {
    if (language === 'eng') {
      let text = news.get('cms_lang_translate_values').find((item) => {
        return item.get('translate_id') === translate_id;
      });
      if (text && text.get('value') && text.get('value').length) {
        return text.get('value');
      }
    }
    return defaultValue;
  }

  render() {
    const galleries = this.props.listData.get('gallery');
    this.galleryParts = [
      {
        year: '2015',
        group: 'AFP2015',
        imageName: 'scene2015.jpg',
        anchor: 'media2015',
      },
      {
        imageName: 'scene2014.jpg',
        group: 'AFP2015',
        year: '2014',
        anchor: 'media2014',
      }
    ];
    const { language } = this.props;
    let count = parseInt(this.state.windowWidth / 550);
    if (count <= 0) {
      count = 1;
    }
    if (count > 3) {
      count = 3;
    }
    let box = parseInt((this.state.windowWidth - 275) / count) / 1.5;
    if (box < 200) {
      box = 200;
    }
    let boxProcent = 100 / count;
    const isAdmin = checkAdmin();
    const lang = language === 'eng' ? '_eng' : '';
    return (
      <div className="Media">
        <TopPageMenu items={mediaItems} language={language} fixed/>
        <div className='Galleries'>
          {
            this.galleryParts.map((part, keyParts) => {
              const items = new List(galleries.filter((item) => {
                return item.get('year') == part.group;
              }));
              return (
                <div className='' key={keyParts} id={part.anchor}>
                  <div className='partHeaderWrapper' style={{
                    backgroundImage: `url(/assets/img/${part.imageName})`
                  }}>
                    <h3>
                      ALFA FUTURE PEOPLE<br />{part.year}
                    </h3>
                  </div>
                  <div className='covers-wrapper'>
                    {
                      items.map((album, keyAlbum) => {
                        let image_name = album.get('images').first().get('name');
                        let albumName = album.get('name' + lang);
                        if (album.get('video')) {
                          albumName = '';
                        }
                        return (
                          <Link
                            to={`/media/${part.year}/${album.get('gallery_id')}`}
                            key={keyAlbum}>
                            <div className='cover' style={{
                            height: box,
                            width: `${boxProcent}%`,
                            backgroundImage: `url(/upload/images/gallery/${image_name})`
                          }}>
                              <h4>{albumName}</h4>
                              {
                                album.get('video') ? (
                                  <div className='videoOverlay'>
                                  </div>
                                ) : ''
                              }
                              {
                                isAdmin ? (
                                  <button className="editButton"
                                          onClick={(e) => {
                                    e.preventDefault();
                                    this.props.history.replaceState(null, `/admin/media/${album.get('gallery_id')}`)
                                    return false;
                                  }}
                                  >
                                    Edit
                                  </button>
                                ) : (<div></div>)
                              }
                            </div>
                          </Link>
                        );
                      })
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
        <Footer noborder/>
      </div>
    );
  }
}

export default Media;
