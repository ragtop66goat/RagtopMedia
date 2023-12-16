import {render, screen} from '@testing-library/react';
import App from './App';

import '@testing-library/jest-dom/extend-expect';

  jest.mock('./pages/home/Home', (() => {
    return () => <div>Home</div>;
  }));


describe("App tests", () => {


  it('should render the home page', () => {
    render(
        <App/>
    )

    expect(screen.getByText("Home")).toBeInTheDocument();
  })
});
