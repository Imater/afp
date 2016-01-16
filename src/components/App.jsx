import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import i18n from 'i18next-client';
import ScrollLink from 'react-scroll';
import $ from 'jquery';

import { menuItems } from './settings';
import smoothScroll from '../utils/smoothScroll';

const SLink = ScrollLink.Link;

if (process.env.BROWSER) {
  require('../../assets/style.less');
  require('./App.less');
}

@connect(
  state => ({ i18: state.i18 }),
)
  class App extends Component {
    static contextTypes = {
      store: (process.env.BROWSER) ? React.PropTypes.object.isRequired : React.PropTypes.object
    };

    scrollTo(name) {
      $('body').removeClass('showMenu');
      if(name === '/') {
        setTimeout(() => {
          smoothScroll(0);
        }, 500);
      }
    }

    componentWillMount() {
    }

    componentDidMount() {
      $('body').show();
    }

    render() {
      return (
        <div className="app-wrapper">
          <div className="sidebar">
            <Link to="/" className="sidebar-logo" onClick={() => {
              if (typeof document !== 'undefined') {
                smoothScroll(0);
              }
            }}></Link>
          <div className="closeButton" onClick={() => {
            $('body').removeClass('showMenu');
          }}>
            <span>{i18n.t('menu.close')}</span>
            <Link to="/" className="sidebar-logo mini" onClick={() => {
              if (typeof document !== 'undefined') {
                smoothScroll(0);
              }
            }}></Link>
          </div>
            <ul className="menu">
              {
                menuItems.map((item, key) => {
                  return (
                    <li key={key}>
                      <Link to={item.url}
                        className={this.props.location.pathname.indexOf(item.url) !== -1 ? 'active' : ''}
                        onClick={this.scrollTo.bind(this, item.url)}>
                          {i18n.t(item.title)}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
            <Link to='/ticket' className="buy-ticket">{i18n.t('menu.buyTicket')}</Link>
            <a href='http://alfafuture.com/tickets.html' target='blank' className="buy-ticket">{i18n.t('menu.buyTicket')}</a>
          </div>
          <div className="wrapper">
            <div className="container">
              <div className="topMobileMenu" onClick={() => {
                $('body').addClass('showMenu');
              }}><span className="menuButton">{i18n.t('menu.menu')}</span></div>
              {this.props.children}
            </div>
          </div>
        </div>
      );
    }
  }

  export default App;
