import { GET_PICS_SUCCESS, GET_PICS_FAILURE } from "./actions";

const initialState = {
  error: null,
  all: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PICS_SUCCESS:
      return { ...state, all: action.data.data.children };
    case GET_PICS_FAILURE:
      return { ...state, error: action.data };
    default:
      return state;
  }
};

export default reducer;
