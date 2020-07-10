import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter';

function App() {
  return (
    <div className="App">
      {/* ReactHooks---> You should always use them at top-level and not inside any loops conditions or nested functions, Only call hooks from react functions */}

      {/* State-hook */}
      {/* using state & setState method in Class Component */}
      <ClassCounter />
      {/* Using react-hook's useState to achieve the same as above from functional component */}
      <HookCounter />

    </div>
  );
}

export default App;
