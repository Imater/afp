import i18n from 'i18next-client';
const resources = {
  ru: {
    translation: {
      admin: {
        name: 'Админ.панель'
      },
      ticket: {
        itog: 'Итого:',
        tickets: 'Билетов:',
        sht: 'шт',
        buy: 'Купить',
        selectTicket: 'Выбор билетов',
        title: 'Выбор и покупка электронных билетов',
        phone: 'Заказ и доставка<br />билетов'
      },
      menu: {
        ticket: 'купить билет',
        about: 'о фестивале',
        lineUp: 'лайн-ап',
        technology: 'технологии',
        sport: 'спорт',
        news: 'новости',
        partners: 'партнёры',
        media: 'фото и видео',
        contacts: 'контакты',
        buyTicket: 'Купить билет',
        buyTour: 'Купить тур',
        close: 'ЗАКРЫТЬ',
        store: 'МАГАЗИН',
        menu: 'МЕНЮ'
      },
      counter: {
        day_1: 'день',
        day_2: 'дня',
        day_5: 'дней',
        hour_1: 'час',
        hour_2: 'часа',
        hour_5: 'часов',
        minute_1: 'минута',
        minute_2: 'минуты',
        minute_5: 'минут',
      },
      about: {
        mainFestival: 'Главный фестиваль',
        musicAndTechnology: 'музыки и технологий',
        howItWas: 'Как это было',
        festivalDate: '22-24 июля 2016 года',
        lineup: 'Line-up',
        novgorod: 'Нижний Новгород, аэродром на берегу Волги',
        technology: 'Технологии',
        sport: 'Спорт',
        news: 'Новости',
        allNews: 'Все новости',
        partners: 'Партнёры',
        allPartners: 'Партнёры',
        beforeFestivalTitle: 'до Alfa Future People 2016 осталось',
        share: 'Поделиться',
        title: 'Вы вернетесь <br/>совершенно другими',
        titleText: 'Свежий воздух и яркое солнце. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале Alfa Future People',
        rules: 'Правила фестиваля',
        store: 'Магазин',
        rulesLink: 'Правила кемпингов'
      },
      history: {
        howItWas: 'Как это было',
        scene_1: 'сцена',
        scene_2: 'сцены',
        scene_5: 'сцен',
        dj_1: 'диджей',
        dj_2: 'диджея',
        dj_5: 'диджеев',
        sound_1: 'звука',
        sound_2: 'звука',
        sound_5: 'звука',
        hectare_1: 'гектар',
        hectare_2: 'гектара',
        hectare_5: 'гектаров',
        viewer_1: 'зритель',
        viewer_2: 'зрителя',
        viewer_5: 'зрителей'
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
        addressName: 'Адрес',
        address: 'Москва, проспект Андропова 18 стр. 3',
        restEmail: 'Контакты:',
        restEmailInfo: 'info@afp.ru',
        phone1: '+7 (495) 909 98 93',
        phone2: '+7 (495) 909 98 94',
      },
      partners:{
        more: 'узнать больше'
      },
      faq:{

        form:{
          title:'Задать вопрос',
          subject: 'Тема вопроса',
          email: 'Адрес электронной почты',
          question:'Ваш вопрос',
          subscribe:'Подписаться на новости',
          submit:'Отправить'
        }
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
      admin: {
        name: 'Admin panel'
      },
      ticket: {
        itog: 'Sum:',
        tickets: 'Tickets:',
        sht: 'pc.',
        buy: 'Buy',
        selectTicket: 'Select tickets',
        title: 'Choosing and buying electronic tickets',
        phone: 'Buy and delivery<br />ticket'
      },
      menu: {
        ticket: 'buy ticket',
        about: 'about',
        lineUp: 'line-up',
        technology: 'technologies',
        sport: 'sport',
        news: 'news',
        partners: 'partners',
        media: 'media',
        contacts: 'contacts',
        buyTicket: 'Buy ticket',
        buyTour: 'Buy tour',
        close: 'CLOSE',
        store: 'STORE',
        menu: 'MENU'
      },
      about: {
        mainFestival: 'The main festival',
        musicAndTechnology: 'of music and technologies',
        howItWas: 'how it was',
        festivalDate: '22-24 July 2016',
        lineup: 'Line-up',
        novgorod: 'Nizhny Novgorod, on the Volga River airport',
        technology: 'Technologies',
        sport: 'Sport',
        news: 'News',
        allNews: 'All news',
        partners: 'Partners',
        allPartners: 'All partners',
        beforeFestivalTitle: 'Time to Alfa Future People 2016',
        share: 'Share',
        title: 'You will come back<br/> completely different',
        titleText: 'The fresh air and bright sunshine. Mystery airfield on the banks of the Volga. Music that changes the mood. The technologies that are changing the world. What do you need to hear and see the future? It\'s simple. Being at the festival Alfa Future People',
        rules: 'Rules of festival',
        store: 'Store',
        rulesLink: 'Camping rules'
      },
      counter: {
        day_1: 'day',
        day_2: 'days',
        day_5: 'days',
        hour_1: 'hour',
        hour_2: 'hours',
        hour_5: 'hours',
        minute_1: 'minute',
        minute_2: 'minutes',
        minute_5: 'minutes',
      },
      history: {
        howItWas: 'How it was',
        scene_1: 'scene',
        scene_2: 'scenes',
        scene_5: 'scenes',
        dj_1: 'dj',
        dj_2: 'djs',
        dj_5: 'djs',
        sound_1: 'sound',
        sound_2: 'sound',
        sound_5: 'sound',
        hectare_1: 'hectare',
        hectare_2: 'hectares',
        hectare_5: 'hectares',
        viewer_1: 'viewer',
        viewer_2: 'viewers',
        viewer_5: 'viewers'
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
        addressName: 'Address',
        address: 'Moscow, prospect Andropov 18 building 3',
        restEmail: 'all questions:',
        restEmailInfo: 'info@afp.ru',
        phone1: '+7 (495) 909 98 93',
        phone2: '+7 (495) 909 98 94',
      },
      partners:{
        more: 'more'
      },
      faq:{

        form:{
          title:'Ask a qustion',
          subject: 'Subject',
          email: 'Your email',
          question:'Your question',
          subscribe:'Subscribe',
          submit:'Send'
        }
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
