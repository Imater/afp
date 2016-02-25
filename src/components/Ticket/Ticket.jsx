import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import i18n from 'i18next-client';
import { tickets } from '../settings.jsx';
import $ from 'jquery';

import TopMenu from './TopMenu';

const icons = {};

if (process.env.BROWSER) {
  require('./Ticket.less');
}

@connect(
  state => ({i18: state.i18}),
)
class Ticket extends Component {
  static contextTypes = {
    store: (process.env.BROWSER) ? React.PropTypes.object.isRequired : React.PropTypes.object
  };

  componentDidMount() {
    let done = false;
    let tm;
    let count = 0;

    const init = () => {
      if (!$('.t4b-icon-up').length || typeof t4b === 'undefined') {
        count++;
        tm = setTimeout(() => {
          init();
        }, 20);
        return;
      }
      t4b({
        mode: 'cart',
        domain: 'http://tickets.afp.ru/'
      });
      done = true;
      clearInterval(tm);
    };

    tm = setTimeout(() => {
      init();
    }, 200);
  }

  renderIcons(ticket) {
    return (
      <ul className="props">
        {
          ticket.icons.map((icon, key) => {
            return (
              <li key={key}>
                <img src={`/assets/svg/ticket/${icon}`}/>
              </li>
            );
          })
        }
      </ul>
    );
  }

  renderFeatures(ticket) {
    const lang = this.props.language === 'eng' ? '_eng' : '';
    return (
      <ul className="features">
        {
          ticket.features.map((feature, key) => {
            return (
              <li key={key}>{feature['title' + lang]}</li>
            );
          })
        }
      </ul>
    );
  }

  renderTicket(ticket, key) {
    const lang = this.props.language === 'eng' ? '_eng' : '';
    return (
      <li key={key}>
        <div className="ticket-top">
          <div className="row">
            <div className="left-col">
              <div className="title">{ticket['title' + lang]}</div>
            </div>
            <div className="right-col">
              {
                this.renderIcons(ticket)
              }
            </div>
          </div>
          <div className="ticket-text">
            {ticket['text' + lang]}
          </div>
          {
            this.renderFeatures(ticket)
          }
          <div className="ticket-comment">
            {ticket['comment' + lang]}
          </div>
        </div>
        <div className="ticket-helper">
          <div></div>
        </div>
        <div className="row price-row">
          <div className="left-col t4b-price">
            <div className="summ">{ticket.cost} ₽</div>
          </div>
          {
            ticket.enabled ? (
              <div className="right-col">
                <div className="num-block t4b-container">
                  <div
                    className="t4b-counter"
                    data-t4b-counter=""
                    data-t4b-cart-counter-event={ticket.t4bCart.event}
                    data-t4b-cart-counter-sector={ticket.t4bCart.sector}
                    data-t4b-cart-counter-tariff={ticket.t4bCart.tariff}
                  >
                    <a href="#" className="down t4b-icon-down">-</a>
                    <input type="text"
                           className="ticket-number t4b-cart-counter-input"
                           readOnly defaultValue="0"/>
                    <a href="#" className="up t4b-icon-up">+</a>
                  </div>
                </div>
              </div>
            ) : ''
          }
        </div>
      </li>
    );
  }

  render() {
    return (
      <div className="Ticket">
        <div className="ticket-back-overlay"></div>
        <Link to="/" className="close-page"></Link>
        <div className="result-block">
          <div className="t4b-cart-summary t4b-hidden">
              <span>{i18n.t('ticket.itog')}</span>
              <div className="summ"><span className="t4b-cart-summary-price"></span>
                ₽
              </div>
              <span>{i18n.t('ticket.tickets')} <span
                className="t4b-cart-summary-count"></span> {i18n.t('ticket.sht')}</span><br />
              <a href="#" className="buy-button"
                 data-t4b-cart-buy="true">{i18n.t('ticket.buy')}</a>
          </div>
          <div className="phone-block">
            <div className="bordered">
              <div
                dangerouslySetInnerHTML={{__html: i18n.t('ticket.phone')}}
              ></div>
              <div><b>+7 (495) 909 98 93</b></div>
            </div>
          </div>
        </div>
        <div className="tickets">
          <h2>{i18n.t('ticket.title')}</h2>
          <ul>
            {
              tickets.map(this.renderTicket.bind(this))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Ticket;
