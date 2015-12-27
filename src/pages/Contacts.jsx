import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { contactItems, typesSport, mainSport, partners } from '../components/settings';
import Footer from '../components/Main/Footer';

if (process.env.BROWSER) {
  require('./Contacts.less');
}

const persons = [
  {
    name: 'Екатерина Осадчая',
    job: 'Директор по работе со спонсорами и партнерами',
    email: 'EOsadchaya@alfabank.ru'
  },
  {
    name: 'Денис Кожаев',
    job: 'Вопросы по фудкорту',
    email: 'DKozhaev@alfabank.ru'
  },
  {
    name: 'Анастасия Ярынич',
    job: 'Вопросы по зоне технологий и PR',
    email: 'AYarynich@alfabank.ru'
  },
  {
    name: 'Анастасия Макарчукова',
    job: 'Вопросы по зоне спорта',
    email: 'AMakarchukova@alfabank.ru'
  }
]

class Contacts extends Component {
  render() {
    const { language } = this.props;
    const types = typesSport;
    const main = typesSport;
    return (
      <div className="page Contacts">
        <div className="page-block">
        </div>
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
              persons.map((person, keyPerson) => {
                return (
                  <div className='personWrapper' key={keyPerson}>
                    <div className='name'>{person.name}</div>
                    <div className='job'>{person.job}</div>
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
