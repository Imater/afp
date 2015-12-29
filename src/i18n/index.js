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
        beforeFestivalTitle: 'до Alfa Future People 2016 осталось',
        share: 'Поделиться',
        title: 'Вы вернетесь<br/>совершенно другим',
        titleText: 'Свежий воздух и яркое солнце. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале Alfa Future People'
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
        showAll: 'Показать все',
        back: 'Назад'
      },
      contacts: {
        addressName: 'адрес',
        address: 'Москва, проспект Андропова 18 стр. 3'
      },
      partners:{
        more: 'узнать больше'
      },
      footer:{
        subscribe: 'Подписка',
        email: 'Ваш e-mail',
        enterEmail: 'Оставьте ваш e-mail, чтобы получать наши новости',
        name: '© Фестиваль Alfa Future People.',
        copyright: '2014 - 2016, Все права защищены',
        social: 'Соцсети',
        created: 'Сделано в ',
        vk: 'Вконтакте',
        ok: 'Одноклассники'
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
        beforeFestivalTitle: 'Time to Alfa Future People 2016',
        share: 'Share',
        title: 'You come back<br/>a completely different',
        titleText: 'The fresh air and bright sunshine. Mystery airfield on the banks of the Volga. Music that changes the mood. The technologies that are changing the world. What do you need to hear and see the future? It\'s simple. Being at the festival Alfa Future People'
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
        showAll: 'Show all',
        back: 'Back'
      },
      contacts: {
        addressName: 'address',
        address: 'Moscow, prospect Andropov 18 building 3'
      },
      partners:{
        more: 'more'
      },
      footer:{
        subscribe: 'Subscribe',
        email: 'Your e-mail',
        enterEmail: 'Please enter your e-mail to get our news',
        name: '© Festival Alfa Future People.',
        copyright: '2014 - 2016, All rights reserved',
        social: 'Social media',
        created: 'Created by ',
        vk: 'Vkontakte',
        ok: 'Odnoklassniki'
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
