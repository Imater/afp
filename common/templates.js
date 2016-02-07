import path from 'path';

const templates = {
  sport: {
    file: path.join(__dirname, '..', 'src', 'components', 'settings.jsx')
  },
  menuItems: {
    file: path.join(__dirname, '..', 'src', 'components', 'settings', 'menuItems.jsx')
  },
}

module.exports = {
  templates: templates
}

