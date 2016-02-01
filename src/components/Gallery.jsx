import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./Gallery.less');
}

class Gallery extends Component {
  state = {
    index: 0
  };

  nextSlide(increment = 1) {
    if(!this.props.images) {
      return;
    }
    var nextIndex = this.state.index + increment;
    if(nextIndex <= 0) {
      nextIndex = 0;
    } else if (nextIndex >= this.props.images.length){
      nextIndex = this.props.images.length-1;
    } else {
    }
    this.setState({
      index: nextIndex
    });
  }

  render() {
    const { images } = this.props;
    if(!images || (images && !images.length)) {
      return (<div></div>);
    }
    const getPhoto = (add) => {
      let image = images.filter((img, key) => {
        return key === this.state.index + add;
      });
      if(!image[0]) {
        return undefined;
      } else {
        return image[0].url;
      }
    }
    return (
      <div className='Gallery noselect'>
        <div className="galleryItems">
          <div className="galleryItem galleryItemPrev" onClick={() => this.nextSlide(-1)}>
            <div className="galleryImage"
              style={{
                backgroundImage: `url('${getPhoto(-1)}')`
              }}
            >
            </div>
          </div>
          <div className="galleryItem">
            <div className="galleryImage"
              style={{
                backgroundImage: `url('${getPhoto(0)}')`
              }}
            >
            </div>
            <div className="galleryInfo">
              <div className="galleryInfoName">{this.props.title}</div>
            </div>
          </div>
          <div className="galleryItem galleryItemNext" onClick={() => this.nextSlide(1)}>
            <div className="galleryImage"
              style={{
                backgroundImage: `url('${getPhoto(1)}')`
              }}
            >
            </div>
          </div>
          <div className="galleryCounter">
            <span>{this.state.index + 1}</span> из <span>{images.length}</span>
          </div>
          <div style={{
            display: getPhoto(-1) ? undefined : 'none'
          }} className="galleryPrev" onClick={() => this.nextSlide(-1)}>
            <img src='/assets/svg/left-arrow.svg' />
          </div>
          <div style={{
            display: getPhoto(1) ? undefined : 'none'
          }} className="galleryNext" onClick={() => this.nextSlide(1)}>
            <img src='/assets/svg/right-arrow.svg' />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
