import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

let AceEditor;

if (process.env.BROWSER === true) {
  AceEditor = require('react-ace');
  require('./EditTemplate.less');
  require('brace');
  require('brace/mode/javascript');
  require('brace/theme/github');
}

class EditTemplate extends Component {
  state = {
    text: ''
  }

  loadTemplate() {
    const self = this;
    $.ajax({
      url: '/api/admin/template?id=menuItems',
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
      url: '/api/admin/template?id=menuItems',
      dataType: 'json',
      data: {
        template: this.state.text
      },
      type: 'POST',
      success: function(data) {
        self.setState({
          text: data.template
        })
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
    this.loadTemplate()
  }

  _onChange (newText) {
    this.setState({
      text: newText
    });
  }

  render() {
    return (
      <div className="EditTemplate">
        <h2>Шаблон для страницы Sport</h2>
        <AceEditor
          mode="javascript"
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
