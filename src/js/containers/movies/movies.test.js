import { render, screen } from "@testing-library/react";
import Movies from "./";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

describe("movies container", () => {
  test("should render filters with default values", () => {
    render(
      <Provider store={store}>
        <Movies />
      </Provider>
    );

    expect(screen.getByText(/Select Genre/i)).toBeInTheDocument();
    expect(screen.getByText(/Select Rate/i)).toBeInTheDocument();
    expect(screen.getByText(/Clear/i)).toBeInTheDocument();
  });
});
