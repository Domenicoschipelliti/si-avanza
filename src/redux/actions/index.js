export const ADD_STAR = "ADD_STAR";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const AggiunStella = (jobData) => {
  return {
    type: ADD_STAR,
    payload: jobData,
  };
};

export const RimuoviStella = (i) => {
  return {
    type: REMOVE_ITEM,
    payload: i,
  };
};
