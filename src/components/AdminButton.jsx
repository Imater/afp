import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import { checkAdmin } from './admin.jsx';
import { templates } from '../../common/templates.js';

console.info(templates);

if (process.env.BROWSER) {
  require('./AdminButton.less');
}

class AdminButton extends Component {
  componentWillMount() {
    const url = typeof window === 'undefined' ? '' : window.location.pathname;
    const found = templates.find((item) => {
      return url.indexOf(item.url) !== -1
    });
    this.id = found ? found.name : undefined;
  }
  render() {
    if (!checkAdmin() || !this.id) {
      return (<div></div>);
    }

    return (
      <div className="AdminButton">
        <Link to={`/admin/template/${this.id}/0`}>
          <button type="button">Edit</button>
        </Link>
      </div>
    );
  }
}

AdminButton.id = '';

export default AdminButton;
