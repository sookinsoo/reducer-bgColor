import React, { useReducer } from 'react';

const initialState = {
  bgColor: 'white'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, bgColor: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  return (
    <div className="divv" style={{ backgroundColor: state.bgColor, padding: '20px' }}>
      <div className="div2">
     <div className="div3">
     <h1>Reducer bgColor</h1>
     </div>
      <div className="div4">
      <button onClick={() => changeColor('red')}>Red</button>
      <button onClick={() => changeColor('blue')}>Blue</button>
      <button onClick={() => changeColor('green')}>Green</button>
      </div>
      </div>
    </div>
  );
};

export default App;