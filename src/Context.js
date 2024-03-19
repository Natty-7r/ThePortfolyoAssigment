import { createContext, useCallback, useReducer } from "react";

// Create Context
const AlexioContext = createContext();

// Type
const type = {
  NAV: "NAV",
  TOGGLE: "TOGGLE",
  USER_DATA: "USER_DATA",
};
const { NAV, TOGGLE, USER_DATA } = type;

// Initial Value
const initialState = {
  nav: "home",
  toggle: false,
  userData: null,
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case TOGGLE:
      return {
        ...state,
        toggle: payload,
      };
    case USER_DATA:
      return {
        ...state,
        userData: payload,
      };
    default:
      return state;
  }
};

// Watson State
const AlexioState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNav = useCallback((value, toggleValue) => {
    dispatch({
      type: NAV,
      payload: value,
    });
    dispatch({
      type: TOGGLE,
      payload: toggleValue,
    });
  }, []);
  const setUserData = useCallback((userData) => {
    dispatch({
      type: USER_DATA,
      payload: userData,
    });
  }, []);

  const { nav, toggle, userData } = state;
  return (
    <AlexioContext.Provider
      value={{
        nav,
        changeNav,
        toggle,
        userData,
        setUserData,
      }}
    >
      {children}
    </AlexioContext.Provider>
  );
};

export default AlexioState;
export { AlexioContext };
