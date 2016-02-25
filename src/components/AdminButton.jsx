import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import { checkAdmin } from './admin.jsx';
import { templates } from '../../common/templates.js';

if (process.env.BROWSER) {
  require('./AdminButton.less');
}

class AdminButton extends Component {
  componentWillMount() {
  }
  render() {
    if (!checkAdmin()) {
      return (<div></div>);
    }
    const url = typeof window === 'undefined' ? '' : window.location.pathname;
    const found = templates.find((item) => {
      return url.indexOf(item.url) !== -1
    });
    const id = found ? found.name : undefined;
    if (!id) {
      return (<div></div>);
    }
    const filesCount = found.files.length;
    const filesTitle = found.files.map((item, key) => `${key+1} – ${item.title}`).join('\n');

    return (
      <div className="AdminButton">
        <Link to={`/admin/template/${id}/0`}>
          <button type="button" title={filesTitle}>
            Edit {`(${filesCount})`}
          </button>
        </Link>
      </div>
    );
  }
}

AdminButton.id = '';

export default AdminButton;
