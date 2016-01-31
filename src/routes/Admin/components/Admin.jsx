import React, { Component, PropTypes } from 'react';

class Test extends Component {

  render() {
    console.info('render test');
    return (
      <div>
        <h1>
          TEST WORKS
        </h1>
      </div>
    );
  }
}

module.exports = Test;
