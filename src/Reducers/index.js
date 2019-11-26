import { combineReducers } from "redux";
import BreakReducer from "./breakReducer";
import SessionReducer from "./sessionReducer";
import PlayPauseReducer from "./playPauseReducer";
import TimerReducerMinutes from "./timerMinutesReducer";
import TimerReducerSeconds from "./timerSecondsReducer";
import MinutesInSeconds from "./minutesInSecondsReducer";
import BreakTimerMinutes from "./breakTimerMinutesReducer";
import BreakTimerSeconds from "./breakTimerSecondsReducer";
import BreakMinutesInSeconds from "./breakMinutesInSeconds";

export default combineReducers({
  Break: BreakReducer,
  Session: SessionReducer,
  playPause: PlayPauseReducer,
  minutesTimer: TimerReducerMinutes,
  secondsTimer: TimerReducerSeconds,
  minutesInSeconds: MinutesInSeconds,
  minutesBreakTimer: BreakTimerMinutes,
  secondsBreakTimer: BreakTimerSeconds,
  breakMinutesInSeconds: BreakMinutesInSeconds
});
