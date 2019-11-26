export default (state = false, action) => {
  switch (action.type) {
    case "PLAY":
      return true;
    case "PAUSE":
      return false;
    case "HARD_RESET":
      return false;
    default:
      return state;
  }
};
