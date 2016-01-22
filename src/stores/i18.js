import i18n from 'i18next-client';
import { fromJS } from 'immutable';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

const defaultState = {
  language: 'ru'
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      var lang = { language: action.payload.language };
      return fromJS(lang);
    default:
      return state;
  }
}

export function changeLanguage(language = 'eng') {
  i18n.setLng(language);
  return {
    type: CHANGE_LANGUAGE,
    payload: {language: language}
  }
}
