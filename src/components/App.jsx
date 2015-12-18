import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import i18n from 'i18next-client';

@connect(
  state => ({ i18: state.i18 }),
)
  class App extends Component {
    static contextTypes = {
      store: (process.env.BROWSER) ? React.PropTypes.object.isRequired : React.PropTypes.object
    };

    componentWillMount() {
    }

    render() {
      return (
        <div className="app-wrapper">
          <div className="sidebar">
            <a href="/" className="sidebar-logo"></a>
            <ul className="menu">
              <li><a href="#">о фестивале</a></li>
              <li><a href="#">line-up</a></li>
              <li><a href="#">технологии</a></li>
              <li><a href="#">спорт</a></li>
              <li><a href="#">новости</a></li>
              <li><a href="#">партнеры</a></li>
              <li><a href="#">медиа</a></li>
              <li><a href="#">контакты</a></li>
            </ul>
            <a href="#" className="buy-ticket">Купить билет</a>
          </div>
          <div className="wrapper">
            <div className="container">
              Hello
              {this.props.children}
            </div>
          </div>
        </div>
      );
    }
  }

  export default App;
