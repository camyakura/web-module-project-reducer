import React, {useReducer} from 'react';
import reducer, {initialState} from './../reducers'
import './App.css';
import {
  applyNumber,
  changeOperation,

} from './../actions'
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {

const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={evt => dispatch(applyNumber(1))}/>
              <CalcButton value={2} onClick={evt => dispatch(applyNumber(2))}/>
              <CalcButton value={3} onClick={evt => dispatch(applyNumber(3))}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={evt => dispatch(applyNumber(4))}/>
              <CalcButton value={5} onClick={evt => dispatch(applyNumber(5))}/>
              <CalcButton value={6} onClick={evt => dispatch(applyNumber(6))}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={evt => dispatch(applyNumber(7))}/>
              <CalcButton value={8} onClick={evt => dispatch(applyNumber(8))}/>
              <CalcButton value={9} onClick={evt => dispatch(applyNumber(9))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={evt => dispatch(changeOperation('+'))}/>
              <CalcButton value={"*"} onClick={evt => dispatch(changeOperation('*'))}/>
              <CalcButton value={"-"} onClick={evt => dispatch(changeOperation('-'))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
