//import { Component } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import classes from './Counter.module.css';
import { INCREMENT } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter=useSelector(state => state.counter);
  const show=useSelector(state => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  const incrementHandler=()=>{
     dispatch({type: 'increment'})
     //alert("increment")
  }

  const decrementHandler=()=>{
    dispatch({type: 'decrement'})
    //alert("decrement")
  }
  const incrementBy5Handler=()=>{
     dispatch({type: 'incrementBy5'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={incrementBy5Handler}>INCRESE BY 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component{
//   incrementHandler(){
//     this.props.increment();
//   }
//   decrementHandler(){
//     this.props.decrement();
//   }
//   toggleCounterHandler(){}
//     render(){
//       return (
//         <main className={classes.counter}>
//           <h1>Redux Counter</h1>
//           <div className={classes.value}>{this.props.counter}</div>
//           <div>
//             <button onClick={this.incrementHandler.bind(this)}>INCREMENT</button>
//             <button onClick={this.decrementHandler.bind(this)}>DECREMENT</button>
//           </div>
//           <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//         </main>
//       );

//     }
// }
// const mapStateTOProps=state=>{
//    return {
//       counter: state.counter
//    }
// }
// const mapDispatchTOProps=dispatch=>{
//    return{
//      increment: ()=> dispatch({type: 'increment'}),
//      decrement: ()=> dispatch({type: 'decrement'})
//    }
// };

// export default connect(mapStateTOProps,mapDispatchTOProps) (Counter);
