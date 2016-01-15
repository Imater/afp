import React from 'react';

export const menuItems = [
  {
    title: 'menu.about',
    url: '/about',
  },
  {
    title: 'menu.lineUp',
    url: '/lineup',
  },
  {
    title: 'menu.technology',
    url: '/technology',
  },
  {
    title: 'menu.sport',
    url: '/sport',
  },
  {
    title: 'menu.news',
    url: '/news',
  },
  {
    title: 'menu.partners',
    url: '/partners',
  },
  {
    title: 'menu.media',
    url: '/media',
  },
  {
    title: 'menu.contacts',
    url: '/contacts',
  }
];

export const lineUpItems = {
  '2016': [
    {
      title: 'Main stage',
      title_eng: 'Main stage',
      url: '/lineup/2016/main'
    }
  ],
  '2015': [
    {
      title: 'Main stage',
      title_eng: 'Main stage',
      url: '/lineup/2015/main'
    },
    {
      title: 'Live & Bass stage',
      title_eng: 'Live & Bass stage',
      url: '/lineup/2015/live'
    },
    {
      title: 'Tot:Spot',
      title_eng: 'Tot:Spot',
      url: '/lineup/2015/tot'
    },
    {
      title: 'Mendeleev Stage',
      title_eng: 'Mendeleev Stage',
      url: '/lineup/2015/mendeleev'
    },
    {
      title: 'Flat 247',
      title_eng: 'Flat 247',
      url: '/lineup/2015/flat'
    },
    {
      title: 'Circle',
      title_eng: 'Circle',
      url: '/lineup/2015/circle'
    }
  ],
  '2014': [
    {
      title: '',
      title_eng: '',
      url: '/lineup/2014/main'
    }
  ]
};

export const aboutItems = [
  {
    title: 'Как добраться',
    title_eng: 'How to get there',
    url: '/about/map',
    anchor: 'map'
  },
  {
    title: 'Где жить',
    title_eng: 'Where to live',
    url: '/about/live',
    anchor: 'live'
  },
  {
    title: 'Фудкорт',
    title_eng: 'Food',
    url: '/about/food',
    anchor: 'food'
  },
  {
    title: 'Советы',
    title_eng: 'Advises',
    url: '/about/advises',
    anchor: 'advises'
  },
  {
    title: 'FAQ',
    title_eng: 'FAQ',
    url: '/about/faq',
    anchor: 'faq'
  },
  {
    title: 'Правила',
    title_eng: 'Rules',
    url: '/about/rules',
    anchor: 'rules'
  }
];


export const technologyItems = [
  {
    title: 'Виртуальная реальность',
    title_eng: 'Virtual reality',
    url: '/technology/virtuality'
  },
  {
    title: '3D зона',
    title_eng: '3D zone',
    url: '/technology/3d'
  },
  {
    title: 'Транспорт',
    title_eng: 'Transport',
    url: '/technology/transport'
  },
  {
    title: 'Роботы',
    title_eng: 'Robots',
    url: '/technology/robots'
  },
  {
    title: 'Гаджеты',
    title_eng: 'Gadgets',
    url: '/technology/gadgets'
  },
  {
    title: 'Здоровье',
    title_eng: 'Health',
    url: '/technology/health'
  },
  {
    title: 'Лекторий',
    title_eng: 'Lectures',
    url: '/technology/lecture'
  }
];

export const sportItems = [
  {
    title: 'Workout',
    title_eng: 'Workout',
    url: '/sport/workout',
    anchor: 'workout'
  },
  {
    title: 'Батутный спорт',
    title_eng: 'Trampoline',
    url: '/sport/trampoline',
    anchor: 'trampoline'
  },
  {
    title: 'Баскетбол',
    title_eng: 'Basketball',
    url: '/sport/basketball',
    anchor: 'basketball'
  },
  {
    title: 'Фрисби',
    title_eng: 'Frisbee',
    url: '/sport/frisbee',
    anchor: 'frisbee'
  },
  {
    title: 'Танц.площадка',
    title_eng: 'Dance floor',
    url: '/sport/dance',
    anchor: 'dance'
  },
  {
    title: 'Американский футбол',
    title_eng: 'American football',
    url: '/sport/american_football',
    anchor: 'american_football'
  },
  {
    title: 'Волейбол',
    title_eng: 'Volleyball',
    url: '/sport/voleyball',
    anchor: 'volleyball'
  },
  {
    title: 'Футбол',
    title_eng: 'Football',
    url: '/sport/socer',
    anchor: 'socer'
  },
  {
    title: 'Йога',
    title_eng: 'Yoga',
    url: '/sport/joga',
    anchor: 'yoga'
  }
];

export const newsItems = [
  {
    title: 'Новости',
    title_eng: 'News',
    url: '/news/main'
  },
  {
    title: 'СМИ о Alfa Future People',
    title_eng: 'News about Alfa Future People',
    url: '/news/afp'
  },
];

export const partnerItems = [
  {
    title: '2015',
    title_eng: '2015',
    url: '/partners/main'
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

const generateByNum = (folderName, ext, max) => {
  let images = [];
  for(let i=1; i <= max; i++) {
    images.push({
      url: `${folderName}${i}.${ext}`
    });
  }
  return images;

}

export const typesSport = [
  {
    title: 'Street Workout',
    text: 'На территории фестиваля Alfa Future People была оборудована профессиональная площадка для street workout.',
    title_eng: 'Street workout',
    text_eng: 'On the Alfa Future People festival a professional platform for street workout will be equipped! The program includes performances of the best athletes of the Mutant Clan club (http://vk.com/mutantclan) and also street workout master classes.',
    images: generateByNum('/assets/img/sport-photo/Work-out/', 'jpg', 6),
    url: '/sport/workout',
    anchor: 'workout'
  },
  {
    title: 'Батутный спорт',
    text: 'Батутный клуб "Up and Fly" - это команда профессиональных спортивных инструкторов, для каждого из которых спорт – это призвание и дело всей жизни. Главная задача - это поделится своими знаниями и опытом, помочь всем желающим освоить трюки на спортивном батуте, сформировать красивое и гармоничное тело.',
    title_eng: 'Trampoline',
    text_eng: 'The club «Up and Fly» will teach everybody, who wish to learn how to jump on the trampoline (http://upandfly.ru). The program includes: free jumping, performances and professional workshops. Trampoline club «Up and Fly» is a team of professional sports instructors. For each of them sport is a calling and lifework. Their main task is to share their knowledge and experience to help all people, who wish to learn the tricks on the trampoline sports, create a beautiful and harmonious body.',
    images: generateByNum('/assets/img/sport-photo/jump/', 'jpg', 3),
    url: '/sport/trampoline',
    anchor: 'trampoline'
  },
  {
    title: 'Баскетбол',
    text: 'Баскетбольный клуб «Нижний Новгород» два года подряд организовывал турниры по стритболуВ программе 2015 года: турнир с участием 4-х профессиональных баскетбольных команд из Казани, Воронежа, Санкт-Петербурга и Нижнего Новгорода, любительские турниры между участниками фестиваля и мастер-классы.',
    title_eng: 'Basketball',
    text_eng: 'Basketball club «Nizhny Novgorod» for the second year in a row organizes a streetball playground at the festival. The program includes: tournament with 4 professional basketball teams from Kazan, Voronezh, St. Petersburg and Nizhny Novgorod, amateur tournaments between the guests of the festival and master classes.',
    images: generateByNum('/assets/img/sport-photo/basketball/', 'jpg', 6),
    url: '/sport/basketball',
    anchor: 'basketball'
  },
  {
    title: 'Фрисби',
    text: 'Нижегородский диск-гольф клуб (http://www.discgolfnn.ru) - это команда профессионалов, которая популяризирует в России направление увлекательной игры в диск-гольф. Вместе с Российской ассоциацией диск-гольфа и Нижегородской федерацией спортивных игр с летающим диском мы провели более 50 турниров.',
    title_eng: 'Frisbee',
    text_eng: 'This year we organized at the festival a special Frisbee area. The program includes workshops, ultimate-frisbee, disc-golf, contests and more! Disc-golf club from Nizhny Novgorod (http://www.discgolfnn.ru) - it is a professional team that promotes this exciting disc-golf game in Russia. Together with the Russian Association of Disc Golf and Nizhniy Novgorod federation of sports games with a flying disc, we will hold more than 50 tournaments.',
    images: generateByNum('/assets/img/sport-photo/Frisbee/', 'jpg', 3),
    url: '/sport/frisbee',
    anchor: 'frisbee'
  },
  {
    title: 'Танцевальная площадка',
    text: 'Федерация спортивных танцев DANCE COOL (http://dance-cool.ru) – самая крупная сеть танцевальных школ по уличным и современным направлениям, лидер проведения самых зрелищных и масштабных танцевальных мероприятий Нижнего Новгорода.В программе: танцевальные мастер-классы от лучших преподавателей Федерации, по направлениям house dance, hip-hop dance, jazz funk. А также специальное танцевальное шоу в исполнении команды DANCE-COOL CREW.Помимо основной тусовки, танцевальная студия Rise готова предложить Вам много чего интересного: мастер-классы по PoleDance (vk.com/risenn) от ведущих тренеров Нижнего Новгорода, яркие выступления на пилонах и огромное количество позитива и взрывных эмоций!',
    title_eng: 'Dance floor',
    text_eng: 'Federation of sports dances DANCE COOL (http://dance-cool.ru) is the largest network of schools on street dance and contemporary dance trends, the leader in arranging the most spectacular and large-scale dance events in Nizhny Novgorod. The program includes dance workshops from the best teachers of Federation on house dance, hip-hop dance, jazz funk. And also a special dance show performed by the DANCE-COOL CREW.',
    images: generateByNum('/assets/img/sport-photo/dance/', 'jpg', 2),
    url: '/sport/dance',
    anchor: 'dance'
  },
  {
    title: 'Американский футбол',
    text: 'Бескомпромиссный и жесткий вид спорта, не оставляющий равнодушным даже самого требовательного зрителя.На фестивале Alfa Future People сразились две сильнейшие команды России – команда из Нижнего Новгорода Raiders 52 и Rebels из Ярославля.',
    title_eng: 'American football',
    text_eng: 'Football is an uncompromising and tough sport, that do not leave indifferent even the most demanding audience. At the Alfa Future People festival you’ll see the battle of two strongest Russian teams: the Raiders from Nizhny Novgorod and the Rebels 52 from Yaroslavl. «Nizhny Novgorod team of American football» «Raiders 52 » (http://af52.ru) was founded in 2008 and now it is the top team in Nizhny Novgorod. Annually it takes part in various competitions: in 2010 Raiders 52 won first place in the Russian Championship, in group “B”, in 2011 became the owners of the international Cup «Vytautas Magnus» (Minsk) and the winners of the regional tournament «Volga-Bowl» in 2013 it entered the top - 8 teams, and in 2014 the top - 4 on the basis of the Russian Championship. The Soccer team REBELS (https://vk.com/rebels_yaroslavl) became the leading team in Yaroslavl. The team consists of amateur athletes from other sports. The 21st of September 2013 is the day, when the team was found. In 2014 the team took part in a number of tournaments and has chalked up several prizes.',
    images: generateByNum('/assets/img/sport-photo/american-football/', 'jpg', 4),
    url: '/sport/american_football',
    anchor: 'american_football'
  },
  {
    title: 'Волейбол',
    text: 'На 6 волейбольных площадках лучшие спортсмены волейбольный клуба «Губерния» провели мастер-классы, показательные матчи и мини-турниры для гостей фестиваля.Волейбольный клуб «Губерния» (https://vk.com/nnvolley) является одной из самых успешных спортивных команд Нижнего Новгорода и Нижегородской области.',
    title_eng: 'Volleyball',
    text_eng: 'On the 6 best volleyball courts the volleyball club «Gubernia» will give master classes, exhibition matches and mini-tournaments for guests of the festival. Volleyball club «Gubernia» (https://vk.com/nnvolley) is one of the most successful sports teams in Nizhny Novgorod and the Nizhny Novgorod region. «Gubernia» won 13 games in a row in the regular stage and took fourth place in the season, which gave the team the right to take part in the prestigious European competition, the Cup of the European Volleyball Confederation. Last year «Gubernia» made its debut on the international stage in the CEV Cup and won silver medals, and it also made success at the championship of Russia, ranking fifth line among the strongest teams of the country.',
    images: generateByNum('/assets/img/sport-photo/volleyball/', 'jpg', 4),
    url: '/sport/volleyball',
    anchor: 'volleyball'
  },
  {
    title: 'Футбол',
    text: 'На площадке фестиваля ФК "Волга" (http://www.fcvolgann.ru) организовала увлекательный чемпионат по футболу среди участников AFPФК "Волга" - главная футбольная команда Нижнего Новгорода и всей Нижегородской области. В копилке «Волги» победы над такими топ-клубами, как столичные «Спартак» (в Кубке), «Динамо» и «Локомотив», казанский «Рубин» и ФК «Краснодар» (в чемпионате страны).',
    title_eng: 'Football',
    text_eng: 'On the festival site FC «Volga» (http://www.fcvolgann.ru) organizes exciting football championship among AFP visitors. Football workshops, relay races and various competitions will be hold for festival guests. FC «Volga» is the main soccer team of Nizhny Novgorod and the Nizhny Novgorod region. «Volga» thrashed such top clubs as the Moscow «Spartac» (the Cup), «Dynamo» and «Locomotive», Kazan «Rubin» and FC  «Krasnodar» (national championship).',
    images: generateByNum('/assets/img/sport-photo/football/', 'jpg', 1),
    url: '/sport/football',
    anchor: 'football'
  },
  {
    title: 'Экстримлэнд',
    text: 'Нижегородская база отдыха "Экстримленд" в этом году специально для гостей фестиваля привезла профессиональный скаладром и обустроила площадку для игры в лазертаг! ЭКСТРИМЛЕНД -это первая и единственная база активного отдыха в Нижегородской области, где собраны все возможные развлечения для самых требовательных экстремалов. http://vk.com/extremeland',
    title_eng: 'Extremeland',
    text_eng: 'This year, Nizhny Novgorod recreation center «Exstremeland», special for the guests of the AFP festival, will bring a professional climbing wall and equipped playground for laser tag! EKSTRIMLAND is the first and only database of recreation in the Nizhny Novgorod region, where you can find all the possible entertainment for the most demanding adventurers. http://vk.com/extremeland',
    url: '/sport/extrimland',
    anchor: 'extrimland'
  },
  {
    title: 'Йога',
    text: 'Первая студия горячей йоги на Покровке дала возможность жителям города приобщиться к популярному в Европе и США, современному направлению Бикрам йоги, которую можно по праву назвать фитнесом XXI века.В этом году все участники фестиваля смогут приняли участие в наших тренировках по йоге! Вы убедитесь, что йога - это мощный заряд энергии!',
    title_eng: 'Yoga',
    text_eng: 'The first hot yoga studio on Pokrovka enabled the people of the city to join the popular in Europe and the United States the modern direction of Bikram yoga, which can rightly be called a fitness of the XXI. This year all the guests of the festival will be able to take part in our yoga trainings! You will find that yoga could give you a powerful boost of energy!',
    images: generateByNum('/assets/img/sport-photo/yoga/', 'jpg', 3),
    url: '/sport/yoga',
    anchor: 'yoga'
  },
  {
    title: 'X-Fit',
    text: 'Федеральная сеть фитнес-клубов X-Fit — это более 50 современных, продуманных и гостеприимных спортивных клубов премиум и бизнес формата по всей стране. На протяжении трех жарких июльских дней гости фестиваля занимались под чутким руководством лучших инструкторов из клуба «X-fit Нижний Новгород». http://xfitnn.ru',
    title_eng: 'X-Fit',
    text_eng: 'Federal chain of fitness clubs X-Fit present more than 50 contemporary, thoughtful and hospitable sports clubs of premium and business class al over the country. For three hot July days, you can practice under the guidance of the best instructors from the club «X-fit Nizhny Novgorod». Thanks to professional coaches, who will help you easily learn, how to do the exercises and calculate the load on your body! Be ensure the effectiveness of sports and recharge your batteries for the unrestrained night dance!',
    url: '/sport/xfit',
    anchor: 'xfit'
  },

];

export const mainSport = {
  'eng': (
    <div>
      <p>
      In 2015 at the ALFA FUTURE PEOPLE festival there will be even more sports entertainment, spectacular shows from the «stars» of the sport, dance, yoga, trampolining master-classes, also street workouts in other sports.
      </p>
      <p>
  Lovers of outdoor activities will be quite glad to now about 2 well-equipped football fields, six volleyball courts, 4 playgrounds for dodge ball (bouncers), streetball court and a frisbee lawn. Specially for professional American football match, a great field with spectator’s stands will be built. July 17 two top teams – «Raiders 52» (Nizhny Novgorod) and «Rebels» (Yaroslavl) will fight for the cup of the festival. Before the match, the players will talk about the basic rules and hurls, equipment and differences between American football and rugby.
      </p>
      <p>
  This year, we have a great addition to the extreme zone - the real 12-meter climbing wall. You can work out with the instructor: climbing wall is equipped with ropes and safety harnesses.
      </p>
      <p>
  For the first time the festival will be holding a   «colorful» group running race, in which can participate close to 300 AFP guests. During this unforgettable «race», runners, generously sprinkled with colored powder from head to toe, overcome a distance of 2 km. Excellent mood, emotions and incredible festival look are guaranteed!'
      </p>
    </div>
  ),
  'ru': (
    <div>
      <p>
      В 2015 году на фестивале Alfa Future People было  представлено еще больше спортивных развлечений, зрелищных шоу от «звезд» спорта и интересных мастер-классов по танцам, йоге, прыжкам на батуте, street workout и другим направлениям.
      </p>
      <p>
Для всех любителей спортивного отдыха было оборудованно 2 футбольных поля, 6 волейбольных площадок, 4 поля для игры в доджбол (вышибалы), площадка для стритбола и поле для фрисби. Так же специально для профессионального матча по американскому футболу было построено грандиозное поле с трибунами. 17 июля за кубок фестиваля сразились две сильнейшие команды – «Рэйдерс 52» (Нижний Новгород) и «Rebels» (Ярославль). Перед матчем игроки рассказали об основных правилах и бросках, экипировке и отличиях американского футбола от регби.
      </p>
      <p>
Еще в этом году у нас было пополнение в зоне экстрима – самый настоящий 8-метровый скалодром. Впервые в рамках фестиваля так же прошел «красочный» групповой забег, в котором приняли участие более 300 гостей фестиваля. Во время этой незабываемой «гонки» бегуны, щедро осыпанные с головы до ног разноцветным порошком, преодолели дистанцию в 2 км!
      </p>
    </div>
  )
};

export const typesTechnology = [
  {
    title: 'Зона виртуальной реальности',
    text: 'Дополненная реальность, как и в 2014 году, была представлена стендами со шлемами «Oculus Rift 2». Эта зона была разделена на 2 части: · бесплатная зона с самыми современными играми; · специальные платные 3D-аттракционы дополненной реальности; · один из самых впечатляющих и необычных аттракционов – «Дельтаплан». Вы смогли научиться управлять дельтапланом, а освоив маневрирование, можно было сполна насладиться высотой и полётом – ветер, дующий в лицо, был как настоящий!',
    title_eng: '',
    text_eng: '',
    images: generateByNum('/assets/img/technology/virt/', 'jpg', 3),
    anchor: 'virt',
    url: '/technology/virt'
  },
  {
    title: '3D зона',
    text: 'Практически все, что сейчас существует в индустрии 3D-технологий, вы могли увидеть собственными глазами на фестивале Alfa Future People 2015. Эта инновационная зона получила еще больший размах: мы увеличили территорию шатра в несколько раз и разместили все 3D-развлечения в 4-х разных блоках: 3D-печать – печать самых разнообразных фигурок, объектов и даже брелоков с Альфа Бро. Так же в этом году здесь печатали сладости из шоколада и делали сахарную 3D-печать на принтере, привезенном специально из Америки. В этом блоке так же находился огромный принтер (1мх1м), который печатал большие сложные объекты. Все желающие могли зайти в специальную комнату и понаблюдать за процессом печати. Впервые на фестивале была представлена футуристичная 3D-комната, все внутреннее убранство которой было напечатано на 3D-принтере. Вы могли потрогать все предметы интерьера, посидеть на диване и проверить на прочность стулья и стол. Трехмерное или 3D-сканирование –  это процесс перевода физической формы реального объекта в цифровую форму, получение трехмерной компьютерной модели объекта. Специально для демонстрации этого процесса в 3D-зоне был установлен гигантский сканер, который способен отсканировать человека в полный рост, в любой позе. Скан бесплатный, а по специальной фестивальной цене – 3 000 рублей (обычно это стоит от 20 000 руб.) можно было распечатать результат. Так же здесь были представлены мобильные сканеры, которыми можно отсканировать машину и любые другие объекты.',
    title_eng: '3D zone',
    text_eng: 'At the Alfa Future People 2015 you will be able to see for yourself almost all present-day products of 3D-technology industry. This year the 3D Zone has a larger scale: the area of the tent is increased in size in several times and 3D-entertainments are divided in 4 different blocks: 3D-printing – making various three-dimensional objects, figures and even little pendants with Alfa Bro. This year we present 3D printed sweets from chocolate and sugar made on the printer, specially brought from America. A huge printer (1m x 1m), that can print large complex objects will be also presented in this block. Everyone could observe the exciting process of printing from a special room. This year for the first time at the festival you will be able to visit futuristic 3D-room, all the interior of which is printed on the 3D-printer. Alfa Future festival gests could check all the objects of interior, sit on the sofa and touch on the strength chairs and a table. Three-dimensional or 3D-scanning - the process of analysing a real-world object , collecting data and then constructing digital three-dimensional model of the object. To demonstrate this process in the 3D-area there will be installed a giant scanner, that is able to scan the human full length and in any position. The scan is free, and at a special festival price - 3000 rubles (usually it costs from 20 000 rub.), you can print the result. There will be also presented mobile scanners,  that can scan a car or any other objects. You could spend some time at workshops to get the more detailed information about all the printers, scanners, the principles of its operation and the real benefit of these new technologies worldwide today. Special equipment - 3D-converter that is capable of transferring any 2D- object in 3D also will be represented in this area. In the FUN-Zone there will be a photo booth, in which you could snap off some funny shots with prop, printed on the 3D printer. Use your imagination and accessories, such as ears, Gentleman bowknot, funny mustache, glasses - and you get bright photos, charged with positive! In this area there will be a race on the printed 3D-machines. Colorful car details in a variety of design formats will be printed on 3D-printer.',
    images: generateByNum('/assets/img/technology/3d/', 'jpg', 1),
    anchor: '3d',
    url: '/technology/3d'
  },
  {
    title: 'Зона электроскутеров',
    text: 'Эта зона была целиком и полностью отведена передовому мобильному транспорту. Все гости фестиваля смогли не только увидеть, но и попробовать самые актуальные и инновационные электроновинки:<ul><li>– NinebotOne – лучшее электроколесо (моноколесо), презентация которого прошла в конце 2014 года. Безумно модное и технологичное устройство.</li><li>– Ninebot – электроскутер, внешне похожий на Segwey c поистине космическим дизайном.</li><li>– Segway Smart S1 – революционное направление, не похожее ни на Segway, ни на моноколесо. Маленькая, мобильная и безумно простая в освоении платформа.</li></ul>',
    title_eng: '',
    text_eng: '',
    images: generateByNum('/assets/img/technology/scooter/', 'jpg', 3),
    anchor: 'scooter',
    url: '/technology/scooter'
  },
  {
    title: 'Зона электрокаров',
    text: 'На три фестивальных дня любителям автомобильного авангарда в зоне передовых технологий будет доступен целый парк актуальных транспортных средств. <br/>    В первую очередь, это спорткар BMW i8, сочетающий в себе потрясающие гибридные технологии и авангардный дизайн. А так же великолепная Tesla и большое разнообразие новейшей техники: мотоцикл Zero и другие.<br />Тема электрических мотоциклов не нова и является еще более старой, чем электрические авто. А вот первый в мире серийный электрический мотоцикл, пригодный как для города, так и для экстремальных условий - венец человеческой мысли. Полнофункциональный электрический серийный мотоцикл Zero будет представлен на фестивале Alfa Future People, где гости смогут увидеть, прикоснуться и оценить этот замечательный девайс.',
    title_eng: '',
    text_eng: '',
    images: generateByNum('/assets/img/technology/car/', 'jpg', 2),
    anchor: 'car',
    url: '/technology/car'
  },
  {
    title: 'Шоу роботов',
    text: 'На Alfa Future People 2015 вас ждут увлекательные и захватывающие выступления роботов - новинок технологического прогресса.<br />У вас была возможность оценить «художественный талант» робота-портретиста Kuka. Всего за 3 минуты он обрабатывал изображение человека, вычислял контуры лица и контрастные линии и наносил получившийся портрет на бумагу (кстати, очень правдоподобный!) ',
    title_eng: '',
    text_eng: '',
    images: generateByNum('/assets/img/technology/robot/', 'jpg', 1),
    anchor: 'robot',
    url: '/technology/robot'
  },
  {
    title: 'Выставка гаджетов',
    text: 'В рамках выставки современных гаджетов гости фестиваля смогут ознакомиться с рядом технических новинок. Ниже представлена лишь малая часть!<br />Ноутбуки:<br/>- Dell XPS 2015 - самый компактный 13-дюймовый ноутбук на планете, оборудованный первым в мире практически безграничным дисплеем<br />- Apple MacBook 2015 - cверхкомпактный ноутбук в прочном алюминиевом корпусе размером с глянцевый журнал<br />- Dell Alienware - представляет собой сочетание высокой производительности и беспрецедентных графических возможностей с революционным дизайном — идеальный вариант для полного погружения в атмосферу видеоигр<br /><br/>Смартфоны:<br />- BB Passport - смартфон BlackBerry с QWERTY клавиатурой<br />- LG G Flex - новинка корейской компании с изогнутым корпусом и самовосстанавливающимся покрытием<br />- Nexus 6 - новый «гуглофон», референсный смартфон от Google и Motorola, с солидным дисплеем в 6 дюймов и разрешением в QHD.<br />Отдельным элементом выставки гаджетов на ALFA FUTURE PEOPLE 2015 стали  инновационные носимые технологические новинки!<br /><br/>Умные часы:<br />- Apple Watch - самый персональный продукт Apple, потому что это первое устройство, которое в буквальном смысле можно надеть<br />- Moto 360 - часы Moto 360 – это «умные часы» премиум-класса<br />- LG G watch - первые «умные» часы с Android Wear, официально поступившие в продажу в России<br />- ASUS Zen Watch - имиджевый умный аксессуар от компании Asus<br />- Samsung Gear S - модель отличается оригинальным дизайном с изогнутым Super AMOLED дисплеем, который удобно ложится на запястье и гарантирует удобство просмотра. <br /><br/>Браслеты:<br />- Samsung Gear Fit - первое интеллектуальное носимое устройство с изогнутым Super AMOLED-дисплеем, созданное специально для занятий фитнесом и спортом<br />- Fitbit Charge -  бюджетная модель новой серии «умных» фитнес-компаньонов во влагозащищенном поликарбонатном корпусе<br />- Jawbone UP 3 - самый продвинутый фитнес-трекер на рынке, уникальный по набору измеряемых параметров <br />- Sony SmartBand - это гаджет-браслет от Sony, который носится на запястье и регистрирует всё, чем вы занимаетесь.<br />- Nike FuelBand - это браслет для людей, ведущих активный образ жизни. <br />Так же в этой зоне будут проходить лекции от независимых блогеров о современных гаджетах: 6 спикеров непредвзято расскажут о достоинствах и недостатках самых современных устройств.',
    title_eng: 'Exhibition of gadgets',
    text_eng: 'Alfa Future Festival gests could get to know with some extra-new gadgets, short list of which is presented below:<br /><br /> Laptops:<br />- Dell XPS 2015 – the most compact 13-inch laptop in the world, equipped with the world\'s first virtually limitless display.<br />- Apple MacBook 2015 – also one of the most compact laptop in a rugged aluminum enclosure in the size of a glossy magazine.<br />- Dell Alienware - is a combination of high performance and unprecedented graphics capabilities, with a revolutionary design - an ideal option for total immersion in the atmosphere of video games.<br /><br />Smartphones:<br />- BB Passport - smartphone BlackBerry with QWERTY keyboard.<br />- LG G Flex – the new one of the Korean company with a curved case and self- healing coverage.<br />- Nexus 6 – new "google phone" referenced smartphone from Google and Motorola, with a big display of 6 inches and resolution of QHD<br />- An individual part of the gadgets exhibition at ALFA FUTURE PEOPLE 2015 will be innovative wearable technology trends!<br /><br />Smart Watch:<br />- Apple Watch - most personal product of Apple -  the first device that can literally worn.<br />- Moto 360 - Moto 360 Watch – premium-class “smart watch”<br />- LG G watch - the first "smart" watch with Android Wear, officially went on sale in Russia.<br />- ASUS Zen Watch - smart fashion accessory from the Asus.<br />- Samsung Gear S – this model has a unique design with a curved Super AMOLED display, that conveniently fits on the wrist and ensures easy viewing.<br /><br />Wristlets:<br />- Samsung Gear Fit – the first intelligent wearable device with a curved Super AMOLED-display, designed special for fitness and sport.<br />- Fitbit Charge – budget-friendly model of the new line of "smart" fitness-companion in weatherproof polycarbonate housing.<br />- Jawbone UP 3 – the most advanced fitness tracker in the market, a unique set of measured parameters.<br />- Sony SmartBand – this gadget-bracelet from Sony, which is worn on the wrist, records absolutely everything, what you are doing during the day.<br />- Nike FuelBand – this bracelet for people with an  active lifestyles.<br /><br />In the area there will be lectures on modern gadgets held by independent bloggers: 6 speakers will impartially tell about the pros and cons of the latest devices.',
    images: generateByNum('/assets/img/technology/gadjet/', 'jpg', 13),
    anchor: 'gadget',
    url: '/technology/gadget'
  },
  {
    title: 'GOPRO',
    text: 'Современные технологии видеосъемок - одна из самых интересных и актуальных тем нашего времени. В этом году партнером фестиваля AFP стал GoPro - компания, которая полностью перевернула представление о видеосъемках, и сегодня выпускает самые популярные и продвинутые action-камеры в мире!<br />THIS IS YOUR LIFE. BE A HERO.',
    title_eng: 'GOPRO',
    text_eng: 'Modern video recording technologies - one of the most interesting and topical issues of today. This year GoPro became a partner of the AFP festival! GoPro - the company that has completely reinvented the video shooting, and today produces the most advanced and popular action-camera in the world! Friends, you are officially invited to the interactive GoPro brand zone! Workshop with the star of the operators team and Ambassadors of the brand, special area with demo lineup of cameras and accessories, the opportunity to participate in the photo and video contests and win the latest GoPro camera. Show the best moments of the festival and get on the official YouTube channel of the AFP festival',
    images: generateByNum('/assets/img/technology/gopro/', 'jpg', 1),
    anchor: 'gopro',
    url: '/technology/gopro'
  },
  {
    title: 'Технологии здоровья',
    text: 'Высокие технологии в сфере науки и фармацевтики – очень важная и нужная тема, которая будет также представлена на фестивале.<br/>С помощью 3D-фотозоны можно будет ощутить себя внутри настоящей лаборатории! Особо смелые участники смогут погрузиться в 3D-реальность и сразиться с опасными вирусами! За участие во всех активностях, подготовленных специально для зоны инновационных технологий здоровья, можно будет получить приятные подарки.<br/>Кроме того, у всех гостей AFP будет уникальная возможность не только отдохнуть, но и абсолютно бесплатно проверить состояние здоровья!',
    title_eng: 'Health technologies',
    text_eng: 'High technology in the field of science and pharmacy is a very important and necessary topic, that will be also presented at the festival. With the help of 3D-photo zone you can feel yourself inside the real lab! The really daring participants can immerse themselves in the 3D-reality and fight against dangerous viruses! For participation in all activities, prepared specifically for the zone of ??innovative health technologies, it will be possible to get nice gifts. In addition, all AFP guests will have a unique opportunity not only to relax, but also to check the state of health absolutely for free!',
    images: [],
    anchor: 'health',
    url: '/technology/health'
  },
  {
    title: 'Лекторий',
    text: 'Еще одно нововведение 2015 года – лекторий на 150 посетителей, в котором прошли выступления ведущих экспертов по высокотехнологичным гаджетам. Независимые блогеры и Hi-tech специалисты непредвзято расскажут о достоинствах и недостатках самых передовых устройств и ответят на все вопросы аудитории.',
    title_eng: '',
    text_eng: '',
    images: [],
    anchor: 'lecture',
    url: '/technology/lecture'
  },
];

export const mainTechnology = {
  'eng': (
    <div>
      <p>
      AFP - is a festival of tomorrow, and tomorrow is all about innovations. Last year leading technology companies brought their latest innovations to the festival and gave our guests a chance to test the incredible gadgets.
      </p>
      <p>
In the interactive zone everybody had an opportunity to dicover the up-to-date technology: with the help of virtual reality glasses one could immerse into a unique fantastical world, some took part in masterclasses in how to create three-dimensional objects, and a few lucky ones even gained prizes, that were made for the winners on one of the latest 3D printers.
      </p>
      <p>
In the transport zone guests of the festival could find information about modern modes of transport, sit behind the wheel of an electrocar and learn to drive several kinds of electric scooters. An impressive show with a Tesla coil, creating real lightnings, let the spectators appreciate the true value of electricity.
      </p>
      <p>
Robots, symbols of the future, became the most discussed and photographed objects. Everyone wanted to have a picture with one of our transformers or talk to a "living" robotron.
      </p>
      <p>
In 2015 you'll see completely different technologies and the updated versions of gadgets presented last year. Fabulous scooters, unusual technological fashion, "tame" robots and amazing cars, as well as interactive attractions and a gadget show that will blow your mind - all coming this July!
      </p>
    </div>
  ),
  'ru': (
    <div>
      <p>
      Невероятные скутеры, нестандартная технологичная мода, «ручные» роботы и удивительные автомобили, а также интерактивные аттракционы и выставка гаджетов, поражающих воображение!
      <p>
      </p>
Мы знакомим вас с последними трендами, инновационными гаджетами и даем возможность протестировать все понравившиеся новинки. Мы открыты и к вашим идеям. Если вы знаете об уникальной технологии, сами производите или поставляете в Россию то, что может быть интересно активным молодым людям, и хотите заявить о себе – мы поможем это сделать.
      <p>
      </p>
Пришлите заявку на почту alfafuturepeople@gmail.com и мы представим вашу технологию наравне с ведущими мировыми брендами. О вас напишут ведущие СМИ, о вас узнают десятки тысяч гостей фестиваля, а фото увидят пользователи всех социальных сетей.
      </p>
    </div>
  )
};

export const typesNews = [
  {
    title: 'AXWELL ^ INGROSSO - первые хедлайнеры AFP 2016',
    text: 'На территории фестиваля Alfa Future People была оборудована профессиональная площадка для street workout.',
    preview: 'ALFA FUTURE PEOPLE гордо представляет первых хедлайнеров фестиваля 2016 года - AXWELL ^ INGROSSO.',
    date: '15.12.2015',
    group: 'AFP2016',
    title_eng: 'AXWELL ^ INGROSSO - very first headliners announced @ Alfa Future People 2016.',
    text_eng: 'On the Alfa Future People festival a professional platform for street workout will be equipped! The program includes performances of the best athletes of the Mutant Clan club (http://vk.com/mutantclan) and also street workout master classes.',
    preview_eng: 'Alfa Future People Festival proudly presents the first headliners of 2016 - world-famous duet AXWELL ^ INGROSSO.',
    image: '/assets/img/news/dj1.jpg',
  },
  {
    title: 'Сегодня стали известны даты AFP-2016',
    text: 'На территории фестиваля Alfa Future People была оборудована профессиональная площадка для street workout.',
    preview: 'Главный фестиваль музыки и технологий Alfa Future People пройдет 22-24 июля 2016г.',
    date: '19.11.2015',
    group: 'AFP2016',
    title_eng: 'Dates of AFP-2016 are finaly announced!',
    text_eng: 'On the Alfa Future People festival a professional platform for street workout will be equipped! The program includes performances of the best athletes of the Mutant Clan club (http://vk.com/mutantclan) and also street workout master classes.',
    preview_eng: 'The main festival of electronic music and technologies will be held 22-24 July 2016',
    image: '/assets/img/news/ticket.jpg',
  },
  {
    title: 'AXWELL ^ INGROSSO - первые хедлайнеры AFP 2016!',
    text: 'На территории фестиваля Alfa Future People была оборудована профессиональная площадка для street workout.',
    preview: 'ALFA FUTURE PEOPLE гордо представляет первых хедлайнеров фестиваля 2016 года - AXWELL ^ INGROSSO.',
    date: '15.11.2015',
    group: 'AFP2016',
    title_eng: 'AXWELL ^ INGROSSO - very first headliners announced @ Alfa Future People 2016.',
    text_eng: 'On the Alfa Future People festival a professional platform for street workout will be equipped! The program includes performances of the best athletes of the Mutant Clan club (http://vk.com/mutantclan) and also street workout master classes.',
    preview_eng: 'Alfa Future People Festival proudly presents the first headliners of 2016 - world-famous duet AXWELL ^ INGROSSO.',
    image: '/assets/img/news/dj1.jpg',
  },
  {
    title: 'AXWELL ^ INGROSSO - первые хедлайнеры AFP 2016!',
    text: 'На территории фестиваля Alfa Future People была оборудована профессиональная площадка для street workout.',
    preview: 'ALFA FUTURE PEOPLE гордо представляет первых хедлайнеров фестиваля 2016 года - AXWELL ^ INGROSSO.',
    date: '14.11.2015',
    group: 'AFP2016',
    title_eng: 'AXWELL ^ INGROSSO - very first headliners announced @ Alfa Future People 2016.',
    text_eng: 'On the Alfa Future People festival a professional platform for street workout will be equipped! The program includes performances of the best athletes of the Mutant Clan club (http://vk.com/mutantclan) and also street workout master classes.',
    preview_eng: 'Alfa Future People Festival proudly presents the first headliners of 2016 - world-famous duet AXWELL ^ INGROSSO.',
    image: '/assets/img/news/dj1.jpg',
  },
  {
    title: 'AXWELL ^ INGROSSO - первые хедлайнеры AFP 2016!',
    text: 'На территории фестиваля Alfa Future People была оборудована профессиональная площадка для street workout.',
    preview: 'ALFA FUTURE PEOPLE гордо представляет первых хедлайнеров фестиваля 2016 года - AXWELL ^ INGROSSO.',
    date: '13.11.2015',
    group: 'AFP2016',
    title_eng: 'AXWELL ^ INGROSSO - very first headliners announced @ Alfa Future People 2016.',
    text_eng: 'On the Alfa Future People festival a professional platform for street workout will be equipped! The program includes performances of the best athletes of the Mutant Clan club (http://vk.com/mutantclan) and also street workout master classes.',
    preview_eng: 'Alfa Future People Festival proudly presents the first headliners of 2016 - world-famous duet AXWELL ^ INGROSSO.',
    image: '/assets/img/news/dj1.jpg',
  },
  {
    title: 'AXWELL ^ INGROSSO - первые хедлайнеры AFP 2016!',
    text: 'На территории фестиваля Alfa Future People была оборудована профессиональная площадка для street workout.',
    preview: 'ALFA FUTURE PEOPLE гордо представляет первых хедлайнеров фестиваля 2016 года - AXWELL ^ INGROSSO.',
    date: '10.11.2015',
    group: 'AFP2016',
    title_eng: 'AXWELL ^ INGROSSO - very first headliners announced @ Alfa Future People 2016.',
    text_eng: 'On the Alfa Future People festival a professional platform for street workout will be equipped! The program includes performances of the best athletes of the Mutant Clan club (http://vk.com/mutantclan) and also street workout master classes.',
    preview_eng: 'Alfa Future People Festival proudly presents the first headliners of 2016 - world-famous duet AXWELL ^ INGROSSO.',
    image: '/assets/img/news/dj1.jpg',
  },
];

export const partners = [
  {
    logo: 'logo-mastercard.svg',
    title: 'MasterCard',
    title_eng: 'MasterCard',
    url: 'http://www.mastercard.com/ru/consumer/index.html',
    desc: 'Технологическая компания, работающая в глобальной платежной индустрии. Мы управляем самой быстрой в мире сетью обработки платежей, которая соединяет потребителей, финансовые институты, торговые организации, правительственные и деловые структуры более чем в 210 странах и территориях.',
    desc_eng: ''
  },
  {
    logo: 'logo-ucs.svg',
    title: 'United Card Service – UCS',
    title_eng: 'United Card Service – UCS',
    url: 'https://www.ucs.ru/',
    desc: 'Крупнейшая в России независимая процессинговая компания, специализирующаяся на выпуске и обслуживании карт международных и российских платежных систем. UCS обеспечивает бесконтактные платежи на территории фестиваля ALFA FUTURE PEOPLE.',
    desc_eng: ''
  },
  {
    logo: 'logo-beeline.svg',
    title: 'Билайн',
    title_eng: 'Beeline',
    url: 'http://moskva.beeline.ru/',
    desc: 'ОАО «ВымпелКом» (бренд «Билайн») вновь выступит технологическим партнером фестиваля ALFA FUTURE PEOPLE. Мы сделали все, для того, чтобы вы могли всегда оставаться на связи и делиться впечатлениями, яркими фотографиями или видео в социальных сетях.',
    desc_eng: ''
  },
  {
    logo: 'logo-mtv.svg',
    title: 'MTV Россия',
    title_eng: 'MTV Russia',
    url: 'http://mtv.ru/',
    desc: 'Молодежный развлекательный канал, в эфире которого ты можешь увидеть популярнейшие по всему миру шоу, самые яркие  международные концерты, оригинальные российские шоу и, конечно же, самые свежие и актуальные клипы.  MTV Россия – информационный партнер фестиваля ALFA FUTURE PEOPLE.',
    desc_eng: ''
  },
  {
    logo: 'logo-europeplus.svg',
    title: 'Европа Плюс',
    title_eng: 'Europe plus',
    url: 'http://www.europaplus.ru/',
    desc: 'Радиостанция № 1 в России и крупнейшая сеть музыкальных станций в России и СНГ. Ежедневно Европу Плюс выбирают около 10,4 миллионов слушателей, а ее еженедельная аудитория составляет около 24 миллионов человек. Европа Плюс — это качественная современная популярная музыка:',
    desc_eng: ''
  },
  {
    logo: 'logo-mini.svg',
    title: 'Mini',
    title_eng: 'Mini',
    url: 'http://mini.ru/',
    desc: 'Легендарный британский бренд MINI производит компактные автомобили премиум-класса с 1959 года. Яркие, спортивные автомобили MINI отличаются безупречным стилем, отточенной управляемостью и инновационными технологиями, а сама компания известна своим смелым подходом и смелыми,',
    desc_eng: ''
  },
  {
    logo: 'logo-pepsi.svg',
    title: 'Pepsi®',
    title_eng: 'Pepsi®',
    url: 'http://www.pepsi.com/ru-ru/d',
    desc: 'Всемирно известный безалкогольный прохладительный напиток, появившийся в США в 1898 году. Свое привычное название и широкое признание Pepsi® получил в 1903 году. В СССР Pepsi® впервые появился на первой Американской национальной выставке в июле 1959 года: фотографии генсека ЦК КПСС Никиты Хрущёва,',
    desc_eng: ''
  },
  {
    logo: 'logo-mf.svg',
    title: 'Холдинг MF Group',
    title_eng: 'Holding MF Group',
    url: 'http://mf-group.com/',
    desc: 'MF Group осуществляет полный технический продакшн фестиваля ALFA FUTURE PEOPLE: подготовка всей технической документации, монтаж сценических конструкций, декорационное оформление, световое и звуковое оформление, энергообеспечение, прокладка инженерных коммуникаций для всей инфраструктуры фестиваля',
    desc_eng: ''
  },
  {
    logo: 'logo-alfastrah.svg',
    title: 'Группа «АльфаСтрахование»',
    title_eng: '«Alfastrahovanie» group',
    url: 'http://www.alfastrah.ru/',
    desc: 'Одна из крупнейших российских страховых компаний с универсальным портфелем услуг, включающим как комплексные программы защиты интересов бизнеса, так и широкий спектр страховых продуктов для частных лиц. Группа «АльфаСтрахование» - партнер фестиваля ALFA FUTURE PEOPLE',
    desc_eng: ''
  },
  {
    logo: 'logo-kplayer.svg',
    title: 'K_player',
    title_eng: 'K_player',
    url: 'https://vk.com/k_player',
    desc: 'Cообщество для тех, кто интересуется актуальными событиями из мира музыки, кино, дизайна, технологий и самой жизни. K_player стремится быть в курсе тенденций во всех областях современного искусства, следит за творчеством талантливых людей, освещает актуальные мероприятия и делится наблюдениями на своих',
    desc_eng: ''
  },
  {
    logo: 'logo-mentos.svg',
    title: 'Mentos',
    title_eng: 'Mentos',
    url: 'http://www.mentos.ru/',
    desc: 'Глобальный бренд, который можно купить более чем в 150 странах мира.В России бренд присутствует с 1994 года. Это  культ для целого поколения молодых людей! Линейку продуктов Mentos  составляют уникальные жевательные резинки и драже самых разнообразных вкусов. Бренд широко известен российскому',
    desc_eng: ''
  },
  {
    logo: 'logo-gopro.svg',
    title: 'GoPro, Inc.',
    title_eng: 'GoPro, Inc.',
    url: 'http://www.gopro.com/',
    desc: 'Дает возможность людям нестандартно рассказывать о своей жизни и делиться самыми главными событиями. Все началось с идеи помогать спортсменам самостоятельно снимать свои достижения и вовлекать в различные виды спорта желающих. Позже процесс съемки адаптировался под различные увлечения людей,',
    desc_eng: ''
  },
  {
    logo: 'logo-privet.svg',
    title: 'Privet',
    title_eng: 'Privet',
    url: 'http://privet.ru/',
    desc: 'Мобильный сервис знакомств с теми, кто близок. Любое знакомство начинается с "Привет". Privet – новые знакомства на фестивале ALFA FUTURE PEOPLE.',
    desc_eng: ''
  },
  {
    logo: 'logo-axe.svg',
    title: 'AXE',
    title_eng: 'AXE',
    url: 'https://www.axeeffect.ru/',
    desc: 'Торговая марка компании Unilever, выпускающей под этим брендом парфюмированные средства для мужчин. Впервые марка появилась во Франции в 1983г. и до сих пор завоевывает все большую и большую популярность по всему миру. Полномасштабный запуск Axe в России и Украине, состоялся в начале 2004 года.',
    desc_eng: ''
  },
  {
    logo: 'logo-tweeze.svg',
    title: 'Twize',
    title_eng: 'Twize',
    url: 'https://www.twize.ru/',
    desc: 'Уникальная  платформа 3D-моделирования, 3D-сканирования и 3D-печати любых объектов.При помощи современных технологий мы можем изготовить точную копию любого объекта. Процедура сканирования, благодаря которой проекция человека или вещи появляется в компьютере, занимает несколько минут, а создание 3D',
    desc_eng: ''
  }
];


export const personList = [
  {
    name: 'Екатерина Осадчая',
    name_eng: 'Ekaterina Osadchaya',
    job: 'Директор по работе со спонсорами и партнерами',
    job_eng: 'Partnership Director',
    email: 'EOsadchaya@alfabank.ru'
  },
  {
    name: 'Денис Кожаев',
    name_eng: 'Denis Kozhaev',
    job: 'Вопросы по фудкорту',
    job_eng: 'Food court',
    email: 'DKozhaev@alfabank.ru'
  },
  {
    name: 'Анастасия Ярынич',
    name_eng: 'Anastasia Yarinich',
    job: 'Вопросы по зоне технологий и PR',
    job_eng: 'Technologies & PR',
    email: 'AYarynich@alfabank.ru'
  },
  {
    name: 'Анастасия Макарчукова',
    name_eng: 'Anastasia Makarchukova',
    job: 'Вопросы по зоне спорта',
    job_eng: 'Sport zone',
    email: 'AMakarchukova@alfabank.ru'
  },
  {
    name: 'Кристина Вдовина',
    name_eng: 'Kristina Vdovina',
    job: 'Директор по рекламе',
    job_eng: 'Advertising director',
    email: 'Kvdovina@alfabank.ru'
  }
];


export const faqItems = [
  {
    heading: 'Как добраться?',
    heading_eng: 'How to get?',
    title: 'Почему мы так мало путешествуем по своей стране? Как давно мы были на Волге?',
    title_eng: 'Почему мы так мало путешествуем по своей стране? Как давно мы были на Волге?',
    text: 'Свежий воздух и яркое солнце. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале ALFA FUTURE PEOPLE. Поверьте, отсюда вы вернетесь совершенно другим.',
    text_eng: 'Свежий воздух и яркое солнце. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале ALFA FUTURE PEOPLE. Поверьте, отсюда вы вернетесь совершенно другим.',
  },
  {
    heading: '',
    heading_eng: '',
    title: 'Как давно мы встречали рассвет в поле? ',
    title_eng: 'Как давно мы встречали рассвет в поле? ',
    text: 'Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Поверьте, отсюда вы вернетесь совершенно другим.',
    text_eng: 'Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Поверьте, отсюда вы вернетесь совершенно другим.',
  },
  {
    heading: '',
    heading_eng: '',
    title: 'Почему мы так мало путешествуем по своей стране? Как давно мы были на Волге?',
    title_eng: 'Почему мы так мало путешествуем по своей стране? Как давно мы были на Волге?',
    text: 'Свежий воздух и яркое солнце. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале ALFA FUTURE PEOPLE. Поверьте, отсюда вы вернетесь совершенно другим.',
    text_eng: 'Свежий воздух и яркое солнце. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале ALFA FUTURE PEOPLE. Поверьте, отсюда вы вернетесь совершенно другим.',
  },
  {
    heading: '',
    heading_eng: '',
    title: 'Как давно мы встречали рассвет в поле? ',
    title_eng: 'Как давно мы встречали рассвет в поле? ',
    text: 'Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Поверьте, отсюда вы вернетесь совершенно другим.',
    text_eng: 'Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Поверьте, отсюда вы вернетесь совершенно другим.',
  },
  {
    heading: '',
    heading_eng: '',
    title: 'Почему мы так мало путешествуем по своей стране? Как давно мы были на Волге?',
    title_eng: 'Почему мы так мало путешествуем по своей стране? Как давно мы были на Волге?',
    text: 'Свежий воздух и яркое солнце. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале ALFA FUTURE PEOPLE. Поверьте, отсюда вы вернетесь совершенно другим.',
    text_eng: 'Свежий воздух и яркое солнце. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале ALFA FUTURE PEOPLE. Поверьте, отсюда вы вернетесь совершенно другим.',
  },
  {
    heading: 'Где жить?',
    heading_eng: 'Where to live?',
    title: 'Как давно мы встречали рассвет в поле? ',
    title_eng: 'Как давно мы встречали рассвет в поле? ',
    text: 'Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Поверьте, отсюда вы вернетесь совершенно другим.',
    text_eng: 'Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Поверьте, отсюда вы вернетесь совершенно другим.',
  }

];


export const aboutMain = {
  ru: {
    title: 'О ФЕСТИВАЛЕ',
    text: 'Свежий воздух и яркое солнце. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале Alfa Future People',
    path: 'Самый быстрый и удобный способ добраться до фестиваля - электричка с Московского вокзала Нижнего Новгорода (или с любой остановки электрички в городе по Заволжскому направлению) до станции Козино. Количество электричек на время проведение фестиваля увеличено в несколько раз, также увеличено количество вагонов в поездах.',
    pathTitle: 'Как добраться?'
  },
  eng: {
    title: 'About festival',
    text: 'Fresh air and dazzling sunshine. Secret airfield on the Volga bank. Music that changes spirits. Technologies that will change the world. What else do you need to hear and to see the future? It’s so simple. Come and join us from 11th to 13th of July. And believe, you will return a completely different person, an Alfa Future Person.',
    path: 'The quickest and most convenient way to get to the festival - the train to Moscow railway station in Nizhny Novgorod (or any stoppage of the train in the city of Zavolzhsky direction) to the station Kozin. The number of trains on time, the festival has increased several times, also increased the number of cars per train.',
    pathTitle: 'How to get there?'
  },
  foodCourt: {
    title: 'Фудкорт',
    title_eng: 'Food Court',
    text: 'На таком масштабном мероприятии как Alfa Future People даже фудкорт, выстроенный посреди поля, поражает своими размерами и по размаху сравним с олимпийскими объектами.',
    text_eng: 'At such a huge event as ALFA FUTURE PEOPLE even food-court, situated in the field-center, boggles the mind by its grand scale, comparable to Olympic venues. Just for three days during the festival last year there were eaten more than 10 tones of food and drunk about 30 thousands of beer.',
    text_bottom: 'На таком масштабном мероприятии как Alfa Future People даже фудкорт, выстроенный посреди поля, поражает своими размерами и по размаху сравним с олимпийскими объектами.',
    text_bottom_eng: '',
    items: [
      {
        icon: 'icon-beer.svg',
        title: 'выпито более',
        title_eng: 'drunk more than',
        num: '30 000',
        desc: 'литров <br/>пива',
        desc_eng: 'litres <br/>of beer'
      },
      {
        icon: 'icon-burger.svg',
        title: 'съедено',
        title_eng: 'eaten',
        num: '10',
        desc: 'тонн <br/>продуктов',
        desc_eng: 'tonn <br/>of products'
      }
    ]
  },
  vipZone: {
    title: 'VIP зона',
    title_eng: 'VIP zone',
    text: 'На возвышении около главной сцены расположена VIP-зона фестиваля - отдельно стоящий на подиуме шатер с прекрасным видом на сцену и на общий танцпол. Для прохода в зону VIP необходимо наличие билета соответствующей категории.',
    text_eng: 'Raised up near the main stage there is a VIP-zone – a detached tent on a podium with a fine view of the general dance-floor. <br/><br/> Advantages of VIP-zone: <br/> - individual bars with a diverse range of drinks and a special menu;<br/>- separate dance-floor;<br/> - an opportunity to see artists and to be photographed with them.<br/><br/>To get to the VIP-zone area you must have a ticket of corresponding category. The price of a VIP-ticket includes one parking place in the parking-area, located at the festival grounds. ',
    button: 'Смотреть фото',
    button_eng: 'See photos'

  },
  goods: {
    title: 'Полезные советы',
    title_eng: 'Useful tips'
  },
  goodsList: [
    {
      icon: 'icon-mosquito.svg',
      text: 'Поскольку наше мероприятие проходит на свежем воздухе, советуем взять с собой средства от комаров.',
      text_eng: 'As the event is in the open air, we advise to bring insect repellent'
    },
    {
      icon: 'icon-umbrella.svg',
      text: 'Продумайте защиту от непредвиденного дождя – резиновые сапоги, зонты, дождевики и пр. Но будем надеяться, что все это не потребуется. ',
      text_eng: 'We recommend bringing along gumboots and raincoats in case of unpredictable rain.'
    },
    {
      icon: 'icon-sun.svg',
      text: 'Совет «наоборот»: если не планируете в течение дня отсиживаться в палатке или номере отеля, возьмите солнцезащитный крем с SPF',
      text_eng: 'We also recommend not bringing expensive jewelry, just in case it is lost in the grass.'
    },
    {
      icon: 'icon-bag.svg',
      text: 'Наш фестиваль – скорее, поход, чем клубная вечеринка, так что выбирайте соответствующий look. Дизайнерские вещи или дорогие ювелирные украшения лучше оставить дома',
      text_eng: 'Our festival is more of a camping trip than a club party, so choose an appropiate outfit.  Better leave your disigner clothes and expensive jewellery at home.'
    }
  ],
  howToGetThere: {
    title: 'Как добраться?',
    title_eng: 'How to get there?'
  },
  howToGetThereList: [
    {
      title: 'из Нижнего Новгорода',
      title_eng: 'from Nizhniy Novgorod',
      text: (
        <div>
          <p className="screen-text">
            Самый быстрый и удобный способ добраться до фестиваля - электричка с Московского вокзала Нижнего
            Новгорода (или с любой остановки электрички в городе по Заволжскому направлению) до станции
            Козино. Количество электричек на время проведение фестиваля увеличено в несколько раз, также
            увеличено количество вагонов в поездах.
          </p>

          <div className="aboutWay-benefits">
            <div className="benefit aboutWay-benefit aboutWay-benefit--1">
              <img src="/assets/img/about/icon-clock.svg" width="38" className="benefit-icon"/>
              <span className="benefit-title">30 м</span>

              <p className="benefit-desc">Средний интервал движения&nbsp;поездов</p>
            </div>
            <div className="benefit aboutWay-benefit aboutWay-benefit--2">
              <img src="/assets/img/about/icon-train.svg" width="41" className="benefit-icon"/>
              <span className="benefit-title">35 м</span>

              <p className="benefit-desc">время в пути от Московского вокзала до станции Козино</p>
            </div>
            <div className="benefit aboutWay-benefit aboutWay-benefit--3">
              <img src="/assets/img/about/icon-car.svg" width="55" className="benefit-icon"/>
              <span className="benefit-title">> 2.5 ч</span>

              <p className="benefit-desc">время в пути на машине до фестиваля в час пик</p>
            </div>
          </div>

          <p className="screen-text">
            От станции «Козино» до входа на фестиваль можно также пройти по пешеходному маршруту, который будет
            обозначен указателями. Добраться до фестиваля пешком от станции «Козино» можно примерно за 15-20
            мин.
          </p>
        </div>
      ),
      text_eng: (
        <div>
          <p className="screen-text">
            By train <br/>
            You can reach the railway station Kozino by train from Nizhny Novgorod. Find the train-schedule on Russian
            Railways website, where you can also buy tickets: <a target="_blank" href="http://rzd.ru">RZD.RU</a>.
          </p>

          <p className="screen-text">
            Have 15 minutes walk from Kozino train station following the signs which will lead you straight to the main
            entrance of the festival.
          </p>
        </div>
      )
    },

    {
      title: 'из Москвы',
      title_eng: 'from Moscow',
      text: (
        <div>
          <p className="screen-text">
            Железнодорожный транспорт:
            <ul>
              <li>
                - Высокоскоростным поездом «Стриж» или «Ласточка». Отправление с Курского вокзала Москвы, время в пути
                чуть меньше 4 часов.
              </li>
              <li>
                - Любым скорым или пассажирским поездом сообщением Москва - Нижний Новгород, Санкт-Петербург – Нижний
                Новгород или поездами, следующими далее Нижнего Новгорода (Казань, Киров, Томск, Н.Уренгой и др.)
                Подробное расписание поездов смотрите на сайте <a target="_blank" href="http://rzd.ru">rzd.ru</a>
                Там же вы сможете сразу приобрести электронный билет на нужный вам поезд.
              </li>
              <li>
                - Все высокоскоростные поезда «Стриж» и «Ласточка» обязательно останавливаются на станции «Дзержинск»
                (стоянка 2 мин), не доезжая немного до Нижнего Новгорода. Некоторые скорые и пассажирские поезда также
                останавливаются на станции «Дзержинск».
                Добраться от Дзержинска до фестиваля будет удобно зрителям, которые не бронировали себе гостиницы в
                Нижнем Новгороде, а также тем, кто едет сначала на фестиваль, а потом уже в Нижний Новгород.
              </li>
            </ul>
          </p>

          <div className="aboutWay-benefits">
            <div className="benefit aboutWay-benefit aboutWay-benefit--1">
              <img src="/assets/img/about/icon-clock.svg" width="38" className="benefit-icon"/>
              <span className="benefit-title">30 м</span>

              <p className="benefit-desc">Средний интервал движения&nbsp;поездов</p>
            </div>
            <div className="benefit aboutWay-benefit aboutWay-benefit--2">
              <img src="/assets/img/about/icon-train.svg" width="41" className="benefit-icon"/>
              <span className="benefit-title">35 м</span>

              <p className="benefit-desc">время в пути от Московского вокзала до станции Козино</p>
            </div>
            <div className="benefit aboutWay-benefit aboutWay-benefit--3">
              <img src="/assets/img/about/icon-car.svg" width="55" className="benefit-icon"/>
              <span className="benefit-title">> 2.5 ч</span>

              <p className="benefit-desc">время в пути на машине до фестиваля в час пик</p>
            </div>
          </div>

          <p className="screen-text">
            Зрители которые прибывают на любом поезде на Московский вокзал Нижнего Новгорода, могут далее
            воспользоваться самым быстрым и удобным способом добраться до фестиваля - электричкой с Московского вокзала
            Нижнего Новгорода до станции «Козино» (Заволжское направление).
            Интервал движения электричек в дни фестиваля составит в среднем около 30-40 мин, время в пути от Московского
            вокзала до станции Козино - около 35 минут.
          </p>

          <p className="screen-text">
            От ж/д станции «Козино» до места проведения фестиваля и обратно до станции «Козино», а также от въезда в
            поселок Большое Козино с трассы Р-152 (Нижний Новгород-Балахна) и обратно до трассы, в дни проведения
            фестиваля будут в круглосуточном режиме курсировать бесплатные шаттлы фестиваля.
            От станции «Козино» до входа фестиваль можно также пройти по пешеходному маршруту, который будет обозначен
            навигацией. Добраться до фестиваля пешком от станции «Козино» можно примерно за 15-20 мин.
            Также до Нижнего Новгорода из Москвы можно добраться самолетом. Смотрите расписание на сайтах авиакомпаний.
          </p>
        </div>
      ),
      text_eng: (
        <div>
          <p className="screen-text"></p>

          <p className="screen-text">
            By plane <br/>
            "Aeroflot", "UTair", "Ural Airlines" and some other airlines arrange flights from Moscow to Nizhny Novgorod.
            Timetable is available here: <a target="_blank" href="http://aviasales.ru">AVIASALES.RU</a>.
          </p>

          <p className="screen-text">
            By train <br/>
            Nizhny Novgorod is reachable from Moscow by train. Look through the train-schedule on Russian Railways
            website, where you can also buy tickets: <a target="_blank" href="http://rzd.ru">RZD.RU</a>.
          </p>

          <p className="screen-text">During the festival there will be specialized buses, which will shuttle from Moscow
            railway station in Nizhny Novgorod (Sq. Revolution, 2a) up to the concert stage.</p>

          <p className="screen-text">If you are a resident from Moscow (or you go through Moscow), you can go by
            high-speed train “Sapsan”, “Lastochka” or “Burevestnik”. All of them leave from Kursky railway station. You
            need to buy a ticket for “Dzerzhinsk” (direct to ATP) or Nizhny Novgorod (if you’re going to stay in a hotel
            in the city). The train journey is around 4 hours.</p>

          <p className="screen-text">
            By car <br/>
            To get to the festival, you need to drive along the M7 highway, pass the turning to Dzerzhinsk (to the
            right) and turn from the highway at the direction sign for Zavolzhie. Than go straight ahead to the
            T-junction, where you should turn right and keep on going straight ahead until the turn to Bolshoe Kozino.
          </p>

          <p className="screen-text">If you have a parking ticket or VIP- ticket, take the signs to the security parking
            area.</p>

          <p className="screen-text">If, for some reason, you haven’t bought tickets to the site-parking of the
            festival, but you have a ticket of “Standart” category, than you can leave your car at guarded paid parking
            “Autograd ", located on highway M7. Parking fee per day is 100 rubles.</p>

        </div>
      )
    },
    {
      title: 'из Санкт-Петербурга',
      title_eng: 'from Saint-Petersburg',
      text: (
        <div>
          <p className="screen-text">
            Из Санкт-Петербурга в Нижний Новгород выполняют рейсы несколько авиакомпаний.
            Смотрите расписание на сайтах авиакомпаний.
          </p>

          <p className="screen-text">
            Железнодорожный транспорт:
          </p>

          <p className="screen-text">
            - Любым скорым или пассажирским поездом сообщением Санкт-Петербург – Нижний Новгород или поездами,
            следующими далее Нижнего Новгорода (Казань, Киров, Томск, Н.Уренгой и др.)
          </p>

          <p className="screen-text">
            Мы рекомендуем доехать на «Сапсане» или любом другом поезде до Москвы и далее воспользоваться
            высокоскоростными поездами «Стриж» или «Ласточка». Отправление с Курского вокзала Москвы, время в пути чуть
            меньше 4 часов.
          </p>

          <p className="screen-text">
            Подробное расписание поездов смотрите на сайте <a target="_blank" href="http://rzd.ru">rzd.ru</a>
          </p>

        </div>
      ),
      text_eng: (
        <div>

          <p className="screen-text">
            By plane <br/>
            "Aeroflot", "Russia airlines" and some other airlines arrange flights from Moscow to Nizhny Novgorod.
            Timetable is available here: <a target="_blank" href="http://aviasales.ru">AVIASALES.RU</a>
          </p>

          <p className="screen-text">
            By train <br/>
            Nizhny Novgorod is reachable from St. Petersburg by train. Look through the train-schedule on Russian
            Railways website, where you can also buy tickets: <a target="_blank" href="http://rzd.ru">RZD.RU</a>
          </p>

          <p className="screen-text">If you are coming to festival from Moscow (or you go through Moscow), you can go by
            high-speed train “Sapsan”, “Lastochka” or :Burevestnik”. All of them leave from Kursky railway station. You
            need to buy a ticket for “Dzerzhinsk” (direct to ATP) or Nizhny Novgorod (if you’re going to stay in a hotel
            in the city). The train journey is around 4 hours.</p>

          <p className="screen-text">
            By car <br/>
            You need to take the M10 highway to Moscow, then head for the Ring Road-North towards Dmitrovskoe highway.
            After 19 km drive down to the highway and keep driving along the M7(Nizhny Novgorod).
          </p>

          <p className="screen-text">After you pass by the turn to Dzerzhinsk (to the right), turn off the highway at
            the direction sign for Zavolzhie (to the left). Then go straight ahead to the T-junction, where you should
            turn right and keep going straight ahead until the turning for Bolshoe Kozino.</p>

          <p className="screen-text">If you have a parking ticket or VIP- ticket, take the signs to the security parking
            area.</p>

          <p className="screen-text">If, for some reason, you haven’t bought tickets to the site-parking of the
            festival, but you have a ticket of “Standart” category, than you can leave your car at guarded paid parking
            “Autograd ", located on highway M7. Parking fee per day is 100 rubles.</p>


        </div>
      )
    },
    {
      title: 'другие города',
      title_eng: 'other',
      text: (
        <div>
          <p className="screen-text">
            ИНФОРМАЦИЯ ДЛЯ ЗРИТЕЛЕЙ, НАПРАВЛЯЮЩИХСЯ НА ФЕСТИВАЛЬ НА ЛИЧНОМ ТРАНСПОРТЕ
          </p>

          <p className="screen-text">
            Если вы выбрали для поездки на фестиваль личный автотранспорт, настоятельно рекомендуем внимательно
            ознакомиться с данной информацией:
          </p>

          <p className="screen-text">
            1. Зрители, купившие билеты на паркинг фестиваля – ознакомьтесь со схемами проезда на фестиваль в разделах
            «Из Москвы» или «Из Нижнего Новгорода», в зависимости от того с какой стороны вы будете ехать на фестиваль.
            На въезде в поселок Большое Козино вас попросят предъявить для сканирования билет на паркинг фестиваля.
            Большая просьба заранее подготовить билет на паркинг для сканирования, не перепутать его с билетами в
            кемпинги или на сам фестиваль. Само сканирование занимает пару секунд и вы не будете задерживать и создавать
            очередь из машин если заранее подготовите билет. Если у вас электронный билет на паркинг и вы его не
            распечатывали и хотите предъявить его на экране мобильного устройства, приготовьте мобильное устройство с
            уже открытым на экране файлом билета. Внимание – для въезда в поселок Большое Козино действует ТОЛЬКО билет
            на паркинг, никакие другие категории билетов фестиваля не дают право на въезд транспорта зрителей.
          </p>

          <p className="screen-text">
            Далее, после сканирования билета на въезде в поселок Большое Козино, двигайтесь все время по главной дороге,
            около 5 км и вы прибудете на КПП самого фестиваля. Там у вас еще раз просканируют билет на паркинг и вместо
            билета выдадут пропуск на парковку. С этим пропуском вы сможете, при необходимости, выехать с парковки
            фестиваля и из поселка и также вернутся обратно. Билет на паркинг вам будет уже не нужен для повторного
            въезда. Воспользоваться повторно билетом на паркинг для заезда на другой машине невозможно, после
            сканирования и выдачи пропуска на парковку, штрих-код билета на паркинг аннулируется.
          </p>

          <p className="screen-text">
            Рекомендуем без острой необходимости не выезжать с территории фестиваля, так как могут быть значительные
            пробки во время заезда автотранспорта зрителей на фестиваль.
          </p>

          <p className="screen-text">
            На пропуске который вам выдадут при въезде на территорию фестиваля, будет сразу вписан гос.номер вашей
            машины, а также вам будет необходимо самостоятельно вписать в соответствующую графу пропуска номер
            мобильного телефона водителя. Это обязательно требование. Номер телефона можно будет вписать когда
            припаркуетесь уже на парковке фестиваля.
          </p>

          <p className="screen-text">
            Пропуск на парковку должен всегда находится под лобовым стеклом вашего автомобиля!
          </p>

          <p className="screen-text">
            2. Зрители, не купившие заранее билеты на паркинг фестиваля, могут приобрести билет на паркинг на въезде в
            поселок Большое Козино у сотрудника контрольной службы фестиваля, в случае если к началу фестиваля билеты на
            паркинг еще будут в наличии.
          </p>

          <p className="screen-text">
            Если вы не хотите приобретать билет на паркинг или их уже нет в продаже, рекомендуем воспользоваться для
            стоянки вашей машины только охраняемыми стоянками расположенными относительно недалеко от поселка Большое
            Козино.
          </p>

          <p className="screen-text">
            В этом разделе мы будем вас информировать о возможных вариантах и местонахождении охраняемых платных
            парковках как можно ближе к месту проведения фестиваля. В данный момент эта информация еще обрабатывается.
            Следите за информацией здесь и в официальной группе ВК.
          </p>

          <p className="screen-text">
            В случае, если вы решили оставить свою машину где-то недалеко от въезда в поселок Большое Козино,
            рекомендуем внимательно отнестись к дорожным знакам установленным на дороге, потому что в случае наличия
            знака запрета остановки и стоянки ваша машина может быть эвакуирована.
          </p>

          <p className="screen-text">
            От КПП на въезде в поселок Большое Козино (дорога Р-152 Нижний Новгород-Балахна), будут круглосуточно
            курсировать бесплатные шаттлы до фестиваля и обратно до въезда в поселок. Это будет очень удобно для тех,
            кто оставит свою машину где-то относительно недалеко от въезда в поселок или на какой-то охраняемой парковке
            и доедет до въезда в поселок на такси или дойдет пешком.
          </p>

        </div>
      ),
      text_eng: (
        <div>
          <p className="screen-text">
            <p className="screen-text">
              How to get there by car <br/>
              Visitors who had bought parking tickets please read following instruction in "How to get there from Moscow
              or Nizhniy Novgorod" section. When entering Bolshoe Kozino village you might be need to show your parking
              tickets for scanning process. Please prepare your parking tickets.
            </p>

            <p>
              If you have electronic parking ticket please be ready to show it on your mobile device when entering.
              Attention! You can enter Bolshoe Kozino village using parking ticket only, no other kind of festival
              tickets let you enter Bolshoe Kozino by car.<br/>
              After the scanning process follow the main road. In aprox. 5km you will get the destination. At the gates
              your ticket will be scanned once again and you will get parking pass. This pass allowes you to go out of
              parking and let in whenever you want. From this moment you don't need your parking ticket anymore. You can
              not use same parking ticket for another car.<br/>
              We recommend not to leave parking without exigency to prevent traffic. <br/>
              Please write down your mobile number in a special section located on your parking pass. It is required.<br/>
              Parking pass should be located on windshield of your car.
            </p>

            <p>Visitors which haven't bought parking tickets in advance can buy them at the place. Anyways we recommend
              to buy tickets in advance because the number of them is limited.</p>

            <p>In case you don't want to buy parking ticket we recommend you to leave your car in any other car parks
              around Bolshoe Kozino village.</p>

            <p>
              In this section we are going to keep you updated with any information about possible park places around
              the festival area. Check it out as well as our official public in vk.com<br/>
              In case you decide to park your car by the entering of Bolshoe Kozino village, please pay attention to a
              traffic signs and tow away zones.
            </p>

            <p>Free night and day shuttle buses are provided between Bolshoe Kozino check point and festival area. It
              can be apropriate to a people who walk from the train station or park the car at the village car
              parks.</p>

          </p>

        </div>
      )
    }

  ],
  whereToLive: {
    title: 'Как добраться?',
    title_eng: 'How to get there?'
  },
  whereToLiveList: [
    {
      title: 'Alfa-Кемпинг',
      title_eng: 'Alfa Campsite',
      text: (
        <div>
          <p className="screen-text">
            Информация будет доступна позже
          </p>
        </div>
      ),
      text_eng: (
        <div>
          <p className="screen-text">
            Detailed information will be provided later
          </p>
        </div>
      )
    },
    {
      title: 'Omega-Кемпинг',
      title_eng: 'Omega Campsite',
      text: (
        <div>
          <p className="screen-text">
            Билет дает право на место в кемпинге на огороженной территории, расположенной недалеко от входа на
            фестиваль.
          </p>

          <p className="screen-text">
            Покупая билет в кемпинг, вы получаете право установки собственной палатки на огороженной территории,
            обеспеченной платными душевыми, туалетами, торговыми точками по продаже еды, напитков и предметов
            первой необходимости.
            Один билет дает право установки одной палатки вместимостью не более 4 человек. Предъявитель билета
            получает браслеты для входа в кемпинг в соответствии с количеством мест в его палатке.
          </p>

          <p className="screen-text">
            В кемпинг можно приводить гостей (из числа зрителей фестиваля) при предъявлении браслета жителя
            кемпинга и в его сопровождении, но ответственность за сохранность личных вещей жителей кемпинга
            администрация не несет.
          </p>

          <p className="screen-text">
            Вход на территорию кемпинга строго по билетам и браслетам.
          </p>
        </div>
      ),
      text_eng: (
        <div>
          <p className="screen-text">The Alfa Future ticket permits you to occupy one spot in free camping – Omega
            Camping - enclosed zone, which is not far from entry to the festival area. There you can find food-courts,
            pay shower-cabins, toilets and buy all required necessities.</p>

          <p className="screen-text">
            One ticket permits you to pitch no more than 4 berth tent. A ticket holder could get wristbands equal in
            number to the quantity of tent berths<br/>
            Guests in camping are allowed ( festival visitors only ), but only and accompanied by the camp resident. The
            camp administration does not assume responsibility for any loss or damage of guests personal bears.

          </p>

          <p className="screen-text">The entrance to the campsite is strictly by tickets and wristbands. Please, notice
            that organizers shall take no responsibility for tickets that has not been purchased through official point
            of sales.</p>

        </div>
      )
    },
    {
      title: 'Отели в Нижнем Новгороде',
      title_eng: 'Hotels in Nizhniy Novgorod',
      text: (
        <div>
          <p className="screen-text">
            Если же вы хотите жить в комфортабельных условиях, вы можете забронировать отель непосредственно в Нижнем
            Новгороде.
          </p>

        </div>
      ),
      text_eng: (
        <div>
          <p className="screen-text">
            You can find plenty of cozy hotels in Nizhniy Novgorod.
          </p>
        </div>
      )
    }
  ],
  info: [
    {
      icon: 'icon-parking.svg',
      title: 'Парковка',
      title_eng: 'Parking',
      text: 'В 10 минутах ходьбы от кемпинга организована удобная охраняемая парковка. Где вы можете спокойно оставить свою машину, не опасаясь, что с ней что-то случится. Билет на паркинг дает право въезда и регистрации для одного транспортного средства только категорий А и В.',
      text_eng: 'A 10-minute walk from the camping area we have arranged a convenient secure parking area. There you can leave your car safely and not to worry about any unpleasant surprises when you return. More information about parking will be available shortly. Follow the updates!'
    },

    {
      icon: 'icon-save.svg',
      title: 'Камеры хранения',
      title_eng: 'Luggage',
      text: 'На территории фестиваля установлены камеры хранения, здесь вы можете взять в аренду ячейку для личных вещей. Зная, что ваши ценности в безопасности, вы сможете по-настоящему расслабиться и получить удовольствие от мероприятия.',
      text_eng: 'At the festival we have set check-rooms, where you can rent a locker to keep your personal things. Now you can truly relax and enjoy the music, being confident that you luggage is safe.',
    }

  ]
}
