import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { partnerItems, typesSport, mainSport, partners } from '../components/settings';
import Footer from '../components/Main/Footer';
import $ from 'jquery'

if (process.env.BROWSER) {
  require('./Rules.less');
}

class Partners extends Component {

  componentWillMount () {
     $('body').addClass('overflow-hidden');
   }
   componentWillUnmount () {
     $('body').removeClass('overflow-hidden');
   }

  render() {
    const { language } = this.props;
    const types = typesSport;
    const main = typesSport;
    return (
      <div className="Popup">
        <div className="wrap" onClick={() => {
            this.props.history.goBack()
          }}></div>
        <div className="block">
          <a className="close" onClick={() => {
            this.props.history.goBack()
          }}></a>
          <h3 className="title">Правила поведения <br/>на фестивале</h3>
          <p className="text">Почему мы так мало путешествуем по своей стране? Как давно мы были на Волге? Как давно мы встречали рассвет в поле? Когда в последний раз мы выбирались куда-то с палаткой с друзьями? Часто ли в сумасшедшем ритме современной жизни мы видим новые лица?</p>
          <p className="text">Июль. Свежий воздух и яркое солнце. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале ALFA FUTURE PEOPLE. Поверьте, отсюда вы вернетесь совершенно другим.</p>
          <p className="text">Как давно мы встречали рассвет в поле? Когда в последний раз мы выбирались куда-то с палаткой с друзьями? Часто ли в сумасшедшем ритме современной жизни мы видим новые лица? Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале AFP. Поверьте, отсюда вы вернетесь совершенно другим.</p>
          <p className="text">Когда в последний раз мы выбирались куда-то с палаткой с друзьями? Часто ли в сумасшедшем ритме современной жизни мы видим новые лица?Что нужно, чтобы услышать и увидеть будущее? Все просто. Поверьте, отсюда вы вернетесь совершенно другим. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале AFP. Поверьте, отсюда вы вернетесь совершенно другим.</p>
        </div>
      </div>
    );
  }
}

export default Partners;
