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
        howItWas: 'Как это было'
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
        howItWas: 'how it was'
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
