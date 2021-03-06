import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';

if (process.env.BROWSER) {
  require('./Scrollable.less');
}

class Scrollable extends Component {
  displayName = 'Scrollable';

  static propTypes = {
    children: PropTypes.element,
    x: PropTypes.bool,
    y: PropTypes.bool,
    paddingLeft: PropTypes.number
  };

  dist = 0;

  componentDidMount() {
    if(typeof window !== 'undefined') {
      window.ondragstart = (e) => {
        e.preventDefault();
        return false;
      };
    }
    this.intervalId = setInterval(() => {
      this.scrollable = true;
    }, 100);
  }

  componentWillUnmount() {
    this.scrollable = false;
    if(typeof window !== 'undefined') {
      window.ondragstart = () => {
      };
    }
  }

  getX(e) {
    return typeof e.clientX === 'undefined' ? e.changedTouches[0].pageX : e.clientX;
  }

  getY(e) {
    return typeof e.clientY === 'undefined' ? e.changedTouches[0].pageY : e.clientY;
  }

  onDown(e) {
    if (!this.pushed) {
      const move = this.onMove.bind(this);
      const up = this.onUp.bind(this);
      document.addEventListener('mousemove', move);
      document.addEventListener('touchmove', move);

      document.addEventListener('mouseup', up);
      document.addEventListener('touchend', up);
      document.addEventListener('touchcancel', up);
      this.lastClientX = this.getX(e);
      this.lastClientY = this.getY(e);

      var domNode = this.wrapper;
      this.startX = domNode.scrollLeft;
      this.startY = domNode.scrollTop;

      this.removeListener = () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('touchmove', move);

        document.removeEventListener('mouseup', up);
        document.removeEventListener('touchend', up);
        document.removeEventListener('touchcancel', up);
      };
      this.pushed = true;
    }
  }

  onUp(e) {
    if (this.pushed) {
      this.removeListener();
      this.pushed = false;
    }
    if(typeof this.props.disableClick === 'function') {
      var domNode = this.wrapper;
      if(Math.abs(this.dist)>30) {
        this.props.disableClick();
      }
    }
    this.dist = 0;
  }

  onMove(e) {
    var domNode = this.wrapper;
    if (this.pushed) {
      const x = this.getX(e);
      const y = this.getY(e);
      if (this.props.x) {
        domNode.scrollLeft -= (x - this.lastClientX);
        this.dist += (x - this.lastClientX);
      }
      if (this.props.y) {
        domNode.scrollTop -= (y - this.lastClientY);
        this.dist += (y - this.lastClientY);
      }
      this.lastClientX = x;
      this.lastClientY = y;
    }
  }

  move(size) {
    return (e)=> {
      var domNode = this.wrapper;
      if (this.props.x) {
        domNode.scrollLeft -= size;
      }
      if (this.props.y) {
        domNode.scrollTop -= size;
      }
    }
  }

  render() {
    const navigator = this.props.navigator ? (
      <div className="navigator noselect" style={{
        right: this.props.paddingLeft
      }}>
        <div className="left" onClick={this.move(60).bind(this)}></div>
        <div className="right" onClick={this.move(-60).bind(this)}></div>
      </div>
    ) : (<div></div>);
    return (
      <div className="ScrollMain">
        {
          navigator
        }
        <div
          className="ScrollWrapper noselect"
          onMouseDown={this.onDown.bind(this)}
          onTouchStart={this.onDown.bind(this)}
          ref={c => this.wrapper = c}
          style={{
            paddingLeft: this.props.paddingLeft
          }}
        >
          <div className="viewport" ref={c => this.viewport = c}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Scrollable.defaultProps = {
  x: true,
  y: false,
  paddingLeft: 0
};

Scrollable.scrollable = false;
Scrollable.pushed = false;
Scrollable.dist = 0;
Scrollable.removeListener = () => {
};

export default Scrollable;
