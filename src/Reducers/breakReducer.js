export default (state = 5, action) => {
  switch (action.type) {
    case "ADD_BREAK":
      return state + 1;
    case "SUBTRACT_BREAK":
      return state - 1;
    case "HARD_RESET":
      return 5;
    default:
      return state;
  }
};
