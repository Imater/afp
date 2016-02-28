import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import { templates } from '../../../../../common/templates.js';

let AceEditor = class Empty extends Component {
  render() {
    return <div></div>;
  }
};

if (process.env.BROWSER === true) {
  AceEditor = require('react-ace');
  require('./EditTemplate.less');
  require('brace');
  require('brace/mode/javascript');
  require('brace/mode/less');
  require('brace/mode/jsx');
  require('brace/theme/github');
}

class EditTemplate extends Component {
  state = {
    text: '',
  }

  findTemplate() {
    return templates.find((item) => {
      return item.name === this.props.params.id
    });
  }

  loadTemplate() {
    const self = this;
    $.ajax({
      url: `/api/admin/template?id=${this.props.params.id}&index=${this.props.params.index}`,
      dataType: 'json',
      data: {
      },
      type: 'GET',
      success: function(data) {
        self.setState({
          text: data.template
        })
      }
    });
  }

  saveTemplate() {
    const self = this;
    $.ajax({
      url: `/api/admin/template?id=${this.props.params.id}&index=${this.props.params.index}`,
      dataType: 'json',
      data: {
        template: this.state.text
      },
      type: 'POST',
      success: function(data) {
      }
    });
  }

  _clickSave() {
    const errors = $('.ace_error').length;
    if(errors > 0) {
      alert(`Нужно исправить ${errors} ошибок`);
      return;
    }
    this.saveTemplate.bind(this)();
  }

  componentWillMount() {
    if (typeof window === 'undefined') {
      return;
    }
    this.loadTemplate();
  }

  _onChange (newText) {
    this.setState({
      text: newText
    });
  }

  componentWillReceiveProps() {
    if (typeof window === 'undefined') {
      return;
    }
    setTimeout(()=>{
      this.loadTemplate();
    })
  }

  render() {
    const template = this.findTemplate();
    const file = template.files[parseInt(this.props.params.index, 10)];
    return (
      <div className="EditTemplate">
        <button type="button" className="red right" onClick={this._clickSave.bind(this)}>Опубликовать все изменения на основном сайте</button>
        <ul className="menu">
        {
          template.files.map((el, key) => {
            const path = `/admin/template/${template.name}/${key}`;
            return (
              <li key={key}>
                <Link to={path} activeClassName='active'>
                  {el.title}
                </Link>
              </li>
            )
          })
        }
        </ul>
        <AceEditor
          mode={file.type}
          theme="github"
          width="100%"
          height="800px"
          fontSize={12}
          value={this.state.text}
          onChange={this._onChange.bind(this)}
          wrapEnabled={true}
          name="CodeEditor"
          editorProps={{
            $blockScrolling: true,
          }}
        />
        <button type="button" onClick={this._clickSave.bind(this)}>Сохранить</button>
      </div>
    );
  }
}

module.exports = EditTemplate;
