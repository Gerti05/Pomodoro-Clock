import React from "react";
import { connect } from "react-redux";
import { fetchAddSession, fetchSubtractSession, fetchReset } from "../Actions";
import { Button, ButtonToolbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class setSession extends React.Component {
  handleClick = e => {
    if (
      e.currentTarget.value === "up" &&
      this.props.Session < 25 &&
      this.props.minutesTimer === null
    ) {
      this.props.fetchAddSession();
    } else if (
      e.currentTarget.value === "down" &&
      this.props.Session > 1 &&
      this.props.minutesTimer === null
    ) {
      this.props.fetchSubtractSession();
    } else if (
      e.currentTarget.value === "up" &&
      this.props.Session < 25 &&
      this.props.minutesTimer !== null &&
      this.props.playPause === false
    ) {
      this.props.fetchAddSession();
      this.props.fetchReset();
    } else if (
      e.currentTarget.value === "down" &&
      this.props.Session > 1 &&
      this.props.minutesTimer !== null &&
      this.props.playPause === false
    ) {
      this.props.fetchSubtractSession();
      this.props.fetchReset();
    }
  };
  setSessionDisplay = () => {
    return (
      <div>
        <h3>Set Session</h3>
        <h4>{this.props.Session}</h4>
        <ButtonToolbar className="justify-content-center">
          <Button
            onClick={this.handleClick}
            className="mr-1"
            variant="primary"
            value="up"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </Button>
          <Button
            onClick={this.handleClick}
            className="ml-1"
            variant="danger"
            value="down"
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </Button>
        </ButtonToolbar>
      </div>
    );
  };
  render() {
    return <div>{this.setSessionDisplay()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    Session: state.Session,
    minutesTimer: state.minutesTimer,
    playPause: state.playPause
  };
};

export default connect(mapStateToProps, {
  fetchAddSession,
  fetchSubtractSession,
  fetchReset
})(setSession);
