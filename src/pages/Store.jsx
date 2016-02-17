import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { store, storePartners } from '../components/settings';
import Footer from '../components/Main/Footer';

if (process.env.BROWSER) {
  require('./Store.less');
}

class Store extends Component {

  render() {
    const { language } = this.props;
    return (

      <div className="page Store">
        {this.props.children}
        <div className="page-block storeTop" style={{
          backgroundImage: `url(/assets/img/store/${store.image})`
         }}>
         <div className="inner">
            <h2 dangerouslySetInnerHTML={{__html: store[language === 'eng' ? 'title_eng' : 'title']}}></h2>
           <p>{store[language === 'eng' ? 'desc_eng' : 'desc']}</p>
           <Link to="/store/0" className="btn">
             <img src="/assets/img/store/icon-photos.svg" width="18" height="18"/>
             <span className="white">{store[language === 'eng' ? 'button_eng' : 'button']}</span>
           </Link>
         </div>
        </div>
        <div className="row">
          <ul className="storePartners">
            {
              storePartners.map((partner, index) => {
                return (
                  <li className="storePartner" key={index} id={partner.name}>
                    <img src={`/assets/img/store/${partner.logo}`} width="100" className="logo"/>
                    <h3 className="title">{partner[language === 'eng' ? 'title_eng': 'title']}</h3>
                    <a className="more" target='blank' href={`http://${partner.url}`}>{partner.urlShort ? partner.urlShort : partner.url}</a>
                    <p className="desc" dangerouslySetInnerHTML={{__html: partner[language === 'eng' ? 'desc_eng': 'desc']}}></p>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Store;

