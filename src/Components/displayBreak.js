import React from "react";
import { connect } from "react-redux";
import {
  fetchPlay,
  fetchPause,
  fetchBreakTimerMinutes,
  fetchBreakTimerSeconds,
  fetchPausedBreak,
  fetchHardReset
} from "../Actions";
import { Button, ButtonToolbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faRedo } from "@fortawesome/free-solid-svg-icons";

let countdown;
let count = 0;
class displayBreak extends React.Component {
  handleClick = e => {
    if (e.currentTarget.value === "pause") {
      this.props.fetchPause();

      this.props.fetchPausedBreak(
        this.props.minutesBreakTimer * 60 + this.props.secondsBreakTimer
      );
      count = 0;
    } else if (
      e.currentTarget.value === "play" &&
      count === 0 &&
      this.props.minutesBreakTimer === null
    ) {
      this.props.fetchPlay();
      this.timer(this.props.Break * 60);
      count++;
    } else if (
      e.currentTarget.value === "play" &&
      count === 0 &&
      this.props.minutesBreakTimer !== null
    ) {
      this.props.fetchPlay();
      this.timer(this.props.breakMinutesInSeconds);
      count++;
    }
  };

  timer = seconds => {
    const now = Date.now();
    const then = now + seconds * 1000;

    this.displayTimerLeft(seconds);

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      } else if (secondsLeft > 0 && this.props.playPause === false) {
        clearInterval(countdown);

        return;
      }
      this.displayTimerLeft(secondsLeft);
    }, 1000);
  };

  displayTimerLeft = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;

    this.props.fetchBreakTimerMinutes(minutes);
    this.props.fetchBreakTimerSeconds(remainderSeconds);
  };

  handleReset = () => {
    this.props.fetchPause();
    this.props.fetchHardReset();
    count = 0;
  };

  breakPausePlayDisplay = () => {
    return (
      <div>
        <ButtonToolbar className="mt-4">
          <Button
            onClick={this.handleClick}
            className="mr-1"
            variant="primary"
            value="play"
          >
            <FontAwesomeIcon icon={faPlay} />
          </Button>
          <Button
            onClick={this.handleClick}
            className="ml-1 mr-1"
            variant="danger"
            value="pause"
          >
            <FontAwesomeIcon icon={faPause} />
          </Button>
          <Button onClick={this.handleReset} className="ml-1" variant="success">
            <FontAwesomeIcon icon={faRedo} />
          </Button>
        </ButtonToolbar>
      </div>
    );
  };

  render() {
    if (
      this.props.Break >= 1 &&
      this.props.playPause === true &&
      this.props.minutesBreakTimer !== null
    ) {
      return (
        <div className="text-center mr-5">
          <h5>
            {this.props.minutesBreakTimer} :{" "}
            {this.props.secondsBreakTimer < 10 ? "0" : ""}
            {this.props.secondsBreakTimer}
          </h5>
          {this.breakPausePlayDisplay()}
          <h5 className="mt-2">Break</h5>
        </div>
      );
    } else if (
      this.props.minutesBreakTimer === null &&
      this.props.playPause === false
    ) {
      return (
        <div className="text-center mr-5">
          <h5>{this.props.Break}</h5>
          {this.breakPausePlayDisplay()}
          <h5 className="mt-2">Break</h5>
        </div>
      );
    } else if (
      this.props.minutesBreakTimer !== null &&
      this.props.playPause === false
    ) {
      return (
        <div className="text-center mr-5">
          <h5>
            {Math.floor(this.props.breakMinutesInSeconds / 60)} :{" "}
            {this.props.breakMinutesInSeconds % 60}
            {this.breakPausePlayDisplay()}
          </h5>
          <h5 className="mt-2">Break</h5>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    Break: state.Break,
    playPause: state.playPause,
    minutesBreakTimer: state.minutesBreakTimer,
    secondsBreakTimer: state.secondsBreakTimer,
    breakMinutesInSeconds: state.breakMinutesInSeconds
  };
};

export default connect(mapStateToProps, {
  fetchPlay,
  fetchPause,
  fetchBreakTimerMinutes,
  fetchBreakTimerSeconds,
  fetchPausedBreak,
  fetchHardReset
})(displayBreak);
