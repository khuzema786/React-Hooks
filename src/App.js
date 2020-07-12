import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentAA from './components/ComponentAA';

// ---> For Global State Management
import {useReducer} from 'react';

import ComponentFF from './components/ComponentFF';
import ComponentDD from './components/ComponentDD';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';

// ---> For Custom Hooks
import DocTitleOne from './components/DocTitleOne'
import DocTitleTwo from './components/DocTitleTwo'
import CounterOneCustom from './components/CounterOneCustom'
import CounterTwoCustom from './components/CounterTwoCustom'
import UserForm from './components/UserForm'

// ---> Created for useContext in ComponentC
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

// ---> Created for useReducers + useContext for Global State Management
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

function App() {
  // ---> Created for useReducers + useContext for Global State Management
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    // ---> The App div has been wrapped in context provider for Global state management using useContext + useReducers
    <CountContext.Provider value = {{countState: count, countDispatch: dispatch}}>
       <div className="App">
        {/* ReactHooks---> You should always use them at top-level and not inside any loops conditions or nested functions, 
        --->Only call hooks from react functional components and not any regular JS function */}

        {/* -------------------------------- useState - State --------------------------------- */}

        {/* using state & setState method in Class Component */}
        <ClassCounter />
        {/* Using react-hook's useState to achieve the same as above from functional component */}
        <HookCounter />

        {/* useState with 'previous state' --- to eliminate error due to redundancy in setState */}
        <HookCounterTwo />

        {/* useState with object */}
        <HookCounterThree />

        {/* useState with array */}
        <HookCounterFour />

        {/* ------------------------------ useEffect - Side Effects --------------------------------  */}

        {/* The Effect Hook lets you perform side effects in functional components. It is a close replacement for 
        componentDidMount, componentDidUpdate & componentWillUnmount Class component's Lifecylce methods */}

        {/* Class Component with lifecyle methods and also conditional componentDidUpdate method */}
        {/* COMPONENT DID MOUNT & UPDATE METHODS */}
        <ClassCounterOne />
        {/* useEffect hooks that runs each time a functional component is re-rendered */}
        {/* Also, useEffect hooks that runs CONDITIONALLY each time a functional component is re-rendered */}
        <HookCounterOne />

        {/* Run effects only once --- Mouse log */}
        {/* Firstly using class component */}
        {/* COMPONENT DID MOUNT ONLY & NOT UPDATE METHOD */}
        <ClassMouse />
        {/* useEffect hook --- Illustrating functionality of componenDidMount() in functional components */}
        <MouseContainer />

        {/* COMMON MISTAKE HIGHLIGHT --- useEffect with incorrect dependency */}
        {/* Firstly with class components */}
        <IntervalClassCounter />
        {/* useEffect Hook for interval */}
        <IntervalHookCounter />

        {/* Fetching data with useEffect */}
        {/* npm install axios ---> this is a required dependency for fetching data */}
        <DataFetching />

        {/* ------------------------------- useContext - Context API --------------------------------- */}

        {/* Context is used in higher order components while passing the props down the component tree without having to pass the props manually at every level unecessarily */}
        {/* In this example you need to pass props down to componentF without having to pass them to components C & E ---> refer to UserContext created on top of App.js*/}
        <UserContext.Provider value="Khuzema">
          <ChannelContext.Provider value = "hello">
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>

        {/* ------------------------------- useReducer - Reducers --------------------------------- */}

        {/* It is a hook for "state management" and an alternative to useState. Also, useState is built from useReducer hook so this hook is more primitive */}
        {/* newState = useReducer(reducer, initialState) ---> first parameter is a reducer function & second parameter is the initialState --- It returns a pair of values [newState, dispatch] */}
        
        {/* useReducer (simple state & action) */}
        <CounterOne />
        {/* useReducer (complex state & action) */}
        <CounterTwo />
        {/* Multiple useReducers */}
        <CounterThree />

        {/* useReducer with useContext ---> Global state management by sharing state between components */}
        {/*  */}
        Count - {count}
        <ComponentAA />
        <ComponentDD />
        <ComponentFF /> 

        {/* Data Fetching with useState & useEffect */}
        <DataFetchingOne />
        {/* Data Fetching with useState & useReducer */}
        <DataFetchingTwo />

        {/* ----------------------- useCallback - Caches A Function - Performance Optimization ---------------------------- */}

        {/* react.memo is a HOC that will prevent re-rendering of components if its props or state is not changed */}
        {/* useCallback Hook is a hook that will return a memoized version of the callback function that only changes if one of the dependant has changed, for performance optimization */}
        <ParentComponent />

        {/* ---------------------- useMemo - Caches The Result From A Function - Performance Optimization --------------------- */}
        
        {/* useCallback - Cache */}
        {/* It is a hook that will only recompute if it's dependent value is changed */}
        <Counter />

        {/* ----------------------------------------------- useRef ----------------------------------------------------  */}

        {/* useRef can used to hold reference to a DOM Node using ref attribute */}
        <FocusInput />
        {/* Using class component firstly */}
        <ClassTimer />
        {/* useRef can also be used to hold immutable value and the value will persist through re-renders while also not causing any additional renders when its value changes */}
        <HookTimer />

        {/* ------------------------- Three not much used hooks are useImperativeHandle, useLayoutEffect, useDebugValue Hooks (Refer on your own)----------------------- */}

        {/* --------------------------------------------- Custom Hooks ------------------------------------------------ */}

        {/* It is basically a JS function whose name starts with 'use', A custom hook can also call other hooks if required */}
        {/* Why ? ---> To share logic like HOCs and render props */}
        {/* Note: A new hooks folder in src of the project has been created for this purpose */}
        <DocTitleOne />
			  <DocTitleTwo />
			  
        <CounterOneCustom /> 
			  <CounterTwoCustom />
			  
        <UserForm />
      </div>
    </CountContext.Provider>
  );
}

export default App;

{/*function callback() {
  console.log('This is called automatically');
}

function main(param) {
  setTimeout(() => {
    return param();
  }, 1500);
}

main(callback);

// without brackets this way we are not calling the callback function 
instead we are handing over control to main function, 
it can call the callback function at its own convinience

// similarly onClick({increment}) without ()
// this is same as onClick({() => { increment() }})*/}