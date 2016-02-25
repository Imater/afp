import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { storeImages } from '../components/settings/store';
import Footer from '../components/Main/Footer';
import $ from 'jquery'

if (process.env.BROWSER) {
  require('./StoreImage.less');
}


class Partners extends Component {

  componentWillMount () {
    if (typeof window !== 'undefined') {
     $('body').addClass('overflow-hidden');
    }
   }
   componentWillUnmount () {
     $('body').removeClass('overflow-hidden');
   }

  render() {
    let { language, params: { index } } = this.props;
    index = parseInt(index, 10);
    const prevIndex = index > 0 ? index - 1 : 0;
    const nextIndex = index < storeImages.length-1 ? index + 1 : storeImages.length-1;
    return (
      <div className="Popup StoreImage">
        <div className="wrap" onClick={() => {
            this.props.history.replaceState(null, `/store`);
          }}></div>
        <div className="block">
          <a href="javascript:void();" className="close" onClick={() => {
            this.props.history.replaceState(null, `/store`);
          }}></a>
          <div className="controls">
            <Link to={`/store/${prevIndex}`}><img src="/assets/svg/left-arrow.svg"/></Link>
            <Link to={`/store/${nextIndex}`}><img src="/assets/svg/right-arrow.svg"/></Link>
          </div>
          <div>
            <img className='photo' src={`/assets/img/store/clothes/${storeImages[index].image}`} />
            <div className="storesLogo">
              <Link to={storeImages[index].link1} target='_blank'><img src="/assets/img/store/logo-mimoda.svg"/></Link>
              <Link to={storeImages[index].link2} target='_blank'><img src="/assets/img/store/logo-acidwear.svg"/></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
