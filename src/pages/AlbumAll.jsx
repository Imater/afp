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
let YouTube = class Empty extends Component {
  render () {
    return (<div></div>);
  }
};

if (process.env.BROWSER) {
  require('./AlbumAll.less');
  YouTube = require('react-youtube').default;
}

class AlbumAll extends Component {
  state = {
    windowWidth: ((typeof window === 'object') ? window.innerWidth : 1024)
  };

  componentWillMount() {
    this.props.loadGallery.bind(this, 100000)();
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
    const galleries = this.props.listData.get('gallery');
    const gallery_id = this.props.params.album;
    this.galleryMain = galleries.find((item) => {
      return item.get('gallery_id') === parseInt(gallery_id)
    });
    if(typeof this.galleryMain === 'undefined') {
      return (<div>Loading...</div>);
    }
    this.gallery = this.galleryMain.get('images');
    const { language } = this.props;
    let count = parseInt(this.state.windowWidth / 400);
    if(count <= 0) {
      count = 1;
    }

    const box = parseInt((this.state.windowWidth)/count)/1.2;
    const boxProcent = 100/count;
    const mainImageIndex = this.props.params.photo ? parseInt(this.props.params.photo) : 0;
    const imageInfo = this.gallery.find((image, index) => index === mainImageIndex)
    const mainImageName = imageInfo.get('name');
    const youTubeLink = imageInfo.get('link');
    const youtubeOpts = {
      height: '90%',
      width: '100%',
      id: 'fullscreenVideo',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const showImageOrYouTube = youTubeLink ? (
        <YouTube opts={youtubeOpts} videoId={youTubeLink} />
    ) : (
      <div className='cover' style={{
        backgroundImage: `url(/upload/images/gallery/${mainImageName})`
      }}>
      </div>
    );
    const lang = language === 'eng' ? '_eng' : '';
    const albumName = this.galleryMain.get('name' + lang);
    return (
      <div className='AlbumAll'>
        <div className='topMenu'>
          <div className='leftInfo' onClick={() => {
            this.props.history.goBack();
          }}>
            {i18n.t('album.back')}
          </div>
          <div className='rightInfo'>
            <img src='/assets/svg/photo.svg' />
            {this.gallery.size}
          </div>
          <div className='title'>
            {
              albumName
            }
          </div>
        </div>
      <div className='albumPreview'>
        <div className='scrollable'>
          {
            this.gallery.map((item, keyPreview) => {
              const imageName = item.get('name');
              const imageLink = item.get('link') === null ? '' : item.get('link');
              return (
                <div className='preview' key={keyPreview} style={{
                  width: `${boxProcent}%`,
                  height: box
                }}>
                <Link to={`/media/${this.props.params.part}/${this.props.params.album}/${keyPreview}/all/images/one`}>
                    <div className='cover' style={{
                      backgroundImage: `url(/upload/images/gallery/${imageName})`
                    }}>
                      {
                        imageLink ? <div className='videoOverlay'></div> : <div></div>
                      }
                    </div>
                  </Link>
                </div>
              );
            })
          }
        </div>
      </div>
      <Footer noborder />
    </div>
    );
  }
}

export default AlbumAll;
