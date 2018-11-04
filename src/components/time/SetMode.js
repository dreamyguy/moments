// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import actions
import {
  setModeAction
} from './../../store/duck/ducks';

class SetMode extends Component {
  render () {
    const {
      classes = '',
      mode = '',
      modeType = '',
      modeName = '',
      setModeAction
    } = this.props;
    let classesButtonMode = `button button--mode${classes ? ' ' + classes : ''}`;
    if (mode) {
      classesButtonMode = `button button--mode${mode === modeType ? ' selected' : ' translucid'}${classes ? ' ' + classes : ''}`;
    }
    return (
      <button
        className={classesButtonMode}
        onClick={() => {
          setModeAction(mode === modeType ? '' : modeType)
        }}
      >
        {modeName}
      </button>
    )
  }
}

const mapStateToProps = ({main}) => {
  return {
    mode: main.mode
  }
}
const mapDispatchToProps = {
  setModeAction,
}
const SetModeConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(SetMode);

SetMode.propTypes = {
  // Props passed down
  modeName: PropTypes.string.isRequired,
  modeType: PropTypes.string.isRequired,
  // Props coming from state
  mode: PropTypes.string,
  setModeAction: PropTypes.func.isRequired
};

export default SetModeConnect;
