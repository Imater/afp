import React, { Component, PropTypes } from 'react';
import AvatarEditor from 'react-avatar-editor';
import $ from 'jquery';

if (process.env.BROWSER === true) {
  require('./ImagesUpload.less');
}

class ImagesUpload extends Component {
  state = {
    scale: 1.05,
    width: 600,
    height: 396,
    _width: 600,
    _height: 396,
    show: false
  };
  _remove(image) {
    const { value } = this.props;
    const images = value ? JSON.parse(value) : [];
    this.props.onUpdate(JSON.stringify(images.filter((item) => {
      return item.name !== image;
    })));
  }

  onClickSave() {
    const self = this;
    var dataUrl = this.refs.editor.getImage();
    $.ajax({
      url: '/api/upload/image',
      dataType: 'json',
      data: {
        image: dataUrl
      },
      type: 'POST',
      success: function(data) {
        const { value } = self.props;
        let images = value ? JSON.parse(value) : [];
        images = images.concat({
          name: data.name
        });
        self.props.onUpdate(JSON.stringify(images));
      }
    });
  }

  _zoom(dif) {
    this.setState({
      scale: parseInt((this.state.scale + dif/20)*100, 10)/100
    });
  }

  _changeWidth(event) {
    this.setState({
      _width: event.target.value
    });
  }

  _changeHeight(event) {
    this.setState({
      _height: event.target.value
    });
  }

  _changeHeight(event) {
    this.setState({
      _height: event.target.value
    });
  }

  _toggleView() {
    this.setState({
      show: !this.state.show
    });
  }

  _applySize() {
    const safeValue = (size, maxSize) => {
      const value = parseInt(size, 10);
      return value < maxSize ? value : maxSize;
    };
    const width = safeValue(this.state._width, 800);
    const height = safeValue(this.state._height, 900);
    this.setState({
      height: height,
      width: width,
      _height: height,
      _width: width
    });
  }

  render() {
    const { value } = this.props;
    const images = value ? JSON.parse(value) : [];
    return (
      <div className="ImagesUpload">
        <div>
          {
            images.map((img, key) => {
              const image = img.name;
              return (
                <div className="imageWrapper" key={key}>
                  <img className="image" src={`/upload/images/news/${image}`} />
                  <div>
                    <button type="button" onClick={this._remove.bind(this, image)} className="remove">Удалить</button>
                  </div>
                </div>
                );
            })
          }
          </div>
          <div>
            <button type="button" onClick={this._toggleView.bind(this)}>
              {this.state.show ? 'Добавление фотографии ▼' : 'Добавление фотографии ▲'}
            </button>
          </div>
          <div className="AvatarEditor" style={{
            display: this.state.show ? 'block' : 'none'
          }}>
            <AvatarEditor
              ref="editor"
              image="/upload/images/news/c47cb7f47b5215af.jpg"
              width={this.state.width}
              height={this.state.height}
              border={50}
              color={[255, 255, 255, 0.3]} // RGBA
              scale={this.state.scale} />
            <div>
              <button type="button" onClick={this._zoom.bind(this, -1)}>–</button>
              <button type="button" onClick={this._zoom.bind(this, 1)}>+</button>
              <span>
                {
                  `x ${this.state.scale}`
                }
              </span>
              <br />
              <input className="width" value={this.state._width} onChange={this._changeWidth.bind(this)} onBlur={this._applySize.bind(this)} />
              <span>x</span>
              <input className="height" value={this.state._height} onChange={this._changeHeight.bind(this)} onBlur={this._applySize.bind(this)} />
              <div>
                <button type="button" className="green" onClick={this.onClickSave.bind(this)}>Добавить изображение</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

module.exports = ImagesUpload;
