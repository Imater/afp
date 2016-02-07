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
import AdminButton from '../components/AdminButton';

if (process.env.BROWSER) {
  require('./Contacts.less');
}


class Contacts extends Component {
  render() {
    let mapAddress = false ? (
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
    ) : (<div></div>);
    const { language } = this.props;
    return (
      <div className="page Contacts">
        <AdminButton />
        {mapAddress}
        <div className="row">
        </div>
        <div className="items">
          <div className="row item" style={{
            display: 'none'
          }}>
            <div className="addressName">
              {i18n.t('contacts.addressName')}:
            </div>
            <div className="address">
              {i18n.t('contacts.address')}
            </div>
          </div>
          <div className="row item">
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
          <div className="row item">
            <div className="addressName">
              {i18n.t('contacts.restEmail')}
            </div>
            <div className="address">
              <a href={`mailto:${i18n.t('contacts.restEmailInfo')}`} target='blank' className='email'>{i18n.t('contacts.restEmailInfo')}</a>
            </div>
            <div className="phones">
              {i18n.t('contacts.phone1')}
            </div>
            <div className="phones">
              {i18n.t('contacts.phone2')}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contacts;
