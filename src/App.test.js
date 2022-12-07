import { render,fireEvent, screen } from '@testing-library/react';
import App from './App';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import{incrementValue,decrementValue} from './redux/actions/button-actions';

describe('test cases for increment / decrement value', () => {

  beforeEach(() => {
    render(<Provider store={store}>
      <App/>
  </Provider>)
  })

  it("Initial Counter value",() =>{
      
  expect(screen.getByTestId("count")).toHaveTextContent("0");
})

  it("Counter value When Increment Button Clicked",() =>{       
      const btnDecrement = screen.getByTestId("increment");
      fireEvent.click(btnDecrement);
      expect(screen.getByTestId("count")).toHaveTextContent("1");
  })

  it("Counter value When Increment Button Clicked",() =>{       
    const btnDecrement = screen.getByTestId("increment");
    fireEvent.click(btnDecrement);
    expect(screen.getByTestId("count")).toHaveTextContent("2");
})

  it("Counter value When Increment Button Clicked",() =>{    
      const btnDecrement = screen.getByTestId("increment");
      fireEvent.click(btnDecrement);
      expect(screen.getByTestId("count")).toHaveTextContent("3");
})

  it("Counter value When Deccrement Button Clicked",() =>{   
      const btnDecrement = screen.getByTestId("decrement");
      fireEvent.click(btnDecrement);
      expect(screen.getByTestId("count")).toHaveTextContent("2");
})

it("Counter value When Deccrement Button Clicked",() =>{  
      const btnDecrement = screen.getByTestId("decrement");
      fireEvent.click(btnDecrement);
      expect(screen.getByTestId("count")).toHaveTextContent("1");
})

it("Counter value When Deccrement Button Clicked",() =>{  
    const btnDecrement = screen.getByTestId("decrement");
    fireEvent.click(btnDecrement);
    expect(screen.getByTestId("count")).toHaveTextContent("0");
})
  
  
});
