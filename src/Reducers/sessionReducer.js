export default (state = 25, action) => {
  switch (action.type) {
    case "ADD_SESSION":
      return state + 1;
    case "SUBTRACT_SESSION":
      return state - 1;
    case "HARD_RESET":
      return 25;
    default:
      return state;
  }
};
