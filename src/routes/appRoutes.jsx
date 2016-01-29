import React from 'react';
import { Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';
import $ from 'jquery';

import smoothScroll from '../utils/smoothScroll';
import App from '../components/App';
import Main from '../containers/Main';
import Ticket from '../containers/Ticket';
import Personal from '../components/Ticket/Personal';
import Buy from '../components/Ticket/Buy';
import Status from '../components/Ticket/Status';
import LineUp from '../containers/LineUp';
import LineUpContent from '../containers/LineUpContent';
import Technology from '../containers/Technology';
import Sport from '../containers/Sport';
import About from '../containers/About';
import News from '../containers/News';
import NewsContent from '../containers/NewsContent';
import Partners from '../containers/Partners';
import Media from '../containers/Media';
import Album from '../containers/Album';
import AlbumAll from '../containers/AlbumAll';
import Contacts from '../containers/Contacts';
import Rules from '../containers/Rules';
import Faq from '../containers/Faq';
import Store from '../containers/Store';

function scrollTo(name, duration=1) {
  return () => {
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        let scrollToElement = $(`#${name}`);
        if(scrollToElement.length) {
          smoothScroll(scrollToElement.offset().top, duration);
        } else {
          console.error(`${name} element not found for scroll`);
        }
      })
    }
  }
}

let oldPath;

function defaultPath(defaultName) {
  return function(nextState, replaceState) {
    if(!nextState.params.part) {
      replaceState(null, `${nextState.location.pathname}/${defaultName}`);
    }
    const pathname = nextState.location.pathname;
    if (typeof document !== 'undefined') {
      const hash = window.location.hash;
      const self = this;
      if(hash) {
        setTimeout(()=>{
          scrollTo(hash.replace('#', ''))();
        }, 300);
      } else {
        if(
          (pathname === '/about/main/rules' && oldPath === '/about/map') ||
          (pathname === '/about/map' && oldPath === '/about/main/rules') ||
          false
        ) {
          //do nothing
        } else {
          smoothScroll(0, 0);
        }
      }
    }
    oldPath = nextState.location.pathname;
  }
}

function scrollTop() {
  return function(nextState, replaceState) {
    if (typeof document !== 'undefined') {
      smoothScroll(0, 0);
    }
  }
}

export default (
  <Route path='/' component={App} scrollStrategy='imitateBrowser'>
    <IndexRoute component={Main}/>
    <Route name="lineup" path='/lineup(/:year)(/:part)' component={LineUp} onEnter={defaultPath('2016/main')}/>
    <Route name="lineup" path='/lineup(/:year)(/:part)(/:id)' component={LineUpContent} onEnter={scrollTop()}/>
    <Route path='/about(/:part)' component={About} onEnter={defaultPath('map')}>
      <Route path='rules' component={Rules}></Route>
    </Route>
    <Route path='/faq' component={Faq}></Route>
    <Route path='/store' component={Store}></Route>
    <Route path='/technology(/:part)' component={Technology} onEnter={defaultPath('virtuality')}/>
    <Route path='/sport(/:part)' component={Sport} onEnter={defaultPath('workout')} />
    <Route path='/news(/:part)' component={News} onEnter={defaultPath('main')} />
    <Route path='/news(/:part)(/:newsId)' component={NewsContent} onEnter={scrollTop()} />
    <Route path='/partners(/:part)' component={Partners} onEnter={defaultPath('main')} />
    <Route path='/media(/:part)' component={Media} onEnter={defaultPath('2015')} />
    <Route path='/media/:part/:album/all/images' component={AlbumAll} />
    <Route path='/media(/:part)(/:album)(/:photo)' component={Album} />
    <Route path='/media(/:part)(/:album)(/:photo)/all/images/one' component={Album} />
    <Route path='/contacts(/:part)' component={Contacts} onEnter={defaultPath('main')} />
    <Route path='/ticket' component={Ticket} />
    <Route path='/ticket/personal' component={Personal} />
    <Route path='/ticket/buy' component={Buy} />
    <Route path='/ticket/status' component={Status} />
  </Route>
);
