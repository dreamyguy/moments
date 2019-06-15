import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Emoji from 'react-emojis';
import { setIntroAction } from '../store/duck/ducks';

class Home extends Component {
  renderIntroButton () {
    const {
      intro,
      setIntroAction
    } = this.props;
    return (
      <button
        className="button button--mode no-margin"
        onClick={() => {
          setIntroAction(!intro)
        }}
      >
        Cool, I got it. Now take this away.
      </button>
    );
  }
  render () {
    const { intro } = this.props;
    return (
      <React.Fragment>
        <section className="section section--alt">
          <div className="container-fluid m-t-10 m-b-10">
            <div className="row">
              <div className="col-12">
                <div className="container-flex">
                  <p>
                    <Emoji emoji="hourglass-not-done"/>
                    <Emoji emoji="crystal-ball"/>
                    <Emoji emoji="sparkles"/>
                  </p>
                </div>
              </div>
            </div>
            <div className="row m-t-50 m-b-40">
              <div className="col-12">
                {intro &&
                  <div className="intro centered">
                    <h3 className="m-b-30">Welcome to Moments!</h3>
                    <p className="m-b-20">In <strong>Moments</strong> you can choose among 3 ways of calculating time between two moments.</p>
                    <p className="m-b-20">You will be asked to define the moment relative to either <strong>now</strong> or a second moment that you will have to define as well, depending of the chosen <em>mode</em>.</p>
                    <p className="m-b-20">All modes require that you define at the least the year. From there you can refine your moment, but that's optional.</p>
                    <p className="m-b-40">To save time when changing from one <em>mode</em> to another, chosen dates are temporarily stored and used for further calculations. You can always change them.</p>
                    <p className="align-center m-b-20"><Emoji emoji="warning"/><br/><strong>Important note about privacy</strong></p>
                    <p className="m-b-20">We do not store any entered information, nor send it anywhere. All the temporary information is stored on your browser's temporary cache and is removed upon closing the tab/window or refreshing.</p>
                    {this.renderIntroButton()}
                  </div>
                }
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  setIntroAction
}

const mapStateToProps = ({main}) => {
  return {
    intro: main.intro
  }
}

const HomeConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

Home.propTypes = {
  intro: PropTypes.bool
};

export default HomeConnect;
