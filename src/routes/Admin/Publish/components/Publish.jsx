import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';


if (process.env.BROWSER === true) {
  require('./Publish.less');
}

class Progress extends Component {
  render() {
    let { procent } = this.props;
    procent = parseInt(procent*10, 10)/10;
    return (
      <div style={{
        backgroundColor: '#FFF',
        margin: '20 0',
        fontSize: 10,
        height: 5
      }}>
        <div style={{
          width: `${procent}%`,
          backgroundColor: 'red',
          height: 5
        }}>
        </div>
        {`${procent} %`}
      </div>
    );
  }
}

class Publish extends Component {
  state = {
    text: '',
    progress: 0,
    result: 'Нажмите кнопку, чтобы опубликовать изменения на основном сайте'
  }

  startBuild() {
    const self = this;

    const tm = setInterval(this.refreshProgress.bind(this), 4000);
    const tmSmooth = setInterval(this.refreshProgressSmooth.bind(this), 200);
    const stopRefresh = () => {
      clearInterval(tm);
      clearInterval(tmSmooth);
    };

    $.ajax({
      url: `/rebuild`,
      dataType: 'json',
      data: {
      },
      type: 'GET',
      success: function(data) {
        console.info(data);
        stopRefresh();
        self.setState({
          result: JSON.stringify(data, null, '  '),
          progress: 100,
        })
      }
    });
    this.setState({
      result: 'Ожидайте около 40 секунд, проект публикуется...'
    });
  }

  refreshProgressSmooth() {
    const self = this;
    if(this.state.progress >= 98) {
      return;
    }
    self.setState({
      progress: this.state.progress + 0.1
    });
  }

  refreshProgress() {
    const self = this;
    $.ajax({
      url: `/progress`,
      dataType: 'json',
      data: {
      },
      type: 'GET',
      success: function(data) {
        let percentage = data.percentage;
        if(self.state.progress == data.percentage) {
          percentage += 0.1;
        }
        self.setState({
          progress: percentage
        })
      }
    });
  }

  render() {
    return (
      <div className="Publish">
          <button
            type="button"
            className="red"
            onClick={this.startBuild.bind(this)}
          >
            Опубликовать изменения все изменения на основном сайте
          </button>
          <Progress procent={this.state.progress} />
          <textarea className="result" value={this.state.result}></textarea>
      </div>
    );
  }
}

module.exports = Publish;
