import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import i18n from 'i18next-client';

import TopMenu from './TopMenu';

@connect(
  state => ({ i18: state.i18 }),
)
  class Ticket extends Component {
    static contextTypes = {
      store: (process.env.BROWSER) ? React.PropTypes.object.isRequired : React.PropTypes.object
    };

    componentDidMount() {
      setTimeout(() => {
        t4b({
          mode: 'cart',
          domain: 'http://tickets.alfafuture.com/'
        });
      }, 0)
    }

    render() {
      return (
        <div>
          <div className="ticket-back-overlay"></div>
          <div className="ticket-menu">
            <TopMenu />
          </div>
          <Link to="/" className="close-page"></Link>
          <div className="result-block">
            <span>Итого:</span>
            <div className="summ"><span className="t4b-cart-summary-price"></span> ₽</div>
            <span>Билетов: <span className="t4b-cart-summary-count"></span> шт</span><br />
            <a href="#" className="buy-button" data-t4b-cart-buy="true">Купить</a>
          </div>
          <div className="tickets">
            <ul>
              <li>
                <div className="ticket-top">
                  <div className="row">
                    <div className="left-col">
                      <div className="title">Стандарт</div>
                    </div>
                    <div className="right-col">
                      <ul className="props">
                        <li>
                          <img src="/assets/svg/ticket/icon1.svg" />
                        </li>
                        <li>
                          <img src="/assets/svg/ticket/icon-ball.svg" />
                        </li>
                        <li>
                          <img src="/assets/svg/ticket/icon-robot.svg" />
                        </li>
                        <li>
                          <img src="/assets/svg/ticket/icon-wifi.svg" />
                        </li>
                        <li>
                          <img src="/assets/svg/ticket/icon-camp.svg" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="features">
                    <li>все дни фестиваля</li>
                    <li>все зоны фестиваля (кроме VIP)</li>
                    <li>неограниченное количество входов и выходов</li>
                  </ul>
                </div>
                <div className="ticket-helper"><div></div></div>
                <div className="row price-row">
                  <div className="left-col">
                    <div className="summ">4 000 ₽</div>
                  </div>
                  <div className="right-col">
                    <div className="num-block t4b-container">
                      <div
                        className="t4b-counter"
                        data-t4b-counter=""
                        data-t4b-cart-counter-event="25"
                        data-t4b-cart-counter-sector="45"
                        data-t4b-cart-counter-tariff="57"
                      >
                        <a href="#" className="down_off t4b-icon-down"></a>
                        <input type="text" className="ticket-number t4b-cart-counter-input" defaultValue="0" />
                        <a href="#" className="up_off t4b-icon-up"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="ticket-top">
                  <div className="row">
                    <div className="left-col">
                      <div className="title">VIP</div>
                    </div>
                    <div className="right-col">

                      <ul className="props">
                        <li>
                          <img src="/assets/svg/ticket/icon1.svg" />
                        </li>
                        <li>
                          <img src="/assets/svg/ticket/icon-ball.svg" />
                        </li>
                        <li>
                          <img src="/assets/svg/ticket/icon-robot.svg" />
                        </li>
                        <li>
                          <img src="/assets/svg/ticket/icon-wifi.svg" />
                        </li>
                        <li>
                          <img src="/assets/svg/ticket/icon-camp.svg" />
                        </li>
                      </ul>

                    </div>
                  </div>
                  <ul className="features">
                    <li>все дни фестиваля</li>
                    <li>все зоны фестиваля</li>
                    <li>неограниченное количество входов и выходов</li>
                    <li>отдельный VIP танцпол на возвышении около главной сцены</li>
                    <li>VIP шатер с комфортабельной лаундж-зоной и разнообразным ассортиментом платных напитков в барах и специальным меню</li>
                  </ul>
                </div>
                <div className="ticket-helper"><div></div></div>
                <div className="row price-row">
                  <div className="left-col">
                    <div className="summ">7 500 ₽</div>
                  </div>
                  <div className="right-col">
                    <div className="num-block t4b-container">
                      <div
                        className="t4b-counter"
                        data-t4b-counter=""
                        data-t4b-cart-counter-event="26"
                        data-t4b-cart-counter-sector="43"
                        data-t4b-cart-counter-tariff="60"
                      >
                        <a href="#" className="down_off t4b-icon-down"></a>
                        <input type="text" className="ticket-number t4b-cart-counter-input" defaultValue="0" />
                        <a href="#" className="up_off t4b-icon-up"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }

  export default Ticket;
