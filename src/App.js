import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import{incrementValue,decrementValue} from './redux/actions/button-actions';

function App() {
  const countValue = useSelector((state) => state.incDecReducers.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
          <div className='App-left-header'><img src={logo} className="App-logo" alt="logo" /></div>
                <div className='App-right-header'>Sample React Count</div>
          </div>
      <div>
      <div>
      <div className='content'>        
              <div data-testid="count" style={{paddingTop:"15%",color:"red",fontSize:"50px"}}>{countValue}</div> 
              <div style={{paddingTop:"5%"}}>
              <input type="button" data-testid="increment" value='Increment +' className='buttons' 
                onClick={()=> {dispatch(incrementValue(countValue+1))}}/>  
              <input type="button" data-testid="decrement" value='Decrement -'className='buttons'
                  onClick={()=> {dispatch(decrementValue(countValue-1))}}/> 
              </div>  
        </div>
      </div>              
      <div className="App-footer">samplereactapp.com</div>        
    </div>
    </div> 
  );
}

export default App;


