import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import i18n from 'i18next-client';
import smoothScroll from '../utils/smoothScroll';
import $ from 'jquery';
import cx from 'classnames';

if (process.env.BROWSER) {
  require('./TopPageMenu.less');
}

function scrollTo(name) {
  return () => {
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        let scrollToElement = $(`#${name}`);
        if(scrollToElement.length) {
          smoothScroll(scrollToElement.offset().top - $('.top-page-menu').height() - 10, 1000);
        } else {
          console.error(`${name} element not found for scroll`);
        }
      })
    }
  }
}

class TopPageMenu extends Component {
  static contextTypes = {
    store: (process.env.BROWSER) ? React.PropTypes.object.isRequired : React.PropTypes.object
  };
  render() {
    const { language } = this.props;
    return (
      <div className={cx('top-page-menu', {fixed: this.props.fixed})}>
        <ul>
          {
            this.props.items.map((item, key) => {
              const title = item[language === 'eng' ? 'title_eng': 'title'];
              if(!title) {
                return;
              }
              return (
                <li data-num={key} key={key}>
                  <Link to={`${item.url}`} activeClassName="active" onClick={() => {
                    scrollTo(item.anchor)();
                    console.info('scrollTo', item.anchor);
                  }}>{title}</Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default TopPageMenu;
