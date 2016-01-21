import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import i18n from 'i18next-client';

class TopMenu extends Component {
  render() {
    return (
      <div className="ticket-menu">
        <ul>
          <li className="" data-num="1">
            <Link to="/ticket" activeClassName="active"><b>1</b>Выбор билетов</Link>
          </li>
          {
            /*
              <li data-num="2">
                <Link to="/ticket/personal" activeClassName="active"><b>2</b>Личные данные</Link>
              </li>
              <li className="active" data-num="3">
                <Link to="/ticket/buy" activeClassName="active"><b>3</b>Оплата</Link>
              </li>
              <li data-num="4">
                <Link to="/ticket/status" activeClassName="active"><b>4</b>Статус платежа</Link>
              </li>
            */
          }
        </ul>
      </div>
    );
  }
}

export default TopMenu;
