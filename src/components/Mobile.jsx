import React, {Component, PropTypes} from 'react';
import raf from 'raf';
import {findDOMNode} from 'react-dom';

if (process.env.BROWSER) {
  require('./Mobile.less');
}

class Mobile extends Component {
  displayName = 'Mobile';

  state = {
    mobileWidth: 737,
    screenWidth: 0
  };

  static propTypes = {
    mobile: PropTypes.bool,
  };

  componentDidMount () {
    const { cancel } = raf;
    let rafId;

    const update = () => {
      this.setState({
        screenWidth: process.env.BROWSER ? window.innerWidth : 0
      });
    };

    const handleScroll = event => {
      cancel(rafId);
      rafId = raf(update);
    }

    window.addEventListener('resize', handleScroll);
    this.removeScrollHandler = () => {
      cancel(rafId);
      window.removeEventListener('resize', handleScroll);
    };
    update();
  }

  componentWillUnmount() {
    this.removeScrollHandler();
  }

  render() {
    if(
      ((this.state.screenWidth > this.state.mobileWidth) && this.props.mobile) ||
      ((this.state.screenWidth <= this.state.mobileWidth) && !this.props.mobile)
    ) {
      return (<div></div>);
    }

    return (
      <div className={this.props.mobile ? 'mobile' : 'desctop'}>
        {this.props.children}
      </div>
    );
  }
}

Mobile.defaultProps = {
  mobile: true,
};

export default Mobile;
