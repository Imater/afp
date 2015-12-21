import i18n from 'i18next-client';
const resources = {
  ru: {
    translation: {
      menu: {
        about: 'о фестивале',
        lineUp: 'лайн-ап',
        technology: 'технологии',
        sport: 'спорт',
        news: 'новости',
        partners: 'партнёры',
        media: 'фото и видео',
        contacts: 'контакты',
        buyTicket: 'Купить билет'
      },
      about: {
        mainFestival: 'Главный фестиваль',
        musicAndTechnology: 'музыки и технологий',
        howItWas: 'Как это было',
        festivalDate: '22-24 июля 2016 года'
      },
      history: {
        howItWas: 'Как это было',
        scene: 'сцен',
        dj: 'диджеев',
        sound: 'звука',
        viewer: 'зрителей',
        hectare: 'гектаров'
      },
      pages: {
        sportAndExtrime: 'СПОРТ ПЛОЩАДКИ И ЭКСТРЕМАЛЬНЫЕ ШОУ',
        wonderTechnology: 'УДИВИТЕЛЬНЫЕ ИЗОБРЕТЕНИЯ  И САМЫЕ ИНТЕРЕСНЫЕ НОВЫЕ ТЕХНОЛОГИИ'
      }
    }
  },
  eng: {
    translation: {
      menu: {
        about: 'about',
        lineUp: 'line-up',
        technology: 'technology',
        sport: 'sport',
        news: 'news',
        partners: 'partners',
        media: 'media',
        contacts: 'contacts',
        buyTicket: 'Buy ticket'
      },
      about: {
        mainFestival: 'The main festival',
        musicAndTechnology: 'of music and technology',
        howItWas: 'how it was',
        festivalDate: '22-24 July 2016'
      },
      history: {
        howItWas: 'How it was',
        scene: 'scenes',
        dj: 'djs',
        sound: 'sound',
        viewer: 'viewers',
        hectare: 'hectares'
      },
      pages: {
        sportAndExtrime: 'SPORT PLAYGROUNDS AND EXTREME SHOWS',
        wonderTechnology: 'TECHNOLOGIES OF THE FUTURE'
      }

    }
  }
};

i18n.init({
  resStore: resources,
  debug: false,
  lng: (typeof window !== 'undefined' && __LANG__.language) ? __LANG__.language : 'ru',
  fallbackLng: 'ru',
  cookieName: 'lang',
  getAsync: false
});
