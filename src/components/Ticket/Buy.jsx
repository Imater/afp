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

    componentWillMount() {
    }

    render() {
      return (
        <div>
          <div className="ticket-back-overlay"></div>
          <div className="ticket-menu">
            <TopMenu />
          </div>
          <a href="#" className="close-page"></a>
          <div className="tickets">
					<ul>
						<li className="big">
							<div className="two-step">
								<div className="row two-step-row">
									<div className="left-col">
										<div className="two-step-title">Итого за 3 билета:</div>
										<ul>
											<li>Стандарт: 2</li>
											<li>VIP: 1</li>
										</ul>
									</div>
									<div className="right-col">
										<div className="price">13 500 ₽</div>
									</div>
								</div>
								<div className="ticket-helper"><div></div></div>
								<form action="" className="card-form">
									<div className="row">
										<div className="two-step-title">Карты банков России и СНГ</div>
									</div>
									<div className="row cards-row">
										<div className="face">
                      <input type="text" placeholer="0000" />
                      <input type="text" placeholer="0000" />
                      <input type="text" placeholer="0000" />
                      <input type="text" placeholer="0000" />
                      <input type="text" placeholer="cardholder name" className="card-name" />
                      <input type="text" placeholer="00/00" className="card-cvv" />
										</div>
										<div className="back">
											<div></div>
                      <input type="text" />
										</div>
									</div>
									<div className="row">
										<div className="row">
											<div className="left-col pr-40">
                        <img src="/assets/svg/ticket/master-card.svg" />
                        <img src="/assets/svg/ticket/visa-card.svg" />
											</div>
											<div className="right-col pr-60">
												<a href="#" className="buy-button">Перейти к оплате</a>
											</div>
										</div>
									</div>
								</form>
							</div>
						</li>
					</ul>
				</div>
        </div>
      );
    }
  }

  export default Ticket;
