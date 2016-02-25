import React from 'react';

export const tickets = [
  {
    title: 'Стандарт',
    title_eng: 'Standard',
    comment: 'для проживания на территории фестиваля рекомендуем купить билет в один из кемпингов',
    comment_eng: 'its highly recommended to buy ticket in Alfa or Omega camp habitation on the festival',
    cost: 4500,
    enabled: true,
    t4bCart: {
      event: 25,
      sector: 103,
      tariff: 119
    },
    icons: [
      'icon1.svg',
      'icon-ball.svg',
      'icon-robot.svg',
      'icon-wifi.svg',
    ],
    features: [
      {
        title: 'все дни фестиваля',
        title_eng: 'all festival days'
      },
      {
        title: 'все зоны фестиваля (кроме VIP)',
        title_eng: 'all zones (exp. VIP)'
      },
      {
        title: 'неограниченное количество входов и выходов',
        title_eng: 'multiple entries'
      },
    ],
  },
  {
    title: 'VIP',
    title_eng: 'VIP',
    comment: 'для проживания на территории фестиваля рекомендуем купить билет в один из кемпингов',
    comment_eng: 'its highly recommended to buy ticket in Alfa or Omega camp habitation on the festival',
    cost: 12000,
    enabled: true,
    t4bCart: {
      event: 26,
      sector: 104,
      tariff: 121
    },
    icons: [
      'icon-palatka.svg',
      'icon1.svg',
      'icon-ball.svg',
      'icon-robot.svg',
      'icon-wifi.svg',
    ],
    features: [
      {
        title: 'все дни фестиваля',
        title_eng: 'all festival days'
      },
      {
        title: 'неограниченное количество входов и выходов',
        title_eng: 'all zones (exp. VIP)'
      },
      {
        title: 'отдельный танцпол на возвышении рядом с главной сценой',
        title_eng: 'separate dance floor'
      },
      {
        title: 'отдельный шатер с комфортабельной лаунж-зоной',
        title_eng: 'separate VIP tent near the main stage'
      },
      {
        title: 'разнообразный ассортимент платных напитков и специальное меню',
        title_eng: 'VIP lounge with special menu'
      },
    ],
  },
  {
    title: 'Альфа кемпинг',
    title_eng: 'Alfa camp',
    text: 'Альфа-кемпинг – это огороженная охраняемая территория с инфраструктурой, которая расположена максимально близко ко входу на фестиваль',
    text_eng: 'Alfa camp is a place at the camp in a fenced and guarded territory with infrastructure, which is located as close as possible to the festival entrance',
    comment: 'для прохода на фестиваль нужно приобрести билеты категории Стандарт или VIP.',
    comment_eng: 'for entrance to the festival you need to buy Standard or VIP ticket.',
    cost: 3000,
    enabled: true,
    t4bCart: {
      event: 40,
      sector: 100,
      tariff: 117
    },
    icons: [
      'icon-palatka.svg',
      'icon-shower.svg',
      'icon-wifi.svg',
      'icon-battery.svg',
      'icon-key.svg',
      'icon-oneman.svg',
    ],
    features: [
      {
        title: 'установка собственной палатки размером не более 4,5 х 3м и вместимостью до 4-х человек',
        title_eng: 'the right to install a tent not larger than 4.5 x 3m max. for  4 persons'
      },
      {
        title: 'бесплатные душевые (только для жителей кемпинга)',
        title_eng: 'free showers (only for camp residents)'
      },
      {
        title: 'бесплатный доступ к сети WI-FI',
        title_eng: 'free WI-FI'
      },
      {
        title: 'бесплатные локеры для подзарядки мобильных устройств',
        title_eng: 'free lockers for charging mobile devices'
      },
      {
        title: 'бесплатные локеры для ценных вещей и документов на ресепшн кемпинга',
        title_eng: 'free lockers for documents '
      },
      {
        title: 'возможность гостевого визита',
        title_eng: 'guest visits'
      },
      {
        title: 'билет действителен с 22 по 24 июля',
        title_eng: 'valid from 22 to 24 July'
      },
    ],
  },
  {
    title: 'Омега кемпинг',
    title_eng: 'Omega camp',
    text: 'Омега-кемпинг – это огороженная территория с инфраструктурой, которая располагается в непосредственной близости от входа на фестиваль.',
    text_eng: 'Omega-camp is a place in a fenced area with infrastructure, located in the nearest place to the festival entrance. 21-24 июля',
    comment: 'для прохода на фестиваль нужно приобрести билеты категории Стандарт или VIP.',
    comment_eng: 'for entrance to the festival you need to buy Standard or VIP ticket.',
    cost: 1500,
    enabled: true,
    t4bCart: {
      event: 41,
      sector: 101,
      tariff: 118
    },
    icons: [
      'icon-palatka.svg',
      'icon-shower-pay.svg',
    ],
    features: [
      {
        title: 'установка собственной палатки размером не более 4,5 х 3м и вместимостью до 4-х человек',
        title_eng: 'the right to install a tent not larger than 4.5 x 3m max. for  4 persons'
      },
      {
        title: 'свободное размещение',
        title_eng: 'free placement'
      },
      {
        title: 'платные душевые',
        title_eng: 'free showers (only for camp residents)'
      },
      {
        title: 'билет действителен с 21 по 24 июля',
        title_eng: 'valid from 21 to 24 July'
      },
    ],
  },
  {
    title: 'Парковка',
    title_eng: 'Parking',
    text: 'В 10 минутах ходьбы от кемпинга организована удобная парковка.',
    text_eng: '10 min walk from the fest area is situated guarded parking place. Here you can leave your car and be confident in its safe.',
    comment: 'на территорию парковки допускаются только транспортные средства категорий А (мотоциклы) и B (легковые машины)',
    comment_eng: 'Parking is only for A and B vehicle categories.',
    cost: 3500,
    enabled: true,
    t4bCart: {
      event: 27,
      sector: 99,
      tariff: 116
    },
    icons: [
      'icon-parking.svg',
    ],
    features: [
      {
        title: 'въезд с 10.00 21 июля',
        title_eng: 'entry from 10 AM 21th of July'
      },
      {
        title: 'неограниченное количество въездов и выездов',
        title_eng: 'multiple entries'
      },
    ],
  },
];





export const newsItems = [
  {
    title: 'Новости',
    title_eng: 'News',
    url: '/news/main'
  }
];

export const mediaItems = [
  {
    title: '2015',
    title_eng: '2015',
    url: '/media/2015',
    anchor: 'media2015'
  },
  {
    title: '2014',
    title_eng: '2014',
    url: '/media/2014',
    anchor: 'media2014'
  }
];

export const contactItems = [
  {
    title: 'Администрация AFP',
    title_eng: 'AFP stuff',
    url: '/contacts/main'
  },
  {
    title: 'Как доехать',
    title_eng: 'How to get there',
    url: '/contacts/map'
  }
];

export const generateByNum = (folderName, ext, max) => {
  let images = [];
  for(let i=1; i <= max; i++) {
    images.push({
      url: `${folderName}${i}.${ext}`
    });
  }
  return images;

}


