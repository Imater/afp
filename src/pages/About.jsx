import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import TopPageMenu from '../components/TopPageMenu';
import { aboutItems, howToGetThereList, whereToLiveList } from '../components/settings';
import Map from '../components/Map';
import cx from 'classnames'
import Footer from '../components/Main/Footer';
import Share from '../components/Share';
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
  state = {
    tabGetIndex: 0,
    tabLiveIndex: 1,
  }
  render() {
    const { language } = this.props;
    return (
      <div className="About" id="lineup">
        <TopPageMenu items={aboutItems} language={language} fixed={true}/>
        {this.props.children} {''}
        <div className="About">
          <div className="ticket-back-overlay" style={{
            opacity: 0
          }}></div>
        <article className="screen aboutTop" style={{
          backgroundImage: "url('/assets/img/about/aboutTop-cover.jpg')"
        }}>
        <Share params={{
          url: 'http://alfafuture.com', //(typeof window === 'undefined') ? '' : window.location.href,
          title: main[language].title,
          descr: main[language].text,
          img_url: 'http://alfafuture.com/upload/content/totspot.jpg'
        }} />
        <div className="screen-inner aboutTop-inner">
          <h2 className="aboutTop-heading" dangerouslySetInnerHTML={{__html: i18n.t('about.title')}}></h2>

          <p className="screen-text" dangerouslySetInnerHTML={{__html: i18n.t('about.titleText')}}>
          </p>
        </div>
      </article>

      <div id='map'></div>
      <Map center={
        {lat: 56.413617, lng: 43.731237}
      } markers={[
        {
          position: {
            lat: 56.413617, lng: 43.731237
          },
          defaultAnimation: 2,
          title: 'Нижегородская обл.,Балахнинский район, пос.Большое Козино,улица Луговая',
          label: 'Afp',
          clickable: true
        }
      ]}/>

    <article className="screen aboutWay">
      <div className="screen-inner">
        <h3 className="screen-title">Как добраться?</h3>
        <ul className="tabs">
          {
            howToGetThereList.map((item, key) => {
              return (
                <li className={cx("tabs-item", {"active": key === this.state.tabGetIndex})} key={key} onClick={() => {
                  this.setState({
                    tabGetIndex: key
                  })
                }}>{item.title}</li>
              );
            })
          }
        </ul>
        <div>
          {
            howToGetThereList.find((item, key) => key === this.state.tabGetIndex).text
          }
        </div>
      </div>
    </article>
    <div id='live'></div>
    <article className="screen aboutWay">
      <div className="screen-inner">
        <h3 className="screen-title">Где жить</h3>
        <ul className="tabs">
          {
            whereToLiveList.map((item, key) => {
              return (
                <li className={cx("tabs-item", {"active": key === this.state.tabLiveIndex})} key={key} onClick={() => {
                  this.setState({
                    tabLiveIndex: key
                  })
                }}>{item.title}</li>
              );
            })
          }
        </ul>
        <div>
          {
            whereToLiveList.find((item, key) => key === this.state.tabLiveIndex).text
          }
        </div>

          <Link to='/about/main/rules'>
            <span className="aboutWay-rules">Правила поведения <br/>на фестивале</span>
          </Link>
      </div>
    </article>
    <article className="screen screen--banner aboutVip" style={{
      backgroundImage: "url('/assets/img/about/vip.jpg')"
    }}>
    <div className="screen-inner">
      <h3 className="screen-title">VIP зона</h3>

      <div className="screen-text aboutVip-text">На возвышении около главной сцены расположена VIP-зона фестиваля
        - отдельно стоящий на подиуме шатер с прекрасным видом на сцену и на общий танцпол. Для прохода в
        зону VIP необходимо наличие билета соответствующей категории.
      </div>
      <a href="#" className="aboutVip-btn">
        <img src="/assets/img/about/icon-photo.svg" width="16"/>
        <span>Смотреть фото</span>
      </a>
    </div>
  </article>
  <article className="screen aboutInfo">
    <div className="screen-inner">
      <div className="aboutInfo-block">
        <h2 className="screen-title">Парковка <img className="aboutInfo-titleIcon" src="/assets/img/about/icon-parking.svg"
            width="28"/></h2>

        <div className="screen-text">В 10 минутах ходьбы от кемпинга организована удобная охраняемая парковка.
          Где вы можете спокойно оставить свою машину, не опасаясь, что с ней что-то случится. Билет на
          паркинг дает право въезда и регистрации для одного транспортного средства только категорий А и
          В.
        </div>
      </div>
      <div className="aboutInfo-block">
        <h2 className="screen-title">Камеры хранения <img className="aboutInfo-titleIcon" src="/assets/img/about/icon-save.svg"
            width="26"/></h2>

        <p className="screen-text">На территории фестиваля установлены камеры хранения, здесь вы можете взять в
          аренду ячейку для личных вещей. Зная, что ваши ценности в безопасности, вы сможете по-настоящему
          расслабиться и получить удовольствие от мероприятия.</p>
      </div>
    </div>
  </article>
  <div id='food'></div>
  <article className="screen screen--banner aboutFood" style={{
    backgroundImage: "url('/assets/img/about/foodcort.jpg')"
  }}>
  <div className="screen-inner">
    <h3 className="screen-title">Фудкорт</h3>

    <div className="screen-text aboutFood-text">На таком масштабном мероприятии как Alfa Future People даже
      фудкорт, выстроенный посреди поля, поражает своими размерами и по размаху сравним с олимпийскими
      объектами.
    </div>
    <div className="screen-text aboutFood-benefits">
      <div className="benefitFood aboutFood-benefit aboutFood-benefit--1">
        <img src="/assets/img/about/icon-beer.svg" width="53" className="benefitFood-icon"/>

        <div className="benefitFood-desc">выпито более</div>
        <span className="benefitFood-count">30 000</span>

        <div className="benefitFood-countDesc">литров<br/>пива</div>
      </div>
      <div className="benefitFood aboutFood-benefit aboutFood-benefit--2">
        <img src="/assets/img/about/icon-burger.svg" width="70" className="benefitFood-icon"/>

        <div className="benefitFood-desc">съедено</div>
        <span className="benefitFood-count">10</span>

        <div className="benefitFood-countDesc">тонн<br/>продуктов</div>
      </div>

    </div>
    <div className="screen-text aboutFood-text aboutFood-text--bottom">В 2015 году мы учли все пожелания гостей
      и запланировали 32 точки питания с русской, итальянской, американской и даже китайской кухнями, а
      так же 11 баров. Даже самый искушенный гурман обязательно найдет себе блюдо по вкусу.
    </div>
  </div>
</article>
<div id='advises'></div>
<article className="screen aboutGood">
  <div className="screen-inner aboutGood-inner">
    <h2 className="screen-title">Полезные советы</h2>
    <ul className="aboutGood-arrows hide">
      <li className="aboutGood-arrow disable"><img src="/assets/img/about/icon-arrow-back.svg" width=""/></li>
      <li className="aboutGood-arrow"><img src="/assets/img/about/icon-arrow-back.svg" width=""/></li>
    </ul>
    <div className="aboutGood-track" style={{left: 0}}>
      <div className="advice aboutGood-advice aboutGood-advice--1">
        <img src="/assets/img/about/icon-mosquito.svg" width="65" className="advice-img"/>

        <p className="advice-text screen-text">Поскольку наше мероприятие проходит на свежем воздухе,
          советуем взять с собой средства от комаров. </p>
      </div>
      <div className="advice aboutGood-advice aboutGood-advice--2">
        <img src="/assets/img/about/icon-umbrella.svg" width="76" className="advice-img"/>

        <p className="advice-text screen-text">Продумайте защиту от непредвиденного дождя – резиновые
          сапоги, зонты, дождевики и пр. Но будем надеяться, что все это не потребуется. </p>
      </div>
      <div className="advice aboutGood-advice aboutGood-advice--3">
        <img src="/assets/img/about/icon-sun.svg" width="67" className="advice-img"/>

        <p className="advice-text screen-text">Совет «наоборот»: если не планируете в течение дня
          отсиживаться в палатке или номере отеля, возьмите солнцезащитный крем с SPF</p>
      </div>
      <div className="advice aboutGood-advice aboutGood-advice--4">
        <img src="/assets/img/about/icon-bag.svg" width="53" className="advice-img"/>

        <p className="advice-text screen-text">Наш фестиваль – скорее, поход, чем клубная вечеринка, так что
          выбирайте соответствующий look. Дизайнерские вещи или дорогие ювелирные украшения лучше
          оставить дома</p>
      </div>
    </div>
  </div>
</article>
<div id='faq'></div>
<div id='rules'></div>
<div className="aboutCategory">
  <a href="#" className="aboutCategory-item aboutCategory-item--1">
    <img src="/assets/img/about/icon-market.svg" className='aboutCategory-img' width="66"/>
    <span className="aboutCategory-label">Магазин</span>
  </a>
  <Link to='/about/main/rules' className="aboutCategory-item aboutCategory-item--2">
      <img src="/assets/img/about/icon-book--white.svg" className='aboutCategory-img' width="76"/>
      <span className="aboutCategory-label">Правила</span>
  </Link>
  <Link to='/faq' className="aboutCategory-item aboutCategory-item--3">
      <img src="/assets/img/about/icon-messages.svg" className='aboutCategory-img' width="66"/>
      <span className="aboutCategory-label">FAQ</span>
  </Link>

</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
