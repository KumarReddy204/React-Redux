import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import{incrementValue,decrementValue} from './redux/actions/button-actions';

function App() {
  const countValue = useSelector((state) => state.incDecReducers.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           <a href = "https://reactjs.org/docs/getting-started.html">learn react</a>
      </header> 
      <p data-testid="counter">{countValue}</p><br/><br/>
      <div className="App-buttonsDiv">        
      <input type="button" data-testid="increment" value='Increment +'style={{width:"100px"}} 
            onClick={()=> {dispatch(incrementValue(countValue+1))}}/>  
      <input type="button" data-testid="decrement" value='Decrement -'style={{width:"100px",marginLeft:"10px"}}
             onClick={()=> {dispatch(decrementValue(countValue-1))}}/>   
      </div>     
    </div>
  );
}

export default App;


