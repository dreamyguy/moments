// Import dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import components
import Date from './../components/time/Date';
import DatePicker from './../components/time/DatePicker';
import AddTimeUnitToDate from './../components/time/AddTimeUnitToDate';

class Home extends Component {
  render () {
    const {
      baseDate,
      baseDateIsInThePast,
      nowDate
    } = this.props;
    let classesFrstRow = 'col-12 col-md-6';
    let classesSecondRow = 'col-12 col-md-6';
    if (baseDateIsInThePast) {
      classesFrstRow = 'col-12 col-md-6 order-2';
      classesSecondRow = 'col-12 col-md-6 order-1';
    }
    return (
      <section className="section section--alt">
        <div className="container m-t-20 m-b-20">
          <div className="row">
            <div className="col-12">
              <DatePicker/>
            </div>
          </div>
          <div className="row">
            {baseDate &&
              <>
                <div className={classesFrstRow}>
                  <Date
                    heading = "Now"
                    date = {nowDate}
                  />
                </div>
                <div className={classesSecondRow}>
                  <Date
                    heading = "Set date"
                    date = {baseDate}
                    classes = "bl-fav-orange-dark"
                  />
                </div>
              </>
            }
          </div>
          <div className="row">
            <div className="col-12">
              <AddTimeUnitToDate />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({main}) => {
  return {
    baseDate: main.baseDate,
    baseDateIsInThePast: main.baseDateIsInThePast,
    baseDateIsInTheFuture: main.baseDateIsInTheFuture,
    nowDate: main.nowDate
  }
}

const HomeConnect = connect(
  mapStateToProps
)(Home);

Home.propTypes = {
  baseDate: PropTypes.string,
  baseDateIsInThePast: PropTypes.bool,
  baseDateIsInTheFuture: PropTypes.bool,
  nowDate: PropTypes.string
};

export default HomeConnect;
