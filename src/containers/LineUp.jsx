import { connect } from 'react-redux';

import LineUp from '../pages/LineUp';

// Actions
import {
  changeLanguage
} from '../stores/i18';
import {
  loadDjs
} from '../stores/todos';

function mapStateToProps(state) {
  return {
    listData: state.todos,
    language: state.i18.toObject ? state.i18.toObject().language : state.i18.language,
    user: state.user.toObject ? state.user.toObject() : state.user,
    options: state.options
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLanguage: (language) => dispatch(changeLanguage(language)),
    loadDjs: (language) => dispatch(loadDjs(language))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LineUp);
