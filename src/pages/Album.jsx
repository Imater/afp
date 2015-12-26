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
  require('./Album.less');
}

class Album extends Component {
  state = {
    windowWidth: ((typeof window === 'object') ? window.innerWidth : 1024)
  }

  componentWillMount() {
    const galleries = this.props.listData.get('gallery');
    const gallery_id = this.props.params.album;
    this.gallery = galleries.filter((item) => {
      return item.get('gallery_id') === parseInt(gallery_id)
    }).first().get('cms_gallery_items');
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
    const count = parseInt(this.state.windowWidth / 400);
    const box = parseInt((this.state.windowWidth-275)/count)/1.5;
    const boxProcent = 100/count;
    const mainImageIndex = this.props.params.photo ? parseInt(this.props.params.photo) : 0;
    const mainImageName = this.gallery.filter((image, index) => index === mainImageIndex).first().get('name');
    return (
      <div className='Album'>
        <div className='close-page' onClick={() => {
          this.props.history.replaceState(null, `/media/${this.props.params.part}`);
        }}>
        </div>
        <div className='topMenu'>
        </div>
        <div className='main'>
          <div className='cover' style={{
            backgroundImage: `url(/upload/images/gallery/${mainImageName})`
          }}>
        </div>
      </div>
      <div className='albumPreview'>
        <div className='scrollable'>
          {
            this.gallery.map((item, keyPreview) => {
              const imageName = item.get('name');
              return (
                <div className='preview' key={keyPreview}>
                  <Link to={`/media/${this.props.params.part}/${this.props.params.album}/${keyPreview}`}>
                    <div className='cover' style={{
                      backgroundImage: `url(/upload/images/gallery/${imageName})`
                    }}>
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
