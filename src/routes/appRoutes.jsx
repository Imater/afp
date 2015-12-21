import React from 'react';
import { Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';
import $ from 'jquery';

import App from '../components/App';
import Main from '../containers/Main';
import Ticket from '../components/Ticket/Ticket';
import Personal from '../components/Ticket/Personal';
import Buy from '../components/Ticket/Buy';
import Status from '../components/Ticket/Status';
import LineUp from '../containers/LineUp';
import Technology from '../containers/Technology';
import Sport from '../containers/Sport';
import About from '../containers/About';
import News from '../containers/News';
import smoothScroll from '../utils/smoothScroll';

function scrollTo(name) {
  return () => {
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        let scrollToElement = $(`#${name}`);
        if(scrollToElement.length) {
          console.log('ScrollTo', name, scrollToElement);
          smoothScroll(scrollToElement.offset().top);
        } else {
          console.error(`${name} element not found for scroll`);
        }
      })
    }
  }
}

function defaultPath(defaultName) {
  return function(nextState, replaceState) {
    if(!nextState.params.part) {
      replaceState(null, `${nextState.location.pathname}/${defaultName}`);
    }
  }
}

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Main} />
    <Route path='/lineup(/:part)' component={LineUp} onEnter={defaultPath('main')}/>
    <Route path='/about(/:part)' component={About} onEnter={defaultPath('main')}/>
    <Route path='/technology(/:part)' component={Technology} onEnter={defaultPath('virtuality')}/>
    <Route path='/sport(/:part)' component={Sport} onEnter={defaultPath('workout')} />
    <Route path='/news(/:part)' component={News} onEnter={defaultPath('main')} />
    <Route path='/partners(/:part)' component={Main} onEnter={defaultPath('workout')} />
    <Route path='/media(/:part)' component={Main} onEnter={defaultPath('2015')} />
    <Route path='/contacts(/:part)' component={Main} onEnter={defaultPath('main')} />
    <Route path='/ticket' component={Ticket} />
    <Route path='/ticket/personal' component={Personal} />
    <Route path='/ticket/buy' component={Buy} />
    <Route path='/ticket/status' component={Status} />
  </Route>
);
