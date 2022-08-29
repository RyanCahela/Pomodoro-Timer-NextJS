//states: IDLE, RUNNING, PAUSED
//action.types: "START", "PAUSE", "RESET"

const TimerReducer = (state, action) => {
  switch (state.currentState) {
    case "IDLE":
      if (action.type === "RESET") {
        return { ...state };
      }

      if (action.type === "PAUSE") {
        return { ...state };
      }

      if (action.type === "START") {
        const newState = { ...state };
        newState.timerStartTime = new Date();
        newState.currentState = "RUNNING";
        return newState;
      }

      console.error(`state = ${state}, action = ${action}`);
      break;

    case "RUNNING":
      if (action.type === "START") {
        return { ...state };
      }

      if (action.type === "PAUSE") {
        return {
          ...state,
          currentState: "PAUSED",
        };
      }

      if (action.type === "RESET") {
        return {
          ...state,
          currentState: "IDLE",
          timeElapsed: 0,
        };
      }

      if (action.type === "TICK") {
        const oldState = { ...state };
        const newState = { ...state };
        newState.timeElapsed = new Date() - oldState.timerStartTime;
        return newState;
      }

      console.error(`state = ${state}, action = ${action}`);
      break;

    case "PAUSED":
      if (action.type === "PAUSE") {
        return { ...state };
      }

      if (action.type === "START") {
        return {
          ...state,
          currentState: "RUNNING",
        };
      }

      if (action.type === "RESET") {
        return {
          ...state,
          currentState: "IDLE",
          timeElapsed: 0,
        };
      }

      console.error(`state = ${state}, action = ${action}`);
      break;

    default:
      console.error("something went wrong in reducer");
  }
};

export default TimerReducer;
