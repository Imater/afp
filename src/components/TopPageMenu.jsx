import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./TopPageMenu.less');
}

class TopPageMenu extends Component {
  static contextTypes = {
    store: (process.env.BROWSER) ? React.PropTypes.object.isRequired : React.PropTypes.object
  };
  render() {
    const { language } = this.props;
    return (
      <div className="top-page-menu">
        <ul>
          {
            this.props.items.map((item, key) => {
              const title = item[language === 'eng' ? 'title_eng': 'title'];
              if(!title) {
                return;
              }
              return (
                <li data-num={key} key={key}>
                  <Link to={`${item.url}`} activeClassName="active">{title}</Link>
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
