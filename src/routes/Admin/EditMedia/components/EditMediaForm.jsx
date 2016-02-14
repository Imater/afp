import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import ReactQuill from 'react-quill';
import ImagesUploads from '../../common/ImagesUploads';
import Editor from '../../common/Editor';
import moment from 'moment';

export const fields = [
  'images',
  'name',
  'name_eng',
  'year',
  'pos',
  'video',
  'enabled',
];

if (process.env.BROWSER === true) {
  require('./EditMediaForm.less');
}

class SimpleForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    deleteMedia: PropTypes.func,
    submitting: PropTypes.bool.isRequired
  };

  componentWillMount() {
    this.props.initializeForm(
      this.props.media
    );
  }

  changeContent(newValue) {
  }

  render() {
    const {
      fields: {
        images,
        name,
        name_eng,
        year,
        pos,
        video,
        enabled
      },
      handleSubmit,
      resetForm,
      deleteMedia,
      submitting
    } = this.props;

    return (
      <div className="EditNewsForm">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-row">
              <ImagesUploads imagePath="upload/images/gallery/" maxWidth="100" {...images} />
            </div>
            <div className="form-row">
              <label>Название</label>
              <input type="text" placeholder="Title" {...name}/>
            </div>
            <div className="form-row">
              <label>Название (english)</label>
              <input type="text" placeholder="Title" {...name_eng}/>
            </div>
            <div className="form-row">
              <label>Позиция сортировки</label>
              <input type="number" placeholder="pos" {...pos}/>
            </div>
          </div>

          <div className="form-row">
            <select
              {...year}
              value={year.value || ''}
            >
              <option></option>
              <option value="AFP2021">AFP2021</option>
              <option value="AFP2020">AFP2020</option>
              <option value="AFP2019">AFP2019</option>
              <option value="AFP2018">AFP2018</option>
              <option value="AFP2017">AFP2017</option>
              <option value="AFP2016">AFP2016</option>
              <option value="AFP2015">AFP2015</option>
              <option value="AFP2014">AFP2014</option>
            </select>
          </div>
          <div className="form-row">
            <label>
              <input type="checkbox" {...video}/> альбом содержит только видео
            </label>
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
              deleteMedia ? (
                <button className="red" type="button" disabled={submitting} onClick={deleteMedia}>
                  Удалить Галерею
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
  form: 'simpleMedia',
  fields
})(SimpleForm);
