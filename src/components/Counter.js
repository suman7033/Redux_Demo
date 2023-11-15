//import { Component } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';
//import { INCREMENT } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter=useSelector((state) => state.counter.counter);
  const show=useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    //dispatch({type: 'toggle'})
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler=()=>{
     //dispatch({type: 'increment'})
     dispatch(counterActions.increment())
  }

  const decrementHandler=()=>{
    //dispatch({type: 'decrement'})
    dispatch(counterActions.decrement())
  }
  const incrementBy5Handler=()=>{
     //dispatch({type: 'incrementBy5'})
     dispatch(counterActions.incrementBy5())
  }

  return (
    <>
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
       { show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={incrementBy5Handler}>INCRESE BY 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
    </>
  );
};

export default Counter;

 