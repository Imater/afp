import $ from 'jquery';

export default (top, duration, cb) => {
  let bodyElement;
  if(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) {
    bodyElement = $("body");
  } else {
    bodyElement = $("html,body");
  }
  bodyElement.stop().animate({
    scrollTop: top
  }, duration, 'linear', cb); //swing
};

