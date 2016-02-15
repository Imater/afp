import React, { Component, PropTypes } from 'react';
import EditMediaForm from './EditMediaForm';
import { merge } from 'lodash';
import $ from 'jquery';

class EditMedia extends Component {
  componentWillMount() {
    this.props.loadGallery();
  }

  handleUpdateSubmit(data) {
    let newMedia = _.merge(this.media.toJS(), data);
    if(!newMedia.images) {
      newMedia.images = [];
    }
    const self = this;
    $.ajax({
      url: '/api/media/update/'+this.media.get('gallery_id'),
      dataType: 'json',
      data: {
        media: newMedia
      },
      type: 'POST',
      success: function(data) {
        self.props.loadGallery();
        self.props.history.pushState(null, '/media');
      }
    });
  }

  deleteMedia(data) {
    //if(!confirm('Вы действительно хотите удалить dj?')) {
    //  return;
    //}
    //const newDj = _.merge(this.dj.toJS(), data);
    //const self = this;
    //$.ajax({
    //  url: '/api/dj/delete/'+newDj.id,
    //  dataType: 'json',
    //  data: {
    //  },
    //  type: 'DELETE',
    //  success: function(data) {
    //    self.props.loadDjs();
    //    self.props.history.pushState(null, '/lineup');
    //  }
    //});
  }

  handleAddSubmit(data) {
    //let newDj = _.merge(this.djNew, data);
    //if(!newDj.images) {
    //  newDj.images = '[]';
    //}
    //const images = JSON.parse(newDj.images);
    //newDj.image = images.length > 0 ? images[0].name : '';
    //const self = this;
    //$.ajax({
    //  url: '/api/dj/add',
    //  dataType: 'json',
    //  data: {
    //    dj: newDj
    //  },
    //  type: 'PUT',
    //  success: function(data) {
    //    self.props.loadDjs();
    //    self.props.history.pushState(null, '/lineup');
    //  }
    //});
  }

  render() {
    const { params: { id }, listData } = this.props;

    this.media = listData.get('gallery').find((item) => {
      return item.get('gallery_id') == id;
    });

    if(id === 'add') {
      this.mediaNew = {
        image: '',
        images: '[]',
        name: '',
        name_eng: '',
        year: 'AFP2016',
        pos: '',
        video: false,
        enabled: false
      };
      return (
        <div>
          <EditMediaForm media={this.mediaNew} onSubmit={this.handleAddSubmit.bind(this)} />
        </div>
      );
    }

    if(!this.media) {
      return (
        <h1>Галерея не найдена</h1>
      );
    }
    let mediaJs = this.media.toJS();
    mediaJs.visible = mediaJs.visible === 1;

    return (
      <div>
        <EditMediaForm media={mediaJs} deleteMedia={this.deleteMedia.bind(this)} onSubmit={this.handleUpdateSubmit.bind(this)} />
      </div>
    );
  }
}

module.exports = EditMedia;
