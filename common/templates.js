import path from 'path';

const templates = [
  {
    name: 'menuItems',
    url: '/off/',
    files: [
      {
        title: 'Данные левого меню',
        file: path.join(__dirname, '..', 'src', 'components', 'settings', 'menuItems.jsx'),
        type: 'javascript',
      }
    ]
  },
  {
    name: 'contacts',
    url: '/contacts/',
    files: [
      {
        title: 'Данные контактов',
        file: path.join(__dirname, '..', 'src', 'components', 'settings', 'personList.jsx'),
        type: 'javascript',
      },
      {
        title: 'Данные контактов - стили',
        file: path.join(__dirname, '..', 'src', 'pages', 'Contacts.less'),
        type: 'less',
      }
    ]
  },
  {
    name: 'store',
    url: '/store',
    files: [
      {
        title: 'Магазин - данные',
        file: path.join(__dirname, '..', 'src', 'components', 'settings', 'store.jsx'),
        type: 'javascript',
      },
      {
        title: 'Магазин - стили',
        file: path.join(__dirname, '..', 'src', 'pages', 'Store.less'),
        type: 'less',
      }
    ]
  },
  {
    name: 'partners',
    url: '/partners/',
    files: [
      {
        title: 'Список партнёров',
        file: path.join(__dirname, '..', 'src', 'components', 'settings', 'partners.jsx'),
        type: 'javascript',
      },
      {
        title: 'Список партнёров - стили',
        file: path.join(__dirname, '..', 'src', 'pages', 'Partners.less'),
        type: 'less',
      }
    ]
  },
  {
    name: 'sport',
    url: '/sport/',
    files: [
      {
        title: 'Спорт',
        file: path.join(__dirname, '..', 'src', 'components', 'settings', 'sport.jsx'),
        type: 'jsx',
      },
      {
        title: 'Спорт - стили',
        file: path.join(__dirname, '..', 'src', 'pages', 'Sport.less'),
        type: 'less',
      }
    ]
  },
  {
    name: 'technology',
    url: '/technology/',
    files: [
      {
        title: 'Техинологии',
        file: path.join(__dirname, '..', 'src', 'components', 'settings', 'technology.jsx'),
        type: 'jsx',
      },
      {
        title: 'Технологии - стили',
        file: path.join(__dirname, '..', 'src', 'pages', 'Technology.less'),
        type: 'less',
      }
    ]
  },
  {
    name: 'lineup',
    url: '/lineup/',
    files: [
      {
        title: 'Lineup',
        file: path.join(__dirname, '..', 'src', 'components', 'settings', 'lineup.jsx'),
        type: 'javascript',
      },
      {
        title: 'Lineup - стили',
        file: path.join(__dirname, '..', 'src', 'pages', 'Lineup.less'),
        type: 'less',
      }
    ]
  },
  {
    name: 'about',
    url: '/about/',
    files: [
      {
        title: 'О фестивале',
        file: path.join(__dirname, '..', 'src', 'components', 'settings', 'about.jsx'),
        type: 'jsx',
      },
      {
        title: 'О фестивале - стили',
        file: path.join(__dirname, '..', 'src', 'pages', 'About.less'),
        type: 'less',
      }
    ]
  },
  {
    name: 'faq',
    url: '/faq',
    files: [
      {
        title: 'faq',
        file: path.join(__dirname, '..', 'src', 'components', 'settings', 'faqItems.jsx'),
        type: 'javascript',
      },
      {
        title: 'faq - стили',
        file: path.join(__dirname, '..', 'src', 'pages', 'Faq.less'),
        type: 'less',
      }
    ]
  },
]

module.exports = {
  templates: templates
}

