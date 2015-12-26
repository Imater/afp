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
  }

  componentWillMount() {
    const galleries = this.props.listData.get('gallery');
    this.galleryParts = [
      {
        title: 'ALFA FUTURE PEOPLE<br>2015',
        year: '2015',
        imageName: '36e336641636dcd1.jpg',
        items: new List(galleries.filter((item) => {
          return item.get('gallery_id') >= 31
        }))
      },
      {
        title: 'ALFA FUTURE PEOPLE<br>2014',
        imageName: 'dd8d7b896f407797.jpg',
        year: '2014',
        items: new List(galleries.filter((item) => {
          return item.get('gallery_id') < 31
        }))
      }
    ];
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

  render() {
    const { language } = this.props;
    const types = typesSport;
    const main = typesSport;
    let count = parseInt(this.state.windowWidth / 400);
    let box = parseInt((this.state.windowWidth-275)/count)/1.5;
    let boxProcent = 100/count;
    return (
      <div className="Media">
        <TopPageMenu items={mediaItems} language={language} />
        <div className='Galleries'>
          {
            this.galleryParts.map((part, keyParts) => {
              return (
                <div className='' key={keyParts}>
                  <div className='partHeaderWrapper' style={{
                    backgroundImage: `url(/upload/images/gallery/${part.imageName})`
                  }}>
                  <h3 dangerouslySetInnerHTML={{__html: part.title}}></h3>
                </div>
                <div className='covers-wrapper'>
                  {
                    part.items.map((album, keyAlbum) => {
                      let image_name = album.get('cms_gallery_items').first().get('name');
                      return (
                        <Link to={`/media/${part.year}/${album.get('gallery_id')}`} key={keyAlbum}>
                          <div className='cover' style={{
                            height: box,
                            width: `${boxProcent}%`,
                            backgroundImage: `url(/upload/images/gallery/${image_name})`
                          }}>
                          <h4>{album.get('name')}</h4>
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
        <Footer />
      </div>
    );
  }
}

export default Media;
