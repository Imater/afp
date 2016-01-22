import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { faqItems } from '../components/settings';
import Footer from '../components/Main/Footer';

if (process.env.BROWSER) {
  require('./Faq.less');
}

class Faq extends Component {

  render() {
    const { language } = this.props;
    return (

      <div className="Faq">

        <div className="Faq-inner">
          <div className="content">
            {
              faqItems.map((faqItem, index) => {
                return (
                  <li className="item" key={index}>
                    <h3 className="heading">
                      {faqItem[language === 'eng' ? 'heading_eng' : 'heading']}
                    </h3>
                    <h4 className="title">
                      {faqItem[language === 'eng' ? 'title_eng' : 'title']}
                    </h4>

                    <div className="text" dangerouslySetInnerHTML={{
                      __html: faqItem[language === 'eng' ? 'text_eng' : 'text']
                    }}></div>
                  </li>
                );
              })
            }
          </div>

          { /*
          <form className="form">
            <h3 className="heading">{i18n.t('faq.form.title')}</h3>

            <div className="field">
              <input type="text" className="input" defaultValue={i18n.t('faq.form.subject')}/>
            </div>
            <div className="field">
              <label for="email" className="label">{i18n.t('faq.form.email')}</label>
              <input id='email' type="email" className="input"/>
            </div>
            <div className="field">
              <textarea className="input textarea" placeholder={i18n.t('faq.form.question')}></textarea>
            </div>
            <div className="field">
              <label className='label'>
                <input type="checkbox"/>
                {i18n.t('faq.form.subscribe')}
              </label>
            </div>
            <input type="submit" className='submit' defaultValue={i18n.t('faq.form.submit')}/>
          </form>
          */
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default Faq;
