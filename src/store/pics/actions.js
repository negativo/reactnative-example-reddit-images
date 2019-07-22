export const GET_PICS_SAGA = "GET_PICS_SAGA";
export const getPicsSaga = () => ({ type: GET_PICS_SAGA });

export const GET_PICS_FAILURE = "GET_PICS_FAILURE";
export const getPicsFailure = data => ({
  type: GET_PICS_FAILURE,
  data: data
});

export const GET_PICS_SUCCESS = "GET_PICS_SUCCESS";
export const getPicsSuccess = data => ({
  type: GET_PICS_SUCCESS,
  data: data
});
