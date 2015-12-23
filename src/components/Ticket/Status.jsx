import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import i18n from 'i18next-client';

import TopMenu from './TopMenu';

@connect(
  state => ({ i18: state.i18 }),
)
  class Status extends Component {
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
          <div className="tickets" style={{
            height: '100%'
          }}>
            <h2>Оплата прошла успешно</h2>
          </div>
        </div>
      );
    }
  }

  export default Status;
