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
}

@connect(
  state => ({ i18: state.i18 }),
)
  class App extends Component {
    static contextTypes = {
      store: (process.env.BROWSER) ? React.PropTypes.object.isRequired : React.PropTypes.object
    };

    scrollTo(name) {
      if(name === '/') {
        setTimeout(() => {
          smoothScroll(0);
        }, 500);
      }
    }

    componentWillMount() {
    }

    componentDidMount() {
      $('body').fadeIn();
    }

    render() {
      return (
        <div className="app-wrapper">
          <div className="sidebar">
            <Link to="/" className="sidebar-logo"></Link>
            <ul className="menu">
              {
                menuItems.map((item, key) => {
                  return (
                    <li key={key}>
                      <Link to={item.link}
                        className={this.props.location.pathname===item.link ? 'active' : ''}
                        onClick={this.scrollTo.bind(this, item.link)}>
                          {i18n.t(item.title)}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
            <Link to='/ticket' className="buy-ticket">{i18n.t('menu.buyTicket')}</Link>
          </div>
          <div className="wrapper">
            <div className="container">
              {this.props.children}
            </div>
          </div>
        </div>
      );
    }
  }

  export default App;
