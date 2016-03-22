import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import { partners, partnerItems } from '../settings/partners';


class Partner extends Component {
  state = {
    year: '2016'
  };

  _changeYear(year) {
    this.setState({
      year: year
    });
  }

  render() {
    const language = this.props.language === 'eng' ? '_eng' : '';
    const year = this.state.year;
    return (
      <div className="page news-page" id="partners">
        <div className="row">
          <div className="left-col padding-left-50">
            <div className="col-title">
              <span>{i18n.t('about.partners')}</span>
              <br />
              {
                partnerItems.map((item, key) => (
                  <a key={key}
                    href="javascript:void(0)"
                    onClick={this._changeYear.bind(this, item.title)}
                    className={item.title === year ? 'active' : ''}>
                    { item.title }
                  </a>
                ))
              }
            </div>
          </div>
          <div className="right-col padding-right-40 text-right">
            <Link to="/partners" className="transparent-button">
              <span>{i18n.t('about.allPartners')}</span>
            </Link>
          </div>
        </div>
        <div className="">
          <ul className="partners-list">
            {
              partners.map((partner, index) => {
                if(partner[`title${language}`] === '' || partner.years.indexOf(year) === -1) {
                  return <span key={index} ></span>;
                }
                return (
                  <li className="partner-item" key={index}>
                    <Link to={`/partners/main#${partner.name}`}>
                      <img
                        src={`/assets/svg/partner-new/${partner.logo}`}
                        className={`partnerImage ${partner.name}`}
                        style={{
                          transform: `scale(${partner.zoom ? partner.zoom : 1})`
                        }}
                      />
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Partner;
