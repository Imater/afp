import React, { Component, PropTypes } from 'react';
import EditDjForm from './EditDjForm';
import { merge } from 'lodash';
import $ from 'jquery';

class EditDj extends Component {
  componentWillMount() {
    this.props.loadDjs();
  }

  handleUpdateSubmit(data) {
    let newDj = _.merge(this.dj.toJS(), data);
    if(!newDj.images) {
      newDj.images = '[]';
    }
    const images = JSON.parse(newDj.images);
    newDj.image = images.length > 0 ? images[0].name : '';
    const self = this;
    $.ajax({
      url: '/api/dj/update/'+newDj.id,
      dataType: 'json',
      data: {
        dj: newDj
      },
      type: 'POST',
      success: function(data) {
        self.props.loadDjs();
        self.props.history.pushState(null, '/lineup');
      }
    });
  }

  deleteDj(data) {
    if(!confirm('Вы действительно хотите удалить dj?')) {
      return;
    }
    const newDj = _.merge(this.dj.toJS(), data);
    const self = this;
    $.ajax({
      url: '/api/dj/delete/'+newDj.id,
      dataType: 'json',
      data: {
      },
      type: 'DELETE',
      success: function(data) {
        self.props.loadDjs();
        self.props.history.pushState(null, '/lineup');
      }
    });
  }

  handleAddSubmit(data) {
    let newDj = _.merge(this.djNew, data);
    if(!newDj.images) {
      newDj.images = '[]';
    }
    const images = JSON.parse(newDj.images);
    newDj.image = images.length > 0 ? images[0].name : '';
    const self = this;
    $.ajax({
      url: '/api/dj/add',
      dataType: 'json',
      data: {
        dj: newDj
      },
      type: 'PUT',
      success: function(data) {
        self.props.loadDjs();
        self.props.history.pushState(null, '/lineup');
      }
    });
  }

  render() {
    const { params: { id }, listData } = this.props;

    this.dj = listData.get('djs').find((item) => {
      return item.get('id') == id;
    });

    if(id === 'add') {
      this.djNew = {
        image: '',
        images: '[]',
        year: '',
        top: '',
        title: '',
        title_eng: '',
        preview: '',
        preview_eng: '',
        description: '',
        description_eng: '',
        order: '',
        stage: '1',
        visible: false
      };
      return (
        <div>
          <EditDjForm dj={this.djNew} onSubmit={this.handleAddSubmit.bind(this)} />
        </div>
      );
    }

    if(!this.dj) {
      return (
        <h1>Новость не найдена</h1>
      );
    }
    let djJs = this.dj.toJS();
    djJs.images = JSON.stringify([{
      name: djJs.image
    }])
    djJs.visible = djJs.visible === 1;

    return (
      <div>
        <EditDjForm dj={djJs} deleteDj={this.deleteDj.bind(this)} onSubmit={this.handleUpdateSubmit.bind(this)} />
      </div>
    );
  }
}

module.exports = EditDj;
