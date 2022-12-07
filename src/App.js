import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import{incrementValue,decrementValue} from './redux/actions/button-actions';

function App() {
  const countValue = useSelector((state) => state.incDecReducers.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
            <div className='App-left-header'><img src={logo} className="App-logo" alt="logo" /></div>
            <div className='App-right-header'>Sample React Count</div>
            
           
      <div className="App-content">
              <p data-testid="count">{countValue}</p>
        <div>        
          <input type="button" data-testid="increment" value='Increment +'style={{width:"100px"}} 
                onClick={()=> {dispatch(incrementValue(countValue+1))}}/>  
          <input type="button" data-testid="decrement" value='Decrement -'style={{width:"100px",marginLeft:"10px"}}
              onClick={()=> {dispatch(decrementValue(countValue-1))}}/>   
        </div>   
      </div>
      <div className="App-footer">samplereactapp.com</div>        
    </div>
    </div> 
  );
}

export default App;


