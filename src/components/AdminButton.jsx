import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import { checkAdmin } from './admin.jsx';

if (process.env.BROWSER) {
  require('./AdminButton.less');
}

class AdminButton extends Component {
  render() {
    if (!checkAdmin()) {
      return (<div></div>);
    }

    return (
      <div className="AdminButton">
        <button type="button">Edit</button>
      </div>
    );
  }
}

export default AdminButton;
