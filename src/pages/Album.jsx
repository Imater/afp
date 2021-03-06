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
}

if (process.env.BROWSER) {
  require('./Album.less');
  YouTube = require('react-youtube').default;
}

class Album extends Component {
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

  keyPress(prevImageIndex, nextImageIndex) {
    return (key, event) => {
      if(key.keyCode === 39){ //next
        this.props.history.replaceState(null, `/media/${this.props.params.part}/${this.props.params.album}/${nextImageIndex}`)
      } else if (key.keyCode === 37){ //prev
        this.props.history.replaceState(null, `/media/${this.props.params.part}/${this.props.params.album}/${prevImageIndex}`)
      }
    }
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
    const types = typesSport;
    const main = typesSport;
    const count = parseInt(this.state.windowWidth / 400);
    const box = parseInt((this.state.windowWidth-275)/count)/1.5;
    const boxProcent = 100/count;
    const mainImageIndex = this.props.params.photo ? parseInt(this.props.params.photo) : 0;
    const imageInfo = this.gallery.find((image, index) => index === mainImageIndex)
    const mainImageName = imageInfo.get('name');
    const youTubeLink = imageInfo.get('link');
    const youtubeOpts = {
      height: '100%',
      width: '100%',
      id: 'fullscreenVideo',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 1
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
    const prevImageIndex = mainImageIndex > 0 ? mainImageIndex - 1 : 0;
    const nextImageIndex = mainImageIndex < this.gallery.size-1 ? mainImageIndex + 1 : this.gallery.size-1;
    return (
      <div className='Album' onKeyDown={this.keyPress(prevImageIndex, nextImageIndex).bind(this)}>
        <div className='topMenu'>
          <div className='leftInfo'>
            <Link to={`/media/${this.props.params.part}/${this.props.params.album}/all/images`}>
              <img src='/assets/svg/all-photo.svg' />
            </Link>
          </div>
          <div className='rightInfo'>
            <img src='/assets/svg/photo.svg' />
            { mainImageIndex+1 } из {this.gallery.size}
          </div>
          <div className='title'>
            {
              albumName
            }
          </div>
        </div>
        <div className='main'>
          <div className='navigator'>
            <Link to={`/media/${this.props.params.part}/${this.props.params.album}/${prevImageIndex}`}>
              <img src='/assets/svg/left-arrow.svg' />
            </Link>
            <Link to={`/media/${this.props.params.part}/${this.props.params.album}/${nextImageIndex}`}>
              <img src='/assets/svg/right-arrow.svg' />
            </Link>
          </div>
          <div className='close-page' onClick={() => {
            if(this.props.location.pathname.indexOf('/one') !== -1){
              this.props.history.goBack();
            } else {
              this.props.history.replaceState(null, `/media/${this.props.params.part}`);
            }
          }}>
          </div>
          <Link to={`/media/${this.props.params.part}/${this.props.params.album}/${nextImageIndex}`}>
            {
              showImageOrYouTube
            }
          </Link>
      </div>
      <div className='albumPreview'>
        <div className='scrollable'>
          {
            this.gallery.map((item, keyPreview) => {
              const imageName = item.get('name');
              const imageLink = item.get('link') === null ? '' : item.get('link');
              return (
                <div className='preview' key={keyPreview}>
                  <Link to={`/media/${this.props.params.part}/${this.props.params.album}/${keyPreview}`}>
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
    </div>
    );
  }
}

export default Album;
