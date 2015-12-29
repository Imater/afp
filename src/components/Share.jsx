import React, { Component, PropTypes } from 'react';
import i18n from 'i18next-client';

const encode = (text) => {
  return encodeURIComponent(text);
};

if (process.env.BROWSER) {
  require('./Share.less');
}

const TITLE = encode('Альфа-игра');
const URL = encode('http://game.alfabank.ru');
const DESCR = encode('Альфа игра - Рискнешь? 20 iPhone и 50 часов AlfaPay ждут тех, кто не побоится выйти на старт');
const IMG_URL = encode('http://game.alfabank.ru/_assets/20-1.png');

const shares = (params) => {
  const { url, title, descr, img_url } = params;
  const TITLE = encode(title);
  const URL = encode(url);
  const DESCR = encode(descr);
  const IMG_URL = encode(img_url);
  return [
    {
      href: `https://www.facebook.com/sharer/sharer.php?s=100&p[title]=${TITLE}&p[summary]=${DESCR}&p[url]=${URL}&p[images][0]=${IMG_URL}`,
      className: 'facebook',
      icon: 'social-fb.svg'
    },
    {
      href: `https://vk.com/share.php?url=${URL}&title=${TITLE}&description=${DESCR}&image=${IMG_URL}&noparse=true`,
      className: 'vk',
      icon: 'social-vk.svg'
    },
    {
      href: `http://www.ok.ru/dk?st.cmd=addShare&st.s=1&st._surl=${URL}&st.comments=${DESCR}`,
      className: 'ok',
      icon: 'social-ok.svg'
    },
  ];
}




class Map extends Component {

  render() {
    return (
      <div className="socialBlock">
        <span className="socialBlock-title">{i18n.t('about.share')}</span>
        {
          shares(this.props.params).map((share, key) => {
            return (
              <a key={key} href={share.href} target='blank' className="socialBlock-icon">
                <img src={`/assets/img/about/${share.icon}`} width="50"/>
              </a>
            );
          })
        }
      </div>
    );
  }
}

export default Map;
