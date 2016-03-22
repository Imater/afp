import { generateByNum } from '../settings.jsx';
import React from 'react';

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

export const aboutMain = {
  ru: {
    title: 'О ФЕСТИВАЛЕ',
    text: 'Свежий воздух и яркое солнце. Тайный аэродром на берегу Волги. Музыка, которая меняет настроение. Технологии, которые меняют мир. Что нужно, чтобы услышать и увидеть будущее? Все просто. Быть на фестивале Alfa Future People',
    path: 'Самый быстрый и удобный способ добраться до фестиваля - электричка с Московского вокзала Нижнего Новгорода (или с любой остановки электрички в городе по Заволжскому направлению) до станции Козино. Количество электричек на время проведения фестиваля увеличено в несколько раз, также увеличено количество вагонов в поездах.',
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
    text_bottom: 'В 2016 году мы учли все пожелания гостей и запланировали более 25 точек питания с русской, итальянской, американской и даже китайской кухнями, Даже самый искушенный гурман обязательно найдет себе блюдо по вкусу',
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
    images: generateByNum('/assets/img/vip/', 'jpg', 17),
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
    },
    {
      icon: 'icon-ticket.svg',
      text: 'На 100% уверены, что едете на фестиваль? Тогда купите билеты на поезд заранее.',
      text_eng: '100% sure that he was going to the festival? Then buy train tickets in advance'
    },
    {
      icon: 'icon-friend.svg',
      text: 'Попробуйте заранее найти попутчиков, которые поедут на фестиваль из вашего города. Это можно сделать в группах AFP в соцсетях.',
      text_eng: 'Try to find someone who will go to the festival from your city. This can be done in groups AFP on social networks.'
    },
    {
      icon: 'icon-schema.svg',
      text: 'Если планируете встретиться с друзьями уже на фестивале, заранее изучите план территории на сайте.',
      text_eng: 'If you are going to meet your friends on the festival we recommend you to study plan of the territory beforehand '
    },
    {
      icon: 'icon-money.svg',
      text: 'Убедитесь, что на счету уже имеющейся у вас карты достаточно средств, или возьмите с собой наличные, чтобы внести их в банкомат на фестивале.',
      text_eng: 'Make sure than you have enough money on your credit card or bring along cash to make them into a cash machine at the festival.'
    },
    {
      icon: 'icon-sleep.svg',
      text: 'Выспитесь. Программа фестиваля очень насыщенная, и множество мероприятий будут проходить в ночное время, поэтому вряд ли вы будете рады, если проспите что-то интересное.',
      text_eng: 'Have a good sleep before the festival, but not during. The festival program is very intense and many activities will take place at night, so it\'s unlikely you\'ll be glad if oversleep something interesting.'
    },
    {
      icon: 'icon-plan.svg',
      text: 'Распланируйте свои фестивальные дни так, чтобы получить максимум удовольствия. Заранее определитесь, какие мероприятия и выступления вы хотите посетить.',
      text_eng: 'Plan your festival days so as to obtain maximum enjoyment. To determine in advance what activities and performances you want to visit.'
    },
    {
      icon: 'icon-safe.svg',
      text: 'Следите за своими личными вещами. Для комфортного пребывания на фестивале, рекомендуем взять в аренду камеру хранения.',
      text_eng: 'Watch your personal belongings. For a comfortable stay at the festival, be sure to rent a storage case.'
    },
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
            Козино. Количество электричек на время проведения фестиваля увеличено в несколько раз, также
            увеличено количество вагонов в поездах.
          </p>

          <div className="aboutWay-benefits">
            <div className="benefit aboutWay-benefit aboutWay-benefit--1">
              <img src="/assets/img/about/icon-clock.svg" width="40" height="40" className="benefit-icon"/>
              <span className="benefit-title">30 м</span>

              <p className="benefit-desc">Средний интервал движения&nbsp;поездов</p>
            </div>
            <div className="benefit aboutWay-benefit aboutWay-benefit--2">
              <img src="/assets/img/about/icon-train.svg" width="43" height="36" className="benefit-icon"/>
              <span className="benefit-title">35 м</span>

              <p className="benefit-desc">время в пути от Московского вокзала до станции Козино</p>
            </div>
            <div className="benefit aboutWay-benefit aboutWay-benefit--3">
              <img src="/assets/img/about/icon-car.svg" width="57"  height="42" className="benefit-icon"/>
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
                - Высокоскоростным поездом «Стриж» или «Ласточка». Отправление с Курского вокзала Москвы.
              </li>
              <li>
                - Любым скорым или пассажирским поездом сообщением Москва - Нижний Новгород, Санкт-Петербург – Нижний
                Новгород или поездами, следующими далее Нижнего Новгорода (Казань, Киров, Томск, Н.Уренгой и др.)
                Подробное расписание поездов смотрите на сайте <a target="_blank" href="http://rzd.ru">rzd.ru</a>
                Там же вы сможете сразу приобрести электронный билет на нужный вам поезд.
              </li>
              <li>
                - Большинство высокоскоростных поездов «Стриж» и «Ласточка» обязательно останавливаются на станции «Дзержинск»
                (стоянка 2 мин), не доезжая немного до Нижнего Новгорода. Некоторые скорые и пассажирские поезда также
                останавливаются на станции «Дзержинск».
                Добраться от Дзержинска до фестиваля будет удобно зрителям, которые не бронировали себе гостиницы в
                Нижнем Новгороде, а также тем, кто едет сначала на фестиваль, а потом уже в Нижний Новгород.
              </li>
            </ul>
          </p>

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
            От станции «Козино» до входа на фестиваль можно также пройти по пешеходному маршруту, который будет обозначен
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

          <p className="screen-text">If you have a parking ticket or VIP- ticket, take the signs to the parking
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

          <p className="screen-text">If you have a parking ticket or VIP- ticket, take the signs to the parking
            area.</p>

          <p className="screen-text">If, for some reason, you haven’t bought tickets to the site-parking of the
            festival, but you have a ticket of “Standart” category, than you can leave your car at guarded paid parking
            “Autograd ", located on highway M7. Parking fee per day is 100 rubles.</p>


        </div>
      )
    },
    {
      title: 'на личном транспорте',
      title_eng: 'other',
      text: (
        <div>
          <p className="screen-text">
            Информация для зрителей, направляющихся на фестиваль на личном транспорте.
          </p>

          <p className="screen-text">
            Если вы выбрали для поездки на фестиваль личный автотранспорт, настоятельно рекомендуем внимательно
            ознакомиться с данной информацией:
          </p>

          <p className="screen-text">
            1. Зрителям, купившим билеты на парковку фестиваля – нужно ознакомиться со <a href="/assets/pdf/map-schema.pdf" target="blank">СХЕМОЙ</a> проезда на фестиваль, «Из Москвы» или «Из Нижнего Новгорода», в зависимости от того с какой стороны вы будете ехать.
            На въезде в поселок Большое Козино вас попросят предъявить билет на парковку.
            Большая просьба заранее подготовить билет на парковку для сканирования и не перепутать его с билетами в
            кемпинги или на сам фестиваль. Процесс сканирования занимает всего пару секунд. Если у вас билет в электронном виде, то заранее откройте экран своего мобильного устройства для сканирования штрих-кода.

                Внимание! Для въезда в поселок Большое Козино действует ТОЛЬКО билет
            на паркинг, никакие другие категории билетов фестиваля не дают право на въезд транспорта.
          </p>

          <p className="screen-text">
            После сканирование вашего билета на паркинг при въезде в поселок Большое Козино, двигайтесь все время по главной дороге
         (примерно 5 км).  Далее вы окажетесь на КПП фестиваля. Там еще раз просканируют ваш билет на парковку и поменяют его напропуск на парковку. Этот пропуск даст вам право на многократный въезд и выезд с парковки фестиваля. Билет в этом случае больше не потребуется.
         Дважды соспользоваться  билетом на паркинг для въезда на другой машине невозможно. После
            сканирования и выдачи пропуска на парковку, штрих-код билета на парковку аннулируется.
          </p>

          <p className="screen-text">
            Рекомендуем без острой необходимости не выезжать с территории фестиваля, так как могут быть значительные
            пробки во время заезда автотранспорта зрителей на фестиваль.
          </p>

          <p className="screen-text">
            На пропуске, который вам выдадут при въезде на территорию фестиваля, будет  вписан гос.номер вашего
            автомобиля. Так же вам нужно будет самостоятельно вписать в соответствующую графу пропуска номер
            мобильного телефона водителя. Это обязательное требование.
          </p>

          <p className="screen-text">
            Пропуск на парковку должен всегда находится под лобовым стеклом вашего автомобиля!
          </p>

          <p className="screen-text">
            2. Зрители, не купившие заранее билеты на парковку фестиваля, смогут приобрести билет на паркинг на въезде в
            поселок Большое Козино у сотрудника контрольной службы фестиваля в случае наличия свободных парковочных мест.
          </p>

          <p className="screen-text">
            В случае, если вы не хотите приобретать билет на парковку или их уже нет в наличии, рекомендуем воспользоваться стоянками, расположенными относительно недалеко от поселка Большое Козино.
          </p>

          <p className="screen-text">
            В этом разделе мы будем  информировать вас о возможных вариантах и местонахождении платных
            парковок недалеко от территории фестиваля. В данный момент эта информация еще обрабатывается.
            Следите за информацией здесь и в официальной группе ВК.
          </p>

          <p className="screen-text">
            Если вы решили оставить свою машину недалеко от въезда в поселок Большое Козино,
            рекомендуем внимательно отнестись к дорожным знакам, установленным на дороге. В случае нарушения правил парковки и стоянки, ваша машина может быть эвакуирована.
          </p>

          <p className="screen-text">
            От КПП на въезде в поселок Большое Козино (дорога Р-152 Нижний Новгород-Балахна), будут круглосуточно
            курсировать бесплатные шаттлы до территории фестиваля и обратно до въезда в поселок. Это вариант будет удобен тем, кто решил оставить свой автомобиль на парковке недалеко от въезда в поселок. До въезда на территорию поселка Большое Козино можно будет дойти пешком или добраться на такси.

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
    title: 'Где жить?',
    title_eng: 'Where to live?'
  },
  whereToLiveList: [
    {
      title: 'Alfa-Кемпинг',
      title_eng: 'Alfa Campsite',
      text: (
        <div>
          <p className="screen-text">
            Билет в альфа-кемпинг дает право на место в кемпинге на огороженной и охраняемой территории с инфраструктурой, который располагается максимально близко ко входу на фестиваль.
          </p>
          <p className="screen-text">
            Покупая билет в альфа-кемпинг, вы получаете право установки собственной палатки на огороженной территории, обеспеченной бесплатными душевыми (только для жителей кемпинга), туалетами, торговыми точками по продаже еды и напитков, бесплатному доступу к сети WI-FI, бесплатным локерам для подзарядки мобильных устройств и локерам для ценных вещей и документов на ресепшн кемпинга (количество локеров ограничено).
          </p>
          <p className="screen-text">
            Один билет дает право установки одной палатки размером не более 4,5 х 3м и вместимостью не более 4 человек. Предъявитель билета получает браслеты для входа в кемпинг в соответствии с количеством
мест в его палатке.
          </p>
          <p className="screen-text">
            Вход на территорию кемпинга строго по билетам и браслетам.
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
            Билет в омега-кемпинг дает право на место в кемпинге на огороженной территории с инфраструктурой, расположенной в непосредственной близости от входа на фестиваль.
          </p>

          <p className="screen-text">
            Покупая билет в омега-кемпинг, вы получаете право установки собственной палатки на огороженной территории, обеспеченной платными душевыми, туалетами, торговыми точками по продаже еды и напитков. Один билет дает право установки одной палатки размером не более 4,5 х 3м и вместимостью не более 4 человек. Предъявитель билета получает браслеты для входа в кемпинг в соответствии с количеством мест в его палатке.
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
      title: 'Автодом',
      title_eng: 'Camper',
      text: (
        <div>
          <b>Информация для владельцев автодомов (кемперов)</b>
          <p></p>
          <p className="screen-text">Чтобы приехать на фестиваль на автодоме (кемпере), необходимо приобрести билет на паркинг (кроме конечно билетов на сам фестиваль).</p>
          <p className="screen-text">Если у вас большой автодом категории С, не волнуйтесь, вас пропустят. Ограничение по категориям ТС, указанное при покупке билета, на автодома не распространяется, но имеются некоторые ограничения (см.ниже).</p>
          <p>После проезда КПП на территорию фестиваля, у въезда на парковку, вам покажут место выделенное специально для стоянки автодомов.</p>
          <p></p>
          <p>Внимание:</p>
          <p></p>
          <p className="screen-text">- <span ></span>многократный въезд/выезд для автодомов&nbsp;<u><b>невозможен</b></u>&nbsp;(если вы решите выехать с территории до окончания фестиваля, вернуться назад вы не сможете);</p>
          <p className="screen-text">- <span ></span>стоянка автодомов возможна только в определенном для них месте;</p>
          <p className="screen-text">- <span ></span>если у вас не автодом, а «прицеп-дача», необходимо&nbsp;<u><b>два билета</b></u>&nbsp;на парковку (один на машину, второй на прицеп), при этом легковой автомобиль сможет, при необходимости, выезжать и приезжать назад;</p>
          <p className="screen-text">- <span ></span>в зоне стоянки автодомов действуют те же правила, что и для всех на парковке – запрещены мангалы и костры (правила указаны на билете);</p>
          <p className="screen-text">- <span ></span>на стоянке запрещено сливать грязную воду из баков автодома;</p>
          <p className="screen-text">- <span ></span>ответственность за сохранность оборудования автодома, ваших личных вещей и ценностей организаторы не несут;</p>
          <p></p>
          <p className="screen-text">Организаторы не гарантируют владельцам автодомов подключение к электричеству и водоснабжению, но при наличии такой технической возможности она будет предоставлена, о чем мы конечно же сообщим вам дополнительно. Рекомендуем до заезда на территорию фестиваля заправить автодом водой.</p>
          <p></p>
          <p className="screen-text">Организаторы обращаются ко всем владельцам автодомов, кто уже купил билет или планирует это делать. Предлагаем вам (после покупки билета) отправить информацию (не позднее 01 июля) на <a href="mailto:info@afp.ru"><span >info@afp.ru</span></a>&nbsp;с темой «Автодом на&nbsp;AFP» и указать:</p>
          <p className="screen-text">- <span ></span>модель/размеры автодома;</p>
          <p className="screen-text">- <span ></span>свой контактный телефон;</p>
          <p className="screen-text">- <span ></span>гос.номер автодома;</p>
          <p className="screen-text">- <span ></span>другие данные и пожелания;</p>
          <p></p>
          <p className="screen-text">Чем больше у нас будет информации по количеству и размерам автодомов, другой информации и ваших пожеланий, тем больше мы сможем сделать для комфортного пребывания в зоне стоянки ваших автодомов.</p>
          <p></p>
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
  ],
  info: [
    {
      icon: 'icon-parking.svg',
      title: 'Парковка',
      title_eng: 'Parking',
      text: 'В 10 минутах ходьбы от кемпинга организована удобная парковка. На ней вы можете спокойно оставить свою машину не опасаясь, что с ней что-то случится. Билет на паркинг дает право въезда и регистрации для одного транспортного средства только категорий А и В.',
      text_eng: 'A 10-minute walk from the camping area we have arranged a convenient parking area. There you can leave your car safely and not to worry about any unpleasant surprises when you return. More information about parking will be available shortly. Follow the updates!'
    },

    {
      icon: 'icon-save.svg',
      title: 'Камеры хранения',
      title_eng: 'Luggage',
      text: 'На территории фестиваля установлены камеры хранения, здесь вы можете взять в аренду ячейку для личных вещей. Зная, что ваши ценности в безопасности, вы сможете по-настоящему расслабиться и получить удовольствие от мероприятия.',
      text_eng: 'At the festival we have set check-rooms, where you can rent a locker to keep your personal things. Now you can truly relax and enjoy the music, being confident that you luggage is safe.',
    }
  ],
  rules: {
    festival : {
      text: (
        <div>
            <h3>Правила фестиваля "alfa future people"</h3>
            <p><strong>Посещение Фестиваля зрителями возможно СТРОГО по достижении 18 лет.</strong> Сотрудники полиции и Службы безопасности вправе потребовать предъявить оригинал документа (паспорт, водительское удостоверение), для проверки возраста. Лица, не достигшие 18 лет, на территорию фестиваля не допускаются.<br/>Вход на территорию Фестиваля осуществляется только по билетам (при первом проходе) и по браслетам для повторных проходов.</p>
            <p><strong>Запрещается вход на территорию Фестиваля:</strong></p>
            <ul>
              <li>с огнестрельным, пневматическим, газовым, травматическим, холодным оружием, колющими и режущими предметами, с легковоспламеняющимися жидкостями и взрывчатыми веществами, газовыми баллончиками и аэрозолями;</li>
              <li>с большими сумками и чемоданами;</li>
              <li>с едой и напитками в любой таре;</li>
              <li>с животными;</li>
              <li>в состоянии алкогольного и наркотического опьянения;</li>
            </ul>
            <p><strong>ВНИМАНИЕ</strong> - на территорию фестиваля категорически запрещено проносить наркотические средства. При входе на территорию, зрители и их личные вещи будут досмотрены сотрудниками полиции. В случае обнаружения при входе или на территории Фестиваля наркотического средства, гражданин может быть привлечен к ответственности в соответствии с законами Российской Федерации. Также запрещено проносить любые лекарства, кроме жизнеобеспечивающих, противоаллергенных и жидкостей для контактных линз. Если Вам необходимо иметь с собой лекарство, будьте готовы предъявить медицинские документы, подтверждающие необходимость использования нужных вам лекарств.</p>
            <p>
              <strong><u>На территории Фестиваля категорически запрещено:</u></strong>
              <ul>
                <li><strong>находиться с едой и напитками на танцполах всех сцен;</strong></li>
                <li><strong>курить на всей территории и на танцполах, кроме мест, обозначенных «Место для курения»;</strong></li>
                <li><strong>осуществлять любые покупки с использованием наличных денежных средств;</strong></li>
              </ul>
            </p>
            <p className="center"><strong>В случае нарушения правил, Вам может быть отказано в проходе на территорию <br/>Лица, нарушившие правила, будут удаляться с территории без компенсации стоимости билета</strong></p>
            <p className="center"><u><strong>НА ВСЕЙ ТЕРРИТОРИИ ФЕСТИВАЛЯ ВЕДЕТСЯ ВИДЕОНАБЛЮДЕНИЕ</strong></u></p>
            <h4>Общая информация для зрителей</h4>
            <ol>
              <li>Вход на территорию проведения Фестиваля осуществляется только по билетам категорий «СТАНДАРТ» или «VIP». Администрация Фестиваля не несет ответственности за билеты, приобретенные с рук.</li>
              <li>Для прохода на Фестиваль необходимо предъявить свой билет группе контроля для сканирования штрих-кода. В случае возникновения  проблем при считывании штрих-кода билета, Вам необходимо обратиться в Сервисный билетный центр (слева от входа на фестиваль до зоны досмотра). После прохода через группу контроля и зону досмотра, Вы получите Welkome Pack с картой и браслетом, с которым можно будет выходить за территорию фестиваля и входить повторно неограниченное количество раз в течении всего фестиваля. Браслет является одновременно и электронным пропуском на территорию, и платежным средством. Запрещается передавать (продавать) свой браслет другим лицам. При получении Welkome Pack с картой и браслетом ведется фото/видео фиксация каждого посетителя. Рекомендуем сохранять свои билеты до окончания Фестиваля.</li>
              <li>В случае утери/порчи браслета, Вы можете обратиться в Информационный центр Фестиваля (расположен в зоне выдачи браслетов, сразу после входа на Фестиваль) для его блокировки. Для бесплатного получения браслета взамен утерянного/испорченного, необходимо будет предъявить свой входной билет и удостоверение личности. Подробные правила и условия получения браслета взамен утерянного/испорченного можно узнать у сотрудников в Информационном центре.</li>
              <li>Для удобства гостей Фестиваля на всей территории установлены навигационные знаки. С подробной картой Фестиваля Вы можете ознакомиться в мобильном приложении, на официальном сайте Фестиваля, а также на информационных щитах.</li>
              <li>На территории Фестиваля расположены несколько пунктов скорой медицинской помощи.</li>
              <li>Для обеспечения Вашей безопасности, на всей территории Фестиваля ведется видеонаблюдение, в том числе скрытое.</li>
              <li>В случае если Вы стали свидетелем любого правонарушения или ЧП на территории Фестиваля, необходимо как можно быстрее сообщить об этом любому ближайшему сотруднику полиции, Службы безопасности или сотруднику Фестиваля.</li>
              <li>Если Вы нашли на территории Фестиваля утерянные кем-то вещи, документы, браслеты и т.д., просьба сдать их в Информационный центр. Туда же Вы можете обратиться, если потеряли вещи или документы на территории.</li>
              <li>В случае возникновения любых вопросов, Вы можете обратиться к сотрудникам Фестиваля или к сотрудникам Службы безопасности.</li>
              <li>Во время нахождения на территории Фестиваля все посетители обязаны соблюдать правила пребывания на мероприятии, неукоснительно выполнять все законные требования сотрудников правоохранительных органов и Службы безопасности Фестиваля. По всем возникающим вопросам, связанным с обеспечением безопасности и организации мероприятия, Вы можете в любое время обратиться в Информационный центр Фестиваля.</li>
            </ol>
            <p className="center"><strong>Желаем Вам приятного отдыха на “ALFA FUTURE PEOPLE”</strong></p>

        </div>
      ),
      text_eng: ''
    },
    camping: {
      text: (
        <div>
            <h3>Правила "альфа кемпинг"</h3>
            <p><strong>Вход на территорию возможен СТРОГО по достижении 18 лет.</strong> Сотрудники полиции и Службы безопасности вправе потребовать предъявить оригинал документа (паспорт, водительское удостоверение), для проверки возраста. Лица, не достигшие 18 лет, на территорию кемпинга не допускаются.<br/>Вход на территорию кемпинга осуществляется только по билетам (при первом проходе) и по браслетам для повторных проходов полученных после регистрации в кемпинге.</p>
            <p><strong>Запрещается вход на территорию кемпинга:</strong></p>
            <ul>
              <li>с огнестрельным, пневматическим, газовым, травматическим, холодным оружием, колющими и режущими предметами, с легковоспламеняющимися жидкостями и взрывчатыми веществами, газовыми баллончиками и аэрозолями;</li>
              <li>с мангалами, углем, газовыми горелками и др.;</li>
              <li>с любыми напитками в стеклянной таре, а также с алкогольными напитками;</li>
              <li>с животными;</li>
              <li>в состоянии алкогольного и наркотического опьянения;</li>
            </ul>
            <p><strong>ВНИМАНИЕ</strong> - на территорию кемпинга категорически запрещено проносить наркотические средства. При входе на территорию, посетители и их личные вещи будут досмотрены сотрудниками полиции. В случае обнаружения при входе или на территории кемпинга наркотического средства, гражданин может быть привлечен к ответственности в соответствии с законами Российской Федерации.</p>
            <p><strong><u>На территории кемпинга запрещено:</u></strong></p>
            <ul>
              <li><strong>разжигать костры, использовать мангалы, керосиновые лампы, газовые горелки;</strong></li>
              <li><strong>курить в палатках и на территории, кроме мест, обозначенных «Место для курения»;</strong></li>
              <li><strong>пользоваться душевыми гостям кемпинга;</strong></li>
              <li><strong>наносить вред имуществу кемпинга;</strong></li>
              <li><strong>занимать место под палатку более чем 4,5х3 метра</strong></li>
              <li><strong>устанавливать палатку на территории без регистрации на ресепшн кемпинга;</strong></li>
            </ul>
            <p className="center"><strong>В случае нарушения правил, Вам может быть отказано в проходе на территорию <br/>Лица нарушившие правила, будут удаляться с территории без компенсации стоимости билета</strong></p>
            <p className="center"><strong><u>НА ТЕРРИТОРИИ ВЕДЕТСЯ ВИДЕОНАБЛЮДЕНИЕ</u></strong></p>

          <h3>Правила "омега кемпинг"</h3>
          <p><strong>Вход на территорию возможен СТРОГО по достижении 18 лет.</strong> Сотрудники полиции и Службы безопасности вправе потребовать предъявить оригинал документа (паспорт, водительское удостоверение), для проверки возраста. Лица, не достигшие 18 лет, на территорию кемпинга не допускаются.<br/>Вход на территорию кемпинга осуществляется только по билетам (при первом проходе) и по браслетам для повторных проходов полученных после регистрации в кемпинге.</p>
          <p><strong>Запрещается вход на территорию кемпинга:</strong></p>
          <ul>
            <li>с огнестрельным, пневматическим, газовым, травматическим, холодным оружием, колющими и режущими предметами, с легковоспламеняющимися жидкостями и взрывчатыми веществами, газовыми баллончиками и аэрозолями;</li>
            <li>с мангалами, углем, газовыми горелками и др.;</li>
            <li>с любыми напитками в стеклянной таре, а также с алкогольными напитками;</li>
            <li>с животными;</li>
            <li>в состоянии алкогольного и наркотического опьянения;</li>
          </ul>
          <p><strong>ВНИМАНИЕ</strong> - на территорию кемпинга категорически запрещено проносить наркотические средства. При входе на территорию, посетители и их личные вещи будут досмотрены сотрудниками полиции. В случае обнаружения при входе или на территории кемпинга наркотического средства, гражданин может быть привлечен к ответственности в соответствии с законами Российской Федерации.</p>
          <p><strong><u>На территории кемпинга запрещено:</u></strong></p>
          <ul>
            <li><strong>разжигать костры, использовать мангалы, керосиновые лампы, газовые горелки;</strong></li>
            <li><strong>курить в палатках и на территории, кроме мест, обозначенных «Место для курения»;</strong></li>
            <li><strong>наносить вред имуществу кемпинга;</strong></li>
            <li><strong>занимать место под палатку более чем 4,5х3 метра</strong></li>
            <li><strong>устанавливать палатку на территории без регистрации на ресепшн кемпинга;</strong></li>
          </ul>
          <p><strong>В случае нарушения правил, Вам может быть отказано в проходе на территорию <br/>Лица нарушившие правила, будут удаляться с территории без компенсации стоимости билета</strong></p>
          <h4>Общая информация</h4>
          <p className="center"><strong>НА ТЕРРИТОРИИ ВЕДЕТСЯ ВИДЕОНАБЛЮДЕНИЕ</strong></p>
          <ol>
            <li>Вход на территорию кемпинга осуществляется только по билетам категории «ОМЕГА КЕМПИНГ». Один билет дает право на установку ОДНОЙ палатки 4,5х3 метра и вместимостью не более 4 человек. Администрация Фестиваля не несет ответственности за билеты, приобретенные с рук.</li>
            <li>Для прохода в кемпинг необходимо предъявить свой билет группе контроля для сканирования штрих-кода. В случае возникновения  проблем при считывании штрих-кода билета, Вам необходимо обратиться в Сервисный билетный центр (слева от входа на фестиваль до зоны досмотра).</li>
            <li>После прохода через группу контроля и досмотр, Вам необходимо пройти на стойку ресепшн кемпинга, где Вас зарегистрируют и выдадут браслеты кемпинга в соответствии с количеством мест Вашей палатки. За сохранность личных ценных вещей жителей кемпинга администрация ответственность не несет.</li>
            <li>Пользоваться платными душами на территории кемпинга, можно только оплачивая посещение душа  браслетом Фестиваля (получения браслета возможно после начала запуска зрителей на Фестиваль с 13.00 22 июля) или любой банковской картой. Оплата наличными за посещение душа не принимается.</li>
            <li>Для обеспечения Вашей безопасности, на территории кемпинга ведется видеонаблюдение, в том числе скрытое.</li>
            <li>В случае если Вы стали свидетелем любого правонарушения или ЧП на территории кемпинга, необходимо как можно быстрее сообщить об этом любому ближайшему сотруднику полиции, Службы безопасности или сотруднику Фестиваля.</li>
            <li>Если Вы нашли на территории кемпинга утерянные кем-то вещи, документы, браслеты и т.д., просьба сдать их на ресепшн кемпинга или в Информационный центр Фестиваля. Туда же Вы можете обратиться, если потеряли вещи или документы на территории.</li>
            <li>В случае возникновения любых вопросов, Вы можете обратиться к сотрудникам Фестиваля или к сотрудникам Службы безопасности.</li>
            <li>Во время нахождения на территории кемпинга все посетители обязаны соблюдать правила пребывания, неукоснительно выполнять все законные требования сотрудников правоохранительных органов и Службы безопасности Фестиваля. По всем возникающим вопросам, связанным с обеспечением безопасности и организации мероприятия, Вы можете в любое время обратиться в Информационный центр Фестиваля.</li>
          </ol>
          <p className="center"><strong>Желаем Вам приятного отдыха на “ALFA FUTURE PEOPLE”</strong></p>
        </div>
      ),
      text_eng: ''
    }
  }
}




