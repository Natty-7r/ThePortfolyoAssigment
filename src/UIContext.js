import { createContext, useCallback, useReducer } from "react";

// Create Context
const UIContext = createContext();

// Type
const type = {
  IMAGE: "IMAGE",
  VIDOE: "VIDOE",
};
const { IMAGE, VIDOE } = type;

// Initial Value
const initialState = {
  imagePreview: {
    showImage: false,
    imageSrc: null,
  },
  videoPlayer: {
    playVidoe: false,
    videoSrc: null,
  },
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case IMAGE:
      return {
        ...state,
        imagePreview: payload,
      };
    case VIDOE:
      return {
        ...state,
        videoPlayer: payload,
      };

    default:
      return state;
  }
};

// Watson State
const UIState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setVideoPlayer = useCallback((videoSrc) => {
    dispatch({
      type: VIDOE,
      payload: {
        playVidoe: true,
        videoSrc: videoSrc,
      },
    });
  }, []);
  const closeVidoePlayer = useCallback((videoSrc) => {
    dispatch({
      type: VIDOE,
      payload: {
        playVidoe: false,
        videoSrc: null,
      },
    });
  }, []);
  const setImagePreview = useCallback((imageSrc) => {
    dispatch({
      type: IMAGE,
      payload: {
        imageSrc: imageSrc,
        showImage: true,
      },
    });
  }, []);
  const hideImagePreview = useCallback(() => {
    dispatch({
      type: IMAGE,
      payload: {
        imageValue: null,
        showImage: false,
      },
    });
  }, []);

  const { imagePreview, videoPlayer } = state;
  return (
    <UIContext.Provider
      value={{
        imagePreview,
        videoPlayer,
        setImagePreview,
        hideImagePreview,
        setVideoPlayer,
        closeVidoePlayer,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIState;
export { UIContext };
