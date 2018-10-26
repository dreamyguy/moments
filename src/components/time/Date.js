// Import dependencies
import React, { Component } from 'react';

// Import components
import Now from './Now';

class Date extends Component {
  render () {
    const {
      heading = '',
      date = <Now/>
    } = this.props;
    return (
      <div className="date m-b-small" style={{backgroundColor: '#111', width: '30%', padding: '1rem', margin: '20px auto'}}>
        <div className="m-b-medium" style={{marginBottom: '1rem'}}>
          <em>{heading}</em>
        </div>
        <div>
          {date}
        </div>
      </div>
    )
  }
};

export default Date;
