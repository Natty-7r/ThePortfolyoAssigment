const { default: UIState } = require("@/src/contexts/UI");
const { default: UserDataState } = require("@/src/contexts/userData");

const ContextProvider = ({ children }) => {
  return (
    <UIState>
      <UserDataState>{children}</UserDataState>
    </UIState>
  );
};

export default ContextProvider;
