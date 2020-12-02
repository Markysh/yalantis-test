import { createStore } from "redux";
import { Provider } from "react-redux";

const withStore = (Component, state) => {
  const store = createStore((state) => state, state);

  const WithStore = (props) => {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };

  return WithStore;
};

export default withStore;
