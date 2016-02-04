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

  render() {
    const galleries = this.props.listData.get('gallery');
    this.galleryParts = [
      {
        title: 'ALFA FUTURE PEOPLE<br>2015',
        year: '2015',
        imageName: 'scene2015.jpg',
        anchor: 'media2015',
        items: new List(galleries.filter((item) => {
          return item.get('gallery_id') >= 31
        }))
      },
      {
        title: 'ALFA FUTURE PEOPLE<br>2014',
        imageName: 'scene2014.jpg',
        year: '2014',
        anchor: 'media2014',
        items: new List(galleries.filter((item) => {
          return item.get('gallery_id') < 31
        }))
      }
    ];
    const { language } = this.props;
    const types = typesSport;
    const main = typesSport;
    let count = parseInt(this.state.windowWidth / 550);
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
    let boxProcent = 100/count;
    return (
      <div className="Media">
        <TopPageMenu items={mediaItems} language={language} fixed/>
        <div className='Galleries'>
          {
            this.galleryParts.map((part, keyParts) => {
              return (
                <div className='' key={keyParts} id={part.anchor}>
                  <div className='partHeaderWrapper' style={{
                    backgroundImage: `url(/assets/img/${part.imageName})`
                  }}>
                  <h3 dangerouslySetInnerHTML={{__html: part.title}}></h3>
                </div>
                <div className='covers-wrapper'>
                  {
                    part.items.map((album, keyAlbum) => {
                      let image_name = album.get('cms_gallery_items').first().get('name');
                      let albumName = this.getTranslate(album, 16, language, album.get('name'));
                      if(album.get('video')) {
                        albumName = '';
                      }
                      return (
                        <Link to={`/media/${part.year}/${album.get('gallery_id')}`} key={keyAlbum}>
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
        <Footer noborder />
      </div>
    );
  }
}

export default Media;
