import React, { Component, PropTypes } from 'react';
import AvatarEditor from 'react-avatar-editor';
import $ from 'jquery';

if (process.env.BROWSER === true) {
  require('./ImagesUpload.less');
}

class ImagesUpload extends Component {
  state = {
    scale: 1.2
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
      scale: parseInt((this.state.scale + dif/10)*100, 10)/100
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
            <AvatarEditor
              ref="editor"
              image="http://localhost:3001/upload/images/news/GRwdRTnh84U.jpg"
              width={400}
              height={264}
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={this.state.scale} />
            <div>
              <button type="button" onClick={this._zoom.bind(this, -1)}>–</button>
              <button type="button" onClick={this._zoom.bind(this, 1)}>+</button>
              <span>
                {
                  `x ${this.state.scale}`
                }
              </span>
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
