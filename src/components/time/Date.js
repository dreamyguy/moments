// Import dependencies
import React, { Component } from 'react';

// Import components
import Now from './Now';

class Date extends Component {
  render () {
    const {
      heading = '',
      date = <Now/>,
      classes = ''
    } = this.props;
    return (
      <div className={`date ${classes}`}>
        <h3 className="date__heading m-b-20">
          {heading}
        </h3>
        <div className="date__moment">
          {date}
        </div>
      </div>
    )
  }
};

export default Date;
