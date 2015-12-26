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
  }

  nextSlide(increment = 1) {
    if(!this.props.images) {
      return;
    }
    var nextIndex = this.state.index + increment;
    if(nextIndex === 0) {
      nextIndex = this.props.images.length;
    } else if (nextIndex >= this.props.images.length){
      nextIndex = 0;
    } else {
    }
    this.setState({
      index: nextIndex
    });
  }

  render() {
    const { images } = this.props;
    if(!images) {
      return (<div></div>);
    }
    return (
      <div className='Gallery'>
        <div className="galleryItems">
          <div className="galleryItem galleryItemPrev">
            <div className="galleryImage" style={{
                backgroundImage: `url('/assets/img/technology/tech1.jpg')`
              }}>
            </div>
            <div className="galleryInfo">
              <div className="galleryInfoName">Зона виртуальной реальности</div>
            </div>
          </div>
          <div className="galleryItem">
            <div className="galleryImage" style={{
                backgroundImage: `url('/assets/img/technology/tech2.jpg')`
              }}>
            </div>
            <div className="galleryInfo">
              <div className="galleryInfoName">Зона виртуальной реальности</div>
            </div>
          </div>
          <div className="galleryItem galleryItemNext">
            <div className="galleryImage" style={{
                backgroundImage: `url('/assets/img/technology/tech3.jpg')`
              }}>
            </div>
            <div className="galleryInfo">
              <div className="galleryInfoName">Зона виртуальной реальности</div>
            </div>
          </div>
          <div className="galleryCounter">
            <span>3</span> из <span>8</span>
          </div>
          <div className="galleryPrev">←</div>
          <div className="galleryNext">→</div>
        </div>
        {
          images.map((image, key) => {
            if(key === this.state.index) {
              return (
                <div key={key}
                  style={{
                  backgroundImage: `url(${image.url})`
                  }}
                  className='image'
                  onClick={this.nextSlide.bind(this, 1)}>
                </div>
              )
            }
          })
        }
      </div>
    );
  }
}

export default Gallery;
