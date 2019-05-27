// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import utils
import copyToClipboard from './../../utils/copyToClipboardUtil';

class ShareDate extends Component {
  constructor (props) {
    super(props);
    this.state = {
      shareableUrl: '',
      copiedToClipboardStatus: false
    };
  }
  setShareable () {
    const {
      nowMonth = '',
      nowDay = '',
      nowHour = '',
      nowMinute = '',
      nowSecond = '',
      baseYear = '',
      baseMonth = '',
      baseDay = '',
      baseHour = '',
      baseMinute = '',
      baseSecond = '',
      targetYear = '',
      targetMonth = '',
      targetDay = '',
      targetHour = '',
      targetMinute = '',
      targetSecond = '',
      mode = '',
    } = this.props;
    const bMonth = baseMonth ? baseMonth : nowMonth;
    const bDay = baseDay ? baseDay : nowDay;
    const bHour = baseHour ? baseHour : nowHour;
    const bMinute = baseMinute ? baseMinute : nowMinute;
    const bSecond = baseSecond ? baseSecond : nowSecond;
    const tMonth = targetMonth ? targetMonth : nowMonth;
    const tDay = targetDay ? targetDay : nowDay;
    const tHour = targetHour ? targetHour : nowHour;
    const tMinute = targetMinute ? targetMinute : nowMinute;
    const tSecond = targetSecond ? targetSecond : nowSecond;
    let shareable = '';
    if (baseYear) {
      if (mode === 'relativeToNow') {
        shareable = `1/relative-to-now/date-a/${baseYear}/${bMonth}/${bDay}/${bHour}/${bMinute}/${bSecond}/`;
      } else if (mode === 'betweenTwoDates' && targetYear) {
        shareable = `2/between-two-dates/date-a/${baseYear}/${bMonth}/${bDay}/${bHour}/${bMinute}/${bSecond}/date-b/${targetYear}/${tMonth}/${tDay}/${tHour}/${tMinute}/${tSecond}/`;
      } else if (mode === 'discoverMoment') {
        shareable = `3/discover-moment/date-a/${baseYear}/${bMonth}/${bDay}/${bHour}/${bMinute}/${bSecond}/`;
      }
    }
    return shareable;
  }
  getShareableUrl (url) {
    return `${global.location.origin}/#/${url}`;
  }
  render () {
    const {
      // Props passed down
      classes = '',
    } = this.props;
    const {
      copiedToClipboardStatus,
    } = this.state;
    return (
      <React.Fragment>
        {this.setShareable()
          ?
          <button
            className={`btn__share-date${classes ? ' ' + classes : ''}${copiedToClipboardStatus ? ' disabled' : ''}`}
            onClick = {() => {
              copyToClipboard(this.getShareableUrl(this.setShareable()));
              this.setState({
                shareableUrl: this.getShareableUrl(this.setShareable()),
                copiedToClipboardStatus: true
              });
              setTimeout(() => {
                this.setState({
                  copiedToClipboardStatus: false
                });
              }, 3000);
            }}
            disabled={copiedToClipboardStatus}
          >
            {copiedToClipboardStatus
              ?
              'Copied! 🎉'
              :
              'Copy Moment to clipboard'
            }
          </button>
          :
          null
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({main}) => {
  return {
    mode: main.mode,
    nowMonth: main.nowMonth,
    nowDay: main.nowDay,
    nowHour: main.nowHour,
    nowMinute: main.nowMinute,
    nowSecond: main.nowSecond,
    baseYear: main.baseYear,
    baseMonth: main.baseMonth,
    baseDay: main.baseDay,
    baseHour: main.baseHour,
    baseMinute: main.baseMinute,
    baseSecond: main.baseSecond,
    targetYear: main.targetYear,
    targetMonth: main.targetMonth,
    targetDay: main.targetDay,
    targetHour: main.targetHour,
    targetMinute: main.targetMinute,
    targetSecond: main.targetSecond,
  }
}
const ShareDateConnect = connect(
  mapStateToProps
)(ShareDate);

ShareDate.propTypes = {
  mode: PropTypes.string,
  nowMonth: PropTypes.string,
  nowDay: PropTypes.string,
  nowHour: PropTypes.string,
  nowMinute: PropTypes.string,
  nowSecond: PropTypes.string,
  baseYear: PropTypes.string,
  baseMonth: PropTypes.string,
  baseDay: PropTypes.string,
  baseHour: PropTypes.string,
  baseMinute: PropTypes.string,
  baseSecond: PropTypes.string,
  targetYear: PropTypes.string,
  targetMonth: PropTypes.string,
  targetDay: PropTypes.string,
  targetHour: PropTypes.string,
  targetMinute: PropTypes.string,
  targetSecond: PropTypes.string,
};

export default ShareDateConnect;
