import React, {Component, PropTypes} from 'react';
import ReactQuill from 'react-quill';

if (process.env.BROWSER === true) {
  require('./Editor.less');
  require('./quill.less');
}

class Editor extends Component {
  state = {
    showHtml: false
  };
  componentWillMount() {
  }

  _triggerView() {
    this.setState({
      showHtml: !this.state.showHtml
    });
  }

  render() {
    return (
      <div className="Editor">
        <button className="trigger" type="button" onClick={this._triggerView.bind(this)}>html code</button>
        {
          this.state.showHtml ? (
            <textarea className="html-code" {...this.props} />
          ) : (
            <ReactQuill theme="snow" {...this.props} />
          )
        }
      </div>
    );
  }
}

module.exports = Editor;
