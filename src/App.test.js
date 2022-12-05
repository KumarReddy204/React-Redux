import { render,fireEvent, screen } from '@testing-library/react';
import App from './App';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import{incrementValue,decrementValue} from './redux/actions/button-actions';

describe('test increment count / decrement value', () => {
  render(<Provider store={store}>
          <App/>
    </Provider>)
  var counter = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("increment");
  fireEvent.click(incrementBtn);
  const decrementBtn = screen.getByTestId("decrement");
  fireEvent.click(decrementBtn);
  it("app intial value " , () =>{
    expect(counter).toHaveTextContent("0");
  })
  
  
});
