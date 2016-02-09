import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import ReactQuill from 'react-quill';
import ImagesUpload from '../../common/ImagesUpload';
import Editor from '../../common/Editor';
import moment from 'moment';

export const fields = [
  'image',
  'year',
  'top',
  'title',
  'title_eng',
  'preview',
  'preview_eng',
  'description',
  'description_eng',
  'order',
  'stage',
  'visible',
];

if (process.env.BROWSER === true) {
  require('./EditDjForm.less');
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
      this.props.dj
    );
  }

  changeContent(newValue) {
  }

  render() {
    const {
      fields: {
        image,
        year,
        top,
        title,
        title_eng,
        preview,
        preview_eng,
        description,
        description_eng,
        order,
        stage,
        visible,
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
            <div className="form-row">
              <label>Название</label>
              <input type="text" placeholder="Title" {...title}/>
            </div>
            <div className="form-row">
              <label>Название (english)</label>
              <input type="text" placeholder="Title" {...title_eng}/>
            </div>
            <div className="space-row"></div>
            <div className="editor description">
              <label>Краткое содержание</label>
              <Editor theme="snow" {...preview}/>
            </div>
            <div className="editor description">
              <label>Краткое содержание (english)</label>
              <Editor theme="snow" {...preview_eng}/>
            </div>
            <div className="space-row"></div>
            <div className="editor content">
              <label>Полное содержание</label>
              <Editor theme="snow" {...description}/>
            </div>
            <div className="editor content">
              <label>Полное содержание (english)</label>
              <Editor theme="snow" {...description_eng}/>
            </div>
          </div>

          <div className="form-row">
            <select
              {...year}
              value={year.value || ''}
            >
              <option></option>
              <option value="2021">AFP2021</option>
              <option value="2020">AFP2020</option>
              <option value="2019">AFP2019</option>
              <option value="2018">AFP2018</option>
              <option value="2017">AFP2017</option>
              <option value="2016">AFP2016</option>
              <option value="2015">AFP2015</option>
              <option value="2014">AFP2014</option>
            </select>
          </div>
          <div className="form-row">
            <label>
              <input type="checkbox" {...visible}/> публикация включена
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
  form: 'simpleDj',
  fields
})(SimpleForm);
