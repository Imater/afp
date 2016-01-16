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
    y: PropTypes.bool
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.scrollable = true;
    }, 100);
  }

  componentWillUnmount() {
    this.scrollable = false;
  }

  getX(e) {
    return typeof e.clientX === 'undefined' ? e.changedTouches[0].pageX : e.clientX;
  }

  getY(e) {
    return typeof e.clientY === 'undefined' ? e.changedTouches[0].pageY : e.clientY;
  }

  onDown(e) {
    if (!this.pushed) {
      document.addEventListener('mousemove', this.onMove.bind(this));
      document.addEventListener('touchmove', this.onMove.bind(this));

      document.addEventListener('mouseup', this.onUp.bind(this));
      document.addEventListener('touchend', this.onUp.bind(this));
      document.addEventListener('touchcancel', this.onUp.bind(this));
      this.lastClientX = this.getX(e);
      this.lastClientY = this.getY(e);
      this.pushed = true;
    }
  }

  onUp(e) {
    if (this.pushed) {
      document.removeEventListener('mousemove');
      document.removeEventListener('touchmove');

      document.removeEventListener('mouseup');
      document.removeEventListener('touchend');
      document.removeEventListener('touchcancel');
      this.pushed = false;
    }
  }

  onMove(e) {
    var domNode = this.wrapper;
    if (this.pushed) {
      const x = this.getX(e);
      const y = this.getY(e);
      if (this.props.x) {
        domNode.scrollLeft -= (x - this.lastClientX);
      }
      if (this.props.y) {
        domNode.scrollTop -= (y - this.lastClientY);
      }
      this.lastClientX = x;
      this.lastClientY = y;
    }
  }

  render() {
    return (
      <div
        className="ScrollWrapper noselect"
        onMouseDown={this.onDown.bind(this)}
        onTouchStart={this.onDown.bind(this)}
        ref={c => this.wrapper = c}
      >
        <div className="viewport" ref={c => this.viewport = c}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Scrollable.defaultProps = {
  x: true,
  y: false
};

Scrollable.scrollable = false;
Scrollable.pushed = false;

export default Scrollable;
