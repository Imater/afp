import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { personList } from '../components/settings';
import Footer from '../components/Main/Footer';
import Map from '../components/Map';

if (process.env.BROWSER) {
  require('./Contacts.less');
}


class Contacts extends Component {
  render() {
    const { language } = this.props;
    return (
      <div className="page Contacts">
        <Map center={
          {lat: 55.694488, lng: 37.662083}
        } markers={[
          {
            position: {
              lat: 55.694488, lng: 37.662083
            },
            defaultAnimation: 2,
            title: language === 'eng' ? 'Moscow, Andropov prospect, 18, building 3' : 'Москва, проспект Андропова 18 стр. 3',
            label: 'Afp',
            clickable: true
          }
        ]}/>
        <div className="row">
        </div>
        <div className="page-text">
          <div className="row">
            <div className="addressName">
              {i18n.t('contacts.addressName')}:
            </div>
            <div className="address">
              {i18n.t('contacts.address')}
            </div>
          </div>
          <div className="row">
            {
              personList.map((person, keyPerson) => {
                return (
                  <div className='personWrapper' key={keyPerson}>
                    <div className='name'>{person[language === 'eng' ? 'name_eng' : 'name']}</div>
                    <div className='job'>{person[language === 'eng' ? 'job_eng' : 'job']}</div>
                    <a href={`mailto:${person.email}`} target='blank' className='email'>{person.email}</a>
                  </div>
                );
              })
            }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contacts;
