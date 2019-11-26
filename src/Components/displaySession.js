import React from "react";
import { connect } from "react-redux";
import {
  fetchPlay,
  fetchPause,
  fetchSessionTimerMinutes,
  fetchSessionTimerSeconds,
  fetchPausedSession,
  fetchHardReset
} from "../Actions";
import { Button, ButtonToolbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faRedo } from "@fortawesome/free-solid-svg-icons";

let countdown;
let count = 0;
class displaySession extends React.Component {
  handleClick = e => {
    if (e.currentTarget.value === "pause") {
      this.props.fetchPause();

      this.props.fetchPausedSession(
        this.props.minutesTimer * 60 + this.props.secondsTimer
      );
      count = 0;
    } else if (
      e.currentTarget.value === "play" &&
      count === 0 &&
      this.props.minutesTimer === null
    ) {
      this.props.fetchPlay();
      this.timer(this.props.Session * 60);
      count++;
    } else if (
      e.currentTarget.value === "play" &&
      count === 0 &&
      this.props.minutesTimer !== null
    ) {
      this.props.fetchPlay();
      this.timer(this.props.minutesInSeconds);
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
    this.props.fetchSessionTimerMinutes(minutes);
    this.props.fetchSessionTimerSeconds(remainderSeconds);
  };

  handleReset = () => {
    this.props.fetchPause();
    this.props.fetchHardReset();
    count = 0;
  };

  pausePlayDisplay = () => {
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
      this.props.Session >= 1 &&
      this.props.playPause === true &&
      this.props.minutesTimer !== null
    ) {
      return (
        <div className="text-center ml-5">
          <h5>
            {this.props.minutesTimer} :{" "}
            {this.props.secondsTimer < 10 ? "0" : ""}
            {this.props.secondsTimer}
          </h5>
          {this.pausePlayDisplay()}
          <h5 className="mt-2">Session</h5>
        </div>
      );
    } else if (
      this.props.minutesTimer === null &&
      this.props.playPause === false
    ) {
      return (
        <div className="text-center ml-5">
          <h5>{this.props.Session}</h5>
          {this.pausePlayDisplay()}
          <h5 className="mt-2">Session</h5>
        </div>
      );
    } else if (
      this.props.minutesTimer !== null &&
      this.props.playPause === false
    ) {
      return (
        <div className="text-center ml-5">
          <h5>
            {Math.floor(this.props.minutesInSeconds / 60)} :{" "}
            {this.props.minutesInSeconds % 60}
          </h5>
          {this.pausePlayDisplay()}
          <h5 className="mt-2">Session</h5>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    Session: state.Session,
    playPause: state.playPause,
    minutesTimer: state.minutesTimer,
    secondsTimer: state.secondsTimer,
    minutesInSeconds: state.minutesInSeconds
  };
};

export default connect(mapStateToProps, {
  fetchPlay,
  fetchPause,
  fetchSessionTimerMinutes,
  fetchSessionTimerSeconds,
  fetchPausedSession,
  fetchHardReset
})(displaySession);
