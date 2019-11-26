import React from "react";
import { connect } from "react-redux";
import { fetchAddBreak, fetchSubtractBreak, fetchReset } from "../Actions";
import { Button, ButtonToolbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class setBreak extends React.Component {
  handleClick = e => {
    if (
      e.currentTarget.value === "up" &&
      this.props.Break < 5 &&
      this.props.minutesBreakTimer === null
    ) {
      this.props.fetchAddBreak();
    } else if (
      e.currentTarget.value === "down" &&
      this.props.Break > 1 &&
      this.props.minutesBreakTimer === null
    ) {
      this.props.fetchSubtractBreak();
    } else if (
      e.currentTarget.value === "up" &&
      this.props.Break < 5 &&
      this.props.minutesBreakTimer !== null &&
      this.props.playPause === false
    ) {
      this.props.fetchAddBreak();
      this.props.fetchReset();
    } else if (
      e.currentTarget.value === "down" &&
      this.props.Break > 1 &&
      this.props.minutesBreakTimer !== null &&
      this.props.playPause === false
    ) {
      this.props.fetchSubtractBreak();
      this.props.fetchReset();
    }
  };
  setBreakDisplay = () => {
    return (
      <div>
        <h3>Set Break</h3>
        <h4>{this.props.Break}</h4>
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
    return <div>{this.setBreakDisplay()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    Break: state.Break,
    minutesBreakTimer: state.minutesBreakTimer,
    playPause: state.playPause
  };
};

export default connect(mapStateToProps, {
  fetchAddBreak,
  fetchSubtractBreak,
  fetchReset
})(setBreak);
