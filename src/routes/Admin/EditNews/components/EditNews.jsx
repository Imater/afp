import React, { Component, PropTypes } from 'react';
import EditNewsForm from './EditNewsForm';
import { merge } from 'lodash';
import $ from 'jquery';

class EditNews extends Component {
  componentWillMount() {
    this.props.loadNews();
  }

  handleUpdateSubmit(data) {
    let newNews = _.merge(this.news.toJS(), data);
    if(!newNews.images) {
      newNews.images = '[]';
    }
    const self = this;
    $.ajax({
      url: '/api/news/update/'+newNews.item_id,
      dataType: 'json',
      data: {
        news: newNews
      },
      type: 'POST',
      success: function(data) {
        self.props.loadNews();
        self.props.history.pushState(null, '/news/main?admin=afp990990');
      }
    });
  }

  deleteNews(data) {
    if(!confirm('Вы действительно хотите удалить новость?')) {
      return;
    }
    const newNews = _.merge(this.news.toJS(), data);
    const self = this;
    $.ajax({
      url: '/api/news/delete/'+newNews.item_id,
      dataType: 'json',
      data: {
      },
      type: 'DELETE',
      success: function(data) {
        self.props.loadNews();
        self.props.history.pushState(null, '/news/main?admin=afp990990');
      }
    });
  }

  handleAddSubmit(data) {
    let newNews = _.merge(this.newsNew, data);
    if(!newNews.images) {
      newNews.images = JSON.stringify([]);
    }
    const self = this;
    $.ajax({
      url: '/api/news/add',
      dataType: 'json',
      data: {
        news: newNews
      },
      type: 'PUT',
      success: function(data) {
        self.props.loadNews();
        self.props.history.pushState(null, '/news/main?admin=afp990990');
      }
    });
  }

  render() {
    const { params: { id }, listData } = this.props;

    if(id === 'add') {
      this.newsNew = {
        title: '',
        title_eng: '',
        content: '',
        content_eng: '',
        description: '',
        description_eng: '',
        enabled: false,
        images: '[]',
        group_name: 'AFP2016',
        date: new Date()
      };
      return (
        <div>
          <EditNewsForm news={newsJs} onSubmit={this.handleAddSubmit.bind(this)} />
        </div>
      );
    }

    this.news = listData.get('news').find((item) => {
      return item.get('item_id') == id;
    });
    if(!this.news) {
      return (
        <h1>Новость не найдена</h1>
      );
    }
    const newsJs = this.news.toJS();
    return (
      <div>
        <EditNewsForm news={newsJs} deleteNews={this.deleteNews.bind(this)} onSubmit={this.handleUpdateSubmit.bind(this)} />
      </div>
    );
  }
}

module.exports = EditNews;
