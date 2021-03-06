import { connect } from 'react-redux';

import AlbumAll from '../pages/AlbumAll';

// Actions
import {
  changeLanguage
} from '../stores/i18';
import {
  loadGallery
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
    loadGallery: (limit) => dispatch(loadGallery(limit))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumAll);
