import { ADD_STAR, REMOVE_ITEM } from "../../actions";

export const primoState = {
  aziende: {
    job: [],
  },
};

export const Job = (state = primoState, action) => {
  switch (action.type) {
    case ADD_STAR:
      return {
        ...state,
        aziende: {
          ...state.aziende,
          job: [...state.aziende.job, action.payload],
        },
      };
    case REMOVE_ITEM:
      return {
        ...state,
        aziende: state.aziende.filter((i) => i !== action.payload),
      };
    default:
      return state;
  }
};
