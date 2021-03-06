import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import i18n from 'i18next-client';
import smoothScroll from '../utils/smoothScroll';
import $ from 'jquery';
import cx from 'classnames';
import raf from 'raf'; // request next animation frame
import Scrollable from './Scrollable';
import AdminButton from './AdminButton';

if (process.env.BROWSER) {
  require('./TopPageMenu.less');
}

function scrollTo(name) {
  return () => {
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        let scrollToElement = $(`#${name}`);
        if(scrollToElement.length) {
          smoothScroll(scrollToElement.offset().top - $('.top-page-menu').height() - 10, 1000);
        } else {
          console.error(`${name} element not found for scroll`);
        }
      })
    }
  }
}

class TopPageMenu extends Component {
  state = {
    scrollY: 0,
    screenHeight: 0,
    screenWidth: 0,
    activeItems: [],
    disableClick: false
  };

  disableClick() {
    this.setState({
      disableClick: true
    });
    setTimeout(()=>{
      this.setState({
        disableClick: false
      });
    }, 500)
  }

  _disableIfScroll(e) {
    if(this.state.disableClick) {
      e.preventDefault();
    }
  }

  componentDidMount () {
    const { cancel } = raf;
    let rafId;

    const update = () => {
      const scrollY = -document.documentElement.getBoundingClientRect().top;
      const screenHeight = process.env.BROWSER ? window.innerHeight : 0;
      const screenWidth = process.env.BROWSER ? window.innerWidth : 0;
      let activeItems = [];
      let leftWidth = 0;
      this.props.items.map((item, key) => {
        const element = $(`#${item.anchor}`);
        leftWidth += $(`.top-page-menu a[href='${item.url}']`).width();
        if(!element.length) {
          return;
        }
        const top = element.offset().top;
        const height = element.height();
        const scrollYmiddle = scrollY + screenHeight/3;
        if(scrollYmiddle >= top) {
          let progress = scrollYmiddle > top + height ? 100 : parseInt(100 * (scrollYmiddle-top)/(height), 10);
          activeItems.push({
            anchor: element.attr('id'),
            progress: progress
          });
          const menuScrollLeft = leftWidth - screenWidth/2;
          console.info('menuScrollLeft', menuScrollLeft);
          $(`.top-page-menu .ScrollWrapper`).stop().animate({scrollLeft: menuScrollLeft});
        }
      });

      this.setState({
        scrollY: scrollY,
        screenHeight: screenHeight,
        screenWidth: process.env.BROWSER ? window.innerWidth : 0,
        activeItems: activeItems
      });
    };

    const handleScroll = event => {
      cancel(rafId);
      rafId = raf(update);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    this.removeScrollHandler = () => {
      cancel(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
    setTimeout(update, 0);
  }

  componentWillUnmount() {
    this.removeScrollHandler();
  }

  render() {
    const { language } = this.props;
    return (
      <div className={cx('top-page-menu', {fixed: this.props.fixed})}>
        <AdminButton />
        <Scrollable x={true} y={false} disableClick={this.disableClick.bind(this)}>
          <ul>
            {
              this.props.items.map((item, key) => {
                const foundActiveItem = this.state.activeItems.find((itemActive) => itemActive.anchor === item.anchor);
                const activeItem = foundActiveItem ? foundActiveItem : { progress: 0 };
                const title = item[language === 'eng' ? 'title_eng': 'title'];
                if(!title) {
                  return;
                }
                return (
                  <li data-num={key} key={key}>
                    <Link
                      to={`${item.url}`}
                      activeClassName="active"
                      onClick={() => {
                        if(!this.state.disableClick) {
                          scrollTo(item.anchor)();
                        }
                      }}
                    >
                      {title}
                    </Link>
                    <div
                      className="progress"
                      style={{
                        width: `${activeItem.progress}%`
                      }}
                    ></div>
                  </li>
                );
              })
            }
          </ul>
        </Scrollable>
      </div>
    );
  }
}


TopPageMenu.removeScrollHandler = () => {
};

export default TopPageMenu;
