import produce from 'immer';

export const initialState = {
  // 로그인
  logInLoading: false,
  logInDone: false,
  logInError: null,

  // 로그 아웃
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,

  // 내 정보
  me: null,
  loginData: {},
};

// 액션 이름
// 로그인
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

// 로그인에 성공하면
export const LOG_IN_DONE = 'LOG_IN_DONE';

// 로그아웃
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

// 로그아웃에 성공하면
export const LOG_OUT_DONE = 'LOG_OUT_DONE';

// 더미 데이터
const dummyUser = (data) => ({
  ...data,
  nickname: 'bread',
  id: 1,
  // Posts: [],
  // Followings: [],
  // Followers: [],
});

export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // 로그인
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.me = action.data;
        draft.logInDone = true;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_IN_DONE:
        draft.logInDone = false;
        break;

      // 로그아웃
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case LOG_OUT_DONE:
        draft.logoutDone = false;
        break;

      default:
        break;
    }
  });

export default reducer;
