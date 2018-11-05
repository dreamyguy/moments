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
      history,
      mode = '',
      modeType = '',
      modeName = '',
      modePath = '',
      setModeAction
    } = this.props;
    let classesButtonMode = `button button--mode${classes ? ' ' + classes : ''}`;
    if (mode) {
      classesButtonMode = `button button--mode${mode === modeType ? ' selected' : ' not-selected'}${classes ? ' ' + classes : ''}`;
    }
    return (
      <button
        className={classesButtonMode}
        onClick={() => {
          setModeAction(mode === modeType ? '' : modeType)
          if (history && modePath) {
            history.push(modePath);
          }
        }}
        disabled={mode && mode !== modeType ? true : false}
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
  modepath: PropTypes.string,
  // Props coming from state
  mode: PropTypes.string,
  setModeAction: PropTypes.func.isRequired
};

export default SetModeConnect;
