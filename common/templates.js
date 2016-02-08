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
  }
]

module.exports = {
  templates: templates
}

