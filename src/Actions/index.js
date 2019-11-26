export const fetchAddBreak = () => {
  return {
    type: "ADD_BREAK"
  };
};

export const fetchSubtractBreak = () => {
  return {
    type: "SUBTRACT_BREAK"
  };
};

export const fetchAddSession = () => {
  return {
    type: "ADD_SESSION"
  };
};

export const fetchSubtractSession = () => {
  return {
    type: "SUBTRACT_SESSION"
  };
};

export const fetchPausedSession = response => {
  return {
    type: "PAUSED_SESSION",
    payload: response
  };
};

export const fetchPausedBreak = response => {
  return {
    type: "PAUSED_BREAK",
    payload: response
  };
};

export const fetchPlay = () => {
  return {
    type: "PLAY"
  };
};

export const fetchPause = () => {
  return {
    type: "PAUSE"
  };
};

export const fetchSessionTimerMinutes = response => {
  return {
    type: "SESSION_TIMER_MINUTES",
    payload: response
  };
};

export const fetchBreakTimerMinutes = response => {
  return {
    type: "BREAK_TIMER_MINUTES",
    payload: response
  };
};

export const fetchSessionTimerSeconds = response => {
  return {
    type: "SESSION_TIMER_SECONDS",
    payload: response
  };
};

export const fetchBreakTimerSeconds = response => {
  return {
    type: "BREAK_TIMER_SECONDS",
    payload: response
  };
};

export const fetchReset = () => {
  return {
    type: "RESET"
  };
};

export const fetchHardReset = () => {
  return {
    type: "HARD_RESET"
  };
};
