// import { getTable } from "../api/api";

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  isFetching: true,
  data: []
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    default:
      return state;
  }
};

export const setTougleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

// export const getData = () => {
//     return dispatch => {
//       getTable.me().then(data => {
//           dispatch(setTougleIsFetching(false, data));
//         }
//       );
//     };
//   };

export default tableReducer;
