export default (state = null, action) => {
  switch (action.type) {
    case "PAUSED_BREAK":
      return action.payload;
    case "RESET":
      return null;
    case "HARD_RESET":
      return null;
    default:
      return state;
  }
};
