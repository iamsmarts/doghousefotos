export default function reducer(state, action) {
  switch (action.type) {
    case "IS_HOME":
      return {
        ...state,
        isHome: action.payload,
      };
    case "WHICH_PHOTOG":
      return {
        ...state,
        whichPhotog: action.payload,
      };
    case "ACTIVE_PHOTO":
      return {
        ...state,
        activeImg: action.payload,
      };
    default:
      return state;
  }
}
