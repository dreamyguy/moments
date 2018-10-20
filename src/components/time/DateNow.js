// Import dependencies
import React, { Component } from 'react';

// Import components
import Now from './Now';

class DateNow extends Component {
  render () {
    return (
      <div className="now m-b-small" style={{backgroundColor: '#111', width: '30%', padding: '1rem', margin: '0 auto'}}>
        <div className="m-b-medium" style={{marginBottom: '1rem'}}>
          <em>Now</em>
        </div>
        <div>
          <Now/>
        </div>
      </div>
    )
  }
};

export default DateNow;
