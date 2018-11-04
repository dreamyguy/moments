// Import dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import components
import SetMode from './SetMode';

class ModePicker extends Component {
  render () {
    return (
      <section className="section--mode-picker">
        <div className="container m-t-20 m-b-20">
          <div className="row">
            <div className="col-12">
              <div className="container-flex mode-picker">
                <div className="mode-picker m-t-20 m-b-20">
                  <SetMode
                    modeType = "relativeToNow"
                    modeName = "Relative to Now"
                    classes = "m-b-20"
                  />
                  <SetMode
                    modeType = "betweenTwoDates"
                    modeName = "Between Two Dates"
                    classes = "m-b-20"
                  />
                  <SetMode
                    modeType = "discoverMoment"
                    modeName = "Discover Moment"
                    classes = "m-b-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

ModePicker.propTypes = {
  // Props coming from state
  mode: PropTypes.string
};

export default ModePicker;
