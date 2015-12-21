import React from 'react';
import { Route, IndexRoute } from 'react-router';
import $ from 'jquery';

import App from '../components/App';
import Main from '../containers/Main';
import Ticket from '../components/Ticket/Ticket';
import Personal from '../components/Ticket/Personal';
import Buy from '../components/Ticket/Buy';
import Status from '../components/Ticket/Status';
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

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Main} />
    <Route path='/lineup' component={Main} onEnter={scrollTo('lineup')} />
    <Route path='/technology' component={Main} onEnter={scrollTo('technology')} />
    <Route path='/sport' component={Main} onEnter={scrollTo('sport')} />
    <Route path='/news' component={Main} onEnter={scrollTo('news')} />
    <Route path='/partners' component={Main} onEnter={scrollTo('partners')} />
    <Route path='/media' component={Main} onEnter={scrollTo('media')} />
    <Route path='/contacts' component={Main} onEnter={scrollTo('contacts')} />
    <Route path='/ticket' component={Ticket} />
    <Route path='/ticket/personal' component={Personal} />
    <Route path='/ticket/buy' component={Buy} />
    <Route path='/ticket/status' component={Status} />
  </Route>
);
