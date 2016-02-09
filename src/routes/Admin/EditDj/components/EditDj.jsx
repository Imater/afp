import React, { Component, PropTypes } from 'react';
import EditDjForm from './EditDjForm';
import { merge } from 'lodash';
import $ from 'jquery';

class EditDj extends Component {
  componentWillMount() {
    this.props.loadDjs();
  }

  handleUpdateSubmit(data) {
    //let newDjs = _.merge(this.djs.toJS(), data);
    //if(!newDjs.images) {
    //  newNews.images = '[]';
    //}
    //const self = this;
    //$.ajax({
    //  url: '/api/news/update/'+newNews.item_id,
    //  dataType: 'json',
    //  data: {
    //    news: newNews
    //  },
    //  type: 'POST',
    //  success: function(data) {
    //    self.props.loadNews();
    //    self.props.history.pushState(null, '/news/main?admin=afp990990');
    //  }
    //});
  }

  deleteNews(data) {
    //if(!confirm('Вы действительно хотите удалить новость?')) {
    //  return;
    //}
    //const newNews = _.merge(this.news.toJS(), data);
    //const self = this;
    //$.ajax({
    //  url: '/api/news/delete/'+newNews.item_id,
    //  dataType: 'json',
    //  data: {
    //  },
    //  type: 'DELETE',
    //  success: function(data) {
    //    self.props.loadNews();
    //    self.props.history.pushState(null, '/news/main?admin=afp990990');
    //  }
    //});
  }

  handleAddSubmit(data) {
    //let newNews = _.merge(this.newsNew, data);
    //if(!newNews.images) {
    //  newNews.images = JSON.stringify([]);
    //}
    //const self = this;
    //$.ajax({
    //  url: '/api/news/add',
    //  dataType: 'json',
    //  data: {
    //    news: newNews
    //  },
    //  type: 'PUT',
    //  success: function(data) {
    //    self.props.loadNews();
    //    self.props.history.pushState(null, '/news/main?admin=afp990990');
    //  }
    //});
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
      const djNewJs = this.dj.toJS();
      return (
        <div>
          <EditDjForm dj={djNewJs} onSubmit={this.handleAddSubmit.bind(this)} />
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

    return (
      <div>
        <EditDjForm dj={djJs} deleteNews={this.deleteNews.bind(this)} onSubmit={this.handleUpdateSubmit.bind(this)} />
      </div>
    );
  }
}

module.exports = EditDj;
