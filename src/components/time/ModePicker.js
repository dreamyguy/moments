// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import components
import SetMode from './SetMode';

class ModePicker extends Component {
  render () {
    const {
      mode = ''
    } = this.props;
    let instruction = 'Choose a mode';
    if (mode) {
      instruction = 'Selected mode';
    }
    const optional = <span className="optional">(click to deselect)</span>;
    return (
      <section className="section--mode-picker">
        <div className="container-fluid m-t-20">
          <div className="row">
            <div className="col-12">
              <div className="container-flex">
                <p className="m-b-20">{instruction} {mode ? optional : ''}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={`container-flex${mode ? '--center ' : ' '}mode-picker`}>
                <SetMode
                  modeType = "relativeToNow"
                  modeName = "Relative to Now"
                  modePath = "/1/relative-to-now"
                />
                <SetMode
                  modeType = "betweenTwoDates"
                  modeName = "Between Two Dates"
                  modePath = "/2/between-two-dates"
                />
                <SetMode
                  modeType = "discoverMoment"
                  modeName = "Discover Moment"
                  modePath = "/3/discover-moment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({main}) => {
  return {
    mode: main.mode,
  }
}
const ModePickerConnect = connect(
  mapStateToProps,
)(ModePicker);

ModePicker.propTypes = {
  // Props coming from state
  mode: PropTypes.string
};

export default ModePickerConnect;
