import { connect } from 'react-redux';

import EditDj from '../components/EditDj.jsx';

// Actions
import {
  loadDjs
} from '../../../../stores/todos';

function mapStateToProps(state) {
  return {
    listData: state.todos,
    form: state.form,
    language: state.i18.toObject ? state.i18.toObject().language : state.i18.language,
    user: state.user.toObject ? state.user.toObject() : state.user,
    options: state.options
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadDjs: (limit) => dispatch(loadDjs(limit)),
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(EditDj);
