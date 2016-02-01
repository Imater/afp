import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import ReactQuill from 'react-quill';
import ImagesUpload from './ImagesUpload';
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
  require('./quill.less');
}

class SimpleForm extends Component {
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
  }

  changeContent(newValue) {
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
            <ImagesUpload {...images} />
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
              <input type="text" placeholder="2017-01-31 12:30:30" {...date}/>
            </div>
            <div className="space-row"></div>
            <div className="editor description">
              <label>Краткое содержание</label>
              <ReactQuill theme="snow" {...description}/>
            </div>
            <div className="editor description">
              <label>Краткое содержание (english)</label>
              <ReactQuill theme="snow" {...description_eng}/>
            </div>
            <div className="space-row"></div>
            <div className="editor content">
              <label>Полное содержание</label>
              <ReactQuill theme="snow" {...content}/>
            </div>
            <div className="editor content">
              <label>Полное содержание (english)</label>
              <ReactQuill theme="snow" {...content_eng}/>
            </div>
          </div>

          <div className="form-row">
            <select
              {...group_name}
              value={group_name.value || ''}
            >
              <option></option>
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
