export default (state = null, action) => {
  switch (action.type) {
    case "BREAK_TIMER_SECONDS":
      return action.payload;
    case " RESET":
      return null;
    case "HARD_RESET":
      return null;
    default:
      return state;
  }
};
