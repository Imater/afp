import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import ReactQuill from 'react-quill';
import ImagesUpload from '../../common/ImagesUpload';
import Editor from '../../common/Editor';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export const fields = [
  'content',
  'content_eng',
  'description',
  'description_eng',
  'enabled',
  'group_name',
  'images',
  'title',
  'title_eng',
  'date'
];

if (process.env.BROWSER === true) {
  require('./EditNewsForm.less');
  require('react-datepicker/dist/react-datepicker.css');
}

class SimpleForm extends Component {
  state = {
    date: moment()
  };
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    deleteNews: PropTypes.func,
    submitting: PropTypes.bool.isRequired
  };

  componentWillMount() {
    this.props.initializeForm(
      this.props.news
    );
    this.setState({
      date: this.props.news ? moment(this.props.news.date) : moment()
    });
  }

  changeContent(newValue) {
  }

  changeDate(date) {
    this.setState({
      date: moment(date)
    });
    this.props.fields.date.onUpdate(date.format("YYYY-MM-DD HH:mm:ss"));
  }

  render() {
    const {
      fields: {
        content,
        content_eng,
        description,
        description_eng,
        enabled,
        group_name,
        images,
        title,
        title_eng,
        date
      },
      handleSubmit,
      resetForm,
      deleteNews,
      submitting
    } = this.props;
    return (
      <div className="EditNewsForm">
        <form onSubmit={handleSubmit}>
          <div>
            <ImagesUpload imagePath="upload/images/news/" {...images} />
            <div className="space-row"></div>
            <div className="form-row">
              <label>Название</label>
              <input type="text" placeholder="Title" {...title}/>
            </div>
            <div className="form-row">
              <label>Название (english)</label>
              <input type="text" placeholder="Title" {...title_eng}/>
            </div>
            <div className="form-row">
              <label>Дата</label>
              <DatePicker
                selected={this.state.date}
                onChange={this.changeDate.bind(this)}
              />

            </div>
            <div className="space-row"></div>
            <div className="editor description">
              <label>Краткое содержание</label>
              <Editor theme="snow" {...description}/>
            </div>
            <div className="editor description">
              <label>Краткое содержание (english)</label>
              <Editor theme="snow" {...description_eng}/>
            </div>
            <div className="space-row"></div>
            <div className="editor content">
              <label>Полное содержание</label>
              <Editor theme="snow" {...content}/>
            </div>
            <div className="editor content">
              <label>Полное содержание (english)</label>
              <Editor theme="snow" {...content_eng}/>
            </div>
          </div>

          <div className="form-row">
            <select
              {...group_name}
              value={group_name.value || ''}
            >
              <option></option>
              <option value="AFP2021">AFP2021</option>
              <option value="AFP2020">AFP2020</option>
              <option value="AFP2019">AFP2019</option>
              <option value="AFP2018">AFP2018</option>
              <option value="AFP2017">AFP2017</option>
              <option value="AFP2016">AFP2016</option>
              <option value="AFP2015">AFP2015</option>
            </select>
          </div>
          <div className="form-row">
            <label>
              <input type="checkbox" {...enabled}/> публикация включена
            </label>
          </div>
          <div className="space-row"></div>
          <div>
            <button className="green" type="submit" disabled={submitting}>
              {submitting ? <i/> : <i/>} Сохранить
            </button>
            <button className="gray" type="button" disabled={submitting} onClick={resetForm}>
              Отменить изменения
            </button>
            {
              deleteNews ? (
                <button className="red" type="button" disabled={submitting} onClick={deleteNews}>
                  Удалить новость
                </button>
              ) : (
                <div></div>
              )
            }
          </div>
        </form>
      </div>
    );
  }
}

module.exports = reduxForm({
  form: 'simple',
  fields
})(SimpleForm);
