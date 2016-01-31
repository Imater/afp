import React, { Component, PropTypes } from 'react';
import EditNewsForm from './EditNewsForm';
import { merge } from 'lodash';
import $ from 'jquery';

class EditNews extends Component {
  componentWillMount() {
    this.props.loadNews();
  }

  handleSubmit(data) {
    const newNews = _.merge(this.news.toJS(), data);
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

  render() {
    const { params: { id }, listData } = this.props;
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
        <EditNewsForm news={newsJs} onSubmit={this.handleSubmit.bind(this)} resetForm={()=>{}} submitting={()=>{}}/>
      </div>
    );
  }
}

module.exports = EditNews;
