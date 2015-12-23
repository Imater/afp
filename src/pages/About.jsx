import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import TopPageMenu from '../components/TopPageMenu';
import { aboutItems } from '../components/settings';

if (process.env.BROWSER) {
  require('./About.less');
}

const main = {
  ru: {
    title: 'О ФЕСТИВАЛЕ',
    text: 'Свежий воздух и яркое солнце. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале Alfa Future People',
    path: 'Самый быстрый и удобный способ добраться до фестиваля - электричка с Московского вокзала Нижнего Новгорода (или с любой остановки электрички в городе по Заволжскому направлению) до станции Козино. Количество электричек на время проведение фестиваля увеличено в несколько раз, также увеличено количество вагонов в поездах.',
    pathTitle: 'Как добраться?'
  },
  eng: {
    title: 'About festival',
    text: 'Fresh air and dazzling sunshine. Secret airfield on the Volga bank. Music that changes spirits. Technologies that will change the world. What else do you need to hear and to see the future? It’s so simple. Come and join us from 11th to 13th of July. And believe, you will return a completely different person, an Alfa Future Person.',
    path: 'The quickest and most convenient way to get to the festival - the train to Moscow railway station in Nizhny Novgorod (or any stoppage of the train in the city of Zavolzhsky direction) to the station Kozin. The number of trains on time, the festival has increased several times, also increased the number of cars per train.',
    pathTitle: 'How to get there?'
  }
}

class About extends Component {
  render() {
    const { language } = this.props;
    return (
      <div className="page About" id="lineup">
        <TopPageMenu items={aboutItems} language={language} />
        <div className="page-block">
          <h2>
            {main[language].title}
            <div className='title-text'>
              {main[language].text}
            </div>
          </h2>
          <div className="row">
          </div>
        </div>
        <div className="map">
          <img src="/assets/img/map-blue.png" />
        </div>
        <div className="page-text">
          <h3>
            {main[language].pathTitle}
          </h3>
          {main[language].path}
        </div>
        <div className="mapBuilding">
          <img src="/assets/img/map-building.png" />
        </div>
      </div>
    );
  }
}

export default About;
