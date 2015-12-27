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
        festivalDate: '22-24 июля 2016 года',
        lineup: 'Line-up фестиваля',
        novgorod: 'Нижний Новгород, аэродром на берегу Волги',
        technology: 'Технологии',
        sport: 'Спорт',
        news: 'Новости',
        allNews: 'Все новости',
        partners: 'Партнёры',
        allPartners: 'Партнёры',
        beforeFestivalTitle: 'до Alfa Future People 2016 осталось'
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
        wonderTechnology: 'УДИВИТЕЛЬНЫЕ ИЗОБРЕТЕНИЯ  И САМЫЕ ИНТЕРЕСНЫЕ НОВЫЕ ТЕХНОЛОГИИ',
        media: 'Фото и видео',
        contacts: 'Контакты'
      },
      album: {
        showAll: 'Показать все'
      },
      contacts: {
        addressName: 'адрес',
        address: 'Москва, проспект Андропова 18 стр. 3'
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
        festivalDate: '22-24 July 2016',
        lineup: 'Line-up of festival',
        novgorod: 'Nizhny Novgorod, on the Volga River airport',
        technology: 'Technology',
        sport: 'Sport',
        news: 'News',
        allNews: 'All news',
        partners: 'Partners',
        allPartners: 'All partners',
        beforeFestivalTitle: 'Time to Alfa Future People 2016'
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
        wonderTechnology: 'TECHNOLOGIES OF THE FUTURE',
        media: 'MEDIA',
        contacts: 'CONTACTS'
      },
      album: {
        showAll: 'Show all'
      },
      contacts: {
        addressName: 'address',
        address: 'Moscow, prospect Andropov 18 building 3'
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
